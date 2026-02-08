# AGENTS.md - ReplAI-CAD Development Guide

## Project Overview

**ReplAI-CAD** is a full-stack CAD (Computer-Aided Design) application built with Next.js frontend and Elysia/Bun backend. It uses **Replicad** (a JavaScript CAD library) for 3D modeling, with AI-powered documentation assistance for the Replicad API.

### Tech Stack

**Frontend:**
- Next.js 15.5.2 (App Router, React 19)
- TypeScript with strict mode
- Bun as package manager and runtime
- Replicad + Three.js for 3D rendering
- Web Workers (Comlink) for CAD computations
- Zustand for state management
- Radix UI + Tailwind CSS 4 for UI components
- Better Auth for authentication
- React Hook Form + Zod for forms/validation

**Backend:**
- Elysia (web framework)
- Bun runtime
- PostgreSQL with pg driver
- Better Auth for authentication
- Umzug + Sequelize for migrations
- Vercel AI SDK for agent tools
- Resend for emails

## Repository Structure

```
ReplAI-CAD/
├── frontend/               # Next.js frontend app
│   ├── src/
│   │   ├── app/           # Next.js App Router pages
│   │   ├── components/    # React components
│   │   │   ├── ui/        # Radix UI components (don't enforce import sorting here)
│   │   │   ├── custom/    # Project-specific components (auth, cad)
│   │   │   └── 3d/        # Three.js/Replicad viewers
│   │   ├── lib/           # Utilities, auth client, replicad API/worker
│   │   ├── state/         # Zustand stores
│   │   ├── hooks/         # Custom React hooks
│   │   ├── types/         # TypeScript type definitions
│   │   ├── utils/         # Helper functions
│   │   └── providers/     # React context providers
│   ├── env/               # Environment files (.env.dev, .env.example)
│   ├── public/            # Static assets
│   └── package.json       # Frontend dependencies and scripts
│
└── backend/               # Elysia backend API
    ├── src/
    │   ├── index.ts       # Main server entry point
    │   ├── lib/           # Core libraries (auth, db, resend)
    │   ├── orm/           # Database migrations
    │   ├── agent/         # AI agent tools and utilities
    │   │   ├── tools/     # Vercel AI SDK tool definitions
    │   │   └── utils/     # Documentation processing, embeddings
    │   └── utils/         # Helper functions and utilities
    ├── env/               # Environment files (.env.dev, .env.example)
    ├── resources/         # Static resources, samples
    └── package.json       # Backend dependencies and scripts
```

## Essential Commands

### Frontend (from `frontend/` directory)

```bash
# Development server (runs on port 5000)
bun run dev

# Build for production
bun run build

# Start production server
bun run start

# Lint TypeScript files
bun run lint
```

### Backend (from `backend/` directory)

```bash
# Development server with hot reload (runs on port 5001)
bun run dev

# Run database migrations (up)
bun run migrate:dev

# Revert last migration
bun run migrate:dev down

# Run better-auth migrations
bun run better-auth-migrate:dev

# Lint TypeScript files
bun run lint

# Lint with auto-fix
bun run lint:fix

# Create API documentation knowledge base
bun run create-api-docs-knowledge-base:dev
```

**Note:** All backend scripts use `dotenvx` to load environment variables from `env/.env.dev`.

## Environment Configuration

### Frontend (`frontend/env/.env.dev`)

```env
NEXT_PUBLIC_BACKEND_URL=http://localhost:5001
```

### Backend (`backend/env/.env.dev`)

```env
DATABASE_URL=postgresql://user:password@localhost:5432/dbname
RESEND_API_KEY=re_xxxxx
BETTER_AUTH_SECRET=random_secret_string
GOOGLE_CLIENT_SECRET=xxxxx
GOOGLE_CLIENT_ID=xxxxx.apps.googleusercontent.com
FRONTEND_URL=http://localhost:5000
PORT=5001
BACKEND_URL=http://localhost:${PORT}
```

**Important:** Environment files are in `env/` subdirectories, NOT in root directories. Use `.env.example` files as templates.

## Code Conventions

### TypeScript Configuration

Both projects use strict TypeScript:
- Frontend: ES2017 target, `moduleResolution: "bundler"`
- Backend: ES2021 target, `moduleResolution: "bundler"`, includes `bun-types`

