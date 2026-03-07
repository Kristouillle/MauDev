# MauDev Astro Starter

Starter project for a bilingual showcase website (FR/EN) built with Astro.

## Included

- File-based routes for French and English pages
- Shared layout + navigation + language switcher
- Projects page with reusable modal component
- Cookie consent banner scaffold compatible with Google Tag Manager consent workflows
- Basic modern CSS animations (fade/translate/scale)

## Quick start

```bash
npm install
npm run dev
```

Then open <http://localhost:4321>.

## Project structure

```text
src/
  components/
  data/
  layouts/
  pages/
  styles/
public/
  scripts/
```

## Notes for production

- Replace placeholder contact info in `src/pages/*/contact.astro`.
- Add your GTM container snippet and hook it to consent updates from `public/scripts/cookie-consent.js`.
- Edit project entries in `src/data/projects.ts` when adding new client projects.
