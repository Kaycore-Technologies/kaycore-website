import type { Metadata } from 'next';
import PricingContent from './PricingContent';

export const metadata: Metadata = {
    title: 'AI Testing & AI Quality Engineering Pricing | Kaycore',
    description: 'Transparent pricing for AI Quality Engineering, LLM testing, AI risk audits, and ongoing AI QA retainers. Built for serious AI teams.',
};

export default function PricingPage() {
    return <PricingContent />;
}
