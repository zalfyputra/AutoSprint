'use client';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Clock, MessageSquare } from 'lucide-react';

interface TaskCardProps {
  title: string;
  priority: 'low' | 'medium' | 'high';
  assignee?: string;
  comments?: number;
  dueDate?: string;
}

export function TaskCard({ title, priority, assignee, comments, dueDate }: TaskCardProps) {
  const priorityColors = {
    low: 'bg-green-100 text-green-800',
    medium: 'bg-yellow-100 text-yellow-800',
    high: 'bg-red-100 text-red-800',
  };

  return (
    <Card className="p-4 mb-3 hover:shadow-md transition-shadow cursor-pointer">
      <div className="space-y-3">
        <h3 className="font-medium text-sm">{title}</h3>
        
        <div className="flex items-center gap-2">
          <Badge className={priorityColors[priority]} variant="secondary">
            {priority}
          </Badge>
        </div>

        <div className="flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-2">
            {assignee && (
              <Avatar className="h-6 w-6">
                <AvatarFallback className="text-xs">{assignee}</AvatarFallback>
              </Avatar>
            )}
            {comments && (
              <div className="flex items-center gap-1">
                <MessageSquare className="h-3 w-3" />
                {comments}
              </div>
            )}
          </div>
          {dueDate && (
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {dueDate}
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}
