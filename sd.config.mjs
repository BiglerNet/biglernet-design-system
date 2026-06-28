#!/usr/bin/env node
/**
 * Style Dictionary configuration for @biglernet/design-tokens
 * Transforms tokens/source.json into CSS and SCSS formats.
 */

import StyleDictionary from 'style-dictionary';

const sd = new StyleDictionary({
  source: ['tokens/source.json'],
  preprocessors: ['resolveTokens'],

  platforms: {
    // Light theme CSS (default scope)
    css: {
      transformGroup: 'css',
      buildPath: 'dist/tokens/',
      files: [
        {
          destination: 'light.css',
          format: 'css/variables',
        },
      ],
    },

    // Dark theme CSS (scoped to .theme-dark)
    'css-dark': {
      transformGroup: 'css',
      buildPath: 'dist/tokens/',
      files: [
        {
          destination: 'dark.css',
          format: 'css/variables',
          filter: (token) => {
            return token.path && token.path[token.path.length - 1].includes('-dark');
          },
        },
      ],
    },

    // SCSS variables
    scss: {
      transformGroup: 'scss',
      buildPath: 'dist/tokens/scss/',
      files: [
        {
          destination: '_variables.scss',
          format: 'scss/variables',
        },
      ],
    },

    // JSON output (for CI/validation)
    json: {
      buildPath: 'dist/tokens/json/',
      files: [
        {
          destination: 'tokens.json',
          format: 'json/legacy',
        },
      ],
    },
  },
});

await sd.buildAllPlatforms();
