# boarts-preview - STAGING

Staging preview for **The Bank of Arts (Bo Arts LLC)** website redesign.

> This is a staging / work-in-progress preview, not the live production site.
> Content is under review. Nothing here should be treated as final, published,
> or as an offer, solicitation, or regulatory representation. It is not connected
> to any live domain.

## Pages
- `index.html` - homepage
- `services.html` - full services page
- `about.html` - firm story, principles, and leadership positioning
- `contact.html` - contact page with working form fallback
- `disclosures.html` - conservative disclosures
- `insights.html` - insight index
- `styles.css` / `app.js` - shared design system and interactions

## Guardrails applied
- All pages carry a preview banner and `noindex, nofollow`.
- No invented names, credentials, partners, offices, deal history, or regulatory claims.
- Only the verified New York office is listed.
- Disclosures make no specific registration/licensing claims.
- No DNS, registrar, or live-domain connection; no API keys in code, config, or history.

## Contact form routing
The form uses a no-backend `mailto:` fallback for staging: on submit it opens the
visitor's email client pre-filled to `partners@tboarts.com`. This works on static
GitHub Pages with no keys, no stored data, and no server.

For production, choose one:
1. Form service, such as Formspree, Basin, or Netlify Forms.
2. Serverless function that validates input and sends via an email API.
3. Direct mailto, which is the current zero-infrastructure fallback.

## Live preview
Enable only when approved: Settings -> Pages -> Deploy from a branch -> `main` / `/ (root)` -> Save.
Then: `https://ac558.github.io/boarts-preview/`

(c) 2026 Bo Arts LLC. Staging use only.
