import type { Metadata } from 'next';
import KayHealthContent from './KayHealthContent';

export const metadata: Metadata = {
  title: 'KayHealth | AI-Powered Healthcare Solutions',
  description:
    'KayHealth brings AI-powered solutions to healthcare — from automated clinical documentation to intelligent telemedicine assistants. HIPAA compliant. Physician approved.',
};

export default function KayHealthPage() {
  return <KayHealthContent />;
}
