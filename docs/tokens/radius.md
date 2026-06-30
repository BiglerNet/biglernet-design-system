# Radius

Four levels. Small for inline elements, large for interactive surfaces.

<div class="demo">
<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(80px,1fr));gap:24px;padding:32px;">
  <div style="display:flex;flex-direction:column;align-items:center;gap:8px;">
    <div style="width:64px;height:64px;background:var(--accent-primary);border-radius:4px;"></div>
    <div style="font-family:var(--font-mono);font-size:11px;color:var(--muted);text-align:center;">4px<br>radius-sm</div>
  </div>
  <div style="display:flex;flex-direction:column;align-items:center;gap:8px;">
    <div style="width:64px;height:64px;background:var(--accent-primary);border-radius:8px;"></div>
    <div style="font-family:var(--font-mono);font-size:11px;color:var(--muted);text-align:center;">8px<br>radius-md</div>
  </div>
  <div style="display:flex;flex-direction:column;align-items:center;gap:8px;">
    <div style="width:64px;height:64px;background:var(--accent-primary);border-radius:12px;"></div>
    <div style="font-family:var(--font-mono);font-size:11px;color:var(--muted);text-align:center;">12px<br>radius-lg</div>
  </div>
  <div style="display:flex;flex-direction:column;align-items:center;gap:8px;">
    <div style="width:64px;height:64px;background:var(--accent-primary);border-radius:16px;"></div>
    <div style="font-family:var(--font-mono);font-size:11px;color:var(--muted);text-align:center;">16px<br>radius-xl</div>
  </div>
</div>
</div>

## Usage

```css
.badge { border-radius: var(--radius-sm); }
.button { border-radius: var(--radius-md); }
.card { border-radius: var(--radius-lg); }
.dialog { border-radius: var(--radius-xl); }
```

## Rules

1. Use smaller radii for inline elements.
2. Use larger radii for interactive surfaces.
3. Never hardcode a radius value.
