# boarts-preview — STAGING

Staging preview for **The Bank of Arts™ (Bo Arts LLC)** website redesign.

> ⚠️ **This is a staging / work-in-progress preview, not the live production site.**
> Content is under review. Nothing here should be treated as final, published, or
> as an offer, solicitation, or regulatory representation. It is **not** connected
> to the live `thebankofarts.com` domain.

## Pages
- `index.html` — homepage
- `services.html` — full services page
- `about.html` — firm story, principles, leadership (neutral placeholder pending real profiles)
- `contact.html` — contact page with working form (see routing below)
- `disclosures.html` — conservative draft disclosures (pending legal review)
- `insights.html` — one signed insight article draft ("The Renaissance of Cultural Finance")
- `styles.css` — shared stylesheet for all pages

## Guardrails applied
- All pages carry a gold **PREVIEW** banner and `noindex, nofollow`.
- No invented names, credentials, partners, offices, deal history, or regulatory claims.
- Only the verified **New York** office is listed.
- Disclosures make **no** specific registration/licensing claims — pending counsel.
- Leadership and article byline use neutral copy; HTML source comments mark where
  verified names/bios go once supplied.

## Contact form routing — decision
The form uses a **no-backend `mailto:` fallback** for staging: on submit it opens the
visitor's email client pre-filled to `advisory@thebankofarts.com`. This works on static
GitHub Pages with no keys, no stored data, and no server.

**For production, choose one:**
1. **Form service (recommended, fastest)** — e.g. Formspree, Basin, or Netlify Forms.
   Point the form `action` at the endpoint; submissions arrive by email / dashboard.
2. **Serverless function** — a small Cloudflare/Vercel/Netlify function that validates
   input and sends via an email API (Postmark, SendGrid, Resend).
3. **Direct mailto (current)** — zero infrastructure, but depends on the visitor having
   a configured email client and exposes the address to scrapers.

Recommendation: option 1 for launch; revisit option 2 if volume or CRM integration grows.

## Live preview
Enable once: **Settings → Pages → Deploy from a branch → `main` / `/ (root)` → Save**.
Then: `https://ac558.github.io/boarts-preview/`

© 2026 Bo Arts LLC. Staging use only.
