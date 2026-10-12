import type { Metadata } from 'next';
import AboutContent from './AboutContent';

export const metadata: Metadata = {
  title: 'About Kaycore | Founder-Led AI Quality Engineering',
  description: 'Kaycore Technologies is a founder-led AI Quality Engineering firm. We test AI, and everything AI builds, so startups and enterprises can ship with certainty.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return <AboutContent />;
}
