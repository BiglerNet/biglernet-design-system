# Toggles

Toggle switches, checkbox groups, and selection controls.

## Toggle Switch

```html
<label class="ds-toggle">
  <input type="checkbox">
  <span class="ds-toggle-track"></span>
  <span class="ds-toggle-thumb"></span>
</label>
```

## Toggle Group

```html
<div class="toggle-group">
  <div class="toggle-row">
    <span class="toggle-label">Dark theme</span>
    <label class="ds-toggle">
      <input type="checkbox" checked>
      <span class="ds-toggle-track"></span>
      <span class="ds-toggle-thumb"></span>
    </label>
  </div>
  <div class="toggle-row">
    <span class="toggle-label">Notifications</span>
    <label class="ds-toggle">
      <input type="checkbox">
      <span class="ds-toggle-track"></span>
      <span class="ds-toggle-thumb"></span>
    </label>
  </div>
</div>
```

## Checkbox Group

```html
<label style="display: flex; align-items: center; gap: var(--space-sm); font-size: 14px; cursor: pointer;">
  <input type="checkbox" checked> <span>API access</span>
</label>
```

## Rules

- Minimum 44x44px touch target for all toggles
- Focus-visible outlines on all interactive elements
- Accent-primary when toggled on, neutral border when off
