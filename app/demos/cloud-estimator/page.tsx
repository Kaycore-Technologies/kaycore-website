import { Metadata } from 'next';
import CloudEstimatorContent from './CloudEstimatorContent';

export const metadata: Metadata = {
    title: 'Cloud Cost Estimator 2.0 | Kaycore Labs',
    description: 'Dynamic cloud infrastructure pricing calculator with regional adjustments.',
};

export default function Page() {
    return <CloudEstimatorContent />;
}
