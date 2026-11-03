#!/usr/bin/env node
/**
 * check:claims - fail when an unverified claim is reintroduced into the site.
 *
 * KayHealth decision D12 (2 Nov 2026): do not publish "HIPAA Compliant",
 * "SOC 2 Type II", "FDA 21 CFR Part 11", "2x", "70% less burnout",
 * "99.2% accuracy", "under 3 minutes" (or "Physician approved") until each is
 * certified or measured with a stated method. Ticket: KH-25.
 *
 * Scans the text the site ships (app/, components/, content/, lib/, public/)
 * case-insensitively, after normalising &nbsp;, {' '}, <br/> and zero-width
 * characters to a space.
 *
 * SCOPE (a default for Kulish to confirm):
 *  - Certification claims (HIPAA compliant, SOC 2 / II, 21 CFR, Part 11,
 *    physician approved) are banned SITE-WIDE.
 *  - Numeric claims (2x, 70% less, 99.2, under 3 min, less burnout) and the bare
 *    word HIPAA are banned only under app/kayhealth/, components/kayhealth/ and
 *    lib/ (metadata/JSON-LD helpers), so an unrelated Kaycore QA blog post that
 *    says "CI under 3 minutes" cannot break the production deploy.
 *
 * Justified exceptions live in scripts/check-claims.allowlist.json. Each entry
 * names a file, a rule id, a reason and an exact "count" of matches. The check
 * fails if the real count differs in either direction, so a NEW claim added to
 * an allowlisted file is caught, and a stale entry is caught too.
 *
 * Usage: node scripts/check-claims.mjs [rootDir]
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const MIN_REASON = 20;
export const SCAN_DIRS = ['app', 'components', 'content', 'lib', 'public'];

// Text-like files only. Binary assets (images, fonts, PDFs) are not scanned.
const TEXT_EXTENSIONS = new Set([
  '.ts', '.tsx', '.js', '.jsx', '.mjs', '.cjs', '.json', '.md', '.mdx',
  '.txt', '.xml', '.html', '.htm', '.css', '.svg', '.webmanifest', '.csv', '.yml', '.yaml',
]);

const SKIP_DIRS = new Set(['node_modules', '.next', '.git']);

// Not preceded by a word char, dot or hyphen, so "text-2xl", "1.2x" and "v99.2" do not fire.
const NOT_AFTER = String.raw`(?<![\w.-])`;

const KAYHEALTH_SCOPE = ['app/kayhealth/', 'components/kayhealth/', 'lib/'];

/**
 * `scope`: optional path prefixes. A scoped rule only applies to files under
 * one of them (see SCOPE in the header). Unscoped rules apply everywhere.
 */
export const RULES = [
  // Certification claims: site-wide.
  { id: 'hipaa-compliant', re: /hipaa[\s-]*compl(?:iant|iance)/i },
  { id: 'soc2', re: /\bsoc[\s-]*(?:2|ii)\b/i },
  { id: 'fda-21-cfr', re: /\b21[\s-]*cfr\b/i },
  { id: 'part-11', re: /\bpart[\s-]*11\b/i },
  { id: 'physician-approved', re: /\bphysician[\s-]*approved\b/i },
  // Numeric claims and bare HIPAA: KayHealth surfaces only.
  { id: 'hipaa-bare', re: /\bhipaa\b/i, scope: KAYHEALTH_SCOPE },
  { id: '99.2', re: new RegExp(`${NOT_AFTER}99\\.2(?!\\d|\\.\\d)`), scope: KAYHEALTH_SCOPE },
  { id: '70-percent-less', re: /\b70\s*%\s*less\b/i, scope: KAYHEALTH_SCOPE },
  { id: 'less-burnout', re: /\bless\s+burnout\b/i, scope: KAYHEALTH_SCOPE },
  { id: '70-percent-bare', re: new RegExp(`${NOT_AFTER}70\\s*%`), scope: KAYHEALTH_SCOPE },
  { id: '2x', re: new RegExp(`${NOT_AFTER}2[x\u00d7](?![\\w-])`, 'i'), scope: KAYHEALTH_SCOPE },
  { id: 'under-3-min', re: /\b(?:under|less\s+than|within)\s*3\s*min/i, scope: KAYHEALTH_SCOPE },
  { id: 'lt-3-min', re: /(?:<|&lt;|&#60;)\s*3\s*min/i, scope: KAYHEALTH_SCOPE },
];

function walk(dir, out) {
  let entries;
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true });
  } catch {
    return;
  }
  for (const e of entries) {
    if (SKIP_DIRS.has(e.name)) continue;
    const full = path.join(dir, e.name);
    if (e.isDirectory()) walk(full, out);
    else if (e.isFile() && TEXT_EXTENSIONS.has(path.extname(e.name).toLowerCase())) out.push(full);
  }
}

// SVG path data is long runs of numbers ("...99.2...") that is not text a reader sees.
function stripSvgNoise(text) {
  return text.replace(/\s(?:d|points|transform|viewBox)="[^"]*"/g, (m) => m.replace(/[^\n]/g, ' '));
}

