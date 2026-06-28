# Typography

Two-family type system: Inter for display/headlines, system-ui for body, IBM Plex Mono for data/code.

## Type Scale

| Role | Font | Size | Weight | Line Height | Tracking |
|---|---|---|---|-|---|
| Display | Inter | 48–72px | 600–700 | 1.0–1.1 | -0.02em |
| H1 | Inter | 32–48px | 600 | 1.2 | -0.02em |
| H2 | Inter | 24–32px | 600 | 1.25 | -0.01em |
| H3 | Inter | 20–24px | 590 | 1.3 | -0.01em |
| Body | system-ui | 15–18px | 450 | 1.6 | normal |
| Small | system-ui | 13–14px | 450 | 1.5 | +0.01em |
| Caption | IBM Plex Mono | 11–12px | 400 | 1.4 | normal |
| UI label | system-ui | 12–13px | 590–600 | 1.4 | +0.06em (ALL CAPS) |

## Usage

```css
h1 {
  font-family: var(--font-display);
  font-size: var(--type-scale-h1);
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1.2;
}

p {
  font-family: var(--font-body);
  font-size: var(--type-scale-body);
  font-weight: 450;
  line-height: 1.6;
}

.mono {
  font-family: var(--font-mono);
  font-size: var(--type-scale-caption);
}
```

## Rules

- Three-weight system: 450 (read), 590 (emphasize), 600 (announce). Never use 700+ unless you have a good reason.
- Use `letter-spacing` on ALL CAPS text (+0.06em) and negative tracking on large headings (-0.02em).
- Monospace font for IDs, hashes, timestamps, and code.
- Avoid `scrollIntoView` in embedded previews (breaks iframes).
- Never use `text-align: justify` (creates rivers on the web).
