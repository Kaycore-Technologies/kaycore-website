import { Metadata } from 'next';
import WorkspaceGraphContent from './WorkspaceGraphContent';

export const metadata: Metadata = {
    title: 'Workspace Knowledge Graph | Kaycore Labs',
    description: 'AI-driven organizational network analysis and insight mapper.',
};

export default function Page() {
    return <WorkspaceGraphContent />;
}
