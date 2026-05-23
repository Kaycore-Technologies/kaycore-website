import type { Metadata } from 'next';
import ServicesContent from './ServicesContent';

export const metadata: Metadata = {
  title: 'AI-Powered QA Services & Test Automation | Kaycore',
  description: 'Explore Kaycore’s enterprise-grade AI QA solutions, test automation frameworks, and dedicated QA teams.',
};

export default function ServicesPage() {
  return <ServicesContent />;
}
