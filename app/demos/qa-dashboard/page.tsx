import { Metadata } from 'next';
import QADashboardContent from './QADashboardContent';

export const metadata: Metadata = {
    title: 'QA Command Dashboard | Kaycore Labs',
    description: 'Test automation analytical dashboard for reliability engineering.',
};

export default function Page() {
    return <QADashboardContent />;
}
