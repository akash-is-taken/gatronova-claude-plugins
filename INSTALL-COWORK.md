# Gatronova Brand Skill – Install Guide

This skill teaches Claude the Gatronova brand (logo, colors, fonts, flag motif) so that documents, decks, spreadsheets, PDFs, and web apps come out on-brand without you describing the brand each time.

One install covers Claude.ai chat, Claude Code, and Cowork. It takes about one minute.

## Install (everyone)

1. Open https://claude.ai/settings/capabilities in your browser.
2. Scroll to **Skills** and click **Upload skill**.
3. Choose the file `gatronova-brand.zip`.
4. Make sure the toggle next to **gatronova-brand** is on.
5. Restart Claude Code or Cowork if it was already open, so it picks up the new skill.

Done. From now on, any request that mentions Gatronova, "our brand", "on-brand", or an official deliverable will apply the brand automatically.

## Try it

In Claude Code or Cowork, type one of these:

- "Create a one-page Gatronova proposal for a warehouse automation pilot as a Word document."
- "Build a Gatronova internal dashboard landing page in React with Tailwind."
- "Make a five-slide Gatronova pitch deck about our Q4 roadmap."

You should see navy `#1D1C55`, sky blue `#26A9E1`, Calibri headings, Arial body text, the flag motif, and the correct logo variant for the background.

## Update to a new version

When a new `gatronova-brand.zip` is shared:

1. Go to https://claude.ai/settings/capabilities.
2. Find **gatronova-brand** under Skills and delete it.
3. Upload the new zip.

Check the version number at the top of `SKILL.md` inside the zip if you are unsure which one you have.

## What is inside

- `SKILL.md` – the brand rules Claude reads
- `references/web.md` – extra rules for websites and web apps
- `assets/gatronova_logo_full.png` – logo for light backgrounds
- `assets/gatronova_logo_white.png` – logo for navy or dark backgrounds
- `assets/gatronova_flag.svg` – the flag motif on its own
- `assets/tokens.css` – brand colors and fonts as CSS variables for web projects
- `assets/tailwind.preset.js` – the same tokens for Tailwind projects
- `demo.html` – a sample page built from the tokens, for reference

## Questions

Contact Akash Kumar (akumar4fj@gatronova.com).
