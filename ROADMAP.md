# BiglerNet Design System — Roadmap

> Evolution from CSS tokens to a mature, multi-product design system.

---

## Phase 0 — Ship the CSS Package ✅ COMPLETE

**Goal:** `npm publish` works. Every BiglerNet consumer imports one package and gets tokens + components.

### Tasks

- [x] Create `scripts/build.mjs` — copies `tokens/*.css` and `components/components.css` into `dist/`
- [x] Create `dist/` directory structure matching the `files` field in `package.json`
- [x] Add `"scripts": { "build": "node scripts/build.mjs" }` to `package.json`
- [x] Add `"scripts": { "dev": "node scripts/build.mjs --watch" }` for hot-reload during styling
- [x] Run `npm run build` and verify `dist/` is correct
- [x] Test local publish: `npm pack` + `npm install` from tarball
- [x] Document publish process in CONTRIBUTING.md

### Definition of Done

- [x] `npm run build` produces `dist/tokens/light.css`, `dist/tokens/dark.css`, `dist/components/components.css`
- [x] A new project can `npm install` the package and use the CSS classes
- [x] Both themes toggle correctly in prototype.html

---

## Phase 1 — Token Source of Truth (Week 2–3)

**Goal:** One JSON file is the single source of truth. CSS is generated from it. No more hand-editing CSS tokens.

### Status: Not started — deferred until needed

The current setup (hand-crafted `tokens/light.css` and `tokens/dark.css`) works fine for a small team. Style Dictionary is over-engineering at this stage. Add it when:

- You have 3+ product teams consuming tokens
- You need token variants (brands, themes)
- You need multi-format output (SCSS, JS, iOS, Android)

### When you're ready to adopt SD:

1. Create `tokens/source.json` (DTCG format with `$value`/`$type`)
2. Add `@design-systems/style-dictionary` as dev dependency
3. Create `sd.config.mjs` to transform JSON → CSS
4. Update `package.json` scripts to run SD
5. Remove hand-written CSS token files

---

## Phase 2 — Documentation Site ✅ COMPLETE

**Goal:** A browsable gallery where every component and token is documented with examples. Deployed to GitHub Pages.

### Tasks

- [x] Set up VitePress (actively maintained, works with our setup)
- [x] Create component examples for every component (buttons, inputs, badges, cards, tables, nav, toggles)
- [x] Document tokens with color swatches and usage guidance
- [x] Add theme toggle to the doc site
- [x] Deploy to GitHub Pages (workflow ready in `.github/workflows/pages.yml`)
- [x] Add docs link to contributing guide

### Pages Created

| Page | Path |
|---|---|
| Home | `/docs/index.md` |
| Getting Started | `/docs/guide/getting-started.md` |
| Colors | `/docs/tokens/colors.md` |
| Typography | `/docs/tokens/typography.md` |
| Spacing | `/docs/tokens/spacing.md` |
| Radius | `/docs/tokens/radius.md` |
| Shadows | `/docs/tokens/shadows.md` |
| Buttons | `/docs/components/buttons.md` |
| Inputs | `/docs/components/inputs.md` |
| Badges | `/docs/components/badges.md` |
| Cards | `/docs/components/cards.md` |
| Tables | `/docs/components/tables.md` |
| Navigation | `/docs/components/navigation.md` |
| Toggles | `/docs/components/toggles.md` |

### How to use

```bash
npm run docs:dev          # start docs dev server on port 5173
npm run docs:build        # build to dist/.vitepress/dist/
npm run docs:preview      # preview the built site
```

### Definition of Done

- [x] Every component renders with live examples
- [x] Each component shows light and dark mode variants
- [x] Documentation is deployable to GitHub Pages
- [x] Consumers can browse tokens and copy-paste usage code

---

## Phase 3 — Internal Product Adoption (Month 2)

**Goal:** Validate the system works in real production code. Find missing tokens, component gaps, and specificity issues.

### Tasks

