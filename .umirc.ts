import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'oCrazy',
  favicon: '/images/crazy.png',
  logo: '/images/crazy.png',
  outputPath: 'docs-dist',
  mode: 'site',
  publicPath: process.env.NODE_ENV === 'production' ? '/ocrazy/' : '/',
  // more config: https://d.umijs.org/config
  extraPostCSSPlugins: [
    require('tailwindcss')({
      config: './tailwind.config.js',
    }),
  ],
});
