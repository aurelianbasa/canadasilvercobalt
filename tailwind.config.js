module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
    './src/templates/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
    fontSize: {
      '6xl': ['72px', { lineHeight: '80px', fontWeight: 600 }],
      '5xl': ['60px', { lineHeight: '72px', fontWeight: 600 }],
      '4xl': ['48px', { lineHeight: '56px', fontWeight: 600 }],
      '3xl': ['30px', { lineHeight: '40px', fontWeight: 600 }],
      '2xl': ['20px', { lineHeight: '32px', fontWeight: 500 }],
      lg: ['20px', { lineHeight: '32px', fontWeight: 400 }],
      base: ['16px', { lineHeight: '24px', fontWeight: 400 }],
      sm: ['12px', { lineHeight: '16px', fontWeight: 400 }],
    },
    colors: {
      primary: '#e4a534', // yellow
      secondary: '#2D3748', // gray dark
      tertiary: '#718096', // gray light
      gray: '#93999B',
      brown: '#908169',
      beigeLight: '#F8F8F4',
      beige: '#EEECE6',
      black: '#1C1D20',
      white: '#fff',
      transparent: 'transparent',
    },
    container: {
      screens: {
        '2xl': '1440px',
      },
    },
    extend: {
      gridTemplateColumns: {
        '3-9': '3fr 9fr',
        '8-4': '8fr 4fr',
      },
      boxShadow: {
        button: 'inset 0 0 200px 0 rgba(0, 0, 0, 0.1)',
      },
    },
  },
};
