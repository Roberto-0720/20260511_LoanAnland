# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## Dự án: LoanAnLand — Website Bất Động Sản

Website cho agent bất động sản Đỗ Thị Loan (Nam Loan), chuyên khu **Anland Nam Cường** & **The Charm An Hưng**, Hà Đông, Hà Nội.

**Thông tin liên hệ cố định:**
- SĐT / Zalo: `0389980626` → link `https://zalo.me/0389980626`, tel `tel:0389980626`
- Facebook: `https://www.facebook.com/loan.nam.3/`

---

## Commands

The Next.js project lives in the `loananland/` subdirectory. Run all commands from there:

```bash
cd loananland
npm run dev      # Start dev server at http://localhost:3000
npm run build    # Production build (also validates TypeScript)
npm run lint     # ESLint check
npm run start    # Serve production build locally
```

No test framework is configured.

---

## Architecture

### Data flow
Property data is fully static: `src/data/properties.json` → imported directly in page components → passed as props to client components. There is no API layer or database. To add/update listings, edit the JSON file.

All TypeScript types (`Property`, `PropertyType`, etc.) and formatting helpers (`formatPrice`, `formatArea`, `getFurnishedLabel`, `getStatusInfo`, `getZaloLink`) are exported from `src/lib/utils.ts`. Always import from there — don't redeclare types inline.

### Server / Client component split
- `app/page.tsx` — server component; composes home sections (all sections are server-safe)
- `app/listings/page.tsx` — **`"use client"`** because it uses `useSearchParams` for filter state; wrapped in `<Suspense>` to satisfy Next.js App Router requirements
- `app/listings/[id]/page.tsx` — server component; handles `generateStaticParams` + `generateMetadata`, fetches the property from JSON, then renders `PropertyDetail.tsx`
- `app/listings/[id]/PropertyDetail.tsx` — **`"use client"`** for the image carousel state

When adding new pages: keep data fetching and `generateMetadata` in the server `page.tsx`; push interactive state to a separate `"use client"` child component.

### Scroll animations
`ScrollAnimation` (`src/components/ui/ScrollAnimation.tsx`) uses the native **IntersectionObserver API**, not Framer Motion. Framer Motion is installed but currently unused — prefer `ScrollAnimation` for scroll-triggered entrance effects to keep consistency. Use `delay` prop (in seconds) to stagger children: `0.1`, `0.2`, `0.3`.

### Styling system
Tailwind is extended with custom color tokens in `tailwind.config.ts` that map to CSS variables in `globals.css`:

| Tailwind class | CSS variable | Value |
|---|---|---|
| `bg-primary` / `text-primary` | `--color-primary` | `#1B2A4A` (Navy) |
| `bg-accent` / `text-accent` | `--color-accent` | `#B87333` (Rose Gold) |
| `bg-background` | `--color-bg` | `#F8F7F4` |
| `text-muted` | `--color-muted` | `#6B7280` |

Reusable component classes are defined in `globals.css` `@layer components` — use these instead of inline Tailwind: `.btn-primary`, `.btn-accent`, `.btn-outline`, `.section-container`, `.section-padding`, `.card-hover`, `.glass-card`.

### Images
- `public/images/logo.png`, `agent-photo.png`, `license.jpg` — referenced in `<Image>` as `/images/filename`
- `public/images/properties/prop-XXX-N.jpg` — property photos; filenames referenced in `properties.json` `images` array (just the filename, not the path)

### Forms
Contact/lead forms use **Formspree** (no backend needed). The Formspree endpoint URL must be set in the form `action` attribute. Currently not fully wired up.

---

## Key rules

- **All UI text in Vietnamese** with full diacritics (tiếng Việt có dấu)
- **Prices**: format via `formatPrice()` from `utils.ts` → outputs `"5,7 tỷ"` (sale) or `"12 triệu/tháng"` (rent)
- **Mobile-first**: touch targets ≥ 44×44px; the sticky Zalo button (`ZaloButton.tsx`) must remain on all pages (it's in `RootLayout`)
- **Property `status`**: `"available"` | `"deposited"` | `"sold"` — cards with non-available status should still render but show a status badge
- OG metadata for property detail pages is generated dynamically in `generateMetadata()` in `[id]/page.tsx`

---

## Brand design tokens

```
Primary (Navy):    #1B2A4A / primary.light #2A3D66
Accent (Rose Gold): #B87333 / accent.light #D4945A
Background:        #F8F7F4
Font:              'Be Vietnam Pro', 'Inter', sans-serif (Google Fonts, already imported in globals.css)
```

Slogan: **"Chuyên tâm từng căn — An cư vững bước"**

---

## Adding a new property

1. Copy images to `loananland/public/images/properties/` (naming: `prop-XXX-N.jpg`)
2. Add an entry to `loananland/src/data/properties.json` following the existing schema
3. Set `"featured": true` to include it on the homepage; `"status": "available"` to make it filterable

Property `id` convention: `anland-NNN` or `charm-NNN`.
