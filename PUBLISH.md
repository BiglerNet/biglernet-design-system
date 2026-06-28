# Publish to GitHub Packages

## 1. Create a fine-grained personal access token (PAT)

Go to GitHub > Settings > Developer settings > Personal access tokens > Fine-grained tokens
- Give it a descriptive name (e.g. `npm-publish`)
- **Owner:** BiglerNet (or your org/username)
- **Repository access:** Only select repositories → choose `design-system`
- **Permissions:**
  - Contents: Read and write
  - Packages: Write

Copy the token — it starts with `github_pat_...`

## 2. Add token as a repository secret

Go to your repo > Settings > Secrets and variables > Actions > New repository secret
- Name: `NPM_TOKEN`
- Value: paste your PAT

## 3. Add `.npmrc` to the root of your repo

This tells npm to use GitHub Packages for the `@biglernet` scope when present.

```bash
echo "@biglernet:registry=https://npm.pkg.github.com" > .npmrc
```

The `.npmrc` should NOT be committed (it would expose the scope configuration pattern). Add it to `.gitignore`.

## 4. Install from another project

```bash
# Create .npmrc in the consuming project
echo "@biglernet:registry=https://npm.pkg.github.com" > .npmrc
echo "//npm.pkg.github.com/:_authToken=YOUR_PAT_HERE" >> .npmrc
npm install @biglernet/design-tokens
```

Or via git:
```bash
npm install "git+https://github.com/BiglerNet/design-system.git"
```
