const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css');

mix.js('resources/js/admin.js', 'public/js/admin.js');
mix.js('resources/js/client.js', 'public/js/client.js');

mix.styles('resources/css/admin.css', 'public/css/admin.css');
mix.styles('resources/css/client.css', 'public/css/client.css');
