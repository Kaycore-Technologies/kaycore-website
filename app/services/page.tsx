import type { Metadata } from 'next';
import ServicesContent from './ServicesContent';

export const metadata: Metadata = {
  title: 'AI QA Services, Risk Audits & LLM Testing',
  description: 'AI quality engineering for startups and enterprises: AI risk audits, LLM testing, QA for AI-built apps, custom AI QA frameworks, retainers, and healthcare AI QA.',
  alternates: { canonical: '/services' },
};

export default function ServicesPage() {
  return <ServicesContent />;
}
