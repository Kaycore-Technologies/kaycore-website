import type { Metadata } from 'next';
import IndustriesContent from './IndustriesContent';

export const metadata: Metadata = {
  title: 'Industries We Serve | Healthcare, Fintech, SaaS & AI QA',
  description:
    'Specialized AI quality engineering for Healthcare, Fintech, SaaS, Retail, Logistics, and AI startups — where software failures cost millions.',
  alternates: {
    canonical: '/industries',
  },
};

export default function IndustriesPage() {
  return <IndustriesContent />;
}
