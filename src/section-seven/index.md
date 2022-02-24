---
nav:
  path: /components
  order: 2
group:
  title: Section
  order: 2
---

# Seven <Badge>赛文-M78 星云·光之国</Badge>

效果：随着窗口变小 => 两边间距变小 => 右侧内容被裁剪 => 移动端隐藏右侧内容

```tsx
/**
 * hideActions: ["CSB"]
 * iframe: 660
 */
import React from 'react';
import { SectionSeven } from 'ocrazy';

export default () => (
  <SectionSeven
    rightWrapper={
      <div style={{ width: '428px' }}>
        <img
          src="https://gitee.com/meetqy/ocrazy/raw/main/public/images/section/seven.png"
          style={{ height: '600px' }}
          className="w-auto"
        />
      </div>
    }
  />
);
```

## 自定义

```tsx
/**
 * hideActions: ["CSB"]
 * iframe: 660
 */
import React from 'react';
import { SectionSeven } from 'ocrazy';

export default () => (
  <SectionSeven
    title="今朝有酒今朝醉"
    desc="一篇诗，一斗酒，一曲长歌，一剑天涯。"
    jumpText="李白！"
    formWrapper={
      <div className="flex flex-col">
        <p>李白，是腾讯手游《王者荣耀》中的一位刺客型英雄角色，原型为唐代诗人“诗仙”李白。</p>
      </div>
    }
    rightWrapper={
      <div style={{ width: '428px' }}>
        <img
          src="https://gitee.com/meetqy/ocrazy/raw/main/public/images/section/seven.png"
          style={{ height: '600px' }}
          className="w-auto"
        />
      </div>
    }
  />
);
```

<API></API>

<Alert type='info'> 
  来源：<a href='https://www.coinbase.com/' target="_blank">https://www.coinbase.com/</a> 
</Alert>
