module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      jadedginger: '#CE7764',
      sailingtangerine: '#FFAA57',
      youngsalmon: '#FDB7B7',
      seasaltsherbet: '#FEF3F7'
    },
    extend: {},
    family: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['"Rubik Moonrocks"'], 
      'body': ['"Open Sans"'], 
    }
  },
  plugins: [],
}
