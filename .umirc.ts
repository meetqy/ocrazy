import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'oCrazy',
  favicon: '/ocrazy/images/crazy.png',
  logo: '/ocrazy/images/crazy.png',
  outputPath: 'docs-dist',
  mode: 'site',
  publicPath: process.env.NODE_ENV === 'production' ? '/ocrazy/' : '/',
  base: process.env.NODE_ENV === 'production' ? '/ocrazy/' : '/',
  // more config: https://d.umijs.org/config
  extraPostCSSPlugins: [
    require('tailwindcss')({
      config: './tailwind.config.js',
    }),
  ],
});
