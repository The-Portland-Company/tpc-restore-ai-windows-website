# tpc-restore-ai-windows-website

Marketing site for **Restore AI Windows** (the macOS Claude Code / browser
session restorer), to be live at
**https://restoreaiwindows.theportlandcompany.com**.

Static site — vanilla HTML/CSS/JS, no build step. Dark + light themes
(`prefers-color-scheme` + a persisted manual toggle), modeled on the sibling
`tpc-claude-usage-trend-tracker-website` site.

## Layout
- `src/` — authored source (`index.html`, `main.js`, `styles.css`)
- `public/` — deploy root (mirrors `src/` plus `assets/`, `sitemap.xml`,
  `robots.txt`, `llms.txt`, `_headers`)
- `assets/app-icon.png` — real app icon, copied from
  `~/Sites/claude-session-restorer/assets/icon.png`
- `assets/screenshots/` — placeholder until product screenshots exist; the
  page falls back to a "coming soon" placeholder card if a file is missing.

## Download CTA
Links to the GitHub Releases page
(`https://github.com/s3w47m88/claude-session-restorer/releases/latest`) via
Cloudflare Pages redirects from `/releases/latest` — add a `_redirects` entry
or a real DMG asset before going live if a direct download is wanted instead
of bouncing through GitHub.

## Deploy
Direct upload to Cloudflare Pages (not git-connected):

```sh
npx wrangler pages deploy public --project-name restore-ai-windows-landing
```

The Cloudflare Pages **project** is named `restore-ai-windows-landing`,
mapped to the custom domain `restoreaiwindows.theportlandcompany.com`; this
git repo is `tpc-restore-ai-windows-website`.

A The Portland Company product.
