import { Metadata } from 'next';
import LoanVisualizerContent from './LoanVisualizerContent';

export const metadata: Metadata = {
    title: 'Smart Loan Visualizer | Kaycore Labs',
    description: 'Interactive mortgage amortization calculator and financial planning tool.',
};

export default function Page() {
    return <LoanVisualizerContent />;
}
