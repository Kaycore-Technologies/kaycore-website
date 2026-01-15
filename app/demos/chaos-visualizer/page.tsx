import { Metadata } from 'next';
import ChaosContent from './ChaosContent';

export const metadata: Metadata = {
    title: 'Chaos Mesh Simulation | Kaycore Labs',
    description: 'Interactive visualization of distributed system failure injection.',
};

export default function Page() {
    return <ChaosContent />;
}
