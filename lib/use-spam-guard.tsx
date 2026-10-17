'use client';

import { useCallback, useEffect, useRef } from 'react';

/*
 * Client half of lib/spam-guard.ts. Render `guardMarkup` inside the form (or anywhere in the
 * component, for the chatbot) and spread `guardFields()` into the request body. It carries:
 *
 * - a honeypot field, moved off screen and out of the tab order, so people never see or reach
 *   it; bots that fill every input fill it too,
 * - how long the form has been open,
 * - a Cloudflare Turnstile token from an invisible widget (no checkbox, no puzzle). It only runs
 *   when NEXT_PUBLIC_TURNSTILE_SITE_KEY is set. Invisible mode requires the privacy policy to
 *   reference Cloudflare's Turnstile Privacy Addendum, which it does.
 */

const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

interface Turnstile {
  render: (el: HTMLElement, options: Record<string, unknown>) => string;
  reset: (widgetId: string) => void;
  remove: (widgetId: string) => void;
}

declare global {
  interface Window {
    turnstile?: Turnstile;
  }
}

let scriptLoading: Promise<void> | null = null;

function loadTurnstile(): Promise<void> {
  if (window.turnstile) return Promise.resolve();
  if (!scriptLoading) {
    scriptLoading = new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
      script.async = true;
      script.onload = () => resolve();
      script.onerror = () => {
        scriptLoading = null;
        reject(new Error('Turnstile failed to load'));
      };
      document.head.appendChild(script);
    });
  }
  return scriptLoading;
}

export function useSpamGuard() {
  const openedAt = useRef<number>(0);
  const trap = useRef<HTMLInputElement>(null);
  const widgetId = useRef<string | null>(null);
  const token = useRef('');

  useEffect(() => {
    openedAt.current = Date.now();
  }, []);

  // A callback ref, so the widget follows its container when a form unmounts and remounts.
  const widgetBox = useCallback((el: HTMLDivElement | null) => {
    if (!SITE_KEY) return;
    if (!el) {
      if (widgetId.current) window.turnstile?.remove(widgetId.current);
      widgetId.current = null;
      token.current = '';
      return;
    }
    loadTurnstile()
      .then(() => {
        if (!el.isConnected || !window.turnstile) return;
        widgetId.current = window.turnstile.render(el, {
          sitekey: SITE_KEY,
          callback: (t: string) => {
            token.current = t;
          },
          'expired-callback': () => {
            token.current = '';
          },
          'error-callback': () => {
            token.current = '';
          },
          'refresh-expired': 'auto',
        });
      })
      .catch(() => {
        // Blocked or offline: the server treats a missing token as suspect, never as a rejection.
      });
  }, []);

  const guardMarkup = (
    <div aria-hidden="true" className="absolute -left-[10000px] top-0 h-px w-px overflow-hidden">
      <label>
        Website
        <input ref={trap} type="text" name="website" tabIndex={-1} autoComplete="off" defaultValue="" />
      </label>
      <div ref={widgetBox} />
    </div>
  );

  const guardFields = () => {
    const fields = {
      _hp: trap.current?.value ?? '',
      _t: openedAt.current ? Date.now() - openedAt.current : undefined,
      _ts: token.current,
    };
    // Tokens are single use: fetch a fresh one in case the visitor sends the form again.
    token.current = '';
    if (widgetId.current) window.turnstile?.reset(widgetId.current);
    return fields;
  };

  return { guardMarkup, guardFields };
}
