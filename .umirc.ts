import { defineConfig } from 'dumi';

const NODE_ENV = process.env.NODE_ENV;

export default defineConfig({
  title: 'oCrazy',
  favicon: '/images/crazy.png',
  logo: '/images/crazy.png',
  outputPath: 'docs-dist',
  mode: 'site',
  // more config: https://d.umijs.org/config
  extraPostCSSPlugins: [
    require('tailwindcss')({
      config: './tailwind.config.js',
    }),
  ],
});
