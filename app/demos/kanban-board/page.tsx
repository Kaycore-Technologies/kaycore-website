import { Metadata } from 'next';
import KanbanBoardContent from './KanbanBoardContent';

export const metadata: Metadata = {
    title: 'Agile Kanban Board | Kaycore Labs',
    description: 'Interactive drag-and-drop task management board.',
};

export default function Page() {
    return <KanbanBoardContent />;
}
