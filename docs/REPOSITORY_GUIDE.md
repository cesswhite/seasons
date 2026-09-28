# Seasons repository guide

## Purpose and reading order

Seasons is a portfolio-template showcase built with Nuxt 3 and Nuxt UI 2. The home page selects Spring, Summer, Autumn or Winter; each preview renders shared portfolio data using its own layout. There are five page routes, not four: the selector plus four previews.

Start with the [README](../README.md), then follow the relevant entry below. Explain code with paths and symbols, in the user's language. A question about a component does not request an edit. No separate product-marketing context is checked in.

## Code map

| Entry | Responsibility |
| --- | --- |
| [app.vue](../app.vue) | Root `NuxtLayout`/`NuxtPage` shell and `useSeasonsSeo` invocation. |
| [app.config.ts](../app.config.ts) | `data`, `social` and `work` portfolio content; Nuxt UI primary/gray settings. |
| [pages/index.vue](../pages/index.vue) and [components/App/Seasons.vue](../components/App/Seasons.vue) | Four covers and `goToAndChangePrimaryColor`, which navigates and changes the UI primary color. |
| [pages/seasons/](../pages/seasons/) | `/seasons/spring`, `/summer`, `/autumn`, `/winter` under the `/seasons` prefix; each composes its matching container. |
| [layouts/preview.vue](../layouts/preview.vue) and [components/App/Navigation.vue](../components/App/Navigation.vue) | Preview navigation, back action and color-mode control. |
| [components/Spring/](../components/Spring/) | Profile, work list and selected/hovered work preview. |
| [components/Summer/](../components/Summer/), [components/Autumn/](../components/Autumn/) and [components/Winter/](../components/Winter/) | Theme-specific galleries, profile presentation and local interaction state. |
| [types/index.ts](../types/index.ts) | `MyInfo`, `SocialNetwork` and `WorkInfo` interfaces used by portfolio components. |
| [composables/useSeasonsSeo.ts](../composables/useSeasonsSeo.ts) | `PAGES` map, per-route metadata/canonical/social image and public schema. |
| [public/sitemap.xml](../public/sitemap.xml), [public/robots.txt](../public/robots.txt) and [public/llms.txt](../public/llms.txt) | Public route discovery, crawler policy and optional product context. |
| [nuxt.config.ts](../nuxt.config.ts) and [package.json](../package.json) | Modules, English document language, typed pages, dependency versions and scripts. |

## Data and navigation

`useAppConfig()` exposes one portfolio dataset to all previews. `components/App/Seasons.vue` sends the visitor to the chosen route and changes `app.ui.primary`. The Spring work list emits selection/hover events; the other themes manage gallery/modal state in their own components. Read the selected theme before assuming it behaves like another.

Content is edited in source. This is not a browser-based site builder and has no account, CMS, server API or database. `server/tsconfig.json` is configuration, not an implemented backend. Some portfolio images use external URLs; a local code inspection does not prove those hosts remain available.

## Commands and dependency policy

`package.json` declares pnpm `9.7.0`; `pnpm-lock.yaml` is the committed dependency lock. Install with `pnpm install --frozen-lockfile`. Bun is used below to run scripts without replacing that lockfile.

| Command | Exact package script |
| --- | --- |
| `bun run dev` | `nuxt dev` |
| `bun run build` | `nuxt build` |
| `bun run preview` | `nuxt preview` |
| `bun run generate` | `nuxt generate` |
| `bun run postinstall` | `nuxt prepare` |

There are no package scripts named `test`, `lint` or `typecheck`, and no checked-in GitHub Actions workflows. TypeScript and `vue-tsc` are development dependencies; `bunx nuxt typecheck` is a direct tool command, not a package script. Documentation-only changes need link/script/diff inspection, not a new build or dependency installation. For application changes choose checks relevant to the changed route and report what actually ran.

## Configuration, SEO and limits

No application-specific environment variables are referenced by the current source. Portfolio and theme configuration live in `app.config.ts`, not `.env`. Keep any future documentation limited to variable names and purpose, never secrets or account identifiers.

`useSeasonsSeo` recognizes only `/` and the four `/seasons/*` previews. It normalizes trailing slashes, uses the canonical origin `https://seasons.ecostudios.dev`, selects the corresponding public season image and withholds public schema on unknown routes. Keep that map and the static sitemap consistent when adding a real public page. Do not infer that a route is indexable merely because Nuxt can render it.

`llms.txt` describes the existing public showcase for compatible readers. It is optional context, not a guarantee of indexing, rankings or AI citations. README speed figures describe a historical listing and are not a current performance measurement. This guide does not certify external assets, a production deployment or every visual interaction. Preserve existing visible copy and layout during documentation/SEO tasks.

## Four example questions

- **Where do I change the portfolio profile and work items?** Read `app.config.ts`, `types/index.ts` and the chosen theme's profile/gallery component.
- **How does choosing Winter change the route and color?** Follow `goToAndChangePrimaryColor` in `components/App/Seasons.vue`, then `pages/seasons/winter.vue` and `layouts/preview.vue`.
- **How does the Spring work preview respond to hover?** Trace `components/Spring/WorkList.vue`, `Container.vue` and `Preview.vue`; identify emitted events and selected props.
- **Where does a preview's canonical and share image come from?** Follow `PAGES` and `useSeasonsSeo` in `composables/useSeasonsSeo.ts`, then compare `public/sitemap.xml`.
