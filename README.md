# Omar Khattab Portfolio

A polished single-page portfolio site for showcasing my software engineering work, combining animated storytelling with recruiter-friendly project highlights.

## Live Site
https://www.omarkhattab.ca

## Features
- Responsive, section-based layout (Home, About, Projects, Experience, Skills, Education, Contact) with smooth hash navigation
- Framer Motion micro-interactions and scroll reveals to keep the page lively without hurting performance
- Sticky navigation with in-page scrolling helpers and back-to-top control
- Theming-ready component library built on shadcn/ui, Tailwind CSS, and Radix primitives
- Resume download, social/profile links, and call-to-action buttons wired for quick outreach

## Tech Stack
- **Frontend:** React 18, TypeScript, Vite, Tailwind CSS, shadcn/ui, Framer Motion, Lucide icons
- **Backend:** Static SPA served via Vite build (no runtime backend required)
- **Database:** Not applicable (static content)
- **Tools:** ESLint, Vitest, Testing Library, React Query, PostCSS, npm

## Project Structure
- `src/` — Application code organized by pages, reusable UI components, layout wrappers, hooks, and lib utilities
- `public/` — Static assets such as the favicon, profile image, and downloadable resume
- `docs/` — Placeholder for future screenshots and technical notes (add images under `docs/` and reference them in this README)
- `index.html` & config files — Vite entry HTML plus build/lint/test configuration (Tailwind, PostCSS, ESLint, Vitest, TS)

## How to Run
Requirements: Node.js 18+ and npm.

```bash
npm install
npm run dev    # start Vite dev server
npm run build  # production build
npm run lint   # static analysis
npm run test   # unit tests
```

## What This Project Demonstrates
- Frontend architecture with clear separation of layout, pages, and shared components
- Modern styling workflow using Tailwind CSS with design tokens and utility composition
- Accessible UI patterns leveraging Radix primitives and motion that respects user context
- Production-ready build tooling (Vite) with linting, testing, and type safety baked in

## Future Improvements
- Add dynamic content (project data via CMS or JSON) to simplify updates
- Expand test coverage for interactive components and scroll behaviors
- Introduce theme toggle and performance-driven code splitting for large sections
- Include annotated screenshots in `docs/`

## Author
Omar Khattab — [GitHub](https://github.com/Omar-Khattab-01) | [LinkedIn](https://www.linkedin.com/in/omar-khattab-4b10581b9/) | omar.hosam2000@gmail.com
