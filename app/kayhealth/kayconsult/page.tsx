import type { Metadata } from 'next';
import KayConsultContent from './KayConsultContent';

export const metadata: Metadata = {
  title: 'KayConsult | AI Telemedicine Assistant — Intelligent Remote Care',
  description:
    'KayConsult is an AI-driven telemedicine and consultation assistant that helps clinicians deliver better care remotely with AI-powered triage, symptom analysis, and follow-up automation.',
};

export default function KayConsultPage() {
  return <KayConsultContent />;
}
