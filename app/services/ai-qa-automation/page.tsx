import type { Metadata } from 'next';
import { services } from '@/components/company-data';
import { notFound } from 'next/navigation';
import AutomationContent from './AutomationContent';

export const metadata: Metadata = {
    title: 'AI QA Automation Frameworks | Kaycore',
    description: 'Automated AI testing pipelines for CI/CD. Catch regression, drift, and hallucinations with every model update.',
};

export default function AutomationPage() {
    const service = services.find(s => s.slug === 'ai-qa-automation');

    if (!service) {
        notFound();
    }

    return <AutomationContent service={service} />;
}
