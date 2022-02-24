import { defineConfig } from 'dumi';

const prefix = '/ocrazy';

export default defineConfig({
  title: 'oCrazy',
  favicon: `${prefix}/images/crazy.png`,
  logo: `${prefix}/images/crazy.png`,
  outputPath: 'docs-dist',
  mode: 'site',
  base: prefix,
  publicPath: prefix + '/',
  locales: [
    ['zh-CN', '中文'],
    ['en-US', 'English'],
  ],
  styles: [
    `a {display: inline-flex;align-items:center;}`,
    `.markdown ul {list-style-type: disc;!important}`,
  ],
  // more config: https://d.umijs.org/config
  extraPostCSSPlugins: [require('tailwindcss')()],
});