### Import Organization

**CRITICAL:** Both projects enforce import sorting via ESLint (`simple-import-sort` plugin).

**Standard import order:**
1. External packages (React, Next.js, third-party libraries)
2. Blank line separator
3. Internal imports using `@/` alias (frontend) or relative paths (backend)

**Frontend exception:** `src/components/ui/**` files have import sorting DISABLED to preserve shadcn/ui conventions.

**Example (frontend):**
```typescript
import * as React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { authClient } from '@/lib/auth-client'
import type { MeshRenderOutput } from '@/types/cad'
```

**Example (backend):**
```typescript
import { tool } from 'ai'
import { z } from 'zod'

import { getChunkById } from '../../../utils/dbUtils/replicadApiDocumentationStore'
import type { Migration } from '../migrate'
```

### Backend Import Extensions

Backend imports use `.js` extension even though files are `.ts`:
```typescript
import { betterAuthPlugin } from './lib/auth.js'
import { getPool } from './db.js'
```

This is required by Bun's module resolution with `"type": "module"` in package.json.

### Naming Conventions

**Frontend:**
- Components: PascalCase (`LoginForm`, `MainScene`, `CadViewer`)
- Props types: `{ComponentName}Props` (e.g., `SceneProps`)
- Hooks: camelCase with `use` prefix (`useBuilderStore`, `useIsMobile`)
- State stores: camelCase with `Store` suffix (`builderState.ts` → `useBuilderStore`)
- Client components: Add `'use client'` directive at top of file

**Backend:**
- Functions: camelCase (`getPool`, `fetchContent`, `normalizeString`)
- Classes: PascalCase (`RawContentFetcher`)
- Tools: camelCase constants (`getApiDocumentation`, `applyDiff`, `readScript`)
- Plugins: camelCase with "Plugin" suffix (`betterAuthPlugin`)

**Shared:**
- Files: camelCase for utilities, PascalCase for components
- Constants: UPPER_SNAKE_CASE for true constants (`DEFAULT_MEMO_KEY`, `BASE_DOCUMENTATION_URL`)

### Code Style (Prettier)

Both projects share identical Prettier configuration:
```json
{
  "arrowParens": "always",
  "jsxSingleQuote": true,
  "tabWidth": 2,
  "singleQuote": true,
  "endOfLine": "auto",
  "semi": false
}
```

**Key points:**
- Single quotes everywhere (including JSX)
- No semicolons
- 2-space indentation
- Arrow function parentheses always required

### TypeScript Patterns

**Type imports:**
Use `type` keyword for type-only imports:
```typescript
import type { PoolClient, QueryResult } from 'pg'
import type { MeshRenderOutput, SvgRenderOutput } from '@/types/cad'
```

**Backend ESLint rules:**
- `@typescript-eslint/consistent-type-imports`: error
- `@typescript-eslint/consistent-type-exports`: error
- Unused vars: Allow underscore prefix (`_unusedVar`)

**Generic functions:**
```typescript
export async function query<R extends QueryResultRow, I = any[]>(
  sql: string,
  values?: QueryConfigValues<I>,
): Promise<QueryResult<R>>
```

**Union types with type guards:**
```typescript
type Shape = MeshRenderOutput | SvgRenderOutput

function isMeshShape(shape: Shape): shape is MeshRenderOutput {
  return 'faces' in shape
}
```

## Architecture Patterns

### Frontend Architecture

**State Management (Zustand):**
- Store files in `src/state/`
- Separate type definitions for state and actions
- Example pattern:
```typescript
import { create } from 'zustand'

type State = {
  data: string | null
  isLoading: boolean
}

type Actions = {
  setData: (data: string) => void
  fetchData: () => Promise<void>
}

export const useStore = create<State & Actions>((set, get) => ({
  data: null,
  isLoading: false,
  setData: (data) => set({ data }),
  fetchData: async () => {
    set({ isLoading: true })
    // async logic
    set({ isLoading: false })
  }
}))
```

**Web Workers (Replicad):**
- Worker code in `src/lib/replicad-worker/index.worker.ts`
- Uses Comlink for worker communication
- API wrapper in `src/lib/replicad-api/index.ts`
- Worker runs CAD computations (OpenCascade.js) off main thread
- Memoization pattern: `SHAPE_MEMO: Record<string, CleanedShape[]>`

