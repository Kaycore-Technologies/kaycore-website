import type { Metadata } from 'next';
import MethodologyContent from './MethodologyContent';

export const metadata: Metadata = {
    title: 'AI Quality Engineering Methodology | Kaycore',
    description: 'Learn how Kaycore validates AI behavior using a risk-first, human-in-the-loop AI Quality Engineering approach for production systems.',
};

export default function MethodologyPage() {
    return <MethodologyContent />;
}
