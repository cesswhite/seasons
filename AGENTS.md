# Working in Seasons

Seasons is a Nuxt 3 / Nuxt UI 2 portfolio-template showcase: one selector and four seasonal previews.

- Read [README.md](README.md), then [docs/REPOSITORY_GUIDE.md](docs/REPOSITORY_GUIDE.md). Open only the routes, components and configuration needed for the question; do not load every theme by default.
- Code questions ask for explanations, not edits. Answer in the user's language, citing paths and symbols. Distinguish source behavior from deployment observations.
- Portfolio content comes from `app.config.ts`; routing and color selection start in `components/App/Seasons.vue`. There is no CMS, account system or database in this repository.
- Preserve visible copy, layouts and interactions unless the request includes changing them. Do not turn documentation or SEO work into a UI migration.
- Keep `pnpm-lock.yaml` and the declared pnpm version. Bun can run the existing scripts; do not create a second lockfile or invent test/lint scripts.
- Keep the five public routes in `composables/useSeasonsSeo.ts` aligned with `public/sitemap.xml`. Public `llms.txt` contains product facts and public links, not internal instructions.
- No application environment variables are currently required by the source. Never add credential values or private account data to documentation.

## Documentation upkeep

When commands, routes, storage or important flows change, update the affected section of `docs/REPOSITORY_GUIDE.md` in the same change. Keep this entry short and the Claude/Gemini wrappers importing it.
