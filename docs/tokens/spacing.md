# Spacing

All spacing is based on a 4px grid. Never use values outside this scale.

| Token | Value | Use for |
|---|---|---|
| `--space-xs` | 4px | Tight gaps, icon spacing |
| `--space-sm` | 8px | Button padding, small gaps |
| `--space-md` | 16px | Card padding base |
| `--space-lg` | 24px | Grid gutters, section spacing |
| `--space-xl` | 32px | Layout sections |
| `--space-2xl` | 48px | Hero spacing |
| `--space-3xl` | 64px | Full-page section spacing |

## Usage

```css
.card {
  padding: var(--space-xl);
  gap: var(--space-lg);
}

.button {
  padding: var(--space-sm) var(--space-lg);
}
```

## Rules

- Never use raw pixel values — always use a spacing token.
- Stick to multiples of the 4px base.
