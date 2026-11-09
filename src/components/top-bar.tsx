'use client';

import { Search, Sparkles } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

export function TopBar() {
  return (
    <div className="h-16 border-b border-slate-200 bg-white flex items-center px-6 gap-4">
      <div className="flex-1 max-w-xl relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
        <Input 
          placeholder="Search tasks or ask AI..." 
          className="pl-10 pr-10"
        />
        <Sparkles className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-purple-500" />
      </div>
      
      <Avatar>
        <AvatarFallback>ZP</AvatarFallback>
      </Avatar>
    </div>
  );
}
