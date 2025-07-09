# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `bun run dev` - Start the development server (available at http://localhost:3000)
- `bun run build` - Build the production application
- `bun run start` - Start the production server
- `bun run lint` - Run ESLint to check for code issues

## Project Architecture

This is a Next.js 14 application using the App Router architecture with TypeScript and Tailwind CSS.

### Key Structure
- `src/app/` - App Router pages and layouts
  - `layout.tsx` - Root layout with Inter font configuration
  - `page.tsx` - Homepage component
  - `globals.css` - Global styles and Tailwind imports
- `public/` - Static assets (next.svg, vercel.svg)
- `tailwind.config.ts` - Tailwind configuration with custom gradient utilities

### Technology Stack
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with ShadCN UI components
- **Theme Management**: next-themes for light/dark mode switching
- **UI Components**: ShadCN UI with Radix UI primitives
- **Fonts**: Inter (Google Font) configured via next/font
- **Linting**: ESLint with Next.js configuration

### Development Notes
- The project uses the App Router (not Pages Router)
- Components are in `src/components/` directory (UI components in `src/components/ui/`)
- Theme switching is handled by next-themes with no flash of wrong theme
- ShadCN UI provides pre-built, accessible components
- Dark mode is configured via Tailwind's class-based approach
- The ThemeProvider wraps the entire app for theme context