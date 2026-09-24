# Gatronova Claude Plugins

Internal Claude Code plugin marketplace for Gatronova. Currently ships one plugin:

- **gatronova-brand** – applies the Gatronova brand (logo, colors, fonts, flag motif) to documents, decks, spreadsheets, PDFs, and web apps. Includes CSS and Tailwind design tokens for web projects.

## Install (Claude Code)

Run these two commands once in any terminal:

```bash
claude plugin marketplace add akash-is-taken/gatronova-claude-plugins
```

```bash
claude plugin install gatronova-brand@gatronova
```

Restart Claude Code. The skill now loads automatically whenever you mention Gatronova, "our brand", "on-brand", or ask for an official deliverable.

Alternatively, inside a Claude Code session type `/plugin`, open the **Marketplaces** tab, add the repo URL, then install `gatronova-brand` from the **Discover** tab.

## Update

```bash
claude plugin marketplace update gatronova
```

```bash
claude plugin update gatronova-brand@gatronova
```

## Cowork

Cowork does not read this marketplace. Cowork users upload the zip from the latest GitHub release at Settings > Capabilities > Skills on claude.ai. See `INSTALL-COWORK.md`.

## Test it

Ask Claude Code:

- "Create a one-page Gatronova proposal for a warehouse automation pilot as a Word document."
- "Build a Gatronova internal dashboard landing page in React with Tailwind."

Expect navy `#1D1C55`, sky blue `#26A9E1`, Calibri headings, Arial body, the flag motif, and the correct logo variant per background.

## Layout

```
.claude-plugin/marketplace.json   marketplace index
.claude-plugin/plugin.json        plugin manifest (bump version here)
skills/gatronova-brand/           the skill (SKILL.md, references/, assets/, demo.html)
```

## Releasing a new version

1. Edit files under `skills/gatronova-brand/`.
2. Bump `version` in `.claude-plugin/plugin.json` and in `skills/gatronova-brand/SKILL.md`.
3. Commit, tag `vX.Y.Z`, push.
4. Zip `skills/gatronova-brand` as `gatronova-brand.zip` and attach it to the GitHub release for Cowork users.
