# Inputs

Form inputs for data entry. Always include a label.

<div class="demo">
<div style="display:flex;flex-direction:column;gap:16px;padding:24px;max-width:400px;">
  <div style="display:flex;flex-direction:column;gap:4px;">
    <label class="ds-input-label">API Key</label>
    <input class="ds-input" placeholder="sk-xxxxxxxxxx..." style="width:100%;">
    <div class="ds-input-hint">Found in your dashboard settings</div>
  </div>
</div>
</div>

<div class="demo">
<div style="display:flex;flex-direction:column;gap:16px;padding:24px;max-width:400px;">
  <div style="display:flex;flex-direction:column;gap:4px;">
    <label class="ds-input-label">Email</label>
    <input class="ds-input ds-input-error" placeholder="you@biglernet.com" value="not-an-email" style="width:100%;">
    <div class="ds-input-error-text">This doesn't look like a valid email</div>
  </div>
  <div style="display:flex;flex-direction:column;gap:4px;">
    <label class="ds-input-label">Product URL</label>
    <input class="ds-input ds-input-error" placeholder="https://" style="width:100%;">
    <div class="ds-input-error-text">Enter a full URL starting with https://</div>
  </div>
</div>
</div>

## Usage

```html
<div class="input-group">
  <label class="ds-input-label">Label</label>
  <input class="ds-input" placeholder="Placeholder text">
  <div class="ds-input-hint">Helpful hint text</div>
</div>
```

## Rules

1. Border: `--border`, 1px
2. Label always above the input, never placeholder-only
3. Hint text below in `--muted` at 12px
4. Focus ring uses 3px offset, never blur
