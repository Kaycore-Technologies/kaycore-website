import type { Metadata } from 'next';
import HomeContent from './HomeContent';

export const metadata: Metadata = {
  title: 'AI-Powered QA Services & Test Automation | Kaycore Technologies',
  description:
    'Kaycore Technologies delivers AI-powered QA services, test automation, dedicated QA teams, and enterprise quality engineering for SaaS, Fintech, Healthcare & AI startups.',
  keywords: [
    'AI QA services',
    'Test automation company',
    'AI testing solutions',
    'Offshore QA team',
    'Healthcare QA testing',
    'API automation',
    'Performance testing',
    'Dedicated QA teams',
  ],
};

export default function Home() {
  return <HomeContent />;
}
