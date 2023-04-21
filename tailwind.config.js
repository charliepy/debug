const Colors = require('tailwindcss/colors');

const extendColors = {
  pampas: '#f7f4f1',
  'lightning-yellow': '#f9c018',
  'bali-hai': '#799fb3',
  'copper-rust': '#99494E',
  'ebony-clay': '#202737',
  'aqua-forest': '#5aaa6e',
  'brandy-punch': '#d79a36',
  pomegranate: '#f44336',
  azul: '#2e8bb5',
  thunder: '#666666',
  storm: '#999999',
  cloud: '#cccccc',
  happy: '#e66922',
  ibis: '#1f2857',
  plain: {
    ...Colors.neutral,
  },
};

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: extendColors,
      screens: {
        md: '640px',
        wide: '1366px',
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: extendColors['bali-hai'],
          secondary: extendColors.happy,
          accent: extendColors['lightning-yellow'],
          neutral: extendColors['ebony-clay'],
          'base-100': 'white',
          info: extendColors.azul,
          success: extendColors['aqua-forest'],
          warning: extendColors['brandy-punch'],
          error: extendColors.pomegranate,
        },
      },
    ],
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@formkit/themes/tailwindcss'),
    require('daisyui'),
  ],
};
