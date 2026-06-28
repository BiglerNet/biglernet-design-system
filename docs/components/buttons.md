---
aside:
  - text: Variants
    items:
      - { text: 'Primary', link: '/components/buttons#primary' }
      - { text: 'Secondary', link: '/components/buttons#secondary' }
      - { text: 'Ghost', link: '/components/buttons#ghost' }
      - { text: 'Danger', link: '/components/buttons#danger' }
  - text: Sizes
    items:
      - { text: 'Default', link: '/components/buttons#sizes' }
---

# Buttons

Buttons signal actions. Primary uses BiglerNet red; all others use the neutral palette.

## Variants

### Primary

Primary CTAs use the BiglerNet red accent.

```html
<button class="ds-btn ds-btn-primary">Get Started</button>
```

### Secondary

Used for secondary actions. Neutral surface with a border.

```html
<button class="ds-btn ds-btn-secondary">Cancel</button>
```

### Ghost

Text-only button. Used for actions where you don't want visual weight.

```html
<button class="ds-btn ds-btn-ghost">Learn more</button>
```

### Danger

Destructive actions (delete, remove) use the danger state.

```html
<button class="ds-btn ds-btn-danger">Delete</button>
```

## Sizes

```html
<button class="ds-btn ds-btn-primary ds-btn-sm">Small</button>
<button class="ds-btn ds-btn-primary">Default</button>
<button class="ds-btn ds-btn-primary ds-btn-lg">Large</button>
```

## Rules

- All sizes share the same weight (600), font-family, and letter-spacing.
- Focus state: 2px solid `--accent-primary` outline, 2px offset.
- Use `:hover` for color shift, not for interaction hints.
