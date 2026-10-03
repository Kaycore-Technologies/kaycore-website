import type { Metadata } from 'next';
import ContactContent from './ContactContent';

export const metadata: Metadata = {
  title: 'Contact AI Quality Engineering Experts',
  description: 'Start a conversation with Kaycore to discuss AI testing, LLM validation, and AI risk mitigation for your product or platform.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return <ContactContent />;
}
