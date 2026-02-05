import type { Metadata } from 'next';
import HealthcareContent from './HealthcareContent';

export const metadata: Metadata = {
    title: 'Healthcare & Regulated AI Testing Services | Kaycore',
    description: 'AI testing for healthcare and regulated systems where safety matters. Validate AI behavior, reduce risk, and ensure trust with Kaycore.',
};

export default function HealthcarePage() {
    return <HealthcareContent />;
}
