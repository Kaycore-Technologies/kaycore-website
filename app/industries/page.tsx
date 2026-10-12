import type { Metadata } from 'next';
import IndustriesContent from './IndustriesContent';

export const metadata: Metadata = {
  title: 'Industries We Serve | AI Startups, SaaS, FinTech & Healthcare',
  description:
    'AI quality engineering for AI startups, SaaS platforms, FinTech, and healthcare and healthtech companies, delivering trust, compliance, and confidence before go-live.',
  alternates: {
    canonical: '/industries',
  },
};

export default function IndustriesPage() {
  return <IndustriesContent />;
}
