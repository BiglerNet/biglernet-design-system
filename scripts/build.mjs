#!/usr/bin/env node

/**
 * Build script for @biglernet/design-tokens
 * Copies source files into dist/.
 *
 * Usage:
 *   npm run build          -- build once
 *   npm run dev            -- rebuild on changes (uses nodemon)
 */

import { existsSync, mkdirSync, readFileSync, writeFileSync, rmSync } from 'fs';
import { join, resolve, dirname } from 'path';

const ROOT = resolve(import.meta.dirname, '..');

const SRC_FILES = [
  { src: 'tokens/light.css', dest: 'dist/tokens/light.css' },
  { src: 'tokens/dark.css', dest: 'dist/tokens/dark.css' },
  { src: 'tokens/source.json', dest: 'dist/tokens/source.json' },
  { src: 'components/components.css', dest: 'dist/components/components.css' },
];

function copyFile(entry) {
  const srcPath = join(ROOT, entry.src);
  const destPath = join(ROOT, entry.dest);

  if (!existsSync(srcPath)) {
    if (entry.src === 'tokens/source.json') {
      console.log(`  - ${entry.src} (skipped, not yet created)`);
      return true;
    }
    console.error(`  ✗ Missing source: ${entry.src}`);
    return false;
  }

  const destDir = dirname(destPath);
  if (!existsSync(destDir)) {
    mkdirSync(destDir, { recursive: true });
  }

  const content = readFileSync(srcPath, 'utf8');
  writeFileSync(destPath, content);
  console.log(`  ✓ ${entry.dest}`);
  return true;
}

function build() {
  console.log('\n  @biglernet/design-tokens');
  console.log('  ───────────────---─────\n');

  const distDir = join(ROOT, 'dist');
  if (existsSync(distDir)) {
    rmSync(distDir, { recursive: true, force: true });
  }
  mkdirSync(distDir, { recursive: true });

  let ok = true;
  for (const entry of SRC_FILES) {
    if (!copyFile(entry)) {
      ok = false;
    }
  }

  if (!ok) {
    console.error('\nBuild failed\n');
    process.exit(1);
  }

  console.log('\nDone\n');
}

const args = process.argv.slice(2);
const isWatch = args.includes('--watch') || args.includes('-w') || args.includes('dev');

if (isWatch) {
  console.log('Watching for changes...\n');
  const watcher = watch(join(ROOT, 'tokens'), { recursive: true });
  watcher.on('change', (eventType, file) => {
    console.log(`  ${new Date().toLocaleTimeString()} — ${file} changed`);
    build();
  });
  const watcher2 = watch(join(ROOT, 'components'), { recursive: true });
  watcher2.on('change', (eventType, file) => {
    console.log(`  ${new Date().toLocaleTimeString()} — ${file} changed`);
    build();
  });
} else {
  build();
}
