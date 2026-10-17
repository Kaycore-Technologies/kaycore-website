import ContactContent from './ContactContent';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Contact AI Quality Engineering Experts',
  description:
    'Start a conversation with Kaycore to discuss AI testing, LLM validation, and AI risk mitigation for your product or platform.',
  path: '/contact',
});

export default function ContactPage() {
  return <ContactContent />;
}
