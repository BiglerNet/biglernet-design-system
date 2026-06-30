# Buttons

Buttons signal actions. Primary uses BiglerNet red; all others use the neutral palette.

<div class="demo">
<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;padding:24px;">
  <button class="ds-btn ds-btn-primary">Primary</button>
  <button class="ds-btn ds-btn-secondary">Secondary</button>
  <button class="ds-btn ds-btn-ghost">Ghost</button>
  <button class="ds-btn ds-btn-danger">Danger</button>
</div>
</div>

<div class="demo">
<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;padding:24px;">
  <button class="ds-btn ds-btn-primary ds-btn-sm">Small</button>
  <button class="ds-btn ds-btn-primary">Default</button>
  <button class="ds-btn ds-btn-primary ds-btn-lg">Large</button>
</div>
</div>

## Usage

```html
<button class="ds-btn ds-btn-primary">Primary</button>
<button class="ds-btn ds-btn-secondary">Secondary</button>
<button class="ds-btn ds-btn-ghost">Ghost</button>
<button class="ds-btn ds-btn-danger">Danger</button>
```

## Rules

1. All sizes share the same weight (600), font-family, and letter-spacing.
2. Focus state: 2px solid `--accent-primary` outline, 2px offset.
3. Hover uses color shift, not interaction hints.
