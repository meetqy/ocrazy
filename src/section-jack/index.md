---
nav:
  path: /components
  order: 2
group:
  title: Section
  order: 1
---

# Jack <Badge>杰克-M78 星云·光之国</Badge>

```tsx
/**
 * hideActions: ["CSB"]
 * iframe: 660
 */
import React from 'react';
import { SectionJack } from 'ocrazy';

const desc = (
  <>
    🚀 Endurance Fuel mixes clear with water to provide all your calories, electrolytes and
    hydration. Simple to use with a clean, light taste. Just pour, shake and go!
  </>
);

const title = 'Endurance Fuel';

const button = (
  <button className="px-10 tracking-widest py-3 mt-5 border-2 border-zinc-800 font-medium">
    SHOP NOW
  </button>
);

const backgroundImage = 'https://gitee.com/meetqy/ocrazy/raw/main/public/images/section/jack.webp';

export default () => (
  <div style={{ height: 1200 }}>
    <SectionJack
      backgroundImage={backgroundImage}
      title={title}
      desc={desc}
      button={button}
      afterBg="linear-gradient(354deg, #99cc66 0%, #26a4ba 100%)"
    />
    <SectionJack
      backgroundImage={backgroundImage}
      title={title}
      reverse
      desc={desc}
      button={button}
      afterBg="linear-gradient(354deg, #2d2d84 0%, #2b2a29 100%)"
    />
  </div>
);
```

<API></API>
