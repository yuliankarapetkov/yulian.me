# yulian.me

A personal website with selected projects, professional experience, and a few interests.

[Visit the website](https://yulian.me)

## Stack

- Next.js 16 with the App Router and React 19
- TypeScript
- Tailwind CSS 4
- GitHub Actions and GitHub Pages

## How it works

The site is rendered at build time and exported as static HTML, CSS, and JavaScript
to `out/`. Production hosting serves those files directly, without a backend or
running Node.js server.

Fonts are self-hosted with `next/font/local`. Project previews use responsive WebP
images, JPEG fallbacks, and lazy loading. Navigation uses native anchor links.

GitHub Actions runs lint, type checks, and the production build before deploying
the static export to GitHub Pages.

## Local development

Requires Node.js 24 and npm.

```sh
npm ci
npm run dev
```

Open [localhost:3000](http://localhost:3000).

## Checks and build

```sh
npm run lint
npm run typecheck
npm run build
```

The production build is generated in `out/`.

## Fonts

Manrope, DM Mono, and Caveat are distributed under the SIL Open Font License.
Their license files are included in `public/fonts/`.
