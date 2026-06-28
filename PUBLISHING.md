# Publishing @biglernet/design-tokens

The package is published to [GitHub Packages](https://github.com/features/packages) via a release-triggered workflow.

## How to Publish

1. Update `package.json` version (patch / minor / major)
2. `git commit -m "chore: bump to X.Y.Z" && git tag vX.Y.Z && git push --tags`
3. Create a release in GitHub > Settings > Releases > Draft a new release
4. Click "Publish release" — the workflow automatically builds and publishes

## Versioning Policy

| Version Change | When |
|---|---|
| `PATCH` (0.1.0 → 0.1.1) | Bug fixes to existing tokens or component styles |
| `MINOR` (0.1.0 → 0.2.0) | New tokens or components added |
| `MAJOR` (0.1.0 → 1.0.0) | Backward-incompatible token renames or removals |

## Publishing from CLI (alternative)

```bash
npm run build
npm version patch               # or minor / major
npm run publish:github
```

Requires `GITHUB_TOKEN` set in your environment or a `.npmrc` with auth:

```bash
# ~/.npmrc (or project-level)
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_PAT
```

## Publishing to npmjs.org (public)

The package is configured to publish to GitHub Packages by default. To publish to npmjs.org:

```bash
npm publish --registry https://registry.npmjs.org
```

## Consuming

See [CONSUMING.md](CONSUMING.md) for installation instructions for internal products vs public.
