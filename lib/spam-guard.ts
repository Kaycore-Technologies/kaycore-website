import type { NextRequest } from 'next/server';

/*
 * Server-side spam screening for the public lead forms. Real visitors never see it.
 *
 * A submission is SUSPECTED when any of these hold:
 *   1. the hidden honeypot field (see lib/use-spam-guard.tsx) was filled in,
 *   2. the form was sent faster than a person can fill it, or without the form at all,
 *   3. Cloudflare Turnstile did not vouch for the visitor (checked only when
 *      TURNSTILE_SECRET_KEY is set; if Cloudflare cannot be reached, visitors are not penalised),
 *   4. the content shows two or more independent signs of bot output, such as a name like
 *      "pBtXmyEMQKhlRbtNY" together with a Gmail address padded with dots. One sign alone
 *      (a phone number as the message, say) never counts.
 *
 * Suspected submissions are still emailed, tagged "[Possible spam]" with the reason, so a real
 * enquiry is never lost: one mail rule files them away. Only floods are dropped: more than
 * MAX_PER_WINDOW submissions from one address (its first ones still arrive) or more than
 * QUARANTINE_PER_HOUR suspected ones in an hour, so an attack cannot flood the inbox.
 *
 * Every caller answers bots with the normal success response, so they learn nothing, and a
 * log line records the reason (never the content).
 */

export interface GuardFields {
  _hp?: unknown; // honeypot value, empty for people
  _t?: unknown; // milliseconds the form was open before it was sent
  _ts?: unknown; // Cloudflare Turnstile token
}

interface ScreenOptions {
  route: string;
  minMs: number;
  name?: string;
  email?: string;
  texts?: (string | undefined)[];
}

export type SpamVerdict =
  | { action: 'deliver' }
  | { action: 'quarantine'; reason: string }
  | { action: 'drop'; reason: string };

export const SPAM_SUBJECT_TAG = '[Possible spam]';

const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const QUARANTINE_PER_HOUR = 20;
const hits = new Map<string, { count: number; resetAt: number }>();
let quarantined = { count: 0, resetAt: 0 };

function rateLimited(key: string): boolean {
  const now = Date.now();
  for (const [k, v] of hits) if (now > v.resetAt) hits.delete(k);
  const entry = hits.get(key);
  if (!entry) {
    hits.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  entry.count++;
  return entry.count > MAX_PER_WINDOW;
}

// One unbroken run of letters that reads like a random string: case flipping back and forth,
// or a long run of consonants no real word has.
export function looksRandom(value?: string): boolean {
  const s = (value ?? '').trim();
  if (!/^[A-Za-z]{8,}$/.test(s)) return false;
  let flips = 0;
  for (let i = 1; i < s.length; i++) {
    if ((s[i] === s[i].toUpperCase()) !== (s[i - 1] === s[i - 1].toUpperCase())) flips++;
  }
  const longestConsonantRun = Math.max(0, ...(s.match(/[^aeiouy]+/gi) ?? []).map((run) => run.length));
  return flips >= 4 || longestConsonantRun >= 6;
}

// Gmail ignores dots, so bots pad one inbox into endless "different" addresses.
export function isDotPaddedGmail(email?: string): boolean {
  const [local, domain] = (email ?? '').toLowerCase().split('@');
  if (!local || !domain || !['gmail.com', 'googlemail.com'].includes(domain)) return false;
  return (local.match(/\./g) ?? []).length >= 3;
}

export function contentSignals({ name, email, texts = [] }: Pick<ScreenOptions, 'name' | 'email' | 'texts'>): string[] {
  const signals: string[] = [];
  if (looksRandom(name)) signals.push('random-name');
  if (isDotPaddedGmail(email)) signals.push('dot-padded-gmail');
  const filled = texts.map((t) => (t ?? '').trim()).filter(Boolean);
  if (filled.some(looksRandom)) signals.push('random-text');
  if (filled.length > 0 && filled.every((t) => /^[\d\s+()-]{6,}$/.test(t))) signals.push('digits-only-text');
  return signals;
}

// True when Turnstile is configured and Cloudflare does not confirm the token.
export async function turnstileRejects(token: unknown, ip: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  // Both keys must be set: a secret without the site key would leave every visitor without a token.
  if (!secret || !process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY) return false;
  if (typeof token !== 'string' || token === '') return true;
  try {
    const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body: new URLSearchParams({ secret, response: token, remoteip: ip }),
      signal: AbortSignal.timeout(5000),
    });
    const result = (await res.json()) as { success?: boolean };
    return result.success !== true;
  } catch {
    return false;
  }
}

async function suspicion(body: GuardFields, options: ScreenOptions, ip: string): Promise<string | null> {
  if (typeof body._hp === 'string' && body._hp.trim() !== '') return 'honeypot';

  const elapsed = Number(body._t);
  if (!Number.isFinite(elapsed)) return 'no-form-timing';
  if (elapsed < options.minMs) return 'too-fast';

  if (await turnstileRejects(body._ts, ip)) return 'turnstile';

  const signals = contentSignals(options);
  return signals.length >= 2 ? signals.join('+') : null;
}

export async function screenSubmission(request: NextRequest, body: GuardFields, options: ScreenOptions): Promise<SpamVerdict> {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || request.headers.get('x-real-ip') || 'unknown';
  if (rateLimited(`${options.route}:${ip}`)) return { action: 'drop', reason: 'rate-limit' };

  const reason = await suspicion(body, options, ip);
  if (!reason) return { action: 'deliver' };

  const now = Date.now();
  if (now > quarantined.resetAt) quarantined = { count: 0, resetAt: now + 60 * 60 * 1000 };
  quarantined.count++;
  if (quarantined.count > QUARANTINE_PER_HOUR) return { action: 'drop', reason: `${reason}, hourly cap reached` };
  return { action: 'quarantine', reason };
}

// Notice placed at the top of a tagged email. `reason` is our own label, never visitor input.
export function spamNoticeHtml(reason: string): string {
  return `<p style="background:#FEF3C7;border:1px solid #F59E0B;color:#78350F;border-radius:8px;padding:10px 14px;font-size:14px;margin:0 0 16px;">Flagged by the website spam filter (${reason}). Delivered in case it is a real enquiry.</p>`;
}

export function spamNoticeText(reason: string): string {
  return `FLAGGED BY THE WEBSITE SPAM FILTER (${reason}). Delivered in case it is a real enquiry.\n\n`;
}
