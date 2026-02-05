import type { Metadata } from 'next';
import AuditContent from './AuditContent';

export const metadata: Metadata = {
    title: 'AI Risk Assessment & Quality Audit Services | Kaycore',
    description: 'Identify AI risks before production. Kaycore’s AI Quality & Risk Readiness Audit helps teams assess safety, reliability, and compliance gaps.',
};

export default function AuditPage() {
    return <AuditContent />;
}
