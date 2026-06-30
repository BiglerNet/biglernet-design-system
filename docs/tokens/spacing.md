# Spacing

Multiplicative scale based on a 4px grid. Use tokens, not raw values.

<div class="demo">
<div style="display:flex;flex-direction:column;gap:8px;padding:24px;">
  <div style="display:flex;align-items:center;gap:8px;">
    <span style="font-family:var(--font-mono);font-size:12px;color:var(--muted);min-width:70px;">xs — 4px</span>
    <div style="background:var(--accent-primary);border-radius:4px;height:24px;width:4px;"></div>
  </div>
  <div style="display:flex;align-items:center;gap:8px;">
    <span style="font-family:var(--font-mono);font-size:12px;color:var(--muted);min-width:70px;">sm — 8px</span>
    <div style="background:var(--accent-primary);border-radius:4px;height:24px;width:8px;"></div>
  </div>
  <div style="display:flex;align-items:center;gap:8px;">
    <span style="font-family:var(--font-mono);font-size:12px;color:var(--muted);min-width:70px;">md — 16px</span>
    <div style="background:var(--accent-primary);border-radius:4px;height:24px;width:16px;"></div>
  </div>
  <div style="display:flex;align-items:center;gap:8px;">
    <span style="font-family:var(--font-mono);font-size:12px;color:var(--muted);min-width:70px;">lg — 24px</span>
    <div style="background:var(--accent-primary);border-radius:4px;height:24px;width:24px;"></div>
  </div>
  <div style="display:flex;align-items:center;gap:8px;">
    <span style="font-family:var(--font-mono);font-size:12px;color:var(--muted);min-width:70px;">xl — 32px</span>
    <div style="background:var(--accent-primary);border-radius:4px;height:24px;width:32px;"></div>
  </div>
  <div style="display:flex;align-items:center;gap:8px;">
    <span style="font-family:var(--font-mono);font-size:12px;color:var(--muted);min-width:70px;">2xl — 48px</span>
    <div style="background:var(--accent-primary);border-radius:4px;height:24px;width:48px;"></div>
  </div>
  <div style="display:flex;align-items:center;gap:8px;">
    <span style="font-family:var(--font-mono);font-size:12px;color:var(--muted);min-width:70px;">3xl — 64px</span>
    <div style="background:var(--accent-primary);border-radius:4px;height:24px;width:64px;"></div>
  </div>
</div>
</div>

## Usage

```css
.card { padding: var(--space-xl); gap: var(--space-lg); }
.button { padding: var(--space-sm) var(--space-lg); }
```

## Rules

1. Never use raw pixel values — always use a spacing token.
2. Stick to multiples of the 4px base.
