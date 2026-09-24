# Gatronova Brand for Web Apps

Read this when building a website, web app, landing page, dashboard UI, React/Vue/Svelte component, HTML artifact, email template, or any browser-rendered surface for Gatronova. The core spec in `SKILL.md` (hues, motif, layout philosophy, title case) still applies. This file covers what changes on the web.

## Reference page

`demo.html` at the skill root is a complete page built only from `tokens.css`: nav with flag underline, 62/38 hero with layered flag art, `.gn-dark` stats band, uneven card grid with a callout, form and table, palette strip, dark footer. Match its patterns before inventing new ones.

## Ship the tokens, not hex strings

Copy `assets/tokens.css` into the project and import it once at the root. Every component reads `var(--gn-*)`. Never paste raw hex into component styles. One edit then updates the whole app, dark sections work automatically via `.gn-dark`, and reviewers can grep for stray hex.

Tailwind v3 projects: copy `assets/tailwind.preset.js`, add it to `presets` in `tailwind.config.js`. Use `bg-navy`, `text-sky`, `bg-sky-12`, `font-heading`, `clip-flag`, `shadow-card`.

Tailwind v4 (CSS-first config): paste the `:root` block from `tokens.css` into an `@theme` block instead of using the preset.

## Fonts on the web

Calibri and Arial are Windows and Office fonts. Mac, Linux, Android, and most CI screenshot runners lack Calibri. Stack:

- Headings: `Calibri, Carlito, "Segoe UI", system-ui, sans-serif`
- Body: `Arial, Helvetica, "Liberation Sans", sans-serif`

Carlito is metric-compatible with Calibri and free. For a public site where consistency matters, self-host Carlito (woff2) or load it from Google Fonts. Do not swap in Inter, Roboto, or another "nicer" font without the user asking. Same rule as documents.

## Color usage rules on the web

- Navy is the primary action color. Primary buttons, nav bars, footers, hero backgrounds, active states.
- Sky is accent only. Link underlines, focus rings, the flag motif, one highlighted stat, one chart series, small badges. Never a button fill, never a section background, never a card fill. `#E3F3FB` (sky 12%) is the only sky-derived fill allowed, and only for callout panels with navy text.
- Body text is `#1A1A1A`, not navy.
- Dark sections use `#1D1C55` with `#100F33` and `#3D3C73` for depth. Wrap in `.gn-dark`.
- No new hues for success/warning/error unless the app needs status colors. If it does, use muted versions: success `#2E7D5B`, warning `#946D0A`, error `#B03A2E`. Keep them low-saturation so navy and sky stay dominant.

## Contrast (WCAG AA)

| Pair | Ratio | Verdict |
|---|---|---|
| `#1D1C55` on `#FFFFFF` | 14.6:1 | Pass, any size |
| `#1A1A1A` on `#FFFFFF` | 16.7:1 | Pass |
| `#FFFFFF` on `#1D1C55` | 14.6:1 | Pass |
| `#26A9E1` on `#FFFFFF` | 2.6:1 | Fail for text. Non-text marks only |
| `#26A9E1` on `#1D1C55` | 5.5:1 | Pass for normal text on dark |
| `#1D1C55` on `#E3F3FB` | 12.7:1 | Pass |
| `#8A8A99` on `#FFFFFF` | 3.6:1 | Large text only (18px+ or 14px bold). Not for body copy |

Sky text on white fails AA. Links on light backgrounds: navy text with a sky underline (already set in `tokens.css`). On navy backgrounds sky text is fine.

## Logo on the web

- Use `gatronova_logo_full.png` on light headers, `gatronova_logo_white.png` on navy headers or footers. Wordmark is about 6:1, so set `height` and let `width: auto`. Nav height 32 to 40px for the logo is typical.
- Add `alt="Gatronova"`. Link it to home.
- Do not repeat the logo in body content. Header, and optionally footer, only.
- Ask the user for an SVG version if crisp rendering matters at large sizes. PNGs blur on retina heroes.

## Flag motif in UI

Use `.gn-flag` (CSS) or `assets/gatronova_flag.svg` for:

- Marker before section headings and eyebrow labels
- Active nav item indicator
- List bullets in marketing copy
- Icon container shape (put a single-color navy icon inside a sky flag)
- Loading or progress indicator
- Large, low-opacity, bleeding off a hero edge as a background graphic

Do not use for: buttons, input fields, avatars. Those keep normal rectangles with small radius.

## Shape and layout

- Border radius stays small: 2, 4, 8px. Brand shape is angular. No pill buttons, no fully rounded cards.
- Same asymmetry rule as decks: hero splits 60/40 or 65/35, not 50/50 centered. Vary section layouts down the page.
- Cards: white or `#F5F6F8` on light, `#3D3C73` on dark. Border `#E5E7EB`, 1px. No heavy shadows. If shadow needed: `0 1px 3px rgba(29,28,85,0.08)`.
- Dashboards and charts: navy is series 1, sky series 2, then `#3D3C73`, `#8A8A99`, `#E4E4EE`. Load the `dataviz` skill and swap its palette for these values.

## Title case applies to UI labels

Nav items, button text, card titles, table column headers, tab labels, stat labels, form section headings: title case. Body copy, helper text, placeholders, toast messages, error messages: sentence case. Same shape test as `SKILL.md`: a noun phrase naming a thing gets title case, a statement with a verb gets sentence case.

## Checklist before shipping a branded web surface

- [ ] `tokens.css` or Tailwind preset imported, no raw brand hex in components
- [ ] Heading font stack includes Carlito fallback
- [ ] Sky not used as a fill or as text on white
- [ ] Focus rings visible on both light and dark sections
- [ ] Logo correct variant per background, aspect ratio preserved, has alt text
- [ ] Flag motif used at least once as the signature element, not generic circles
- [ ] Radii 8px or under
- [ ] Labels in title case, sentences in sentence case
- [ ] Screenshot at 375px and 1280px, both look intentional
