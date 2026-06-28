import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'BiglerNet Design System',
  description: 'Design tokens and components for consistent cross-product UI.',
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
            { text: 'Consuming Tokens', link: '/guide/consuming' },
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
      { icon: 'github', link: 'https://github.com/biglernet/design-system' },
    ],
  },
})
