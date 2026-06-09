# KCESAR Public Website

Informational/marketing site for King County Explorer Search & Rescue (ESAR).
Next.js 15 (App Router) + React 19 + TypeScript, styled with Tailwind CSS v4 and
daisyUI v5. Statically rendered; deployed as a Node standalone app to Azure App
Service, with per-PR preview deployments on Vercel.

## Package manager & runtime: Bun (NOT npm)

This project uses **Bun**. Do **not** assume npm / yarn / pnpm are installed.
The committed lockfile is `bun.lockb`.

| Task | Command |
|------|---------|
| Install deps | `bun install` (CI: `bun install --frozen-lockfile`) |
| Dev server | `bun run dev` |
| Production build | `bun run build` |
| Lint | `bun run lint` |
| Type check | `bun run typecheck` |
| Unit tests | `bun run test` (Bun's built-in runner; specs in `tests/unit/`) |
| E2E tests | `bun run test:e2e` (Playwright + Chromium; specs in `e2e/`) |

Use `bun` / `bun run <script>` for all local work, scripts, and GitHub Actions.
When adding a workflow or doc, target Bun (e.g. `oven-sh/setup-bun`), not
`actions/setup-node` + `npm install`.

> **Exception — do NOT change:** `.github/workflows/deploy-prod.yml` (the Azure
> production deploy) uses `npm install` on Node 20. That pipeline is owned/managed
> outside this repo's normal workflow — leave it exactly as-is; do not "migrate"
> it to Bun. Everything else — local dev, the `pr-checks` workflow, and Vercel —
> uses Bun.

## Testing

- **Unit:** Bun's built-in runner. Specs live in `tests/unit/`. Run with
  `bun run test` (scoped to `tests/unit` — do **not** run bare `bun test`, which
  would also try to execute the Playwright `e2e/*.spec.ts` files and fail).
- **E2E:** Playwright (Chromium only). Specs in `e2e/`, config in
  `playwright.config.ts`. Run with `bun run test:e2e`; it auto-starts the dev
  server via `webServer`. First run needs `bunx playwright install chromium`.
- Both run in CI via `.github/workflows/pr-checks.yml` (unit in the `checks`
  job, E2E in a dedicated `e2e` job).

## Config gotchas (don't relearn these)

- **`next.config.js` `distDir`** is `process.env.VERCEL ? '.next' : 'build'`.
  Vercel's Next.js builder only finds `routes-manifest.json` in the default
  `.next`; the Azure deploy zips from `build/standalone` + `build/static`. Keep
  it conditional — don't hardcode either value.
- **`output: 'standalone'`** exists for the Azure self-hosted deploy. Vercel
  ignores it; leave it.
- **daisyUI v5 button radius:** base `.btn` corner radius can be dropped under
  turbopack dev, so `app/globals.css` reasserts `--radius-field` and a
  `.btn:not(.btn-circle):not(.btn-square)` radius rule. Don't remove these.
