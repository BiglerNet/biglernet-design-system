# Badges

Status indicators and metadata labels. Uses monospace font with dot indicators.

## Status Badges

Status badges use a tinted background with matching text and border colors.

```html
<span class="badge badge-primary"><span class="badge-dot badge-dot-primary"></span> Primary</span>
<span class="badge badge-success"><span class="badge-dot badge-dot-success"></span> Live</span>
<span class="badge badge-warn"><span class="badge-dot badge-dot-warn"></span> Review</span>
<span class="badge badge-danger"><span class="badge-dot badge-dot-danger"></span> Error</span>
<span class="badge badge-info"><span class="badge-dot badge-dot-info"></span> Info</span>
<span class="badge badge-muted">Muted</span>
```

## Data Badges

Neutral badges for metadata like regions, versions, and tags.

```html
<span class="badge badge-info">us-east-1</span>
<span class="badge badge-muted">v2.4.1</span>
<span class="badge badge-primary">enterprise</span>
<span class="badge badge-success">ssl</span>
```

## Rules

- Never use more than one status color on the same screen.
- Dot indicator: 6px circle matching the status color.
- Data badges use neutral bg/text/border with mono font.
