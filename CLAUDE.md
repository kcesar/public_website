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

Use `bun` / `bun run <script>` for all local work, scripts, and GitHub Actions.
When adding a workflow or doc, target Bun (e.g. `oven-sh/setup-bun`), not
`actions/setup-node` + `npm install`.

> **Known holdout:** `.github/workflows/deploy-prod.yml` (the Azure production
> deploy) still uses `npm install` on Node 20. That is the one place still on
> npm and is slated to migrate to Bun. Everything else — local dev, the
> `pr-checks` workflow, and Vercel — uses Bun.

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