**Three.js Setup:**
- Global configuration: `THREE.Object3D.DEFAULT_UP.set(0, 0, 1)` (Z-up coordinate system)
- Viewer components in `src/components/3d/`
- Uses `@react-three/fiber` and `@react-three/drei`

**Async Operations:**
- Custom `inSeries` utility for serializing async calls
- Pattern: Wrap async functions to prevent concurrent execution
```typescript
const runBuild = inSeries(build)
```

**Forms:**
- React Hook Form + Zod validation
- Form schema defined with Zod
- Use `zodResolver` for form validation
```typescript
const formSchema = z.object({
  email: z.email(),
  password: z.string().min(8),
})

const form = useForm({
  resolver: zodResolver(formSchema),
  defaultValues: { email: '', password: '' },
  mode: 'onBlur',
})
```

**UI Components:**
- Base components in `src/components/ui/` (Radix UI + Tailwind)
- Custom components in `src/components/custom/`
- Use `cn()` utility from `@/lib/utils` for conditional classes

### Backend Architecture

**Elysia Framework:**
- Main app in `src/index.ts`
- Plugin system for modular features
- Macros for custom functionality (e.g., auth middleware)
```typescript
const app = new Elysia()
  .use(cors({ credentials: true }))
  .use(betterAuthPlugin)
  .get('/route', handler, { auth: true })
  .listen(port)
```

**Database (PostgreSQL):**
- Connection pool singleton pattern in `src/lib/db.ts`
- `getPool()` creates pool on first call, reuses thereafter
- `getClient()` tracks client checkout with timeout warnings (5 seconds)
- Always release clients after use
```typescript
const client = await getClient()
try {
  await client.query('SELECT ...')
} finally {
  client.release()
}
```

**Migrations:**
- Umzug + Sequelize for migration management
- Files in `src/orm/migrations/` with timestamp prefix: `YYYYMMDD-N-Description.ts`
- Run with: `bun run migrate:dev`
- Revert with: `bun run migrate:dev down`

**Authentication:**
- Better Auth library integrated via Elysia plugin
- Custom macro adds `{ auth: true }` option to routes
- Session validated via headers
- Email verification + password reset via Resend
- OAuth support (Google configured)

**AI Agent Tools:**
- Vercel AI SDK tool pattern in `src/agent/tools/`
- Each tool exports a `tool()` definition with:
  - `description`: What the tool does
  - `inputSchema`: Zod schema for input validation
  - `execute`: Async function that performs the action
```typescript
export const myTool = tool({
  description: 'Does something useful',
  inputSchema: z.object({ param: z.string() }),
  execute: async ({ param }) => {
    // implementation
    return result
  },
})
```

**Caching Pattern:**
- Classes use Map for in-memory caching
```typescript
class RawContentFetcher {
  private cache = new Map<string, string>()
  
  async fetchContent(url: string) {
    if (this.cache.has(url)) return this.cache.get(url)!
    const content = await fetch(url)
    this.cache.set(url, content)
    return content
  }
}
```

## Testing

**Current state:** No test framework configured in either project.

## Database

**Provider:** PostgreSQL

**Migration workflow:**
1. Create migration file in `backend/src/orm/migrations/`
2. Use format: `YYYYMMDD-N-Description.ts`
3. Export `up` and `down` functions
4. Run: `bun run migrate:dev`

**Connection handling:**
- Pool created lazily via `getPool()`
- Client checkout tracking with timeout warnings
- Always use try/finally with `client.release()`

## Important Gotchas

### Frontend

1. **Worker initialization required:** Must call `builderStore.initWorker()` before building shapes
2. **Three.js Z-up:** Project uses Z-axis as up direction (non-standard)
3. **Path aliases:** Use `@/` for all internal imports (configured in tsconfig.json)
4. **Dev port:** Frontend runs on port 5000 (not default 3000)
5. **Import sorting:** Will fail ESLint if imports not properly ordered (except in `components/ui/`)

### Backend

1. **Import extensions:** Must use `.js` extension in imports despite `.ts` files
2. **Environment loading:** Commands use `dotenvx` - don't rely on `.env` in root
3. **Database client tracking:** Clients checked out >5 seconds log warning (indicates leak)
4. **Better Auth migrations:** Separate command (`better-auth-migrate:dev`) for auth tables
5. **Port configuration:** Backend runs on port 5001 (configurable via PORT env var)

