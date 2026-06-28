# Navigation

Top nav bar and sidebar navigation. All use the red accent for active states.

## Top Nav Bar

```html
<div class="ds-nav-bar">
  <div class="ds-nav-bar-brand">
    <span class="dot"></span>
    BiglerNet
  </div>
  <ul class="ds-nav-bar-links">
    <li><a href="#" class="active">Dashboard</a></li>
    <li><a href="#">Products</a></li>
    <li><a href="#">Docs</a></li>
  </ul>
</div>
```

## Sidebar Nav

```html
<div class="ds-sidebar">
  <div class="ds-sidebar-brand">
    <span class="brand-dot"></span>
    <span>BiglerNet</span>
  </div>
  <ul class="ds-nav">
    <div class="nav-group-title">Foundation</div>
    <li><a href="#" class="active">Colors</a></li>
    <li><a href="#">Typography</a></li>
    <div class="nav-group-title">Components</div>
    <li><a href="#">Buttons</a></li>
    <li><a href="#">Inputs</a></li>
  </ul>
</div>
```

## Tabs

```html
<div class="ds-tabs">
  <button class="ds-tab active">Overview</button>
  <button class="ds-tab">Configuration</button>
  <button class="ds-tab">Monitoring</button>
</div>
```

## Rules

- Sidebar nav: left border indicator on active item, grouped with section titles
- Tabs: bottom border indicator, accent-primary on active
- Focus state on all nav links
