module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        'autoFill': 'repeat(auto-fill, minmax(300px, 1fr))'
      },
      height: {
        'card': '380px',
        'cardProject': '350px',
        'image': '200px',
        'modal': '400px'
      },
      width: {
        'modal': '450px',
        'mobile-modal': '300px'
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'overlay': 'rgba(0,0,0,0.3)'
      }),
      flex: {
        '3': '3 3 0%',
        '4': '4 4 0%',
        '5': '5 5 0%',
        '6': '6 6 0%',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
