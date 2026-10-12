import type { Metadata } from 'next';
import HomeContent from './HomeContent';

export const metadata: Metadata = {
  title: 'We Test AI, and Everything AI Builds | Kaycore Technologies',
  description:
    'Kaycore Technologies is a founder-led AI Quality Engineering firm. We test AI systems, and the websites and apps AI builds, for startups and enterprises.',
  keywords: [
    'AI quality engineering',
    'AI testing services',
    'LLM testing',
    'Generative AI testing',
    'AI risk audit',
    'QA for AI-built apps',
    'AI QA automation frameworks',
    'Healthcare AI QA',
    'Test automation',
    'Performance testing',
    'QA consulting',
  ],
};

export default function Home() {
  return <HomeContent />;
}
