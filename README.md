# BiglerNet Design System

BiglerNet's design system - a shared set of design tokens (colors, typography, spacing) and UI components for building consistent, professional user interfaces across all BiglerNet products.

Designed for internal teams that build SaaS products across multiple industry verticals. Built for engineers.

---

## Quick Start

Add these two CSS files to any project and every UI element gets the BiglerNet look:

```html
<link rel="stylesheet" href="/tokens/light.css">
<link rel="stylesheet" href="/components/components.css">
```

That's a design system in one sentence: **a set of shared CSS variables and components that every product imports instead of building from scratch.**

- [DESIGN.md](DESIGN.md) - architecture, rules, and do's/don'ts
- [brand-spec.md](brand-spec.md) - brand identity, color rationale
- [CONSUMING.md](CONSUMING.md) - how to use tokens in your project (for back-end devs)
- [style-guide.html](style-guide.html) - visual reference (open in browser)

---

## Project Structure

```
design-system/
├── tokens/
│   ├── light.css          ← light theme tokens (colors, spacing, type, radii)
│   └── dark.css           ← dark theme overrides
├── components/
│   └── components.css     ← buttons, inputs, badges, tables, nav, toggles
├── DESIGN.md              ← architecture document
├── brand-spec.md          ← brand and color specification
├── CONSUMING.md           ← how to use in your project
├── style-guide.html       ← visual reference (open for overview)
├── package.json           ← npm package manifest
└── README.md              ← this file
```

## Key Concepts

### What is a design token?

A design token is a named CSS variable that represents a visual decision:

```css
/* Instead of: */
.button { background: #c23b3b; }

/* Use: */
.button { background: var(--accent-primary); }
```

The token `--accent-primary` lives in `tokens/light.css`. Change it in one place, everything updates.

### Why OKLCH?

OKLCH is a perceptually uniform color format. When you adjust lightness or saturation, the color's visual brightness stays consistent - unlike hex or RGB where changing saturation can make a color feel suddenly muddy.

### Why does this matter?

Without a design system:

- Product A uses `#3b82f6` for primary buttons
- Product B uses `#2563eb` for primary buttons  
- Product C uses `#0ea5e9` for primary buttons
- Nobody knows what the "correct" color is

With a design system:

- All products import `--accent-primary`
- Change it once, update everything

---

## License

MIT
