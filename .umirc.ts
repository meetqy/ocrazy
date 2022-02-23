import { defineConfig } from 'dumi';

const NODE_ENV = process.env.NODE_ENV;

const baseUrl = NODE_ENV === 'production' ? '/ocrazy/' : '/';
const imageUrl = 'https://gitee.com/meetqy/ocrazy/raw/main/public/images';

export default defineConfig({
  title: 'oCrazy',
  favicon: `${imageUrl}/crazy.png`,
  logo: `${imageUrl}/crazy.png`,
  outputPath: 'docs-dist',
  mode: 'site',
  publicPath: baseUrl,
  base: baseUrl,
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
