---
version: alpha
name: BiglerNet
description: Technical, information-dense UI system for engineering and operations tools. Borders over shadows, a single red accent used sparingly, and monospace for data.
colors:
  primary: "oklch(52% 0.21 23)"
  primary-hover: "oklch(42% 0.18 23)"
  primary-container: "oklch(90% 0.06 23)"
  on-primary: "#ffffff"
  bg: "oklch(99% 0.002 240)"
  surface: "oklch(100% 0 0)"
  surface-hover: "oklch(99.5% 0.001 240)"
  text: "oklch(18% 0.012 250)"
  text-light: "oklch(65% 0.008 250)"
  muted: "oklch(54% 0.012 250)"
  placeholder: "oklch(80% 0.004 250)"
  border: "oklch(90% 0.006 250)"
  border-subtle: "oklch(95% 0.003 250)"
  success: "oklch(65% 0.14 150)"
  success-container: "oklch(92% 0.08 150)"
  warning: "oklch(70% 0.16 75)"
  warning-container: "oklch(94% 0.1 75)"
  error: "oklch(55% 0.18 23)"
  error-container: "oklch(94% 0.08 15)"
  info: "oklch(62% 0.15 230)"
  info-container: "oklch(92% 0.08 230)"
typography:
  display:
    fontFamily: Inter
    fontSize: 3rem
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: -0.02em
  h1:
    fontFamily: Inter
    fontSize: 2rem
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: -0.02em
  h2:
    fontFamily: Inter
    fontSize: 1.5rem
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: -0.01em
  h3:
    fontFamily: Inter
    fontSize: 1.125rem
    fontWeight: 590
    lineHeight: 1.3
  body:
    fontFamily: system-ui
    fontSize: 1.0625rem
    fontWeight: 450
    lineHeight: 1.6
  body-sm:
    fontFamily: system-ui
    fontSize: 0.8125rem
    fontWeight: 450
    lineHeight: 1.5
  caption:
    fontFamily: IBM Plex Mono
    fontSize: 0.75rem
    fontWeight: 450
    lineHeight: 1.4
  label-caps:
    fontFamily: system-ui
    fontSize: 0.75rem
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0.06em
rounded:
  sm: 4px
  md: 8px
  lg: 12px
  xl: 16px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  3xl: 64px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-caps}"
    rounded: "{rounded.md}"
    padding: 8px 24px
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.md}"
  button-secondary-hover:
    backgroundColor: "{colors.surface-hover}"
  button-ghost:
    backgroundColor: transparent
    textColor: "{colors.primary}"
    rounded: "{rounded.md}"
  button-ghost-hover:
    backgroundColor: "{colors.primary-container}"
  button-danger:
    backgroundColor: "{colors.error}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.md}"
    padding: 8px 16px
  input-placeholder:
    textColor: "{colors.placeholder}"
  input-focus:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
  input-error:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.error}"
  badge-primary:
    backgroundColor: "{colors.primary-container}"
    textColor: "{colors.primary-hover}"
    typography: "{typography.caption}"
    rounded: "{rounded.sm}"
  badge-success:
    backgroundColor: "{colors.success-container}"
    textColor: "{colors.success}"
    rounded: "{rounded.sm}"
  badge-warning:
    backgroundColor: "{colors.warning-container}"
    textColor: "{colors.warning}"
    rounded: "{rounded.sm}"
  badge-error:
    backgroundColor: "{colors.error-container}"
    textColor: "{colors.error}"
    rounded: "{rounded.sm}"
  badge-info:
    backgroundColor: "{colors.info-container}"
    textColor: "{colors.info}"
    rounded: "{rounded.sm}"
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: 32px
  list-card-row:
    backgroundColor: "{colors.surface}"
  list-card-row-hover:
    backgroundColor: "{colors.surface-hover}"
  table-header:
    textColor: "{colors.muted}"
    typography: "{typography.label-caps}"
  nav-bar:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
  nav-link:
    textColor: "{colors.muted}"
  nav-link-active:
    textColor: "{colors.text}"
  sidebar:
    backgroundColor: "{colors.surface}"
  tab-active:
    textColor: "{colors.text}"
  theme-bar:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.xl}"
  toggle-track:
    backgroundColor: "{colors.border}"
  toggle-track-active:
    backgroundColor: "{colors.primary}"
---

# BiglerNet Design System — Architecture & Rules

> The "how we build" document. Read this before writing any new component or making any visual decision.

## Overview

BiglerNet builds SaaS products across multiple industry verticals for engineers and operators, not consumers. The visual posture is technical, direct, and product-led: information density over decoration, structure from borders rather than elevation, and a single confident red accent used sparingly. Nothing about the system should read as playful or luxury — every pixel should convey information.

Guiding principles:

- **Information density over decoration.** Every pixel should convey information.
- **Borders over shadows.** Structure comes from lines, not elevation. Shadows are reserved for overlays and modals.
- **One accent, used twice max.** BiglerNet red (`colors.primary`) appears at most twice per screen — one primary CTA plus one state indicator.
- **Tokens, not magic.** Every visual decision maps to a named token. No hardcoded values in components.

