# Typography

Inter for display, system UI for body, IBM Plex Mono for code.

<div class="demo">
<div style="display:flex;flex-direction:column;gap:0;padding:24px;max-width:100%;">
  <div style="padding:24px 0;border-bottom:1px solid var(--border-subtle);display:grid;grid-template-columns:120px 1fr auto;gap:24px;align-items:center;">
    <div>
      <div style="font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.06em;color:var(--muted);">Display</div>
      <div style="font-family:var(--font-mono);font-size:12px;color:var(--muted);">Inter · 600 · 1.1 · -0.02em</div>
    </div>
    <div style="font-family:var(--font-display);font-size:48px;font-weight:700;letter-spacing:-0.02em;line-height:1.1;color:var(--fg);">BiglerNet</div>
    <div style="font-family:var(--font-mono);font-size:11px;color:var(--muted);text-align:right;white-space:nowrap;">48–72px</div>
  </div>
  <div style="padding:24px 0;border-bottom:1px solid var(--border-subtle);display:grid;grid-template-columns:120px 1fr auto;gap:24px;align-items:center;">
    <div>
      <div style="font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.06em;color:var(--muted);">H1</div>
      <div style="font-family:var(--font-mono);font-size:12px;color:var(--muted);">Inter · 600 · 1.2 · -0.02em</div>
    </div>
    <div style="font-family:var(--font-display);font-size:32px;font-weight:600;letter-spacing:-0.02em;line-height:1.2;color:var(--fg);">Designed for engineers</div>
    <div style="font-family:var(--font-mono);font-size:11px;color:var(--muted);text-align:right;white-space:nowrap;">32–48px</div>
  </div>
  <div style="padding:24px 0;border-bottom:1px solid var(--border-subtle);display:grid;grid-template-columns:120px 1fr auto;gap:24px;align-items:center;">
    <div>
      <div style="font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.06em;color:var(--muted);">H2</div>
      <div style="font-family:var(--font-mono);font-size:12px;color:var(--muted);">Inter · 600 · 1.25 · -0.01em</div>
    </div>
    <div style="font-family:var(--font-display);font-size:24px;font-weight:600;letter-spacing:-0.01em;line-height:1.25;color:var(--fg);">Consistent look across products</div>
    <div style="font-family:var(--font-mono);font-size:11px;color:var(--muted);text-align:right;white-space:nowrap;">24–32px</div>
  </div>
  <div style="padding:24px 0;border-bottom:1px solid var(--border-subtle);display:grid;grid-template-columns:120px 1fr auto;gap:24px;align-items:center;">
    <div>
      <div style="font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.06em;color:var(--muted);">H3</div>
      <div style="font-family:var(--font-mono);font-size:12px;color:var(--muted);">Inter · 590 · 1.3 · -0.01em</div>
    </div>
    <div style="font-family:var(--font-display);font-size:18px;font-weight:590;letter-spacing:-0.01em;line-height:1.3;color:var(--fg);">Token-driven architecture</div>
    <div style="font-family:var(--font-mono);font-size:11px;color:var(--muted);text-align:right;white-space:nowrap;">20–24px</div>
  </div>
  <div style="padding:24px 0;border-bottom:1px solid var(--border-subtle);display:grid;grid-template-columns:120px 1fr auto;gap:24px;align-items:center;">
    <div>
      <div style="font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.06em;color:var(--muted);">Body</div>
      <div style="font-family:var(--font-mono);font-size:12px;color:var(--muted);">system-ui · 450 · 1.6 · normal</div>
    </div>
    <div style="font-family:var(--font-body);font-size:17px;line-height:1.6;color:var(--fg);">Design tokens establish a shared vocabulary for colors, spacing, and typography.</div>
    <div style="font-family:var(--font-mono);font-size:11px;color:var(--muted);text-align:right;white-space:nowrap;">15–18px</div>
  </div>
  <div style="padding:24px 0;border-bottom:1px solid var(--border-subtle);display:grid;grid-template-columns:120px 1fr auto;gap:24px;align-items:center;">
    <div>
      <div style="font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.06em;color:var(--muted);">Small</div>
      <div style="font-family:var(--font-mono);font-size:12px;color:var(--muted);">system-ui · 450 · 1.5 · +0.01em</div>
    </div>
    <div style="font-family:var(--font-body);font-size:13px;line-height:1.5;letter-spacing:0.01em;color:var(--fg);">Secondary labels, timestamps, metadata</div>
    <div style="font-family:var(--font-mono);font-size:11px;color:var(--muted);text-align:right;white-space:nowrap;">13–14px</div>
  </div>
  <div style="padding:24px 0;display:grid;grid-template-columns:120px 1fr auto;gap:24px;align-items:center;">
    <div>
      <div style="font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.06em;color:var(--muted);">Caption / Code</div>
      <div style="font-family:var(--font-mono);font-size:12px;color:var(--muted);">IBM Plex Mono · 400 · 1.4</div>
    </div>
    <div style="font-family:var(--font-mono);font-size:12px;line-height:1.4;color:var(--fg);">$ export DESIGN_TOKENS=oklch</div>
    <div style="font-family:var(--font-mono);font-size:11px;color:var(--muted);text-align:right;white-space:nowrap;">11–12px</div>
  </div>
</div>
</div>

## Usage

```css
h1 {
  font-family: var(--font-display);
  font-size: var(--type-scale-h1);
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1.2;
}
```

## Rules

1. Three-weight system: 450 (read), 590 (emphasize), 600 (announce). Never use 700+ unless you have a good reason.
2. Use `letter-spacing` on ALL CAPS text (+0.06em) and negative tracking on large headings (-0.02em).
3. Monospace font for IDs, hashes, timestamps, and code.
4. Avoid `text-align: justify` (creates rivers on the web).
