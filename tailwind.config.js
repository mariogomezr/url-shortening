/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily:{
        'primary': ['Poppins']
      },
      colors: {
        textGray: 'hsl(0, 0%, 75%)',
        cyan: 'hsl(180, 66%, 49%)',
        DarkViolet: 'hsl(257, 27%, 26%)',
        greyViolet: 'hsl(257, 7%, 63%)',
        whiteSmoke: 'hsl(230,25%,95%)',
        lightViolet: 'hsl(255,25%,33%)'
      },
      maxWidth: {
        '150': '150px',
      },
    }
  },
  plugins: []
};
