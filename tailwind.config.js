module.exports = {
  content: ['src/**/*.njk'],
  safelist: [],
  theme: {
    extend: {
      colors: {
        change: 'transparent',
        "green": {
          "100": "#E0E0AC",
          "200": "#A8C78B",
          "300": "#55B14E",
        }

      },
    },
  },
  plugins: [],
}