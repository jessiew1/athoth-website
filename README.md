# Athoth Innovations Website

The public website for **Athoth Innovations**, a human-centered applied AI research and systems company. The site presents the organization’s research, capabilities, projects, government work, leadership team, and contact information.

## Technology

| Area | Implementation |
|---|---|
| Frontend | React 19 and TypeScript |
| Styling | Tailwind CSS 4 with project-specific CSS |
| Routing | Wouter client-side routing |
| Build system | Vite 7 |
| Package manager | pnpm 10 |
| Hosting | GitHub Pages |
| Production domain | `https://athoth.com` |

The repository is self-contained. Production images, portraits, brand artwork, and the capability statement are versioned under `client/public/assets/`; the deployed site does not depend on externally hosted page-builder assets or runtime services.

## Local Development

Node.js 22 and pnpm 10 are recommended.

```bash
pnpm install
pnpm dev
```

Vite prints the local development address after startup. The following commands validate the application before a change is submitted:

| Command | Purpose |
|---|---|
| `pnpm check` | Run TypeScript validation without emitting files |
| `pnpm build` | Generate the production site in `dist/` |
| `pnpm preview` | Serve the generated production build locally |
| `pnpm format` | Apply the repository’s Prettier formatting rules |

## Repository Structure

| Path | Purpose |
|---|---|
| `client/src/pages/` | Home and content pages |
| `client/src/components/` | Shared layout and interface components |
| `client/src/index.css` | Global tokens, typography, layout, and motion |
| `client/src/review.css` | Final visual refinements |
| `client/public/assets/` | Portable production images and documents |
| `client/public/404.html` | GitHub Pages fallback for client-side routes |
| `client/public/CNAME` | Custom-domain declaration for `athoth.com` |
| `deployment/deploy-pages.yml` | Ready-to-enable automated GitHub Pages build and deployment template |

## Deployment

The initial production site is published from the root of the `gh-pages` branch. This branch contains the validated Vite output from `dist/`, including the custom-domain and client-side routing files. GitHub Pages automatically republishes when that branch is updated.

The repository also includes `deployment/deploy-pages.yml`, a ready-to-enable GitHub Actions workflow that installs locked dependencies, type-checks the application, builds the site, and deploys the artifact after every push to `main`. The connected GitHub App used for the initial migration can administer repositories but GitHub does not permit it to create files under `.github/workflows` without a separate workflow-management permission. To enable source-build automation, copy the template to `.github/workflows/deploy-pages.yml` from a GitHub session authorized to manage workflows, then change **Settings → Pages → Build and deployment → Source** to **GitHub Actions**.

The custom domain is versioned in `client/public/CNAME`, so Vite copies it into every deployment artifact. Do not delete or rename that file while `athoth.com` is the production domain.

## DNS Configuration

The domain’s DNS is managed in Squarespace. The intended canonical address is `athoth.com`; `www.athoth.com` should resolve to the GitHub Pages account domain and redirect to the canonical address.

| Host | Type | Value |
|---|---|---|
| `@` | A | `185.199.108.153` |
| `@` | A | `185.199.109.153` |
| `@` | A | `185.199.110.153` |
| `@` | A | `185.199.111.153` |
| `www` | CNAME | `jessiew1.github.io` |

Remove conflicting A, AAAA, ALIAS, or CNAME records for the same `@` and `www` hosts before cutover. Other DNS records, especially MX and TXT records used for email or verification, should remain unchanged. After GitHub recognizes the DNS configuration and issues the certificate, enable **Enforce HTTPS** in **Settings → Pages**.

## Content and Asset Updates

Page copy is primarily located in `client/src/pages/Home.tsx` and `client/src/pages/ContentPages.tsx`. Shared navigation, footer, logo, and capability-statement links are located in `client/src/components/SiteLayout.tsx`.

Store new production media in an appropriate subdirectory under `client/public/assets/` and reference it with a root-relative path such as `/assets/projects/example.webp`. Run `pnpm check` and `pnpm build` before pushing changes to `main`. Until the Actions workflow is enabled, publish the resulting `dist/` directory to the `gh-pages` branch after validating it locally.

## License

The project is maintained for Athoth Innovations. Unless Athoth Innovations states otherwise, website copy, brand artwork, portraits, and other media remain proprietary and are not granted for reuse by the source-code license declaration.
