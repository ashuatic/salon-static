# SPIN Unisex Salon – Frontend

Static marketing site for SPIN Unisex Salon Bellandur, built with Vite, React 18, TypeScript, and Tailwind CSS. The site is optimised for hosting on any static host, including GitHub Pages (a `public/CNAME` file is included for the custom domain `spinsalonbellandur`).

## Requirements

- Node.js 18 or newer (LTS recommended)
- npm 9+

## Install dependencies

```bash
npm install
```

## Run locally (development)

```bash
npm run dev
```

The dev server starts on <http://localhost:5173>. Hot Module Replacement is enabled, so edits to files inside `src/` are reflected immediately.

## Build for production

```bash
npm run build
```

This command outputs an optimised static bundle to `dist/`. The generated assets are ready to upload to any static host or CDN.

### Preview the production build locally

```bash
npm run preview
```

This serves the contents of `dist/` locally (still at port `5173` by default) so you can sanity-check the production bundle before deploying.

## Deployment notes

- **Static hosting** – Upload the `dist/` directory to the root of your static host. For example, with GitHub Pages you can enable Pages on the repository, point it to the `gh-pages` branch (containing the build output), or rely on an action that runs `npm run build` and publishes `dist/`.
- **Custom domain** – The file `public/CNAME` contains `spinsalonbellandur`. Vite copies this into `dist/CNAME` during build, ensuring GitHub Pages respects the custom domain automatically. Adjust this file if you change the domain.
- **Cache busting** – Vite generates hashed filenames, so redeploying after a new build safely invalidates previous assets.

## Project structure

```
├── public/          # Static assets copied as-is (includes CNAME)
├── src/             # React components, styles, and main entry
│   ├── App.tsx      # Homepage layout and content
│   └── index.css    # Tailwind directives + font import
├── tailwind.config.js
├── postcss.config.js
├── tsconfig*.json
└── vite.config.ts
```

## Useful scripts

- `npm run lint` – run ESLint (if additional rules are added)
- `npm run build` – create a production bundle in `dist/`
- `npm run preview` – preview the production build locally

## Updating content

The homepage copy lives entirely inside `src/App.tsx`. Tailwind utility classes provide all styling; no extra CSS files are necessary beyond `src/index.css`.
