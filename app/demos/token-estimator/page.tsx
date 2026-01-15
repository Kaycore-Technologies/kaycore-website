import { Metadata } from 'next';
import TokenEstimatorContent from './TokenEstimatorContent';

export const metadata: Metadata = {
    title: 'AI Token Cost Estimator | Kaycore Labs',
    description: 'Real-time LLM token usage calculator for GPT-4, Claude 3, and other models.',
};

export default function Page() {
    return <TokenEstimatorContent />;
}
