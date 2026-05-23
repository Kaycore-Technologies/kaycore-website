import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import KayScribeContent from './KayScribeContent';

export const metadata: Metadata = {
  title: 'KayScribe | AI Medical Scribe — Automate Clinical Documentation',
  description:
    'KayScribe is an AI-powered medical scribe that automates clinical documentation in real-time. Reduce physician burnout. HIPAA compliant.',
};

export default function KayScribePage() {
  // Prevent access while in development
  redirect('/kayhealth');
  
  return <KayScribeContent />;
}
