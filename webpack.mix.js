const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss')

mix.disableSuccessNotifications();
mix.setPublicPath('web/assets');

mix.js('src/js/app.js', 'js')
   .options({
       processCssUrls: false,
       postCss: [
           tailwindcss('tailwind.config.js'),
       ]
   })
   .sass('src/sass/app.scss', 'css')
   .version();