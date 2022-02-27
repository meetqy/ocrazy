import { useScroll } from 'ahooks';
import type { CSSProperties } from 'react';
import React, { useState } from 'react';
import './index.less';

export interface SectionJackProps {
  /**反向 */
  reverse?: boolean;
  /**容器最小高度 */
  minHeight?: string;
  /**标题 */
  title?: string;
  /**描述 */
  desc?: string;
  /**按钮 */
  button?: JSX.Element;

  /**滚动的背景图片 */
  backgroundImage?: string;
  /**设置var变量，会被赋值给 "--section-jack-after-bg"   */
  afterBg?: string;

  /**自定义左侧内容 */
  leftWrapper?: JSX.Element;
  /**自定义有侧内容 */
  rightWrapper?: JSX.Element;
}

const defaultProps: SectionJackProps = {
  minHeight: '650px',
  afterBg: 'linear-gradient(354deg, #99cc66 0%, #26a4ba 100%)',
};

const leftWrapper = (props: SectionJackProps, top: number) => {
  return props.leftWrapper ? (
    props.leftWrapper
  ) : (
    <div className={`py-5 ${props.reverse ? 'lg:pl-5 pl-0' : 'pr-5'}`}>
      <div
        style={{
          backgroundImage: `url(${props.backgroundImage})`,
          backgroundSize: '100%',
          paddingBottom: '31.4465%',
          backgroundPositionX: top + 'px',
        }}
      />
    </div>
  );
};

const rightWrapper = (props: SectionJackProps) => {
  return props.rightWrapper ? (
    props.rightWrapper
  ) : (
    <div
      className={`py-10 lg:px-5 max-w-3xl text-zinc-700 ${props.reverse ? 'px-5' : 'px-20'}`}
      style={{ fontFamily: 'Gotham', color: '#543b5b' }}
    >
      <h2 className="text-6xl tracking-widest  font-light">{props.title}</h2>
      <p className="text-xl pt-5 max-w-lg leading-7">{props.desc}</p>
      {props.button}
    </div>
  );
};

const SectionJack = (props: SectionJackProps) => {
  const [top, setTop] = useState(0);
  const scroll = useScroll(document);
  const scrllTop = scroll?.top || 0;
  setTimeout(() => setTop(props.reverse ? -scrllTop : scrllTop));

  const rootVar = {
    '--section-jack-after-bg': props.afterBg,
  } as CSSProperties;

  return (
    <section className="w-full" style={rootVar}>
      <div
        className={`section-jack ${props.reverse && 'reverse'} ${
          props.reverse ? 'lg:flex-row-reverse flex-col' : 'lg:flex-row flex-col'
        }`}
        style={{ minHeight: props.minHeight }}
      >
        <div className="lg:w-3/5 w-full">{leftWrapper(props, top)}</div>
        <div className="lg:w-2/5 w-full">{rightWrapper(props)}</div>
      </div>
    </section>
  );
};

SectionJack.defaultProps = defaultProps;

export default SectionJack;
