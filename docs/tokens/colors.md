---
aside:
  - text: Colors
    items:
      - { text: 'Accent Colors', link: '/tokens/colors#accent' }
      - { text: 'Semantic Colors', link: '/tokens/colors#semantic' }
      - { text: 'Dark Mode', link: '/tokens/colors#dark' }
---

# Colors

All colors use OKLCH format. Each token maps to a semantic name, not a visual property.

## Accent Colors

The BiglerNet red accent is used sparingly — at most twice per screen (primary CTA + one status indicator).

| Token | Light | Dark | Usage |
|---|---|---|---|
| `--accent-primary` | `oklch(52% 0.21 23)` | (same) | Primary buttons, active states |
| `--accent-secondary` | `oklch(42% 0.18 23)` | (same) | Hover states |
| `--accent-light` | `oklch(90% 0.06 23)` | (same) | Badge fills, pill backgrounds |

### Usage

```html
<button class="ds-btn ds-btn-primary">Primary</button>
```

## Semantic Colors

Named for meaning, not visual appearance. A semantic color represents a state rather than a specific hue.

| Token | Light | Usage |
|---|---|---|
| `--success` | `oklch(65% 0.14 150)` (green) | Success states |
| `--warn` | `oklch(70% 0.16 75)` (amber) | Warning states |
| `--danger` | `oklch(55% 0.18 23)` (red) | Errors, destructive actions |
| `--info` | `oklch(62% 0.15 230)` (blue) | Informational states |

## Dark Mode

Dark mode uses semi-transparent white borders rather than dark values. Pure black (#000) and pure white (#fff) are avoided for eye comfort.

| Token | Light | Dark |
|---|---|---|
| `--bg` | `oklch(99% 0.002 240)` | `oklch(14% 0.01 250)` |
| `--surface` | `oklch(100% 0 0)` | `oklch(19% 0.01 250)` |
| `--fg` | `oklch(18% 0.012 250)` | `oklch(94% 0.01 240)` |
| `--muted` | `oklch(54% 0.012 250)` | `oklch(56% 0.01 240)` |
| `--border` | `oklch(90% 0.006 250)` | `rgba(255, 255, 255, 0.08)` |

## Neutrals

| Token | Light | Dark | Usage |
|---|---|---|---|
| `--bg` | `oklch(99% 0.002 240)` | `oklch(14% 0.01 250)` | Page canvas |
| `--surface` | `oklch(100% 0 0)` | `oklch(19% 0.01 250)` | Cards, panels |
| `--fg` | `oklch(18% 0.012 250)` | `oklch(94% 0.01 240)` | Primary text |
| `--muted` | `oklch(54% 0.012 250)` | `oklch(56% 0.01 240)` | Secondary text, labels |

## Rules

1. Never hardcode a color value in component CSS — always use a token.
2. Red appears at most twice on any surface.
3. Backgrounds are neutral — nearly white for light, nearly black for dark.
