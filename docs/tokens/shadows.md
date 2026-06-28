# Shadows

Only use on elevated surfaces (modals, dropdowns, overlays). Not on page-level cards.

| Token | Value | Use for |
|---|---|---|
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.06)` | Inline cards, dropdowns |
| `--shadow-md` | `0 4px 12px rgba(0,0,0,0.08)` | Elevated cards, modals |
| `--shadow-lg` | `0 12px 32px rgba(0,0,0,0.12)` | Overlays, large modals |

Dark mode shadows use higher opacity (0.3–0.5 vs 0.06–0.12) because dark backgrounds suppress subtle shadows.

## Usage

```css
.dropdown { box-shadow: var(--shadow-sm); }
.modal { box-shadow: var(--shadow-md); }
.overlay { box-shadow: var(--shadow-lg); }
```

## Rules

- Use hairline borders for structure, shadows only for elevation and interaction hints.
- Never stack shadows on page-level cards.
- Use `--shadow-focus: 0 0 0 3px var(--accent-light)` for focus rings.
