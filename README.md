# yulian.me

Personal website built with Next.js App Router, React, TypeScript, and Tailwind CSS v4.

## Development

Use Node.js 24 LTS and npm.

```sh
npm ci
npm run dev
```

Open http://localhost:3000. Edit `src/app/page.tsx` to update the homepage.

## Checks and build

```sh
npm run typecheck
npm run build
```

ESLint is available with `npm run lint`.

The build exports the site to `out/`. All pages render at build time; production
hosting only needs to serve these static files. There are no server functions or
production Node.js process. `next start` is not used for static exports.

To inspect the exported site with Python installed:

```sh
python3 -m http.server 3000 --directory out
```

## Project structure

- `src/app/page.tsx` — homepage, with a minimal starting layout.
- `src/app/layout.tsx` — document layout and page metadata.
- `src/app/globals.css` — Tailwind import and shared design tokens.
- `src/app/icon.svg` — site icon.
- `public/` — static assets, available from the site root.
- `next.config.ts` — static export configuration.
- `postcss.config.mjs` — Tailwind's PostCSS integration.

Tailwind v4 uses CSS-first configuration in `globals.css`; a `tailwind.config.js`
file is not needed. Initial fonts use the system stack, so builds do not download
external fonts. Development and production builds use Webpack.

## Static hosting

`output: "export"` generates HTML/CSS/JS in `out/`. `trailingSlash: true` exports
directory-style routes for static hosts. Next.js image optimization is disabled
because its default optimizer needs a server; use appropriately sized image files.

For Vercel, import this repository, retain the Next.js framework preset, and use
`npm run build`. Vercel supports the configured static export. Connect `yulian.me`
in the project's domain settings when ready.

The same `out/` directory can be hosted on GitHub Pages or Cloudflare Pages.
GitHub Pages requires a deployment workflow; a repository-path URL also requires
a matching Next.js `basePath`. A custom root domain such as `yulian.me` does not.
