let mix = require('laravel-mix');
require('laravel-mix-eslint');
require('laravel-mix-stylelint');
// require('laravel-mix-svg');
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */


if (!mix.inProduction()) {
  mix.webpackConfig({
      devtool: 'source-map'
  })
  .sourceMaps()
}

mix
  .js('src/scripts/index.js', 'dist/js')
  .eslint({
    fix: true,
    cache: false,
    failOnWarning: false
    //...
  })
  //  .stylelint({
  //     context: './',
  //     failOnError: false,
  //     files: ['**/*.scss']
  //  })
  .sass('src/styles/style.scss', 'dist/css')
  .options({
    processCssUrls: false,
    postCss: [
      require('autoprefixer')(),
      require('postcss-fixie')(),
      require('postcss-pxtorem')(),
      require('postcss-reporter')(),
      require('doiuse')({
        browsers: ['ie >= 11', '> 1%']
      })
    ]
  })