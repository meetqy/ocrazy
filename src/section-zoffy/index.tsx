import React from 'react';

export interface SectionZoffyProps {
  /**标题 */
  title: string;
  /**描述 */
  desc?: string;
  /** 按钮 */
  button?: JSX.Element | string;
  /**设置容器高度 */
  height?: string;

  /**反方向 移动端不会更改方向*/
  reverse?: boolean;

  /**
   * 右边内容,
   * string：图片链接地址;
   * Element：自定义样式
   */
  rightWrapper: JSX.Element | string;
}

const defaultProps: SectionZoffyProps = {
  title: 'Banking made easy',
  desc: 'Spend, save and manage your money, all in one place. Open a full UK bank account from your phone, for free.',
  button: 'Get a Monzo Bank account',
  reverse: false,
  height: '660px',
  rightWrapper: <div style={{ color: 'white' }}>自定义内容</div>,
};

const renderButton = (button: JSX.Element | string): JSX.Element => {
  if (typeof button === 'string') {
    return (
      <button className="text-white font-semibold bg-sky-600 hover:bg-sky-800 px-6 py-2 rounded-3xl text-lg">
        {button}
      </button>
    );
  } else {
    return button;
  }
};

const renderRightWrapper = (rightWrapper: JSX.Element | string) => {
  if (typeof rightWrapper === 'string') {
    return (
      <picture className="flex relative justify-end">
        <img src={rightWrapper} alt="" width={536} height="100%" />
      </picture>
    );
  } else {
    console.log(rightWrapper);
    return rightWrapper;
  }
};

const SectionZoffy = (props: SectionZoffyProps): JSX.Element => {
  const row = props.reverse ? 'md:flex-row-reverse' : 'md:flex-row';

  return (
    <section
      className="bg-slate-800 flex items-center overflow-hidden md:flex-row flex-col"
      style={{ height: props.height }}
    >
      <div className="px-8 lg:px-16 w-full xl:w-4/5 2xl:w-3/4 mx-0 xl:mx-auto">
        <div
          className={`flex items-center basis-auto grow-0 shrink flex-wrap -mx-4 md:pt-0 pt-16 flex-col ${row}`}
        >
          <div className="md:w-1/2 w-full px-4">
            <h1 className="m-0 leading-normal font-bold text-white lg:text-5xl md:text-4xl text-3xl">
              {props.title}
            </h1>
            <p className="text-2xl lg:text-3xl  text-white mt-6 font-extralight">{props.desc}</p>
            {props.button !== undefined && <div className="mt-6">{renderButton(props.button)}</div>}
          </div>
          <div className="md:w-1/2 w-full px-4 grow shrink-0 mt-8 md:mt-0">
            {renderRightWrapper(props.rightWrapper)}
          </div>
        </div>
      </div>
    </section>
  );
};

SectionZoffy.defaultProps = defaultProps;

export default SectionZoffy;
