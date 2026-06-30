# Tables

Data tables with hairline borders and tabular numerics.

<div class="demo">
<div style="padding:24px;width:100%;overflow-x:auto;">
  <table class="ds-table">
    <thead>
      <tr>
        <th>Service</th>
        <th>Region</th>
        <th>Status</th>
        <th>Uptime</th>
        <th>ID</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Pipeline Pro</strong></td>
        <td class="mono">us-east-1</td>
        <td><span class="badge badge-success"><span class="badge-dot badge-dot-success"></span> Live</span></td>
        <td class="mono" style="text-align:right;">99.97%</td>
        <td class="mono">svc-8f3a21</td>
      </tr>
      <tr>
        <td><strong>Auth Gateway</strong></td>
        <td class="mono">eu-west-1</td>
        <td><span class="badge badge-warn"><span class="badge-dot badge-dot-warn"></span> Beta</span></td>
        <td class="mono" style="text-align:right;">98.40%</td>
        <td class="mono">svc-c4e9d7</td>
      </tr>
      <tr>
        <td><strong>Metrics Collector</strong></td>
        <td class="mono">ap-south-1</td>
        <td><span class="badge badge-danger"><span class="badge-dot badge-dot-danger"></span> Degraded</span></td>
        <td class="mono" style="text-align:right;">96.12%</td>
        <td class="mono">svc-a1b7c3</td>
      </tr>
      <tr>
        <td><strong>Cache Redis</strong></td>
        <td class="mono">us-east-1</td>
        <td><span class="badge badge-success"><span class="badge-dot badge-dot-success"></span> Live</span></td>
        <td class="mono" style="text-align:right;">99.99%</td>
        <td class="mono">svc-d2e8f1</td>
      </tr>
    </tbody>
  </table>
</div>
</div>

## Usage

```html
<table class="ds-table">
  <thead><tr><th>Region</th><th>Status</th><th>ID</th></tr></thead>
  <tbody><tr><td class="mono">us-east-1</td><td><span class="badge badge-success"><span class="badge-dot badge-dot-success"></span> Live</span></td><td class="mono">svc-8f3a21</td></tr></tbody>
</table>
```

## Rules

1. Header: uppercase + tracking (`+0.06em`) in `--muted`, 2px bottom border
2. Data rows: `--border-subtle` bottom border, 1px
3. Mono font for all IDs, hashes, numeric data
4. No row striping — borders provide visual separation
5. Tabular numerics via `font-variant-numeric: tabular-nums`
6. Use `--bg` hover on the row, not `--surface-hover`
