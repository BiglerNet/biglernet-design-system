# Getting Started

> How to use the BiglerNet Design System in your project.

## What is a design system?

Think of it as **a shared set of CSS variables and pre-built components** that your team can import. Instead of every product picking their own shade of blue for "primary buttons," everyone uses `var(--accent-primary)` — which resolves to `oklch(52% 0.21 23)`, BiglerNet red.

Change one number in the token file and every product using that file updates instantly.

## Quick Start

Add these two CSS files to any project:

```html
<link rel="stylesheet" href="./tokens/light.css">
<link rel="stylesheet" href="./components/components.css">
```

That's it. Every button, card, input, and table now looks like every other BiglerNet product.

## Adding Dark Mode

```html
<link rel="stylesheet" href="./tokens/light.css">
<link rel="stylesheet" href="./tokens/dark.css">
<link rel="stylesheet" href="./components/components.css">
```

Then add `class="theme-dark"` to the `<body>` element toggling it is as simple as `document.body.classList.toggle('theme-dark')`.

## Using Tokens in Your CSS

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
  color: #fff;
  border-radius: var(--radius-md);
}
```

## Consuming via npm

```json
// package.json
{
  "dependencies": {
    "@biglernet/design-tokens": "git+https://github.com/biglernet/design-system"
  }
}
```

```bash
npm install biglernet/design-system#main
```

Then reference the CSS files from `node_modules/@biglernet/design-tokens/dist/tokens/`.

## Why OKLCH Colors?

OKLCH is a newer color format that looks more natural to human eyes than hex or RGB. When you change lightness or saturation, the color's perceived brightness stays consistent. Your design "just looks right" instead of feeling muddy.

`oklch(L, C, H)` = Lightness (0–100%), Chroma (intensity), Hue (angle 0–360)

BiglerNet red is `oklch(52% 0.21 23)` — lightness 52%, intensity 21%, hue angle 23° (a true crimson).
