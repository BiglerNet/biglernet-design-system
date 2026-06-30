# Badges

Status indicators and metadata labels. Uses monospace font with dot indicators.

<div class="demo">
<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;padding:24px;">
  <span class="badge badge-primary"><span class="badge-dot badge-dot-primary"></span> Primary</span>
  <span class="badge badge-success"><span class="badge-dot badge-dot-success"></span> Active</span>
  <span class="badge badge-warn"><span class="badge-dot badge-dot-warn"></span> Review</span>
  <span class="badge badge-danger"><span class="badge-dot badge-dot-danger"></span> Error</span>
  <span class="badge badge-info"><span class="badge-dot badge-dot-info"></span> Info</span>
  <span class="badge badge-muted">Muted</span>
</div>
</div>

<div class="demo">
<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;padding:24px;">
  <span class="badge badge-info">us-east-1</span>
  <span class="badge badge-muted">v2.4.1</span>
  <span class="badge badge-primary">enterprise</span>
  <span class="badge badge-success">ssl</span>
</div>
</div>

## Usage

```html
<span class="badge badge-success"><span class="badge-dot badge-dot-success"></span> Active</span>
```

## Rules

1. Never use more than one status color on the same screen.
2. Dot indicator: 6px circle matching the status color.
3. Data badges use neutral bg/text/border with mono font.
