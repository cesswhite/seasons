![cover-seasons-background](https://res.cloudinary.com/dpvsklksg/image/upload/v1723249159/Captura_de_pantalla_2024-08-09_a_la_s_6.13.28_p.m._sma2ed.png)

# Seasons |  Minimal Templates

[Repository guide](docs/REPOSITORY_GUIDE.md): code map, data flow, scripts and limits.
[AGENTS.md](AGENTS.md) provides concise instructions for coding assistants.

Look at [Nuxt docs](https://nuxt.com/docs/getting-started/introduction) and [Nuxt UI docs](https://ui.nuxt.com) to learn more.

- [Demo here](https://seasons.ecostudios.dev/)

## About

Minimal and versatile 4-in-1 template that captures the vibrant essence of each season with its unique and colorful designs.

Perfect for freelancers, artists, and photographers looking to showcase a visually striking portfolio, this template blends aesthetics with functionality. Its intuitive interface allows users to create and customize their websites effortlessly.

Made with ❤️ by [Eco Development Studios](https://www.ecostudios.dev/)
- **Pages:** 5 (selector + 4 seasonal previews)
- **Sections:** 4
- **Components:** ~25

## Features

- 💚 [Nuxt 3](https://nuxt.com/) - Open source framework that makes web development intuitive and powerful.
- 🎛 [Nuxt UI](https://ui.nuxt.com/) - A UI Library for Modern Web Apps.
- 🏞️ [Nuxt Image](https://image.nuxt.com/) - Plug-and-play image optimization for Nuxt apps.
- 🎨 [TailwindCSS](https://tailwindcss.com/) - A utility-first CSS framework packed with classes.
- 😀 [Heroicons](https://github.com/simple-icons/simple-icons) - Integration with Heroicons.
- ⚡️ [Vite](https://vitejs.dev/) - Powered by Vite, instant HMR.
- 🦾 `<script setup lang="ts">` syntax with TypeScript support.

## Specifications

- **Price:** Free
- **Released date:** 07/08/24
- **Version:** 0.1
- **Tech Stack:** Nuxt 3, Nuxt UI & TailwindCSS
- **Category:** SaaS
- **Page Speed:** 90 / 100 / 100 / 90 (historical listing; not a current measurement)
- **Compatibility:** Chrome, Firefox, Safari, Brave, Arc, Edge

## Folder and Component Structure

`app.vue` provides the page/layout shell. `pages/index.vue` shows the selector, and
`pages/seasons/` composes the four previews from `components/Spring/`, `Summer/`,
`Autumn/` and `Winter/`. Portfolio content lives in `app.config.ts`.

See the [repository guide](docs/REPOSITORY_GUIDE.md) for navigation, galleries and SEO ownership.

## Setup

Use the declared pnpm 9.7.0 version and committed `pnpm-lock.yaml` for installation.
Bun can run the existing scripts without replacing the dependency lock.

```bash
pnpm install --frozen-lockfile
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
bun run dev
```

## Production

Build the application for production:

```bash
bun run build
```

Locally preview production build:

```bash
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
