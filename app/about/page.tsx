import type { Metadata } from 'next';
import AboutContent from './AboutContent';

export const metadata: Metadata = {
  title: 'About Kaycore | Quality Engineering Specialists',
  description: 'Kaycore is an AI-first Quality Engineering firm helping companies deliver flawless products at speed.',
};

export default function AboutPage() {
  return <AboutContent />;
}
