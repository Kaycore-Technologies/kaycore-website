import type { Metadata } from 'next';
import { services } from '@/components/company-data';
import { notFound } from 'next/navigation';
import RetainerContent from './RetainerContent';

export const metadata: Metadata = {
    title: 'AI Quality Assurance Retainers | Kaycore',
    description: 'Ongoing AI Model Risk Management and Red-Teaming. Kaycore acts as your external AI safety department for continuous compliance.',
};

export default function RetainersPage() {
    const service = services.find(s => s.slug === 'ai-qe-retainers');

    if (!service) {
        notFound();
    }

    return <RetainerContent service={service} />;
}
