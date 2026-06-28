# Cards

Containers for grouped content. Cards use borders, not shadows, for structure.

## Basic Card

```html
<div class="ds-card">
  <h3>Card Title</h3>
  <p>Card content goes here.</p>
</div>
```

## List Card

```html
<div class="ds-list-card">
  <div class="ds-list-card-row">
    <span>Row 1</span>
  </div>
  <div class="ds-list-card-row">
    <span>Row 2</span>
  </div>
  <div class="ds-list-card-row">
    <span>Row 3</span>
  </div>
</div>
```

## Rules

- No shadows on page-level cards. Use shadows only for modals and overlays.
- Hover state: `--surface-hover` on the row, not just the cell.
- Hairline borders provide enough visual separation — no row striping.
