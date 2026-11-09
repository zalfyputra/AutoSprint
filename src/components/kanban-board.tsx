'use client';

import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TaskCard } from '@/components/task-card';

interface Column {
  id: string;
  title: string;
  tasks: Array<{
    id: string;
    title: string;
    priority: 'low' | 'medium' | 'high';
    assignee?: string;
    comments?: number;
    dueDate?: string;
  }>;
}

const mockColumns: Column[] = [
  {
    id: 'todo',
    title: 'To Do',
    tasks: [
      {
        id: '1',
        title: 'Design new landing page',
        priority: 'high',
        assignee: 'JD',
        comments: 3,
        dueDate: 'Nov 12',
      },
      {
        id: '2',
        title: 'Fix login bug',
        priority: 'high',
        assignee: 'SM',
        comments: 1,
        dueDate: 'Nov 10',
      },
    ],
  },
  {
    id: 'in-progress',
    title: 'In Progress',
    tasks: [
      {
        id: '3',
        title: 'Implement AI task breakdown',
        priority: 'medium',
        assignee: 'ZP',
        comments: 5,
        dueDate: 'Nov 15',
      },
    ],
  },
  {
    id: 'review',
    title: 'Review',
    tasks: [
      {
        id: '4',
        title: 'Update documentation',
        priority: 'low',
        assignee: 'AB',
        dueDate: 'Nov 11',
      },
    ],
  },
  {
    id: 'done',
    title: 'Done',
    tasks: [
      {
        id: '5',
        title: 'Setup project structure',
        priority: 'high',
        assignee: 'ZP',
        dueDate: 'Nov 9',
      },
    ],
  },
];

export function KanbanBoard() {
  return (
    <div className="flex-1 p-6 overflow-x-auto bg-background">
      <div className="flex gap-6 h-full">
        {mockColumns.map((column) => (
          <div key={column.id} className="flex-shrink-0 w-80">
            <div className="bg-muted/50 rounded-lg p-4 h-full flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold text-foreground flex items-center gap-2">
                  {column.title}
                  <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full">
                    {column.tasks.length}
                  </span>
                </h2>
                <Button size="icon" variant="ghost" className="h-6 w-6">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>

              <div className="flex-1 overflow-y-auto space-y-3">
                {column.tasks.map((task) => (
                  <TaskCard key={task.id} {...task} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
