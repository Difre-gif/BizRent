# BizRent AI Development Rules

## Tech Stack
- **Frontend**: Next.js 15+ (App Router) with TypeScript and React 19.
- **Backend**: NestJS (Node.js framework) with TypeScript.
- **Database**: PostgreSQL hosted on Supabase, managed via Prisma ORM.
- **Styling**: Tailwind CSS v4 using custom brand variables (e.g., `bizrent-navy`, `bizrent-emerald`).
- **State Management**: TanStack Query (React Query) for server state and Zustand for client/auth state.
- **Icons**: Lucide React for all UI iconography.
- **Validation**: Zod for frontend form schemas and Class-Validator for backend DTOs.
- **Authentication**: JWT-based auth with Passport.js on the backend and custom middleware/store on the frontend.

## Library Usage Rules

### Frontend (bizrent-ui)
- **Data Fetching**: Always use the `apiClient` (Axios instance) located in `src/lib/apiClient.ts`. Wrap all requests in TanStack Query hooks (`useQuery`, `useMutation`).
- **Icons**: Exclusively use `lucide-react`. Do not install other icon libraries.
- **Components**: Use the pre-built components in `src/components/ui/` (based on Radix UI/shadcn). Create new components in `src/components/` and keep them under 100 lines when possible.
- **Styling**: Use Tailwind CSS utility classes. Reference brand colors using the `bizrent-` prefix defined in `globals.css`.
- **Forms**: Use `react-hook-form` combined with `zod` for validation.
- **Navigation**: Use Next.js `Link` and `useRouter` for all internal routing.

### Backend (bizrent-api)
- **ORM**: Use Prisma for all database interactions. Access the client via `PrismaService`.
- **Validation**: Use DTOs with `class-validator` decorators for all request bodies.
- **Security**: Use `@UseGuards(JwtAuthGuard)` for protected routes and `@Roles()` for RBAC.
- **Context**: Use `requestContext` (AsyncLocalStorage) to access the current user's `orgId` and `userId` within services.
- **Architecture**: Follow the standard NestJS Module-Controller-Service pattern.

## General Guidelines
- **Simplicity**: Prioritize readable, maintainable code over complex abstractions.
- **Responsive Design**: All UI changes must be mobile-first and fully responsive.
- **Error Handling**: Let errors bubble up to global filters/handlers unless specific recovery logic is needed.
- **File Naming**: Use PascalCase for React components and kebab-case for directories and utility files.