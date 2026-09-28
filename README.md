# ANGIE Kitchen & Catering website

One-page marketing site built with Next.js, TypeScript, and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Edit content and images

- Business details and all image paths live in `src/content/site.ts`.
- Images live in `public/images/`. To replace one, add the new file there and update its `src`, `alt`, `width`, and `height` in `src/content/site.ts`.
- Current food photos are AI-generated stand-ins. Replace them with real photos of the food when available.

## Deploy

Every push to `main` builds a static export and publishes it to GitHub Pages through `.github/workflows/deploy.yml`.
