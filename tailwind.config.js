module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {    
      colors: {
      transparent: 'transparent',
      current: 'currentColor',
      orange1: 	'#e38826',
      cyan1: '#006970',
      cyan2: '#004241',
      col1: '#ffffff',
      col2: '#f2f2f2',
      },
      fontFamily: {
        deca: ['"Lexend Deca"'],
        shoulders: ['"Big Shoulders Display"'],
        },
      backgroundImage: {
        sedan: "url(/C:/Users/Marc/Documents/1_WebDev/9_webdev/HTML_CSS/tailwind/carrental/images/icon-sedans.svg)",
      },
      width: {
        wmax: '51.5rem',
      },
      height: {
        hmax: '37.5rem',
      }
    },
  },
  plugins: [],
}
