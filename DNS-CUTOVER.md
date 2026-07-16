# Athoth.com DNS Cutover to GitHub Pages

**Prepared for:** Athoth Innovations

**Prepared by:** Manus AI

**Date:** July 15, 2026

The Athoth website is built and deployed from the public [`jessiew1/athoth-website`](https://github.com/jessiew1/athoth-website) repository. GitHub Pages reports a successful build from the `gh-pages` branch, and the repository's custom domain is already set to **`athoth.com`**. The remaining cutover is limited to the two existing Squarespace DNS records that currently direct web traffic to `199.36.158.100`.

> **Do not edit or delete any MX, SPF, DKIM, Apple verification, or GitHub verification record.** Those records support email delivery, sender authentication, and domain ownership rather than website hosting.

## Exact Squarespace changes

Open the [Squarespace domains dashboard](https://account.squarespace.com/domains), select **athoth.com**, and open **DNS**. Squarespace permits editing an existing record with the pencil icon and adding a record under **Custom records**.[1]

First, remove the two obsolete website records shown in the supplied DNS screenshot.

| Action | Type | Name | Current data | Reason |
|---|---|---|---|---|
| Delete | A | `@` | `199.36.158.100` | Replaced by GitHub Pages apex records |
| Delete | A | `www` | `199.36.158.100` | A `www` record conflicts with the required CNAME |

Then add these five records exactly. GitHub currently publishes four IPv4 addresses for an apex-domain configuration and requires the `www` CNAME to point directly to the account's default Pages domain, without the repository name.[2]

| Type | Name | Priority | TTL | Data |
|---|---|---:|---|---|
| A | `@` | N/A | 30 minutes if available; otherwise 4 hours | `185.199.108.153` |
| A | `@` | N/A | 30 minutes if available; otherwise 4 hours | `185.199.109.153` |
| A | `@` | N/A | 30 minutes if available; otherwise 4 hours | `185.199.110.153` |
| A | `@` | N/A | 30 minutes if available; otherwise 4 hours | `185.199.111.153` |
| CNAME | `www` | N/A | 30 minutes if available; otherwise 4 hours | `jessiew1.github.io` |

Because **`athoth.com`** is the configured GitHub Pages domain, GitHub will automatically redirect **`www.athoth.com`** to **`athoth.com`** after both DNS variants resolve correctly.[2] Do not enter `jessiew1.github.io/athoth-website`, a URL scheme, or a trailing path in the CNAME field.

## Records to preserve

The following records visible in the supplied Squarespace screenshot are unrelated to the web-hosting cutover and should remain unchanged.

| Visible record | Purpose | Required action |
|---|---|---|
| MX `@` → `mx01.mail.icloud.com` | iCloud Mail delivery | Keep unchanged |
| MX `@` → `mx02.mail.icloud.com` | iCloud Mail delivery | Keep unchanged |
| TXT `google._domainkey` | Google DKIM authentication | Keep unchanged |
| CNAME `sig1._domainkey` | iCloud DKIM authentication | Keep unchanged |
| TXT `_github-pages-challenge-…` | GitHub domain verification | Keep unchanged |
| TXT `@` beginning `v=spf1` | Email sender authorization | Keep unchanged |
| TXT `@` beginning `apple-domain=` | Apple domain verification | Keep unchanged |
| TXT `_acme-challenge.www…` | Existing certificate-validation record | Leave in place during cutover; review only after HTTPS is active |

## Verification after saving

DNS updates can take time to propagate. GitHub advises allowing up to 24 hours, while Squarespace notes that some DNS changes can take 24–48 hours.[1] [2] During propagation, visitors may reach either the previous host or GitHub Pages depending on resolver caching.

Confirm that the apex domain returns all four GitHub Pages addresses and that `www` returns the GitHub CNAME:

```bash
dig athoth.com A +short
dig www.athoth.com CNAME +short
```

The expected apex results are `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, and `185.199.111.153`. The expected `www` result is `jessiew1.github.io.`. Then open the repository's [Pages settings](https://github.com/jessiew1/athoth-website/settings/pages). Once GitHub reports a successful DNS check and the certificate is ready, enable **Enforce HTTPS**. GitHub notes that HTTPS availability can take up to 24 hours after a custom-domain change.[2]

Verify these browser addresses after HTTPS is enabled:

| Address | Expected behavior |
|---|---|
| `https://athoth.com/` | Loads the Athoth Innovations home page from GitHub Pages |
| `https://www.athoth.com/` | Redirects to `https://athoth.com/` |
| `https://athoth.com/about` | Loads the About page through the Pages route fallback |
| `https://athoth.com/projects` | Loads the Projects page through the Pages route fallback |
| `https://athoth.com/assets/documents/athoth-capability-statement.pdf` | Opens the capability statement |

## Rollback

If a critical issue occurs before the GitHub certificate and site are verified, remove the four GitHub apex A records and the `www` CNAME, then restore the two previous records: A `@` → `199.36.158.100` and A `www` → `199.36.158.100`. Do not alter any email or verification records during rollback.

## Deployment handoff

| Item | Location or status |
|---|---|
| Public source repository | [`jessiew1/athoth-website`](https://github.com/jessiew1/athoth-website) |
| Source branch | `main` |
| Published branch | `gh-pages` |
| Pages build | Successful |
| Custom domain | `athoth.com` |
| Current publication method | GitHub Pages deploys automatically whenever the built site is pushed to `gh-pages` |
| Full source-build workflow template | `deployment/deploy-pages.yml` in the repository |

The prepared workflow template cannot be placed in `.github/workflows/` by the currently connected GitHub App because GitHub reserves workflow-file changes for credentials with workflow-management permission. To enable fully automatic **source-to-production** builds, a repository administrator can copy `deployment/deploy-pages.yml` to `.github/workflows/deploy-pages.yml` in GitHub's web editor. Until then, the existing branch-based Pages deployment remains active and the repository README documents the validated local build-and-publish process.

## References

[1]: https://support.squarespace.com/hc/en-us/articles/360002101888-Edit-your-domain-s-DNS-records "Squarespace — Edit your domain's DNS records"

[2]: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site "GitHub Docs — Managing a custom domain for your GitHub Pages site"

[3]: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages "GitHub Docs — About custom domains and GitHub Pages"
