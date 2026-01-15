import { Metadata } from 'next';
import TriageAssistantContent from './TriageAssistantContent';

export const metadata: Metadata = {
    title: 'AI Clinical Triage Assistant | Kaycore Labs',
    description: 'Emergency Room ESI priority scoring and resource allocation simulation.',
};

export default function Page() {
    return <TriageAssistantContent />;
}
