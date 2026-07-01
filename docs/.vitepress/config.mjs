import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'BiglerNet Design System',
  description: 'Design tokens and components for consistent cross-product UI.',
  base: '/',
  cleanUrls: true,
  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap' }],
  ],
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'Tokens', link: '/tokens/colors' },
      { text: 'Components', link: '/components/buttons' },
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          items: [
            { text: 'Getting Started', link: '/guide/getting-started' },
          ],
        },
      ],
      '/tokens/': [
        {
          text: 'Foundation',
          items: [
            { text: 'Colors', link: '/tokens/colors' },
            { text: 'Typography', link: '/tokens/typography' },
            { text: 'Spacing', link: '/tokens/spacing' },
            { text: 'Radius', link: '/tokens/radius' },
            { text: 'Shadows', link: '/tokens/shadows' },
          ],
        },
      ],
      '/components/': [
        {
          text: 'Components',
          items: [
            { text: 'Buttons', link: '/components/buttons' },
            { text: 'Inputs', link: '/components/inputs' },
            { text: 'Badges', link: '/components/badges' },
            { text: 'Cards', link: '/components/cards' },
            { text: 'Tables', link: '/components/tables' },
            { text: 'Navigation', link: '/components/navigation' },
            { text: 'Toggles', link: '/components/toggles' },
          ],
        },
      ],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/BiglerNet/biglernet-design-system' },
    ],
    darkModeSwitchLabel: 'Appearance',
    dark: 'dark',
    light: 'light',
    outline: {
      level: [2, 3],
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright BiglerNet Team',
    },
    search: {
      provider: 'local',
    },
  },
  appearance: true,
})
