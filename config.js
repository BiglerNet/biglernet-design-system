const path = require('path');

module.exports = {
  title: 'BiglerNet Design System',
  styleguideDir: '.styleguide/styles',
  components: 'styleguide/components/*.jsx',
  require: [
    path.resolve(__dirname, 'tokens/light.css'),
    path.resolve(__dirname, 'components/components.css'),
  ],
  theme: {
    branding: {
      title: 'BiglerNet',
      logo: 'BiglerNet',
      description: 'Design System',
    },
  },
  sections: [
    {
      name: 'Getting Started',
      components: '**',
    },
    {
      name: 'Colors',
      components: 'styleguide/components/ColorPalette.jsx',
    },
    {
      name: 'Components',
      components: [
        'styleguide/components/Button.jsx',
        'styleguide/components/Input.jsx',
        'styleguide/components/Badge.jsx',
        'styleguide/components/Card.jsx',
        'styleguide/components/Table.jsx',
        'styleguide/components/Navigation.jsx',
        'styleguide/components/Toggle.jsx',
      ],
    },
  ],
  serverPort: 6060,
  version: require('./package.json').version,
};
