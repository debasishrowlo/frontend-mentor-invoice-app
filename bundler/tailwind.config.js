const defaultTheme = require('tailwindcss/defaultTheme')
const globEntries = require('webpack-glob-entries-extended')

const paths = require("./paths.js")

// NOTE: Required because webpack does not support extended globs
const content = Object.values(globEntries(paths.src + "/**/*.{html,js,jsx,ts,tsx}"))

const fontSizes = {}
const minFontSize = 12
const maxFontSize = 70
const base = 16
let i = minFontSize
while (i <= maxFontSize) {
  fontSizes[i] = `${i / base}rem`
  i += 2
}

module.exports = {
  content: content,
  darkMode: "class",
  theme: {
    fontSize: fontSizes,
    extend: {
      fontFamily: {
        'jakarta': ['Plus Jakarta Sans'],
      },
      colors: {
        "gray": {
          100: "#F8F8FB",
          200: "#DFE3FA",
          300: "#888EB0",
        },
        "blue": {
          100: "#7E88C3",
          200: "#252945",
          300: "#1E2139",
        },
        "purple": {
          100: "#9277FF",
          200: "#7C5DFA",
        },
        "black": "#141625",
        "white": "#FFFFFF",
      },
    },
  },
  plugins: [],
}