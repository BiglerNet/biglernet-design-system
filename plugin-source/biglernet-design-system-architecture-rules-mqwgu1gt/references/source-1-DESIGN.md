# BiglerNet Design System — Architecture & Rules

> The "how we build" document. Read this before writing any new component or making any visual decision.

---

## 1. System Philosophy

BiglerNet's products are technical tools for engineers and operators. The design system reflects that:

- **Information density** over decoration. Every pixel should convey information.
- **Borders over shadows.** Structure from lines, not elevation. Shadows only for overlays/modals.
- **One accent, used twice max.** BiglerNet red appears at most twice per screen (primary CTA + one state indicator).
- **Tokens, not magic.** Every visual decision maps to a named token. No hardcoded values.

---

## 2. Design Tokens

### 2.1 Colors

Colors are organized in 4 layers. This layered approach prevents visual chaos — you always know which layer a color belongs to.

| Layer | Share | Tokens |
|---|---|---|
| **Neutrals** | 70–90% | `--bg`, `--surface`, `--fg`, `--muted`, `--border` |
| **Accent** (one) | 5–10% | `--accent-primary`, `--accent-secondary`, `--accent-light` |
| **Semantic** | 0–5% | `--success`, `--warn`, `--danger`, `--info` |
| **Effect** | <1% | Gradients, glows — rarely justified |

### 2.2 Typography

Three-weight system: 450 (read), 590 (emphasize), 600 (announce). Never use weight 700+ unless you have a very good reason.

| Role | Font | Size | Weight | Line Height | Tracking |
|---|---|---|---|---|---|
| Display | Inter | 48–72px | 600–700 | 1.0–1.1 | `-0.02em` |
| H1 | Inter | 32–48px | 600 | 1.2 | `-0.02em` |
| H2 | Inter | 24–32px | 600 | 1.25 | `-0.01em` |
| H3 | Inter | 20–24px | 590 | 1.3 | `-0.01em` |
| Body | system-ui | 15–18px | 450 | 1.6 | `normal` |
| Small | system-ui | 13–14px | 450 | 1.5 | `+0.01em` |
| Caption | IBM Plex Mono | 11–12px | 400 | 1.4 | `normal` |
| UI label | system-ui | 12–13px | 590–600 | 1.4 | `+0.06em` (ALL CAPS) |

### 2.3 Spacing

All based on a 4px grid. Never use values outside this scale.

| Token | Value | Use for |
|---|---|---|
| `--space-xs` | 4px | Tight gaps, icon spacing |
| `--space-sm` | 8px | Button padding, small gaps |
| `--space-md` | 16px | Card padding base |
| `--space-lg` | 24px | Grid gutters, section spacing |
| `--space-xl` | 32px | Layout sections |
| `--space-2xl` | 48px | Hero spacing |
| `--space-3xl` | 64px | Full-page section spacing |

### 2.4 Border Radius

| Token | Value | Use for |
|---|---|---|
| `--radius-sm` | 4px | Inline elements, badges |
| `--radius-md` | 8px | Buttons, inputs, small cards |
| `--radius-lg` | 12px | Cards, panels, overlays |
| `--radius-xl` | 16px | Large containers, dialogs |

### 2.5 Shadows

Only use on elevated surfaces (modals, dropdowns, overlays). Not on page-level cards.

