---
name: gatronova-brand
version: 2.0.0
description: Applies Gatronova's official brand identity (logo, colors, fonts, flag motif) to any official deliverable or product surface created for the organization. Use whenever creating a Word document, PowerPoint deck, PDF, Excel spreadsheet, website, web app, landing page, dashboard UI, HTML artifact, React/Vue/Svelte component, email template, or design system for Gatronova, or anything meant to carry the Gatronova name - reports, memos, letters, proposals, pitch decks, one-pagers, invoices, dashboards, templates, marketing sites, internal tools, customer portals. Also use if the user mentions "Gatronova," "our brand," "company colors," "our logo," "on-brand," "brand tokens," "our design system," or "official document/template" without naming the skill. Consult alongside (not instead of) the relevant format skill (docx/pptx/pdf/xlsx) or frontend/artifact skill - this skill supplies the branding, the other supplies the mechanics. For web work read references/web.md and ship assets/tokens.css or assets/tailwind.preset.js.
---

# Gatronova Brand Kit

Gatronova's visual identity is small and deliberate at the level of *color count* — one navy, one sky blue — but that doesn't mean documents should look plain. A two-color brand still has a full design system: type scale, layout rhythm, a signature shape, supporting neutrals, room for photography and icons. The earlier version of this skill conflated "restrained palette" with "restrained design," which produced flat, centered, box-on-white-background output. That's not the goal. The goal is confident and modern — which in practice means strong typographic hierarchy, asymmetric layouts, a real visual motif, and only *color* held to two notes, not composition.

This skill supplies the *what* (colors, fonts, logo, layout philosophy, motif). The actual file is built using the relevant format skill — read this skill first to gather the spec, then hand off to `docx`, `pptx`, `pdf`, or `xlsx` as appropriate for construction. **For websites, web apps, HTML artifacts, or UI components, read `references/web.md`** - it carries the web font stack, WCAG contrast table, and the ready-to-import `assets/tokens.css` and `assets/tailwind.preset.js`. Also read that format skill's own design-quality section (the pptx skill in particular has detailed layout/visual-polish guidance) — this skill tells you what's on-brand, the format skill tells you how to execute it well in that medium.

## When this applies

Apply Gatronova branding automatically, without asking, whenever the deliverable is recognizably an "official" artifact — something that would plausibly go out under the Gatronova name (reports, proposals, decks, letters, invoices, dashboards, one-pagers). You don't need the user to say "use our branding" — if they ask for a report or a deck and they work at Gatronova, that's enough.

Use judgment for borderline cases. A quick internal scratch table or a one-off code snippet doesn't need a logo and color theme; a polished deliverable does. If genuinely unsure whether something warrants full branding, it's fine to apply the color/font palette (cheap, low-risk) while skipping the logo placement, rather than stopping to ask.

## Brand specification

### Logo
Two files in `assets/`:
- `gatronova_logo_full.png` — full-color wordmark (navy "Gatronova" with the cyan accent stroke on the "t"). Use on white/light backgrounds. This is the default; reach for it unless the background is dark.
- `gatronova_logo_white.png` — reversed wordmark (white text, cyan accent preserved). Use on navy or other dark/saturated backgrounds — the full-color version's navy text disappears on dark backgrounds, so don't use it there.

