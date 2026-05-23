import { Metadata } from 'next';
import TelehealthMonitorContent from './TelehealthMonitorContent';

export const metadata: Metadata = {
    title: 'Telehealth Vitals Monitor | Kaycore Labs',
    description: 'Real-time patient vitals simulation with dynamic charting.',
};

export default function Page() {
    return <TelehealthMonitorContent />;
}
