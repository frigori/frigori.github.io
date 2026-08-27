# Mattia Giovannini Portfolio

Personal portfolio built with Vite, React, Tailwind CSS and Framer Motion.

## Development

```bash
npm install
npm run dev
```

## Quality checks

```bash
npm run lint
npm run build
```

## GitHub Pages deploy

The workflow in `.github/workflows/deploy.yml` runs lint/build on pull requests, then builds `dist/` and deploys it to GitHub Pages on every push to `master`.

For the username site, push this project to `frigori.github.io`.

For a project site such as `frigori.github.io/mattia-portfolio`, set a Vite `base` path before deploying:

```ts
// vite.config.ts
export default defineConfig({
  base: '/mattia-portfolio/',
  plugins: [react(), tailwindcss()],
})
```

## Content to personalize

Content lives in `src/App.tsx` (`projects`, `timeline`, `skillGroups`, `contactLinks`). Keep it in sync with the CV in the sibling `CV` repo, and add project links when repositories/demos are available.
