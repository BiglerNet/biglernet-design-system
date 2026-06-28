# Inputs

Form inputs for data entry. Always include a label.

## Default

```html
<div class="input-group">
  <label class="ds-input-label">API Key</label>
  <input class="ds-input" placeholder="sk-xxxxxxxxxx...">
  <div class="ds-input-hint">Found in your dashboard settings</div>
</div>
```

## With Error

```html
<div class="input-group">
  <label class="ds-input-label">Email</label>
  <input class="ds-input ds-input-error" placeholder="you@biglernet.com" value="not-an-email">
  <div class="ds-input-error-text">This doesn't look like a valid email</div>
</div>
```

## Focus State

Focus uses `--accent-primary` border + `--accent-light` 3px outer glow.

## Rules

- Border: `--border`, 1px
- Label always above the input, never placeholder-only
- Hint text below in `--muted` at 12px
- Focus ring uses 3px offset, never blur
