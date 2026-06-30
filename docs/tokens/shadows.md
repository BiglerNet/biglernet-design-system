# Shadows

Only use on elevated surfaces: modals, dropdowns, overlays. Not on page cards.

<div class="demo">
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:24px;padding:32px;">
  <div style="display:flex;flex-direction:column;align-items:center;gap:8px;border:1px solid var(--border);border-radius:8px;padding:24px;box-shadow:var(--shadow-sm);">
    <div style="width:64px;height:64px;background:var(--surface);border-radius:8px;"></div>
    <div style="font-family:var(--font-mono);font-size:11px;color:var(--muted);text-align:center;">shadow-sm</div>
  </div>
  <div style="display:flex;flex-direction:column;align-items:center;gap:8px;border:1px solid var(--border);border-radius:8px;padding:24px;box-shadow:var(--shadow-md);">
    <div style="width:64px;height:64px;background:var(--surface);border-radius:8px;"></div>
    <div style="font-family:var(--font-mono);font-size:11px;color:var(--muted);text-align:center;">shadow-md</div>
  </div>
  <div style="display:flex;flex-direction:column;align-items:center;gap:8px;border:1px solid var(--border);border-radius:8px;padding:24px;box-shadow:var(--shadow-lg);">
    <div style="width:64px;height:64px;background:var(--surface);border-radius:8px;"></div>
    <div style="font-family:var(--font-mono);font-size:11px;color:var(--muted);text-align:center;">shadow-lg</div>
  </div>
</div>
</div>

## Usage

```css
.dropdown { box-shadow: var(--shadow-sm); }
.modal { box-shadow: var(--shadow-md); }
.overlay { box-shadow: var(--shadow-lg); }
```

## Rules

1. Use hairline borders for structure, shadows only for elevation and interaction hints.
2. Never stack shadows on page-level cards.
3. Use `--shadow-focus` for focus indicators.
