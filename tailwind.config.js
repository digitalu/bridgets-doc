module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "hljs": {
          "foreground": "rgb(35, 35, 36)",
          "foreground-light": "rgb(140, 152, 162)",
          "offset": "rgb(247, 249, 252)",
          "comments": "rgb(160, 161, 167)"
        },
        "theme": {
          "main": "#404EED",
          "dark": "#0E141B"
        }
      },
      width: {
        "bar": 'calc(100% - 300px)'
      },
      fontFamily: {
        'code':  ["JetBrains Mono, system ui"]
      }
    }
  },
};