## Colors

Colors are organized in four layers so it's always clear which layer a color belongs to.

| Layer | Share of a screen | Tokens |
| --- | --- | --- |
| **Neutrals** | 70–90% | `bg`, `surface`, `surface-hover`, `text`, `text-light`, `muted`, `placeholder`, `border`, `border-subtle` |
| **Accent** (one) | 5–10% | `primary`, `primary-hover`, `primary-container`, `on-primary` |
| **Semantic** | 0–5% | `success`, `success-container`, `warning`, `warning-container`, `error`, `error-container`, `info`, `info-container` |

### Accent — BiglerNet Red

`primary` (`oklch(52% 0.21 23)`, ≈ `#c23b3b`) is the sole accent across all products. It never competes with a second hue: `primary-hover` is a darker shade of the same red for hover/press/link states, and `primary-container` is a soft tint for pill fills and badge backgrounds.

### Neutrals

`bg` is the page canvas, `surface` is cards/panels/inputs, `text` is headline/body copy, `muted` is secondary text (labels, timestamps, placeholders' neighbor copy), and `border`/`border-subtle` draw all dividers. All neutrals are near-white/near-black OKLCH values, not pure `#fff`/`#000` — this keeps large surfaces from vibrating and reads calmer under long viewing sessions.

### Semantic

`success`, `warning`, `error`, and `info` each pair with a `-container` tint for status badges and inline alerts. Semantic colors exist to communicate state, not to decorate — never use them for emphasis alone.

### Dark mode

Dark mode is a **complete override**, not an inversion — activated by adding `.theme-dark` to `<body>` or `<html>` (see `tokens/dark.css`, loaded after `tokens/light.css`).

- `bg`/`surface` become near-black OKLCH values, not pure `#000` — pure black causes vibration and eye strain.
- `border`/`border-subtle` become semi-transparent white (`rgba(255,255,255,0.08)` / `0.04`), not dark values — dark-on-dark borders are invisible at small sizes.
- `text` becomes near-white, not pure `#fff`, for the same reason as `bg`.
- Shadows increase in opacity (0.3–0.5 vs. 0.06–0.12 in light mode) because dark surfaces suppress subtle shadows.
- The accent palette (`primary`/`primary-hover`/`primary-container`) is unchanged between themes.

## Typography

Three weights only: 450 (read), 590 (emphasize), 600 (announce). Avoid 700+ outside of large display text.

| Token | Face | Size | Weight | Line height | Tracking | Usage |
| --- | --- | --- | --- | --- | --- | --- |
| `display` | Inter | 48px | 600 | 1.1 | `-0.02em` | Hero headlines |
| `h1` | Inter | 32px | 600 | 1.2 | `-0.02em` | Section titles |
| `h2` | Inter | 24px | 600 | 1.25 | `-0.01em` | Sub-section titles |
| `h3` | Inter | 18px | 590 | 1.3 | normal | Card/panel titles |
| `body` | system-ui | 17px | 450 | 1.6 | normal | Default body text |
| `body-sm` | system-ui | 13px | 450 | 1.5 | normal | Secondary/small text |
| `caption` | IBM Plex Mono | 12px | 450 | 1.4 | normal | Metadata, mono data |
| `label-caps` | system-ui | 12px | 600 | 1.4 | `0.06em`, ALL CAPS | Table headers, nav group titles, UI labels |

Font stacks:

- **Display:** `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif`
- **Body:** `-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif`
- **Mono:** `'IBM Plex Mono', 'JetBrains Mono', ui-monospace, Menlo, monospace` — used for all IDs, hashes, timestamps, code, and tabular numeric data

## Layout

All spacing derives from a 4px grid. Never use values outside this scale.

| Token | Value | Usage |
| --- | --- | --- |
| `spacing.xs` | 4px | Tight gaps, icon spacing |
| `spacing.sm` | 8px | Button padding, small gaps |
| `spacing.md` | 16px | Card padding base |
| `spacing.lg` | 24px | Grid gutters, section spacing |
| `spacing.xl` | 32px | Layout sections |
| `spacing.2xl` | 48px | Hero spacing |
| `spacing.3xl` | 64px | Full-page section spacing |

- Content areas cap at ~1200px for desktop readability; navigation stays full-width.
- Alternate information-dense sections (tables, forms) with breathing sections (headlines, quotes) rather than uniform density throughout a page.

## Elevation & Depth

Shadows are only for elevated surfaces (modals, dropdowns, popovers, the floating theme bar) — never on page-level cards, which rely on a 1px border instead.

| Token | Value (light) | Value (dark) | Usage |
| --- | --- | --- | --- |
| `shadow-sm` | `0 1px 2px rgba(0,0,0,0.06)` | `0 1px 2px rgba(0,0,0,0.3)` | Inline cards, dropdowns |
| `shadow-md` | `0 4px 12px rgba(0,0,0,0.08)` | `0 4px 12px rgba(0,0,0,0.4)` | Elevated cards, modals, theme bar |
| `shadow-lg` | `0 12px 32px rgba(0,0,0,0.12)` | `0 12px 32px rgba(0,0,0,0.5)` | Overlays, large modals |
| `shadow-focus` | `0 0 0 3px {colors.primary-container}` | `0 0 0 3px oklch(30% 0.04 260)` | Focus ring on inputs |

Dark-mode shadows use higher opacity because dark backgrounds make subtle shadows invisible.

## Shapes

Four border-radius levels — do not use arbitrary radii.

| Token | Value | Usage |
| --- | --- | --- |
| `rounded.sm` | 4px | Inline elements, badges |
| `rounded.md` | 8px | Buttons, inputs, small cards |
| `rounded.lg` | 12px | Cards, panels, nav bar, sidebar edges |
| `rounded.xl` | 16px | Large containers, dialogs, floating theme bar |

## Components

### Buttons

Four variants (`button-primary`, `button-secondary`, `button-ghost`, `button-danger`) across sm/default/lg sizes. All sizes share the same weight (`label-caps`, 600), font family, and letter-spacing.

- **Primary:** `primary` background, `on-primary` text, `primary-hover` border and hover fill.
- **Secondary:** `surface` background, `border` border, `text` text; hover shifts to `surface-hover`.
- **Ghost:** transparent background, `primary` text; hover fills with `primary-container`.
- **Danger:** `error` background, `on-primary` text.
- **Focus:** 2px solid `primary` outline, 2px offset, on all variants.

Sizes: sm (`4px 12px`, 13px text), default (`8px 24px`, 14px text), lg (`12px 28px`, 16px text).

### Inputs

- Border: `border`, 1px; background `surface`.
- Focus: border → `primary`, plus a `shadow-focus` outer glow.
- Error: border → `error`, plus an `error-container` outer glow.
- Label always sits above the input, never placeholder-only. Hint text sits below in `muted` at 12px.

### Badges

- Status badges (`badge-primary`/`success`/`warning`/`error`/`info`): tinted background + tinted text + tinted border, all from the same semantic family.
- Dot indicator: 6px circle matching the status color.
- Data badges: neutral background/text/border, mono font (`caption`).
- Never use more than one status color on the same screen.
- **Known gap:** the current `success`/`warning`/`error`/`info` text-on-container pairs fall below WCAG AA (4.5:1) — see `npm run design:lint`. Don't copy these pairs into new components; tighten the tint or darken the text if you touch this area.

### Cards

Two patterns:

1. **Standalone card:** `surface` background, `border`, `rounded.lg`, `spacing.xl` padding, `shadow-sm`.
2. **List card:** rows of `list-card-row` separated by `border-subtle`, `list-card-row-hover` background on hover.

### Tables

- Header (`table-header`): uppercase `label-caps` in `muted`, 2px `border` bottom border.
- Data rows: `border-subtle` bottom border, 1px.
- Hover: `surface-hover` on the full row, not just the cell.
- Mono font for all IDs, hashes, and numeric data in the body; numeric columns use `font-variant-numeric: tabular-nums`.
- No row striping — borders provide enough visual separation.

### Navigation

- **Nav bar:** bordered `surface` container with brand mark + links, `rounded.lg`, `shadow-sm`.
- **Sidebar:** fixed-width `surface` panel with a right border; active item gets a 2px `primary` left border; sections grouped under `label-caps` group titles.
- **Tabs:** bottom border indicator, `tab-active` gets `primary` underline plus 600 weight.

### Toggle switch & theme bar

- Track: `toggle-track` background (`border`), pill radius; checked state uses `toggle-track-active` (`primary`).
- Thumb: white circle, `shadow-sm`, slides on toggle.
- Theme bar: floating `surface` container, `rounded.xl`, `shadow-md`; active toggle button uses `primary` text color.

## Do's and Don'ts

**Do:**

- Use the red accent on primary CTAs and active/selected states.
- Keep surfaces clean with light borders; reserve shadows for overlays.
- Let data density do the work — dense tables and forms are the point, not a flaw.
- Pair Inter (display/headings) with the system-ui body stack.
- Use monospace for all code, IDs, hashes, and tabular/numeric data.
- Map every visual decision to a token; add new tokens to `tokens/light.css` and `tokens/dark.css` together before using them anywhere.

**Don't:**

- Use the red accent on more than two visible elements per screen.
- Add decorative gradients, patterned backgrounds, or illustrated elements.
- Use pure `#000`/`#fff` for backgrounds or text — use the near-black/near-white OKLCH neutrals instead.
- Stack more than two typefaces (display + body, with mono for data).
- Use font weight 700+ for body text — reserve 600 for headlines/labels, 450 for body.
- Hardcode a color, spacing, or radius value that isn't already a token.
