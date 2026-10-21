# Antoinette Gardens and Guest House Services — Landing Page

A bespoke, single-page responsive landing page for **Antoinette Gardens and Guest House Services**, Port Harcourt, Nigeria. Designed with high fidelity to the "Drizzle" culinary editorial reference: warm cream canvas, deep espresso typography, terracotta accents, fanned polaroid gallery cards, and optimized for Nigerian mobile connections.

---

## 1. Quick Start

Since this project uses plain HTML, CSS, and modern JavaScript with zero build steps or npm installations, you can run and preview it immediately:

- **Option A (VS Code / Antigravity IDE):** Right-click `index.html` and click **"Open with Live Server"**.
- **Option B (Python local server):**
  ```bash
  python -m http.server 8000
  ```
  Open `http://localhost:8000` in your web browser.

---

## 2. Table of `<!-- EDIT: ... -->` Markers

All business details are stored directly in semantic HTML for SEO and ease of editing. Search `index.html` for `<!-- EDIT:` to customize:

| Marker | Location in `index.html` | Purpose & Instructions |
| :--- | :--- | :--- |
| `<!-- EDIT: Business Name & Meta Description -->` | Line ~5 | Page `<title>` and `<meta name="description">` tags. |
| `<!-- EDIT: Replace with custom logo SVG -->` | Line ~85, ~120, ~610 | Swap the logo placeholder or insert your permanent brand logo. |
| `<!-- EDIT: WhatsApp Phone link -->` | Line ~138, ~240, ~465 | Update WhatsApp phone numbers and pre-filled order messages. |
| `<!-- EDIT: About Story -->` | Line ~195 | About Antoinette Gardens story, proprietors, and culinary philosophy. |
| `<!-- EDIT: Testimonial 1 -->` | Line ~405 | First customer review quote and reviewer name / location. |
| `<!-- EDIT: Testimonial 2 -->` | Line ~422 | Second customer review quote (dark contrast card) and reviewer. |
| `<!-- EDIT: Testimonial 3 -->` | Line ~439 | Third customer review quote and reviewer name / location. |
| `<!-- EDIT: Address -->` | Line ~515 | Physical address, landmarks, and Plus Code for directions. |
| `<!-- EDIT: Phone lines -->` | Line ~530 | Primary phone line and WhatsApp order numbers. |
| `<!-- EDIT: Operating Hours -->` | Line ~545 | Weekly opening and closing hours. |
| `<!-- TODO: connect to a form service -->` | Line ~475 | Connect the reservation form to Formspree, Basin, or your custom API. |

---

## 3. Design Tokens in `css/style.css`

All styling parameters are controlled in `:root` at the top of `css/style.css`:

| CSS Custom Property | Default Hex / Value | Description |
| :--- | :--- | :--- |
| `--color-bg` | `#FAF7F2` | Warm cream primary canvas background |
| `--color-surface` | `#F3EFE6` | Card background tint & subtle surfaces |
| `--color-surface-white` | `#FFFFFF` | Clean white for polaroid frames & contrast cards |
| `--color-surface-dark` | `#1A110D` | Deep roasted espresso for footer & dark review card |
| `--color-text-main` | `#1A110D` | Primary heading and high-contrast text |
| `--color-text-muted` | `#5C4F46` | Warm secondary body copy (Contrast 8.2:1) |
| `--color-text-subtle` | `#7A6C62` | Subtle captions, dates, and helpers (Contrast 4.6:1) |
| `--color-primary` | `#9E382B` | Signature terracotta accent button color |
| `--color-primary-hover` | `#822C20` | Darkened terracotta hover state |
| `--color-border` | `#E4DDD3` | Pill badges, dividers, and card outlines |
| `--color-gold` | `#D4A359` | Review star ratings gold accent |
| `--font-display` | `'Fraunces', Georgia, serif` | High-contrast editorial display serif font |
| `--font-sans` | `'Plus Jakarta Sans', sans-serif` | Clean geometric body and UI sans-serif font |
| `--radius-pill` | `9999px` | Pill badge and button corner radius |
| `--radius-lg` | `28px` | Hero image and large card border radius |

---

## 4. How to Swap the Logo

The website uses a dedicated SVG logo placeholder located at:
```
assets/svg/logo-placeholder.svg
```
To swap the logo across the entire site in one single edit:
1. Replace `assets/svg/logo-placeholder.svg` with your permanent SVG or transparent PNG logo.
2. Ensure your logo maintains a roughly `5:1` or `4:1` aspect ratio (e.g. `240x48px` or `320x64px`).
3. If using a PNG instead of SVG, update the `<img src="assets/svg/logo-placeholder.svg">` references in `index.html` to point to `assets/img/your-logo.png`.

---

## 5. How to Deploy on GitHub Pages

1. **Commit and Push:**
   ```bash
   git add .
   git commit -m "feat: complete Antoinette Gardens responsive landing page"
   git push origin main
   ```
2. **Enable GitHub Pages:**
   - Go to your repository on GitHub: `https://github.com/your-username/antoette-garndens`.
   - Click **Settings** &rarr; **Pages** (in the left sidebar).
   - Under **Build and deployment > Source**, select **Deploy from a branch**.
   - Under **Branch**, choose `main` (or `master`) and folder `/(root)`.
   - Click **Save**.
3. **Live URL:**
   - Your site will be published at `https://your-username.github.io/antoette-garndens/`.
   - The `.nojekyll` file included in this repository ensures that all static assets and subfolders load correctly.

---

## 6. How to Add a Custom Domain

1. In your domain registrar (e.g., Namecheap, GoDaddy, Whogohost), create the following DNS records:
   - **For apex domain (`antoinettegardens.ng`):**
     - Type: `A` | Host: `@` | Values:
       - `185.199.108.153`
       - `185.199.109.153`
       - `185.199.110.153`
       - `185.199.111.153`
   - **For `www` subdomain (`www.antoinettegardens.ng`):**
     - Type: `CNAME` | Host: `www` | Value: `your-username.github.io`
2. In GitHub repository **Settings > Pages > Custom domain**, enter your domain name (e.g. `www.antoinettegardens.com.ng`) and click **Save**.
3. Check **Enforce HTTPS** once the SSL certificate finishes provisioning.
4. Update the `<link rel="canonical">` and `sitemap.xml` with your live custom domain URL.