Both are transparent PNGs, wide aspect ratio (~6:1, it's a wordmark not a square mark). Scale proportionally; don't stretch it to fit a square or near-square space. Leave clear space around the logo roughly equal to the height of the capital "G" — don't crowd it against text or edges.

Placement conventions:
- **Documents/reports (docx)**: logo in the header (top-left or centered), modestly sized — roughly 1–1.5 inches wide. Don't repeat it on every page in the body; the header is enough.
- **Slide decks (pptx)**: full-color logo on the title slide (prominent), then a small version in the corner of subsequent content slides — or omit from content slides entirely if the template already has a strong cover. Don't let it compete with slide titles.
- **PDFs (flyers/one-pagers)**: typically the most logo-forward format — fine to feature it larger near the top as a masthead.
- **Spreadsheets (xlsx)**: logo in a header/cover tab only, not on every working tab. Working tabs should just use the color palette (header row fills, accent colors) rather than the logo itself — a logo on a data tab usually just gets in the way.

If a dark cover page, title slide, or section divider is used, use the white logo on a navy fill. Never place the full-color logo on a navy or busy background — the navy wordmark will be unreadable.

### Signature motif: the flag stroke

The logo's most distinctive feature isn't the wordmark — it's the small trapezoid/flag shape in sky blue that caps the "t." That cut-corner trapezoid (wider at the base, angled top edge, like a flag or a pennant cut at speed) is a genuine, ownable shape, and right now nothing in this skill uses it beyond the logo itself. Adopt it as the brand's signature graphic element:

- Use the flag/trapezoid shape (not plain rectangles or circles) for: small accent marks above stat callouts, bullet/list markers, icon containers, progress or status indicators, divider marks between sections.
- It reads correctly at small sizes (under headings, next to numbers) and also works scaled up as a bold graphic field on a cover or divider slide — angled cyan trapezoids bleeding off an edge, layered at different opacities, is a legitimate "big" treatment of the same shape that's a single accent stroke at small scale.
- This is the kind of specific, brief-derived signature element that makes a design memorable instead of generic (see `frontend-design` skill's notion of a signature element) — lean on it instead of defaulting to generic rounded rectangles, plain circles, or (never) edge stripes/color bars.

### Colors

**Core (from the logo, fixed):**

| Role | Hex | Use |
|---|---|---|
| Primary (Navy) | `#1D1C55` | Headings, dark backgrounds, primary structure |
| Accent (Sky Blue) | `#26A9E1` | The flag motif, highlight data series, links, small emphasis marks |

**Supporting palette (derived, for tonal range and depth — not random additions):**

| Role | Hex | Use |
|---|---|---|
| Navy tint 80% | `#3D3C73` | Secondary dark surfaces, gradients off the primary navy, hover/secondary states |
| Navy tint 15% | `#E4E4EE` | Light tinted panel backgrounds (richer than flat gray, stays on-brand) |
| Sky tint 12% | `#E3F3FB` | Light callout/highlight panel backgrounds, paired with navy text |
| Deep navy | `#100F33` | True-dark backgrounds (cover slides, dividers) when more contrast than `#1D1C55` is wanted |
| Body text | `#1A1A1A` | Default body copy |
| Neutral grays | `#F5F6F8`, `#E5E7EB`, `#8A8A99` | Page backgrounds, table stripes, captions/muted text |

The supporting tints exist specifically so layouts have *tonal* range without introducing off-brand hues — a navy-on-navy-tint panel, or a sky-tint highlight box with navy text, reads as more designed than navy-on-white everywhere. Use them to create depth (layered panels, subtle gradients between navy and navy-tint, a tinted highlight block) rather than reaching for generic gray on every secondary surface.

Don't invent additional brand colors (no random greens/oranges) unless the content genuinely needs a categorical palette (e.g., a multi-series chart) — in that case, keep navy and sky blue as the two lead series and add muted, low-saturation neutrals for the rest rather than bright unrelated hues.

| Role | Hex | Use |
|---|---|---|
| Primary (Navy) | `#1D1C55` | Headings, primary text accents, header/footer bands, title slide backgrounds, primary buttons/CTAs |
| Accent (Sky Blue) | `#26A9E1` | Small accents only — underlines, bullet markers, chart highlight series, links, the occasional callout. This color is a *spark*, not a fill — it's a single brushstroke in the logo, not a panel color. Using it for large fills reads as off-brand. |
| Body text | `#1A1A1A` (near-black) | Default body copy — full navy is too heavy for paragraph text at length |
| Background / neutral | `#FFFFFF` and light grays (`#F5F6F8`, `#E5E7EB`) | Page backgrounds, table stripe rows, card fills |

Don't invent additional brand colors (no random greens/oranges) unless the content genuinely needs a categorical palette (e.g., a multi-series chart) — in that case, keep navy and sky blue as the two lead series and add muted, low-saturation neutrals for the rest rather than bright unrelated hues.

### Typography

- **Headings**: Calibri, bold
- **Body**: Arial, regular

Both are in the safe font list for the docx/pptx skills (render correctly without substitution surprises) — don't substitute in a different "nicer-looking" font unless the user explicitly asks, since an unavailable font will silently degrade quality in the actual delivered file.

Heading color is Navy (`#1D1C55`) on light backgrounds, white on dark/navy backgrounds. Body text is near-black, not navy — full navy body text over a long document feels heavy.

Push real size contrast rather than letting everything sit close to one size — a hero number or title at 2-3x the body size reads as designed; a deck where the title is only slightly bigger than the bullets reads as a template. Use big, confident numerals for stats (don't be shy — 60pt+ in a deck, 36pt+ in a document pull-quote). Tight, large display type paired with small, quiet captions/labels is more "premium SaaS deck" than uniformly medium-sized text throughout.

**Capitalization for headings, titles, and labels — at every level, not just the slide/page title**: use title case, not sentence case and not all-words-capitalized. This means every short, label-like piece of text in a layout — slide titles, document headings, section headers, card/component titles, stat labels under a big number, eyebrow text, column headers — not only the single largest headline on the page. It's easy to remember this for the one big title and forget it for the smaller supporting labels around it; apply it uniformly.

Capitalize the first and last word always, and capitalize all major words (nouns, verbs, adjectives, adverbs, pronouns) — but lowercase articles ("a," "the"), coordinating conjunctions ("and," "but," "or," "for," "nor"), and short prepositions (under ~4 letters: "in," "on," "at," "to," "of," "for," "with") unless one of them is the first or last word. Examples: "Four Moves for Q4," "Where We Stand," "On-Time Delivery Rate," "Grow the Team" (not "Grow The Team" — "the" stays lowercase mid-title), "Plan for the Year Ahead" (not "Plan For The Year Ahead").

The test for whether something is a "label" (title case) or a "sentence" (normal sentence case) is about *shape*, not length: does it have a verb making a statement or describing an event ("Up 6 points from Q2, driven by the new regional routing model rolled out in May."), or is it a noun phrase naming a thing — a title, a topic, what something is — even if that noun phrase runs long ("Performance Review and Roadmap for the Next Quarter")? A subtitle under a deck title is still naming the deck's subject, not narrating a sentence, so it's a label even at ten-plus words. Don't use length as a proxy for "this must be a sentence" — check whether it's actually built around a verb or is fundamentally a noun phrase. Labels get title case; genuine sentences — descriptions, captions, body copy — stay in normal sentence case.

### Layout philosophy

Plain centered title-and-bullets, or a symmetric 3-up grid of identical cards, is the safe default and exactly what to avoid repeating across every slide/page. Reach for these instead:

- **Asymmetry over symmetry.** Split a slide or page unevenly — a wide content column against a narrower accent column (e.g. 60/40 or 65/35), not a perfectly centered or evenly-split layout. Off-center hero text with a large supporting graphic or photo on one side reads as far more intentional than centered text on an empty background.
- **Layer and overlap (slightly) instead of stacking in a grid.** A large flag-motif shape bleeding off a slide edge behind the title, a stat number overlapping the edge of a tinted panel, a photo that extends past its "frame" — small overlaps create depth. Keep overlaps purposeful and legible, not chaotic.
- **Vary layout slide-to-slide / section-to-section.** If slide 2 is a 3-up stat grid, slide 3 shouldn't be another 3-up grid — switch to a big-number-plus-narrative split, a two-column comparison, a horizontal process flow, or a full-bleed image moment with a text overlay. Repeating the same layout twice in a row is the single biggest tell of an unconsidered deck.
- **Use real visual elements, not just text in boxes.** Icons (simple, geometric, single-color in navy or sky blue — match the logo's geometric character), the flag motif, photography/illustration where content calls for it, simple charts for any real data. A slide that's just a heading plus a tinted rectangle of bullet text every time is the exact flatness to design away from.
- **Let navy do heavy lifting as a surface, not just a text color.** Full-bleed navy section dividers, navy panels that contain a stat or quote, a navy sidebar — these create the dark/light contrast and visual rhythm that an all-white deck lacks. Use the supporting navy tints (`#3D3C73`, deep navy `#100F33`) to add depth within those dark surfaces rather than flat single-navy fills everywhere.
- **Whitespace is still a tool, not a void.** More visual richness doesn't mean cramming every inch — it means the empty space that remains is intentional (breathing room around a bold element) rather than accidental (just unused space because nothing else was planned for that area).

### Voice for headers/footers

No tagline exists for Gatronova — don't invent one. Footers on formal documents can simply read "Gatronova" plus a page number, or be left to the format skill's normal footer conventions. Don't pad the footer with placeholder boilerplate (address, phone, etc.) that wasn't provided — ask the user if they want that included rather than fabricating it.

## Workflow

1. **Identify the deliverable type** (doc/deck/PDF/spreadsheet/web). For web, read `references/web.md` and import `assets/tokens.css` (or the Tailwind preset) into the project. For files, read the corresponding format skill (`/mnt/skills/public/docx/SKILL.md`, `pptx/SKILL.md`, `pdf/SKILL.md`, or `xlsx/SKILL.md`) for the mechanics and design-quality guidance for that file type.
2. **Build using this skill's spec**: pass the hex codes (including supporting tints), font names, logo file paths, and the flag motif into the construction process described by the format skill. Plan layout variety across slides/sections before building — decide up front which layout each one uses so you're not defaulting to the same template repeatedly.
3. **Design with the full system, restrained only on hue.** Navy and sky blue stay the only two "brand" hues, but composition, scale, layering, and the supporting tints should all be doing real work. Flat, centered, single-size-text-on-white is the failure mode to avoid, not the goal.
4. **QA before delivering**: visually check (render to image/screenshot per the format skill's own QA process) that the logo isn't stretched, isn't placed on a clashing background, colors match the hex values above, and — specifically for this skill — that consecutive slides/sections don't repeat the same layout and that at least one element shows real visual ambition (the motif, a layered/asymmetric composition, strong type contrast) rather than everything being a centered box.

## Common pitfalls

- Using the full-color (navy) logo on a navy background — it disappears. Use the white version.
- Stretching the wordmark to fill a square logo slot — it's wide and short, treat it that way.
- Using sky blue as a large background fill — it's an accent, not a brand "second color" in the fill sense.
- Adding a tagline, slogan, or address that the user never gave you.
- Re-placing the logo on every single page/slide/tab — once per document (header or cover) is usually correct; repetition reads as try-hard, not as "on-brand."
- **Flatness disguised as restraint**: a two-hue palette is not an excuse for every slide to be centered text in a plain rectangle on white. The color count is restrained; the design itself should still have real hierarchy, asymmetry, and a signature motif (the flag shape) doing work.
- **Repeating the same layout** slide after slide or section after section — vary the structure even when the content is similarly shaped (e.g., don't make every stat slide an identical 3-card grid).
- **Decorative elements with too little contrast to be visible** — a "ghost" or muted element (a faint background number, a subtle label) still needs to actually be legible against its specific background, not just "lighter than the main text." When using a tint or muted tone deliberately (e.g., a large quiet number behind a card title), check it against the *exact* background color it sits on, not against white — `#E4E4EE` text on an `#F5F6F8` card is nearly invisible even though both look fine in isolation. A subtle effect should still be readable at a glance, not actually unreadable.
- **Defaulting to generic shapes** (plain circles, plain rounded rectangles) when the brand has an actual ownable shape (the flag/trapezoid) that should be reached for first.
