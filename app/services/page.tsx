import type { Metadata } from 'next';
import ServicesContent from './ServicesContent';

export const metadata: Metadata = {
  title: 'AI QA Services, Risk Audits & LLM Testing',
  description: 'Explore Kaycore’s enterprise-grade AI QA solutions: risk readiness audits, LLM and generative AI testing, AI-QE retainers, and embedded QA engineers.',
  alternates: { canonical: '/services' },
};

export default function ServicesPage() {
  return <ServicesContent />;
}
