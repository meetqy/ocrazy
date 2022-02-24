---
nav:
  path: /components
  order: 2
group:
  title: Section
  order: 1
---

# Zoffy <Badge>佐菲-M78 星云·光之国</Badge>

效果：两边各占 50%，随着屏幕改变调整屏幕两边间距，移动端从 row 变为 col 方式排列。

```tsx
/**
 * hideActions: ["CSB"]
 * iframe: 660
 */
import React from 'react';
import { SectionZoffy } from 'ocrazy';

export default () => (
  <SectionZoffy rightWrapper="https://gitee.com/meetqy/ocrazy/raw/main/public/images/section/zoffy.png" />
);
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
    rightWrapper="https://gitee.com/meetqy/ocrazy/raw/main/public/images/section/zoffy.png"
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

export default () => (
  <SectionZoffy
    rightWrapper="https://gitee.com/meetqy/ocrazy/raw/main/public/images/section/zoffy.png"
    reverse
  />
);
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
  <SectionZoffy
    rightWrapper="https://gitee.com/meetqy/ocrazy/raw/main/public/images/section/zoffy.png"
    reverse
    height="auto"
  />
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
  来源：<a href='https://monzo.com/' target="_blank">https://monzo.com/</a>
</Alert>

## 更多样式

```tsx
/**
 * hideActions: ["CSB"]
 * iframe: 660
 */
import React from 'react';
import { SectionZoffy } from 'ocrazy';

export default () => (
  <SectionZoffy
    rightWrapper="/images/section/zoffy-1.png"
    title="L'app pour la tranquillité d'esprit"
    desc="Ouvrez des comptes en GBP, EUR et RON en quelques minutes avec des taux de change avantageux, des rechargements instantanés et une protection intégrée pour vos achats et factures"
    style={{ background: '#0b72fd' }}
    descStyle={{ color: 'hsla(0,0%,100%,0.65)', fontSize: '22px', lineHeight: '28px' }}
    button={
      <button
        style={{
          padding: '12px 24px',
          background: 'white',
          color: '#0b72fd',
          borderRadius: '12px',
        }}
      >
        S'inscrire
      </button>
    }
  />
);
```

<Alert type='info'> 
  来源：<a href='https://monese.com/gb/fr' target="_blank">https://monese.com/gb/fr</a> 
</Alert>
