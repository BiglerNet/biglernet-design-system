# Tables

Data tables with hairline borders and tabular numerics.

## Default

```html
<table class="ds-table">
  <thead>
    <tr>
      <th>Region</th>
      <th>Status</th>
      <th>ID</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>us-east-1</td>
      <td><span class="badge badge-success"><span class="badge-dot badge-dot-success"></span> Live</span></td>
      <td class="mono">svc-8f3a21</td>
    </tr>
    <tr>
      <td>eu-west-1</td>
      <td><span class="badge badge-warn"><span class="badge-dot badge-dot-warn"></span> Beta</span></td>
      <td class="mono">svc-c4e9d7</td>
    </tr>
  </tbody>
</table>
```

## Rules

- Header: uppercase + tracking (`+0.06em`) in `--muted`, 2px bottom border
- Data rows: `--border-subtle` bottom border, 1px
- Mono font for all IDs, hashes, numeric data
- No row striping — borders provide visual separation
- Tabular numerics via `font-variant-numeric: tabular-nums`
- Use `--bg` hover on the row, not `--surface-hover`
