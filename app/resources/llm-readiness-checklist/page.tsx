import type { Metadata } from 'next';
import ChecklistContent from './ChecklistContent';

export const metadata: Metadata = {
  title: 'LLM Production-Readiness Checklist',
  description:
    'A free 20-point checklist for deciding whether an AI or LLM feature is ready for production, built from the metrics and thresholds Kaycore engineers use on real systems.',
  alternates: { canonical: '/resources/llm-readiness-checklist' },
};

export default function ChecklistPage() {
  return <ChecklistContent />;
}
