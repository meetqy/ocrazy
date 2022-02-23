---
nav:
  path: /components
group:
  title: Section
---

# Zoffy <Badge>佐菲-M78 星云·光之国</Badge>

```tsx
/**
 * hideActions: ["CSB"]
 * iframe: 660
 */
import React from 'react';
import { SectionZoffy } from 'ocrazy';

export default () => <SectionZoffy rightWrapper="/images/section/zoffy.png" />;
```

## 基本使用

```tsx
/**
 * hideActions: ["CSB"]
 * iframe: 660
 */
import React from 'react';
import { SectionZoffy } from 'ocrazy';

export default () => (
  <SectionZoffy
    title="爸爸的快乐！"
    desc="我是你爸爸，我真伟大，养你这么大，你还不听话，天天到晚去玩耍！"
    button="爸爸去哪儿了 👉🏻"
    rightWrapper="/images/section/zoffy.png"
  />
);
```

## 反向

```tsx
/**
 * hideActions: ["CSB"]
 * iframe: 660
 */
import React from 'react';
import { SectionZoffy } from 'ocrazy';

export default () => <SectionZoffy rightWrapper="/images/section/zoffy.png" reverse />;
```

## 高度自动

切换到移动端试试！

```tsx
/**
 * hideActions: ["CSB"]
 * iframe: 600
 */
import React from 'react';
import { SectionZoffy } from 'ocrazy';

export default () => (
  <SectionZoffy rightWrapper="/images/section/zoffy.png" reverse height="auto" />
);
```

## 自定义

```tsx
/**
 * hideActions: ["CSB"]
 * iframe: 600
 */
import React from 'react';
import { SectionZoffy } from 'ocrazy';

export default () => (
  <SectionZoffy
    rightWrapper={
      <div
        style={{
          width: '400px',
          height: '232px',
          background: '#fff',
          border: '1px solid rgba(0,0,0,.125)',
          borderRadius: '0.25rem',
          padding: '20px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              border: '1px solid rgba(0,0,0,.125)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '36px',
            }}
          >
            🦆
          </div>
          <span style={{ fontSize: '24px', marginLeft: '20px' }}>oCrazy</span>
        </div>
        <p style={{ marginTop: '20px' }}>○ React 响应式UI组件库</p>
        <p style={{ marginTop: '10px' }}>○ 快乐吗！</p>
        <p style={{ marginTop: '10px' }}>○ 我很快乐！</p>
      </div>
    }
    reverse
  />
);
```

<API></API>

<Alert type='info'>
  样式来源：<a href='https://monzo.com/' target="_blank">https://monzo.com/</a>
</Alert>
