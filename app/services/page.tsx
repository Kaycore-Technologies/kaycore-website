import ServicesContent from './ServicesContent';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'AI QA Services, Risk Audits & LLM Testing',
  description:
    'AI quality engineering for startups and enterprises: AI risk audits, LLM testing, QA for AI-built apps, custom AI QA frameworks, retainers and healthcare QA.',
  path: '/services',
});

export default function ServicesPage() {
  return <ServicesContent />;
}
