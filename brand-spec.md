# BiglerNet Brand Specification

## Identity

**BiglerNet** builds SaaS products across multiple industry verticals. The brand is technical, confident, and efficient - not playful, not luxury. Built for engineers and operators who value clarity over ornament.

## Visual Posture

- **Tone:** Technical, direct, product-led
- **Audience:** Internal teams (developers, operators), eventually customers evaluating SaaS tools
- **Industry:** SaaS / enterprise software across multiple verticals
- **Aesthetic:** Tech / utility - dense information, clean lines, no decoration

## Palette

### Primary Accent - Red

BiglerNet red is a confident, saturated crimson. Used sparingly as the single accent across all products.

| Token | Name | Value (OKLCH) | Value (Hex) | Usage |
| --- | --- | --- | --- | --- |
| `--accent-primary` | BiglerNet Red (light) | `oklch(52% 0.21 23)` | `#c23b3b` | Primary buttons, active states |
| `--accent-secondary` | BiglerNet Red (dark) | `oklch(42% 0.18 23)` | `#9f2f2f` | Hover states, links |
| `--accent-light` | BiglerNet Red (soft) | `oklch(90% 0.06 23)` | `#f5eaea` | Subtle backgrounds (pill fills, badges) |

### Light Theme Neutrals

| Token | Name | Value (OKLCH) | Value (Hex) | Usage |
| --- | --- | --- | --- | --- |
| `--bg` | Canvas | `oklch(99% 0.002 240)` | `#f9faeb` | Page background |
| `--surface` | Card / panel | `oklch(100% 0 0)` | `#ffffff` | Cards, panels, inputs |
| `--fg` | Primary text | `oklch(18% 0.012 250)` | `#16181b` | Headlines, body text |
| `--muted` | Secondary text | `oklch(54% 0.012 250)` | `#8b8e95` | Placeholders, labels, timestamps |
| `--border` | Borders, dividers | `oklch(90% 0.006 250)` | `#d4d5d8` | Borders, horizontal rules, inputs |

### Dark Theme Neutrals

| Token | Name | Value (OKLCH) | Value (Hex) | Usage |
| --- | --- | --- | --- | --- |
| `--bg` | Canvas | `oklch(14% 0.01 250)` | `#101113` | Page background |
| `--surface` | Card / panel | `oklch(19% 0.01 250)` | `#1a1b1e` | Cards, panels, inputs |
| `--surface-hover` | Surface hover | `oklch(24% 0.01 250)` | `#232529` | Hover states, active surfaces |
| `--fg` | Primary text | `oklch(94% 0.01 240)` | `#f0f1f2` | Headlines, body text |
| `--muted` | Secondary text | `oklch(56% 0.01 240)` | `#8e8e93` | Placeholders, labels, timestamps |
| `--border` | Borders, dividers | `oklch(28% 0.01 240)` | `#3a3a3f` | Borders, horizontal rules, inputs |
| `--border-subtle` | Faint dividers | `oklch(22% 0.01 240)` | `#252529` | Table dividers, subtle separators |

### Semantic Colors

| Token | Name | Value (OKLCH) | Value (Hex) | Usage |
| --- | --- | --- | --- | --- |
| `--success` | Success | `oklch(65% 0.14 150)` | `#3b9a3b` | Success states, confirmations |
| `--warn` | Warning | `oklch(70% 0.16 75)` | `#d4a017` | Warnings, cautionary states |
| `--danger` | Error/Danger | `oklch(55% 0.18 23)` | `#ba3333` | Errors, destructive actions |
| `--info` | Info | `oklch(62% 0.15 230)` | `#3b7ddc` | informational states |

## Typography

| Role | Font | Size Range | Weight | Line Height |
| --- | --- | --- | --- | --- |
| Display | 'Inter', system-ui, sans-serif | 48–72px | 700 | 1.1 |
| H1 | 'Inter', system-ui, sans-serif | 32–48px | 600 | 1.2 |
| H2 | 'Inter', system-ui, sans-serif | 24–32px | 600 | 1.25 |
| H3 | 'Inter', system-ui, sans-serif | 20–24px | 590 | 1.3 |
| Body | -apple-system, BlinkMacSystemFont, system-ui, sans-serif | 15–18px | 450 | 1.6 |
| Small | -apple-system, BlinkMacSystemFont, system-ui, sans-serif | 13–14px | 450 | 1.5 |
| Caption | 'IBM Plex Mono', 'JetBrains Mono', monospace | 11–12px | 450 | 1.4 |
| Mono / Code | 'IBM Plex Mono', 'JetBrains Mono', ui-monospace, monospace | 13–14px | 450 | 1.5 |

### Font Loading

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@450;590;600;700&family=IBM+Plex+Mono:wght@450;500&display=swap');
```

## Spacing Scale

| Token | Value | Usage |
| --- | --- | --- |
| `--space-xs` | 4px | Tight layouts, icon spacing |
| `--space-sm` | 8px | Padding, gaps between small elements |
| `--space-md` | 16px | Standard gap, card padding base |
| `--space-lg` | 24px | Section spacing, grid gutters |
| `--space-xl` | 32px | Larger layouts between sections |
| `--space-2xl` | 48px | Major section spacing |
| `--space-3xl` | 64px | Hero spacing, full-page sections |

## Border Radius

| Token | Value | Usage |
| --- | --- | --- |
| `--radius-sm` | 4px | Inline elements, badges |
| `--radius-md` | 8px | Buttons, inputs, small cards |
| `--radius-lg` | 12px | Cards, panels, overlays |
| `--radius-xl` | 16px | Large containers, dialogs |

## Shadow System

| Token | Value | Usage |
| --- | --- | --- |
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.06)` | Inline cards, dropdowns |
| `--shadow-md` | `0 4px 12px rgba(0,0,0,0.08)` | Elevated cards, modals |
| `--shadow-lg` | `0 12px 32px rgba(0,0,0,0.12)` | Overlays, large modals |
| `--shadow-dark-sm` | `0 1px 2px rgba(0,0,0,0.3)` | Dark mode inline cards |
| `--shadow-dark-md` | `0 4px 12px rgba(0,0,0,0.4)` | Dark mode elevated cards |
| `--shadow-dark-lg` | `0 12px 32px rgba(0,0,0,0.5)` | Dark mode large modals |

## Layout Rules

1. **Hairline borders, no shadows on surfaces** - structure comes from borders, not elevation. Use shadows only for modal/dialog overlay contexts.
2. **One accent color per screen** - the BiglerNet red appears at most twice on any surface (one CTA + one state indicator).
3. **Monospace for data** - IDs, hashes, timestamps, code blocks, and tabular metadata use the mono font stack.
4. **Tablet-width grid** - content area caps at 1200px for desktop readability. Navigation remains full-width.
5. **Asymmetric density** - alternate between information-dense sections (tables, forms) and breathing sections (headlines, quotes).

## Logo / Mark Guidance

No formal logo has been established. When one exists:
- The mark should use the BiglerNet red (`#c23b3b`) as its primary color.
- Text wordmark uses Inter, weight 600, full-bleed "BiglerNet".

## Do's and Don'ts

**Do:**
- Use the red accent on primary CTAs and active states
- Keep surfaces clean and borders light
- Let data and information density do the work
- Pair Inter display with system body text
- Use monospace for all code and technical data

**Don't:**
- Use red on more than 2 visible elements per screen
- Add decorative gradients, patterned backgrounds, or illustrated elements
- Use warm beige, peach, or cream as page backgrounds
- Stack more than 2 typefaces
- Use bold (700+) for body text - reserve 600 for headlines, 450 for body
