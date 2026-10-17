'use client';

import { useSyncExternalStore } from 'react';
import { Monitor, Moon, Sun } from 'lucide-react';

/*
 * Light / dark theme. The visitor's choice is stored as "light", "dark" or nothing (follow
 * the system). THEME_SCRIPT runs in <head> before first paint, so there is no flash, and it
 * keeps following the system setting while no choice is stored. KayHealth pages ignore the
 * dark class (see the scoped selectors in styles/globals.css).
 */

const STORAGE_KEY = 'kc-theme';

export const THEME_SCRIPT = `(function(){function a(){try{var p=localStorage.getItem('${STORAGE_KEY}');var d=p==='dark'||(p!=='light'&&window.matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.classList.toggle('dark',d);}catch(e){}}a();try{window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change',a);}catch(e){}window.__kcApplyTheme=a;})();`;

type Preference = 'system' | 'light' | 'dark';

declare global {
  interface Window {
    __kcApplyTheme?: () => void;
  }
}

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
  return () => observer.disconnect();
}

/** True while the dark theme is showing. */
export function useIsDark(): boolean {
  return useSyncExternalStore(
    subscribe,
    () => document.documentElement.classList.contains('dark'),
    () => false,
  );
}

const NEXT: Record<Preference, Preference> = { system: 'light', light: 'dark', dark: 'system' };
const LABEL: Record<Preference, string> = { system: 'System theme', light: 'Light theme', dark: 'Dark theme' };

const PREFERENCE_EVENT = 'kc-theme-preference';

function subscribePreference(onChange: () => void) {
  window.addEventListener(PREFERENCE_EVENT, onChange);
  window.addEventListener('storage', onChange);
  return () => {
    window.removeEventListener(PREFERENCE_EVENT, onChange);
    window.removeEventListener('storage', onChange);
  };
}

function readPreference(): Preference {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === 'light' || stored === 'dark' ? stored : 'system';
  } catch {
    return 'system';
  }
}

export function ThemeToggle({ className = '', showLabel = false }: { className?: string; showLabel?: boolean }) {
  const preference = useSyncExternalStore(subscribePreference, readPreference, () => 'system' as Preference);

  const choose = (next: Preference) => {
    try {
      if (next === 'system') localStorage.removeItem(STORAGE_KEY);
      else localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Storage blocked: the choice still applies until the page is reloaded.
      document.documentElement.classList.toggle(
        'dark',
        next === 'dark' || (next === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches),
      );
      return;
    }
    window.__kcApplyTheme?.();
    window.dispatchEvent(new Event(PREFERENCE_EVENT));
  };

  const Icon = preference === 'dark' ? Moon : preference === 'light' ? Sun : Monitor;
  const nextLabel = LABEL[NEXT[preference]];

  return (
    <button
      type="button"
      onClick={() => choose(NEXT[preference])}
      aria-label={`${LABEL[preference]}. Switch to ${nextLabel.toLowerCase()}`}
      title={`${LABEL[preference]} (click for ${nextLabel.toLowerCase()})`}
      className={`inline-flex items-center justify-center gap-2 rounded-full text-body hover:text-navy transition-colors ${className}`}
    >
      <Icon className="w-[18px] h-[18px]" aria-hidden="true" />
      {showLabel && <span className="text-base font-medium">{LABEL[preference]}</span>}
    </button>
  );
}
