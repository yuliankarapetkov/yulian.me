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

Run ESLint with `npm run lint`.

The build exports the site to `out/`. All pages render at build time; production
hosting only needs to serve these static files. There are no server functions or
production Node.js process. `next start` is not used for static exports.

To inspect the exported site with Python installed:

```sh
python3 -m http.server 3000 --directory out
```

## Project structure

- `src/app/page.tsx` — complete portfolio homepage and content.
- `src/app/layout.tsx` — document layout and page metadata.
- `src/app/globals.css` — Tailwind import and shared design tokens.
- `src/app/icon.svg` — site icon.
- `public/` — static assets, available from the site root.
- `next.config.ts` — static export configuration.
- `postcss.config.mjs` — Tailwind's PostCSS integration.

Tailwind v4 uses CSS-first configuration in `globals.css`; a `tailwind.config.js`
file is not needed. Manrope, DM Mono, and Caveat use losslessly compressed WOFF2 files through
`next/font/local`, so builds do not download external fonts. Only used weights
are included; the original glyphs and metrics are preserved. Development and production builds use Webpack.

## Static hosting

`output: "export"` generates HTML/CSS/JS in `out/`. `trailingSlash: true` exports
directory-style routes for static hosts. Next.js image optimization is disabled
because its default optimizer needs a server. Project screenshots use native
`picture`/`img` elements with pre-generated responsive WebP images, JPEG fallbacks,
explicit dimensions, lazy loading, and asynchronous decoding. This avoids adding
the Next.js Image client component to an otherwise static page.

For Vercel, import this repository, retain the Next.js framework preset, and use
`npm run build`. Vercel supports the configured static export. Connect `yulian.me`
in the project's domain settings when ready.

The same `out/` directory can be hosted on GitHub Pages or Cloudflare Pages.
GitHub Pages requires a deployment workflow; a repository-path URL also requires
a matching Next.js `basePath`. A custom root domain such as `yulian.me` does not.

## Portfolio content and assets

The homepage includes selected work, an experience timeline, working principles,
personal interests, and contact links. Work history and profile links are based
on the supplied CV. The CV is available on request through a prefilled email; no CV PDF is published.
Update the project and experience data in `src/app/page.tsx`.

`src/components/project-previews.tsx` displays screenshots captured from the public
[Peterson Academy](https://petersonacademy.com/) and
[PlayPilot](https://www.playpilot.com/us/) websites on 16 October 2026. The images are
stored locally in `public/images/`. They show the current public websites and may
differ from the versions that existed during the listed employment dates.

CouchTalk is an ongoing personal project. Its screenshot was captured from
the local English homepage preview on 16 October 2026 and uses the same responsive
image pipeline. No public project URL is available yet.

Fonts are from Google Fonts and distributed under the SIL Open Font License;
license files are included in `public/fonts/`. All imagery and fonts are served
locally. Navigation uses native anchor links, and animations respect the
visitor’s reduced-motion preference.

Contact links use a dedicated email alias.

There are no application client components, JavaScript event handlers, polling,
third-party scripts, or continuous animations. Links and navigation work without
JavaScript; Next.js still supplies its framework runtime. Keep performance
measurements separate from development-mode tooling and hot reload.