const keepNewlines = (m) => ' ' + m.replace(/[^\n]/g, '');

/**
 * Make text that renders as one phrase match as one phrase. Length of every
 * newline is preserved so reported line numbers stay right.
 */
export function normalize(text) {
  return text
    .replace(/&nbsp;|&#160;|&#xa0;/gi, ' ')
    .replace(/\{\s*(['"`])\s*\1\s*\}/g, keepNewlines)
    .replace(/<br[ \t]*\/?>/gi, ' ')
    .replace(/[\u200b-\u200d\ufeff]/g, ' ');
}

export function loadAllowlist(root) {
  const file = path.join(root, 'scripts', 'check-claims.allowlist.json');
  if (!fs.existsSync(file)) return { entries: [], errors: [] };
  let parsed;
  try {
    parsed = JSON.parse(fs.readFileSync(file, 'utf8'));
  } catch (e) {
    return { entries: [], errors: [`allowlist is not valid JSON: ${e.message}`] };
  }
  const errors = [];
  const entries = Array.isArray(parsed.allow) ? parsed.allow : [];
  if (!Array.isArray(parsed.allow)) errors.push('allowlist must be {"allow": [...]}');
  const ids = new Set(RULES.map((r) => r.id));
  entries.forEach((a, i) => {
    if (!a || typeof a.file !== 'string' || typeof a.rule !== 'string') {
      errors.push(`allowlist entry ${i} needs "file" and "rule"`);
    } else if (!ids.has(a.rule)) {
      errors.push(`allowlist entry ${i} (${a.file}) names unknown rule "${a.rule}"`);
    }
    if (!a || typeof a.reason !== 'string' || a.reason.trim().length < MIN_REASON) {
      errors.push(`allowlist entry ${i} (${a?.file}) needs a real "reason" (at least ${MIN_REASON} characters)`);
    }
    if (!a || !Number.isInteger(a.count) || a.count < 1) {
      errors.push(`allowlist entry ${i} (${a?.file}) needs an integer "count" of at least 1`);
    }
  });
  return { entries, errors };
}

/** Returns { violations: [{file,line,rule,text}], errors: [string], scanned }. */
export function scan(root) {
  const files = [];
  for (const d of SCAN_DIRS) walk(path.join(root, d), files);
  const { entries, errors } = loadAllowlist(root);
  const violations = [];
  const allowedHits = new Map(); // "file|rule" -> [{line,text}]

  for (const full of files.sort()) {
    const rel = path.relative(root, full).split(path.sep).join('/');
    let text = fs.readFileSync(full, 'utf8');
    if (rel.toLowerCase().endsWith('.svg')) text = stripSvgNoise(text);
    text = normalize(text);
    for (const rule of RULES) {
      if (rule.scope && !rule.scope.some((p) => rel.startsWith(p))) continue;
      const re = new RegExp(rule.re.source, rule.re.flags.includes('g') ? rule.re.flags : rule.re.flags + 'g');
      for (const m of text.matchAll(re)) {
        const line = text.slice(0, m.index).split('\n').length;
        const hit = { file: rel, line, rule: rule.id, text: m[0].replace(/\s+/g, ' ') };
        const key = `${rel}|${rule.id}`;
        if (entries.some((a) => a.file === rel && a.rule === rule.id)) {
          if (!allowedHits.has(key)) allowedHits.set(key, []);
          allowedHits.get(key).push(hit);
        } else {
          violations.push(hit);
        }
      }
    }
  }

  // An allowlist entry is an exact budget: more OR fewer matches than "count" is an error.
  entries.forEach((a, i) => {
    if (typeof a?.file !== 'string' || !Number.isInteger(a.count)) return;
    const hits = allowedHits.get(`${a.file}|${a.rule}`) ?? [];
    if (hits.length === a.count) return;
    if (hits.length === 0) {
      errors.push(`allowlist entry ${i} (${a.file}, ${a.rule}) matches nothing: remove it`);
    } else {
      errors.push(
        `allowlist entry ${i} (${a.file}, ${a.rule}) allows ${a.count} match(es) but found ${hits.length} ` +
          `(lines ${hits.map((h) => h.line).join(', ')}). A claim was added or removed: review it, then update "count".`,
      );
    }
  });
  return { violations, errors, scanned: files.length };
}

function main() {
  const root = path.resolve(process.argv[2] ?? process.cwd());
  const { violations, errors, scanned } = scan(root);
  for (const e of errors) console.error(`check:claims: ${e}`);
  for (const v of violations) {
    console.error(`check:claims: ${v.file}:${v.line} [${v.rule}] "${v.text}"`);
  }
  if (violations.length || errors.length) {
    console.error(
      `\ncheck:claims FAILED: ${violations.length} banned claim(s), ${errors.length} allowlist error(s).\n` +
        'These claims need certification or a measured, stated method first (KayHealth D12 / KH-25).\n' +
        'Remove the text, or add a justified entry to scripts/check-claims.allowlist.json.',
    );
    process.exitCode = 1;
    return;
  }
  console.log(`check:claims OK (${scanned} files scanned)`);
}

if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) main();
