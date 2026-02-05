import type { Metadata } from 'next';
import AboutContent from './AboutContent';

export const metadata: Metadata = {
  title: 'About Kaycore | AI Quality Engineering Specialists',
  description: 'Kaycore is a founder-led AI Quality Engineering firm helping companies test, validate, and trust AI systems where failure is expensive.',
};

export default function About() {
  return <AboutContent />;
}
