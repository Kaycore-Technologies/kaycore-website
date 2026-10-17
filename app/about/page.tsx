import AboutContent from './AboutContent';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'About Us: Founder-Led AI Quality Engineering',
  description:
    'Kaycore Technologies is a founder-led AI Quality Engineering firm. We test AI, and everything AI builds, so startups and enterprises can ship with certainty.',
  path: '/about',
});

export default function AboutPage() {
  return <AboutContent />;
}
