# Navigation

Top nav bar and sidebar navigation. All use the red accent for active states.

<div class="demo">
<div style="padding:24px;width:100%;max-width:560px;">
  <div class="ds-nav-bar">
    <div class="ds-nav-bar-brand">
      <span class="dot"></span>
      BiglerNet
    </div>
    <ul class="ds-nav-bar-links">
      <li><a href="#" class="active">Dashboard</a></li>
      <li><a href="#">Products</a></li>
      <li><a href="#">Docs</a></li>
      <li><a href="#">Settings</a></li>
    </ul>
  </div>
</div>
</div>

<div class="demo">
<div style="padding:24px;width:100%;max-width:560px;">
  <div class="ds-tabs">
    <button class="ds-tab active">Overview</button>
    <button class="ds-tab">Configuration</button>
    <button class="ds-tab">Monitoring</button>
    <button class="ds-tab">Logs</button>
  </div>
</div>
</div>

## Usage

```html
<div class="ds-nav-bar">
  <div class="ds-nav-bar-brand"><span class="dot"></span> BiglerNet</div>
  <ul class="ds-nav-bar-links">
    <li><a href="#" class="active">Dashboard</a></li>
    <li><a href="#">Products</a></li>
  </ul>
</div>
```

## Rules

1. Sidebar nav: left border indicator on active item, grouped with section titles
2. Tabs: bottom border indicator, accent-primary on active
3. Focus state on all nav links
