import IndustriesContent from './IndustriesContent';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'AI QA for Startups, SaaS, FinTech & Healthcare',
  description:
    'AI quality engineering for AI startups, SaaS, FinTech, and healthcare and healthtech companies, delivering trust, compliance and confidence before go-live.',
  path: '/industries',
});

export default function IndustriesPage() {
  return <IndustriesContent />;
}