| Token | Value | Use for |
|---|---|---|
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.06)` | Inline cards, dropdowns |
| `--shadow-md` | `0 4px 12px rgba(0,0,0,0.08)` | Elevated cards, modals |
| `--shadow-lg` | `0 12px 32px rgba(0,0,0,0.12)` | Overlays, large modals |

Dark mode shadows use higher opacity because dark backgrounds make subtle shadows invisible.

---

## 3. Layout Rules

1. **Card-width content** — page content caps at 1200px for desktop readability.
2. **Tablet-width grids** — content grid uses minmax(280px, 1fr) for responsive columns.
3. **No row striping on tables** — use hairline borders between rows instead.
4. **Asymmetric density** — alternate between dense (tables, forms) and breathing (headlines, quotes).
5. **Mono columns for data** — IDs, hashes, numeric data always in monospace font with tabular-nums.

---

## 4. Do's and Don'ts

### Do

- Use `var(--token-name)` everywhere — never hardcode colors or spacings
- Use monospace font for IDs, hashes, timestamps, code
- Keep backgrounds neutral (light: nearly white, dark: nearly black)
- Use the red accent on primary CTAs and active states only
- Use hairline borders for structure, shadows only for elevation/interaction hints
- Include focus-visible outlines on all interactive elements
- Use `letter-spacing` on ALL CAPS text (`+0.06em`) and negative tracking on large headings (`-0.02em`)
- Test in both light and dark mode before shipping

### Don't

- Hardcode any color value in component CSS (always use tokens)
- Use red on more than 2 visible elements per screen
- Add decorative gradients, patterned backgrounds, or illustration elements
- Use warm beige, peach, or cream as page backgrounds
- Stack more than 2 typefaces in any artifact
- Use bold (700+) for body text — reserve for headlines only
- Use `font-family: system-ui` alone on a heading
- Use `text-align: justify` on body copy (creates rivers on the web)
- Use `scrollIntoView` in embedded previews (breaks the iframe)
- Put design system metadata (screen counts, viewport selectors, "demo only" labels) in product UI
- Mix light and dark mode styles without explicit scope

---

## 5. Component Patterns

### Buttons

- Primary: `--accent-primary` bg, white text, `--accent-secondary` hover
- Secondary: surface bg, `--border` border, `--fg` text
- Ghost: transparent bg, accent text, `--accent-light` hover fill
- Danger: `--danger` bg, white text
- All sizes share the same weight (600), font-family, and letter-spacing
- Focus state: 2px solid `--accent-primary` outline, 2px offset

### Inputs

- Border: `--border`, 1px
- Focus: `--accent-primary` border + `--accent-light` 3px outer glow
- Error: `--danger` border + `--danger-bg` 3px outer glow
- Label always above the input, never placeholder-only
- Hint text below in `--muted` at 12px

### Badges

- Status badges: tinted bg + tinted text + tinted border (3-layer match)
- Dot indicator: 6px circle matching the status color
- Data badges: neutral bg/text/border, mono font
- Never use more than one status color on the same screen

### Tables

- Header: uppercase + tracking (`+0.06em`) in `--muted`, 2px bottom border
- Data rows: `--border-subtle` bottom border, 1px
- Hover: `--surface-hover` on the row, not just the cell
- Mono font for all IDs, hashes, numeric data in the body
- No row striping — borders provide enough visual separation
- Tabular numerics via `font-variant-numeric: tabular-nums` (for numeric columns)

### Navigation

- Top nav bar: bordered container with brand mark + links
- Sidebar nav: left border indicator on active item, grouped with section titles
- Tabs: bottom border indicator, accent-primary on active

---

## 6. Dark Mode Architecture

Dark mode is a **complete override**, not an inversion. Key principles:

- Background: `oklch(14% 0.01 250)` — not pure black (#000). Pure black causes vibration and eye strain.
- Borders: `rgba(255, 255, 255, 0.08)` — semi-transparent white, not dark values. Dark-on-dark borders are invisible at small sizes.
- Foreground: `oklch(94% 0.01 240)` — not pure white (#fff). Pure white on dark backgrounds causes eye strain.
- Shadows: higher opacity (0.3–0.5 vs 0.06–0.12) because dark surfaces suppress subtle shadows.

Add `class="theme-dark"` to `<body>` or `<html>` to activate. The `dark.css` file selectively overrides only the tokens that need dark-mode values.

---

## 7. Accessibility

- **Contrast minimums:**
  - Body text (≤16px): 4.5:1 against background
  - Large text (>18px or 14px bold): 3:1 against background
  - UI components against adjacent surfaces: 3:1
- **Focus states:** all interactive elements must have visible `focus-visible` styles
- **Touch targets:** minimum 44×44px for all buttons, links, and controls
- **Semantic HTML:** use `<button>`, `<nav>`, `<main>`, `<section>`, not `<div>` with `onclick`

---

## 8. File Structure Guide

When adding new files to the design system:

```
design-system/
├── tokens/
│   ├── light.css        ← tokens added HERE first
│   └── dark.css         ← then mirrored here
├── components/
│   └── components.css   ← component classes go here
├── DESIGN.md            ← update rules here when they change
└── brand-spec.md        ← don't edit without approval
```

1. New color → add to `tokens/light.css` and `tokens/dark.css` first
2. New component class → add to `components/components.css`
3. New rule/principle → add to `DESIGN.md`
4. Test: open `style-guide.html`, verify component renders in both themes

---

## 9. Versioning

This design system follows semantic versioning:

- `MAJOR` — backward-incompatible token changes (e.g., renaming `--accent-primary`)
- `MINOR` — new tokens or components added
- `PATCH` — bug fixes to existing tokens or component styles

When updating tokens, notify all product teams before the change takes effect.

---

## 10. Glossary (for back-end devs)

| Term | What it means | Example |
|---|---|---|
| **Design token** | A named CSS variable for a visual decision | `var(--accent-primary)` |
| **OKLCH** | A perceptually uniform color format | `oklch(52% 0.21 23)` = BiglerNet red |
| **Chroma** | Color intensity/saturation in OKLCH | Higher = more vivid |
| **Hue** | Color angle (0–360°) in OKLCH | 23° = red, 150° = green, 230° = blue |
| **Semantic color** | A color named for its meaning, not its hue | `--danger` (could be any red) |
| **Token scope** | Where a token's value is active | `:root` = everywhere, `.theme-dark` = dark mode only |
| **CSS custom property** | The generic name for CSS variables | `--accent-primary` is a CSS custom property |
