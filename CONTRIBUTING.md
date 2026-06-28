# Contributing to BiglerNet Design System

## Quick Start

```bash
npm run build          # build dist/
npm run dev            # watch mode (rebuild on file changes)
npm pack               # create a tarball for local testing
```

## Local Testing

```bash
npm pack
mkdir /tmp/test-project
cd /tmp/test-project
npm init -y
npm install /path/to/biglernet-design-tokens-0.1.0.tgz
```

Verify the CSS files are accessible at `node_modules/@biglernet/design-tokens/dist/tokens/light.css`.

## Development Workflow

1. Edit source files in `tokens/` and `components/`.
2. Run `npm run dev` to rebuild automatically.
3. Verify in `prototype.html` (open in browser).
4. Push and open a PR.

## Publishing

```bash
npm run build
npm version [patch|minor|major]
npm publish --registry https://registry.npmjs.org
git push && git push --tags
```

Tokens version follows semver. Renaming a token = MAJOR version bump.

## Token Additions

1. Add to `tokens/light.css` and `tokens/dark.css`.
2. Document in `DESIGN.md`.
3. Add to `prototype.html` for visual verification.
