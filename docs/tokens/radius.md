# Border Radius

| Token | Value | Use for |
|---|---|---|
| `--radius-sm` | 4px | Inline elements, badges |
| `--radius-md` | 8px | Buttons, inputs, small cards |
| `--radius-lg` | 12px | Cards, panels, overlays |
| `--radius-xl` | 16px | Large containers, dialogs |

## Usage

```css
.badge { border-radius: var(--radius-sm); }
.button { border-radius: var(--radius-md); }
.card { border-radius: var(--radius-lg); }
.dialog { border-radius: var(--radius-xl); }
```

## Rules

- Use smaller radii for inline elements.
- Use larger radii for interactive surfaces.
- Never hardcode a radius value.
