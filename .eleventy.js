const htmlmin = require("html-minifier")

module.exports = function(eleventyConfig) {
  eleventyConfig.addWatchTarget('./tailwind.config.js')
  eleventyConfig.addWatchTarget('./src/assets/css/tailwind.css')
  eleventyConfig.addPassthroughCopy({
    './node_modules/alpinejs/dist/cdn.js': './assets/js/alpine.js',
    './src/assets/js/*': './assets/js/',
    './src/assets/img/*': './assets/img/',
    './src/assets/css/extra.css': './style.css',
  })

  eleventyConfig.addTransform("htmlmin", function(content, outputPath) {
    // Eleventy 1.0+: use this.inputPath and this.outputPath instead
    if (outputPath.endsWith(".html")) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      })
      return minified
    }
    return content
  })

  return {
    dir: {
      input: 'src',
      includes: '_includes',
      data: '_data',
      output: `_site`
    }
  }

}