# Toggles

Toggle switches, checkbox groups, and selection controls.

<div class="demo">
<div style="display:flex;flex-direction:column;gap:16px;padding:24px;width:100%;max-width:300px;">
  <div style="display:flex;align-items:center;justify-content:space-between;">
    <span style="font-size:14px;color:var(--fg);">Dark theme</span>
    <label class="ds-toggle">
      <input type="checkbox">
      <span class="ds-toggle-track"></span>
      <span class="ds-toggle-thumb"></span>
    </label>
  </div>
  <div style="display:flex;align-items:center;justify-content:space-between;">
    <span style="font-size:14px;color:var(--fg);">Notifications</span>
    <label class="ds-toggle">
      <input type="checkbox" checked>
      <span class="ds-toggle-track"></span>
      <span class="ds-toggle-thumb"></span>
    </label>
  </div>
  <div style="display:flex;align-items:center;justify-content:space-between;">
    <span style="font-size:14px;color:var(--fg);">Auto-sync</span>
    <label class="ds-toggle">
      <input type="checkbox">
      <span class="ds-toggle-track"></span>
      <span class="ds-toggle-thumb"></span>
    </label>
  </div>
</div>
</div>

<div class="demo">
<div style="display:flex;flex-direction:column;gap:12px;padding:24px;width:100%;max-width:300px;">
  <label style="display:flex;align-items:center;gap:8px;font-size:14px;color:var(--fg);cursor:pointer;">
    <input type="checkbox" checked style="width:16px;height:16px;accent-color:var(--accent-primary);"> API access
  </label>
  <label style="display:flex;align-items:center;gap:8px;font-size:14px;color:var(--fg);cursor:pointer;">
    <input type="checkbox" style="width:16px;height:16px;accent-color:var(--accent-primary);"> Webhook integration
  </label>
  <label style="display:flex;align-items:center;gap:8px;font-size:14px;color:var(--fg);cursor:pointer;">
    <input type="checkbox" checked style="width:16px;height:16px;accent-color:var(--accent-primary);"> SSO / SAML
  </label>
  <label style="display:flex;align-items:center;gap:8px;font-size:14px;color:var(--fg);cursor:pointer;">
    <input type="checkbox" style="width:16px;height:16px;accent-color:var(--accent-primary);"> LDAP sync
  </label>
</div>
</div>

## Usage

```html
<label class="ds-toggle">
  <input type="checkbox">
  <span class="ds-toggle-track"></span>
  <span class="ds-toggle-thumb"></span>
</label>
```

## Rules

1. Minimum 44x44px touch target for all toggles
2. Focus-visible outlines on all interactive elements
3. Accent-primary when toggled on, neutral border when off
