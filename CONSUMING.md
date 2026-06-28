# BiglerNet Design System

> How to use the BiglerNet design system in your project.
> Designed for back-end developers who need to ship polished UIs without a design background.

---

## TL;DR

The design system is **a single CSS file** you drop into any project. After that, every button, card, input, and table looks like every other BiglerNet product.

```html
<link rel="stylesheet" href="./tokens/light.css">
<link rel="stylesheet" href="./components/components.css">
```

That's it. Done.

---

## What "design system" actually means

Think of it as **a shared set of CSS variables and pre-built components** that your team can import. Instead of every product team picking their own shade of blue for "primary buttons," everyone uses `var(--accent-primary)` — which resolves to `oklch(52% 0.21 23)` = BiglerNet red.

Change one number in `tokens/light.css` and every product using that file updates instantly.

### Why OKLCH colors?

OKLCH is a newer color format that looks more natural to human eyes than hex or RGB. The key advantage: when you change lightness or saturation, the color's perceived brightness stays consistent. This is why your design system "just looks right" instead of feeling muddy.

`oklch(L, C, H)` = Lightness (0–100\%), Chroma (intensity), Hue (angle 0–360)

BiglerNet red is `oklch(52% 0.21 23)` — lightness 52%, intensity 21%, hue angle 23° (a true crimson).

---

## Quick start

### 1. Add to any HTML page

```html
<head>
  <link rel="stylesheet" href="./tokens/light.css">
  <link rel="stylesheet" href="./components/components.css">
</head>
<body>
  <button class="ds-btn ds-btn-primary">Get Started</button>
  <input class="ds-input" placeholder="Enter API key...">
  <span class="badge badge-success"><span class="badge-dot badge-dot-success"></span> Live</span>
</body>
```

### 2. Using in a CSS file (or SASS/LESS)

```css
.card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: var(--space-xl);
  color: var(--fg);
}

.button {
  background: var(--accent-primary);
  font-family: var(--font-display);
  font-size: var(--type-scale-body);
}
```

### 3. Adding dark mode

```html
<head>
  <link rel="stylesheet" href="./tokens/light.css">
  <link rel="stylesheet" href="./tokens/dark.css">
  <link rel="stylesheet" href="./components/components.css">
</head>
<body class="theme-dark">
```

Add `class="theme-dark"` to the `<body>` or toggle it with JavaScript. The `dark.css` file overrides the same tokens with dark backgrounds and light text.

### 4. Consuming via npm — GitHub Packages (internal use)

All BiglerNet products use [GitHub Packages](https://github.com/features/packages) as our private package registry.

```bash
# In any BiglerNet product, create or append to .npmrc:
echo "@biglernet:registry=https://npm.pkg.github.com" >> .npmrc

# Install:
npm install @biglernet/design-tokens
```

Then reference the CSS files from `node_modules/@biglernet/design-tokens/dist/tokens/`.

> The `.npmrc` file authenticates automatically in CI/CD (via `GITHUB_TOKEN`).
> For local development, you may need to run `npm login --registry=https://npm.pkg.github.com` with a GitHub PAT that has `read:packages` scope.

### 5. Consuming via npm — npmjs.org (public, not for internal products)

For public/consumer projects that want to use this design system:

```bash
npm install @biglernet/design-tokens
```

No registry configuration needed — the package is published to the public npm registry.

---

## What's in this repo

```
design-system/
├── tokens/
│   ├── light.css          ← all color, spacing, type, radius tokens (light)
│   └── dark.css           ← dark mode overrides
├── components/
│   └── components.css     ← all UI components (buttons, inputs, tables, etc.)
├── DESIGN.md              ← full architecture document (rules, do's/don'ts)
├── brand-spec.md          ← brand identity and color rationale
├── style-guide.html       ← visual reference (open in browser)
├── CONSUMING.md           ← this file
└── package.json           ← npm manifest
```

---

## Token reference

### Colors

| Token | Light | Dark | Use for |
|---|---|---|---|
| `--bg` | `oklch(99% 0.002 240)` | `oklch(14% 0.01 250)` | Page background |
| `--surface` | `oklch(100% 0 0)` | `oklch(19% 0.01 250)` | Cards, panels |
| `--fg` | `oklch(18% 0.012 250)` | `oklch(94% 0.01 240)` | Headlines, body text |
| `--muted` | `oklch(54% 0.012 250)` | `oklch(56% 0.01 240)` | Labels, timestamps |
| `--border` | `oklch(90% 0.006 250)` | `rgba(255,255,255,0.08)` | Borders |
| `--accent-primary` | `oklch(52% 0.21 23)` | (same) | Primary buttons, active states |
| `--accent-secondary` | `oklch(42% 0.18 23)` | (same) | Hover states |
| `--accent-light` | `oklch(90% 0.06 23)` | (same) | Badge fills, pill backgrounds |
| `--success` | `oklch(65% 0.14 150)` | (same) | Success states |
| `--warn` | `oklch(70% 0.16 75)` | (same) | Warnings |
| `--danger` | `oklch(55% 0.18 23)` | (same) | Errors, destructive actions |

### Spacing (all in `--space-*`)

| Token | Pixels | Use for |
|---|---|---|
| `--space-xs` | 4 | Tight gaps |
| `--space-sm` | 8 | Button padding, small gaps |
| `--space-md` | 16 | Card padding base |
| `--space-lg` | 24 | Grid gutters, section spacing |
| `--space-xl` | 32 | Layout sections |
| `--space-2xl` | 48 | Hero spacing |
| `--space-3xl` | 64 | Full-page sections |

### Typography

| Role | Font | Size | Weights |
|---|---|---|---|
| Display | Inter | 48–72px | 700 |
| H1 | Inter | 32–48px | 600 |
| H2 | Inter | 24–32px | 600 |
| H3 | Inter | 20–24px | 590 |
| Body | system-ui | 15–18px | 450 |
| Small | system-ui | 13–14px | 450 |
| Caption | IBM Plex Mono | 11–12px | 400 |

---

## Rules (the non-negotiable bits)

1. **One accent color per screen** — BiglerNet red appears at most twice on any surface (primary button + one status indicator).
2. **Borders over shadows** — structure comes from hairline borders. Use shadows only for overlays and modals.
3. **Monospace for data** — IDs, hashes, timestamps always use IBM Plex Mono.
4. **Never hardcode colors** — if you write `#c23b3b` in your CSS instead of `var(--accent-primary)`, you've broken the system.
5. **Dark mode uses semi-transparent white borders** — not solid dark borders. `rgba(255,255,255,0.08)` on dark backgrounds.

---

## Adding a new component

1. Pick a token that exists — don't invent new colors.
2. Write the component CSS using only those tokens.
3. Add it to `components/components.css`.
4. Test it in light mode, dark mode, and at a mobile width (768px).

If a component needs a new token (color, spacing, radius), add it to `tokens/light.css` and `tokens/dark.css` first, then use it.

---

## Questions?

- **Can I change the red?** Yes — update `--accent-primary` in `tokens/light.css`. All products using that file update automatically.
- **Does this work with React/Vue/Svelte?** Yes — CSS tokens are framework-agnostic. Import the CSS, use `var(--token-name)` in your styles.
- **Can I extend the palette for my product?** Yes — add new tokens to your product's CSS (not the shared file) with a product scope. Keep the shared tokens untouched.
- **How do I contribute?** Open a change to PR the updated CSS files. Keep the "one token per line" style for readability.
