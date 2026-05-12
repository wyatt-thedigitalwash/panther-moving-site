# CLAUDE.md — Panther Moving Site

## Quick Reference

- **Stack**: Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, Resend
- **Dev**: `npm run dev` (port 3000)
- **Build**: `npm run build`
- **Lint**: `npm run lint`
- **Deploy target**: Vercel

## Project Structure

```
app/                    # Pages and API routes (App Router)
  api/contact/route.ts  # Quote request → sends 2 emails via Resend
  api/inventory/route.ts # Inventory form → sends 2 emails via Resend
  contact/page.tsx
  faq/page.tsx
  inventory/page.tsx
  services/page.tsx
  page.tsx              # Home page (includes JSON-LD schema)
  layout.tsx            # Root layout (fonts, metadata, Header/Footer)
  globals.css           # Tailwind v4 @theme inline + utility classes
components/             # Reusable UI components (PascalCase files)
lib/
  constants.ts          # SITE info, NAV_LINKS, form options
  validation.ts         # Form validation + phone formatting
public/assets/          # Images (WebP), logos (SVG), favicons
```

## Environment Variables

- `RESEND_API_KEY` — required for email functionality (set in `.env.local`)

## Conventions

### Imports
- Use `@/` path alias (maps to project root): `import { SITE } from "@/lib/constants"`

### Components
- Server components by default; add `"use client"` only when state/hooks/events are needed
- Component files are PascalCase (`QuoteForm.tsx`, `Header.tsx`)
- Page components use default exports

### Styling
- Tailwind v4 with theme defined in `globals.css` via `@theme inline`
- Custom utility classes: `.btn-gold`, `.btn-black`, `.btn-outline`, `.section-label`, `.section-heading`, `.form-input`, `.form-label`
- Brand colors: gold (`--color-gold`), black (`--color-black-*`), off-white (`--color-off-white`)
- Fonts: Oswald (headings), DM Sans (body) — loaded via `next/font/google` in layout.tsx

### Forms & API
- All API routes sanitize inputs (HTML escape) and use honeypot spam protection
- Quote form (step 1) → routes user to inventory form (step 2) with pre-filled URL params
- Both API routes send a business notification email + customer auto-reply via Resend
- Validation helpers live in `lib/validation.ts`

### Images
- Use `next/image` with explicit width/height or fill
- Hero images get `priority` prop
- Production images are WebP in `public/assets/`

## Do Not

- Do not push changes — the developer handles pushes manually
- Do not modify `.env.local` or commit secrets
- Do not add dependencies without discussing first
