# Agent Context & System Architecture

## Project Summary
- **Owner**: Mark Okedoyin (`markokedoyin.com`, GitHub: `nxemark`).
- **Purpose**: Minimalist, modern personal developer portfolio focusing on simplicity, fast performance, and clean design.
- **Design Aesthetic**: "Editorial minimal" — high contrast, subtle borders, clean sans/mono typography, zero bloat, dark/light theme support.
- **Deployment**: Hosted on **Vercel** via GitHub integration (`main` branch of `nxemark/markokedoyin`). Porkbun custom domain DNS (`markokedoyin.com` + `www.markokedoyin.com`).

---

## Tech Stack & Runtime
- **Framework**: Astro 5 (Static Output / SSG, zero JavaScript by default).
- **Styling**: Tailwind CSS v3 (class-based dark mode, custom design tokens).
- **Runtime**: Node.js v20+ / npm (installed locally at `~/.local/node` and symlinked to `~/.local/bin`).

---

## Key Files & Structure
- `src/data/projects.ts`: **Single source of truth** for all personal info, bio, social links, and project cards.
  - Adding/modifying projects or contact links should primarily happen here.
- `src/pages/index.astro`: Main one-page portfolio layout (Hero, Projects, Current Focus, Connect sections).
- `src/layouts/BaseLayout.astro`: Base HTML shell, SEO meta tags, OpenGraph preview, nav header, theme toggle, footer.
- `src/components/ProjectCard.astro`: Reusable card component supporting status tags (`Active`, `In Progress`, `Shipped`, `Experiment`) and external links.
- `src/components/ThemeToggle.astro`: Zero-dependency, persistent dark/light mode toggle with anti-FOUC inline script.
- `tailwind.config.mjs`: Color palette (`surface`, `border`, `primary`, `muted`) and font configurations.
- `astro.config.mjs`: Astro site config (`https://markokedoyin.com`).

---

## Workflow & Development Rules
- **Run local dev server**: `npm run dev` (hosts on `localhost:4321`).
- **Production build check**: `npm run build` (compiles to `dist/`).
- **Deployments**: Any push to `origin/main` automatically triggers a production deployment on Vercel.
- **Content Philosophy**: Keep it minimal and refined. Avoid heavy JS libraries, flashy canvas/scroll animations, or unnecessary dependencies.
