# Nangunuru Sanjay — Portfolio

A responsive personal portfolio built with React, Vite, Tailwind CSS, and Lucide icons. It includes an accessible mobile navigation menu, filterable project cards, skills, learning history, and working email/GitHub/LinkedIn links.

## Requirements

- Node.js 20.19+ or 22.12+ (current Vite releases require a recent Node.js version)
- npm (included with Node.js)

## Run locally

1. Extract the project ZIP and open a terminal in the `sanjay-portfolio` folder.
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Open the local URL printed by Vite.

## Production build

Run `npm run build`. Vite writes the deployable site to `dist/`. To preview that build locally, run `npm run preview`.

## Deploy

### GitHub Pages

The included GitHub Actions workflow builds and deploys this project when changes are pushed to `main`. In the repository, open **Settings → Pages** and set the source to **GitHub Actions** once. The site will be published at `https://sanjay-nangunuru.github.io/Portfolio/` after the workflow succeeds.

### Vercel or Netlify

Import the GitHub repository. Use `pnpm install --frozen-lockfile` as the install command, `pnpm run build` as the build command, and `dist` as the output directory. The root path is used automatically on these hosts.

## Project content

- The profile photo is at `public/assets/profile-photo.png` and is served at `/assets/profile-photo.png`.
- Edit project descriptions, skills, learning items, and contact details in `src/main.jsx`.
- Project descriptions intentionally avoid asserting public demos or repositories that were not supplied. Add links only after confirming they are public and working.
- Review education, dates, skills, and credential names for accuracy before publishing.

## Accessibility and responsive behavior

The layout adapts to narrow screens, uses semantic landmarks and headings, provides a labeled mobile menu with expanded state, exposes project filter state to assistive technology, supports keyboard focus, and respects reduced-motion preferences.

