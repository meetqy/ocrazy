---
nav:
  path: /components
group:
  title: 业务组件
---

# SignIn

登录`sign-in`

```tsx
/**
 * hideActions: ["CSB"]
 */
import React from 'react';
import { SignIn } from 'ocrazy';

export default () => <SignIn />;
```

## locales

- 类型：Array<[String, String]>
- 默认值：[['en-US', 'English'], ['zh-CN', '中文']]
- 详细：该配置为二维数组，第一项配置会作为站点默认的 locale。

每一项配置是一个长度为 2 的数组，数组的第一个值代表该 locale 的 name，会用于拼接路由前缀和检测文件名属于什么 locale，第二个值代表该 locale 的 label，会用作语言切换时的选项显示。

默认 locale 的文件名后缀是可选的，比如，在默认配置下，index.md 和 index.en-US.md 等价。

## 特性

- 📦 开箱即用，将注意力集中在组件开发和文档编写上
- 📋 丰富的 Markdown 扩展，不止于渲染组件 demo
- 🏷 基于 TypeScript 类型定义，自动生成组件 API
- 🎨 主题轻松自定义，还可创建自己的 Markdown 组件
- 📱 支持移动端组件库研发，内置移动端高清渲染方案
- 📡 一行命令将组件资产数据化，与下游生产力工具串联
