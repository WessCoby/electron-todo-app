module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true
  },
  purge: {
    enable: process.env.NODE_ENV === 'production',
    content: ['src/**/*.tsx', 'public/index.html']
  },
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#fdfbe7",
          200: "#fbf6d0",
          300: "#f9f2b8",
          400: "#f7eda1",
          500: "#f5e989",
          600: "#c4ba6e",
          700: "#938c52",
          800: "#625d37",
          900: "#312f1b"
        },
        secondary: {
          100: "#e3f2f0",
          200: "#c6e6e2",
          300: "#aad9d3",
          400: "#8dcdc5",
          500: "#71c0b6",
          600: "#5a9a92",
          700: "#44736d",
          800: "#2d4d49",
          900: "#172624"
        },
      }
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/custom-forms')
  ]
}