### Both

1. **No test runner:** Tests not configured - add tests manually if needed
2. **Bun-specific:** Projects use Bun APIs and may not work with Node.js
3. **Prettier enforced:** Code must match Prettier config or fail CI (if configured)
4. **Strict TypeScript:** Both projects use `strict: true` - no implicit any, null checks enforced

## Authentication Flow

1. **Frontend → Backend:** Uses Better Auth client (`@/lib/auth-client`)
2. **Sessions:** Stored in database, validated via session cookies
3. **Email verification:** Required for password signup (via Resend)
4. **OAuth:** Google configured, redirects to `/api/auth/callback/google`
5. **Protected routes:** Use `{ auth: true }` macro in backend, middleware in frontend

## CAD/Replicad Integration

**Key concepts:**
- Replicad runs in Web Worker (via `index.worker.ts`)
- Code execution uses VM pattern (`vm.ts`) with custom context
- Shapes rendered as meshes (Three.js) or SVG
- Type guards distinguish shape types: `isMeshShape()`, `isSvgShapesArray()`
- API documentation stored in database for AI agent retrieval

**Building shapes:**
1. User writes Replicad code in editor
2. Code sent to worker via Comlink API
3. Worker executes with Replicad context and OpenCascade.js
4. Returns mesh/SVG data or error
5. Frontend renders result in Three.js viewer

**Documentation system:**
- Replicad API docs fetched from GitHub
- Chunked and stored in PostgreSQL
- AI agent queries via `getApiDocumentation` tool
- Supports classes, functions, methods, variables, interfaces, type aliases

## Development Workflow

1. **Start both servers:**
   ```bash
   # Terminal 1 - Backend
   cd backend && bun run dev
   
   # Terminal 2 - Frontend
   cd frontend && bun run dev
   ```

2. **Make changes:** Edit files, hot reload enabled on both

3. **Before committing:**
   ```bash
   # Frontend
   cd frontend
   bun run lint
   
   # Backend
   cd backend
   bun run lint
   ```

4. **Database changes:**
   - Create migration file in `backend/src/orm/migrations/`
   - Run `bun run migrate:dev` from backend directory

## External Dependencies

**Critical packages:**
- `replicad` + `replicad-opencascadejs`: CAD kernel
- `better-auth`: Authentication system
- `elysia`: Backend web framework
- `ai` (Vercel AI SDK): Agent tools
- `zustand`: State management
- `@radix-ui/*`: UI primitives
- `three` + `@react-three/fiber`: 3D rendering
- `comlink`: Web Worker communication

## Project-Specific Context

**Purpose:** ReplAI-CAD appears to be a CAD editor with AI-assisted documentation lookup for the Replicad API. Users write JavaScript/TypeScript code using Replicad's API to generate 3D models, and an AI agent helps them find relevant documentation.

**Current development stage:** 
- Core features implemented (auth, CAD worker, 3D viewer, basic pages)
- Recent work on agent tools for documentation retrieval
- Agent tools directory shows in-progress work (`applyDiff` tool)
- Some untracked files in `backend/resources/samples/` and agent tools

**Git history notes:**
- Recently switched from pgvector to direct context approach for documentation
- Removed Turbopack due to CAD worker issues
- Fixed Better Auth client integration issues

## File Path Patterns

When referencing code, use `file:line` format:
- `backend/src/lib/db.ts:42` - Database client acquisition
- `frontend/src/state/builderState.ts:66` - Build function
- `frontend/src/lib/replicad-worker/index.worker.ts:24` - Worker code execution

## Summary

This is a modern, well-structured full-stack TypeScript project with clear separation of concerns. The codebase follows consistent patterns and conventions across frontend and backend. When working in this repository:

1. **Always check import order** - ESLint will fail if wrong
2. **Use `.js` extensions in backend imports** - Required by Bun
3. **Release database clients** - Use try/finally pattern
4. **Initialize worker before building** - Required for CAD operations
5. **Follow existing patterns** - Check similar files before adding new features
6. **Environment files in `env/` subdirectories** - Not root directory
7. **Run both servers for full development** - Frontend on 5000, backend on 5001

The project is actively developed with focus on AI-assisted CAD modeling using Replicad.
