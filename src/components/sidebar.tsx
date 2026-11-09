'use client';

import { Home, CheckSquare, Users, Settings, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Sidebar() {
  return (
    <div className="w-64 h-screen bg-slate-50 border-r border-slate-200 flex flex-col">
      <div className="p-4 border-b border-slate-200">
        <h1 className="text-xl font-bold text-slate-900">AutoSprint</h1>
      </div>
      
      <nav className="flex-1 p-4 space-y-2">
        <Button variant="ghost" className="w-full justify-start">
          <Home className="mr-2 h-4 w-4" />
          Dashboard
        </Button>
        <Button variant="ghost" className="w-full justify-start bg-slate-200">
          <CheckSquare className="mr-2 h-4 w-4" />
          Tasks
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          <Users className="mr-2 h-4 w-4" />
          Team
        </Button>
      </nav>

      <div className="p-4 border-t border-slate-200">
        <Button variant="ghost" className="w-full justify-start">
          <Settings className="mr-2 h-4 w-4" />
          Settings
        </Button>
      </div>
    </div>
  );
}
