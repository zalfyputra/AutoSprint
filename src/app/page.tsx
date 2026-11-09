import { Sidebar } from '@/components/sidebar';
import { TopBar } from '@/components/top-bar';
import { KanbanBoard } from '@/components/kanban-board';

export default function Home() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar />
        <KanbanBoard />
      </div>
    </div>
  );
}