- [ ] Pick one existing BiglerNet product as first consumer
- [ ] Replace hardcoded CSS values with token imports
- [ ] Replace native HTML elements with component classes where applicable
- [ ] Document issues found during migration (tokens that didn't exist, components needed)
- [ ] Add those missing tokens/components back to the design system
- [ ] Create a migration guide for other products

### Definition of Done

- [ ] One product consumes `@biglernet/design-tokens` in production
- [ ] All visual decisions map to tokens (zero hard-coded colors, spacing, or fonts)
- [ ] Migration issues are documented and resolved
- [ ] Other products can follow the migration guide

---

## Phase 4 — Framework Components (Quarter 2)

**Goal:** Wrappers around CSS tokens for React (and optionally Vue) that add interactivity, accessibility, and TypeScript types.

### Tasks

- [ ] Create `packages/components/` directory (monorepo structure)
- [ ] Add `@biglernet/components` package with React wrappers
- [ ] Implement Button, Input, Badge, Card, Table, Toggle as React components
- [ ] Each component imports tokens from `@biglernet/design-tokens` (not CSS files)
- [ ] Add TypeScript types for all component props
- [ ] Add accessibility tests (axe-core, cypress-axe)
- [ ] Add each component to the docs site with interactive examples
- [ ] Implement focus management, keyboard nav, and ARIA attributes

### Directory Structure

```
packages/
  design-tokens/    ← Phase 0-1 (JSON -> CSS tokens)
  components/       ← Phase 4 (React components)
  docs/             ← Phase 2 (documentation site)
```

### Definition of Done

- [ ] All core components available as React components
- [ ] TypeScript types for props and theme tokens
- [ ] Tests pass (unit + accessibility)
- [ ] Components work with both light and dark themes
- [ ] Storybook examples show interactive, accessible variants

---

## Phase 5 — Maturity (Quarter 3+)

**Goal:** Production-grade design system at scale.

### Tasks

- [ ] Add design token linting with style-dictionary-config
- [ ] Add visual regression testing with Chromatic or Playwright
- [ ] Create `@biglernet/design-cli` — `npx @biglernet/design-components init`
- [ ] Add icon package with SVG sprite + React components
- [ ] Implement design token versioning policy with deprecation notices
- [ ] Create a design system team charter (who approves changes, review process)
- [ ] Add accessibility audits (WCAG 2.1 AA) for all components
- [ ] Publish changelog with automated version bumps

---

## Ongoing Principles

1. **Tokens first, components second.** Components are built from tokens. Never hardcode.
2. **One source of truth.** If a value appears in more than one place, add a token for it.
3. **Semantic naming.** Name tokens by purpose (`--accent-primary`), not visual properties (`--red`).
4. **Version carefully.** Renaming a token = MAJOR bump. New tokens = MINOR. Bug fixes = PATCH.
5. **Consume before implementing.** No new component exists in isolation. It serves products.
6. **Document as you build.** Docs are not a post-phase deliverable — they're a parallel track.

---

## Appendix: Key Decisions

### npm Package Name

- `@biglernet/design-tokens` — correct
- All references use `@biglernet`

### Token Format

- **Source:** hand-authored CSS custom properties (`:root { --token: value; }`)
- **SCSS output:** not yet generated — add Style Dictionary in Phase 1
- **Color format:** OKLCH (perceptually uniform)

### Distribution

- **Phase 0-2:** npm tarball, consumed as CSS files
- **Phase 4+:** npm package with React components, type exports, and tree-shakeable CSS

### Hosting

- **Code:** GitHub at `github.com/biglernet/design-system`
- **Docs:** `.github/workflows/pages.yml` ready — deploys `docs/.vitepress/dist/` to GitHub Pages
- **Components:** Storybook (when Phase 4 arrives)

### CI/CD

- **CI:** `.github/workflows/ci.yml` — runs `npm run build` on every push/PR
- **CD:** `.github/workflows/pages.yml` — deploys docs to GitHub Pages
