# Cards

Containers for grouped content. Cards use borders, not shadows, for structure.

<div class="demo">
<div style="padding:24px;width:100%;max-width:480px;">
  <div class="ds-card">
    <h3 style="font-family:var(--font-display);font-size:16px;font-weight:600;margin-bottom:8px;">Card Title</h3>
    <p style="font-size:14px;color:var(--muted);">Card content goes here.</p>
  </div>
</div>
</div>

<div class="demo">
<div style="padding:24px;width:100%;max-width:480px;">
  <div class="ds-list-card">
    <div class="ds-list-card-row">
      <button class="ds-btn ds-btn-ghost ds-btn-sm">Details</button>
      <div style="flex:1;">
        <div style="font-size:15px;font-weight:590;">Data Pipeline Pro</div>
        <div style="font-size:13px;color:var(--muted);">ETL processing &amp; stream connectors</div>
      </div>
      <span class="badge badge-success"><span class="badge-dot badge-dot-success"></span> Live</span>
    </div>
    <div class="ds-list-card-row">
      <button class="ds-btn ds-btn-ghost ds-btn-sm">Details</button>
      <div style="flex:1;">
        <div style="font-size:15px;font-weight:590;">Auth Gateway</div>
        <div style="font-size:13px;color:var(--muted);">OAuth2 / SSO federation layer</div>
      </div>
      <span class="badge badge-warn"><span class="badge-dot badge-dot-warn"></span> Beta</span>
    </div>
    <div class="ds-list-card-row">
      <button class="ds-btn ds-btn-ghost ds-btn-sm">Details</button>
      <div style="flex:1;">
        <div style="font-size:15px;font-weight:590;">Metrics Collector</div>
        <div style="font-size:13px;color:var(--muted);">Application performance monitoring</div>
      </div>
      <span class="badge badge-primary"><span class="badge-dot badge-dot-primary"></span> Dev</span>
    </div>
  </div>
</div>
</div>

## Usage

```html
<div class="ds-list-card">
  <div class="ds-list-card-row">Row 1</div>
  <div class="ds-list-card-row">Row 2</div>
  <div class="ds-list-card-row">Row 3</div>
</div>
```

## Rules

1. No shadows on page-level cards. Use shadows only for modals and overlays.
2. Hover state: `--surface-hover` on the row, not just the cell.
3. Hairline borders provide enough visual separation — no row striping.
