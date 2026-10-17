import KayHealthContent from './KayHealthContent';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'KayHealth | AI-Powered Healthcare Solutions',
  description:
    'KayHealth brings AI-powered solutions to healthcare, from automated clinical documentation to intelligent telemedicine assistants. HIPAA compliant. Physician approved.',
  path: '/kayhealth',
  image: '/assets/og-kayhealth.jpg',
  imageAlt: 'KayHealth by Kaycore Technologies',
});

export default function KayHealthPage() {
  return <KayHealthContent />;
}
