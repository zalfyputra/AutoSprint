# AutoSprint

A simpler and faster AI-driven task management web app.

## Tech Stack

**Frontend**
- Next.js 16 (App Router, TypeScript)
- Tailwind CSS 4
- Shadcn/ui components
- Lucide React icons
- Inter font

**Backend**
- Supabase (Auth, PostgreSQL, Real-time)
- Prisma ORM

**AI Integration**
- Vercel AI SDK
- OpenAI/Anthropic API

## Features

### Implemented
- Responsive sidebar navigation
- Search bar with AI indicator
- Kanban board (4 columns: To Do, In Progress, Review, Done)
- Task cards with:
  - Priority badges (low/medium/high)
  - Assignee avatars
  - Comment counts
  - Due dates

### Planned
- Drag-and-drop task management
- AI task breakdown
- Real-time collaboration
- Backend API
- Database persistence
- Authentication

## Getting Started

Install dependencies:
```bash
npm install
```

Run dev server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/
│   ├── layout.tsx       # Root layout, dark mode
│   ├── page.tsx         # Home page
│   └── globals.css      # Tailwind + theme
├── components/
│   ├── ui/              # Shadcn components
│   ├── sidebar.tsx      # Left navigation
│   ├── top-bar.tsx      # Search + avatar
│   ├── kanban-board.tsx # Board layout
│   └── task-card.tsx    # Individual tasks
└── lib/                 # Utils
```

## Development

Currently using mock data. Backend integration coming next.
