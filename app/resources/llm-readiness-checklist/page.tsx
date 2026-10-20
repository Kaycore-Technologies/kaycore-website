import ChecklistContent from './ChecklistContent';
import { pageMetadata } from '@/lib/seo';
import { checklistPointCount } from '@/content/llm-checklist';

export const metadata = pageMetadata({
  title: 'LLM Production-Readiness Checklist',
  description:
    `A free ${checklistPointCount}-point checklist for deciding whether an AI or LLM feature is ready for production, built from the metrics Kaycore engineers use on real systems.`,
  path: '/resources/llm-readiness-checklist',
});

export default function ChecklistPage() {
  return <ChecklistContent />;
}
