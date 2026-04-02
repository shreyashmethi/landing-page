# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

samā4 landing page — a waitlist/early-access page for a contextual news intelligence product. Deployed on **Vercel** as a static site with a serverless API function.

## Architecture

- **`index.html`** — Single-page static site (all HTML, CSS, and JS in one file). Contains two waitlist forms (hero + bottom CTA) that POST to the API endpoint.
- **`api/subscribe.js`** — Vercel serverless function (CommonJS). Receives an email, adds the contact to a Resend audience list, and sends a confirmation email via the Resend SDK.
- **`vercel.json`** — Rewrites `/api/*` routes to the serverless functions in `api/`.

## Key Details

- **Runtime**: Node.js (CommonJS modules, `"type": "commonjs"` in package.json)
- **Email service**: [Resend](https://resend.com) — requires `RESEND_API_KEY` environment variable set in Vercel
- **No build step**: The frontend is a plain HTML file with inline CSS/JS — no bundler, no framework
- **No tests**: No test suite is configured
- **Fonts**: Inter (sans) + JetBrains Mono (mono), loaded from Google Fonts
- **Design tokens**: CSS custom properties defined in `:root` (accent color `#e8d5a3`, dark background `#080808`)

## Development

```bash
# Install dependencies (needed for the serverless function)
npm install

# Local dev with Vercel CLI
vercel dev
```

The site runs at `localhost:3000`. The API endpoint is available at `/api/subscribe`.
