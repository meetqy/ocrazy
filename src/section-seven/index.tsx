import type { CSSProperties } from 'react';
import React from 'react';

export interface SectionSevenProps {
  /**自定义左边内容 */
  leftWrapper?: JSX.Element;
  /**自定义右边内容 */
  rightWrapper?: JSX.Element;
  /**外部容器className */
  className?: string;
  /**外部容器style */
  style?: CSSProperties;
  /**跳转文本 */
  jumpText?: string;
  /**标题 */
  title?: string;
  /**描述 */
  desc?: string;
  /**按钮文本 */
  buttonText?: string;
  /**自定义表单容器 */
  formWrapper?: JSX.Element;
}

const defaultProps: SectionSevenProps = {
  jumpText: 'Jump start your portfolio',
  title: 'Jump start your crypto portfolio',
  desc: 'Coinbase is the easiest place to buy and sell cryptocurrency. Sign up and get started today.',
  buttonText: 'Get started',
};

const formWrapper = (props: SectionSevenProps) => {
  return props.formWrapper ? (
    props.formWrapper
  ) : (
    <div className="flex max-md:min-w-full min-w-lg">
      <div className="flex flex-col sm:flex-row w-full">
        <input
          type="email"
          id="large-input"
          placeholder="Email address"
          className="sm:flex-1 block text-lg p-5 w-full text-gray-900 bg-transparent rounded border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
        />
        <div className="mt-2 sm:mt-0 sm:ml-4 flex-1">
          <button className="p-5 w-full bg-blue-700 border border-blue-700 font-medium text-white rounded ">
            {props.buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

const leftWrapper = (props: SectionSevenProps) => {
  return props.leftWrapper ? (
    props.leftWrapper
  ) : (
    <>
      <div className="flex text-blue-500 font-medium cursor-pointer text-base hover:underline">
        <span className="mx-2">{props.jumpText}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </div>
      <h1 className="text-6xl font-medium text-gray-900 mt-2 mb-4">{props.title}</h1>
      <h3 className="text-xl mb-8 text-gray-900 font-medium">{props.desc}</h3>
      {formWrapper(props)}
    </>
  );
};

const rightWrapper = () => (
  <svg
    width="680"
    height="956"
    viewBox="0 0 680 956"
    fill="none"
    className="w-auto"
    style={{ height: '600px' }}
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="340" cy="428" r="340" fill="#F1F5FE" />
    <g filter="url(#prefix__filter0_dd)">
      <path
        d="M481 10H198c-32.032 0-58 25.968-58 58v720c0 32.032 25.968 58 58 58h283c32.032 0 58-25.968 58-58V68c0-32.032-25.968-58-58-58z"
        fill="url(#prefix__paint0_linear)"
      />
      <path
        d="M472.489 22H206.511C176.406 22 152 47.222 152 78.335v699.33C152 808.778 176.406 834 206.511 834h265.978C502.594 834 527 808.778 527 777.665V78.335C527 47.222 502.594 22 472.489 22z"
        fill="url(#prefix__img1)"
      />
      <g filter="url(#prefix__filter1_f)">
        <path
          d="M213.5 15.5c-38.883 0-67.5 23.943-67.5 61.343V783.5c0 20.5 11.5 57 65.5 57"
          stroke="url(#prefix__paint1_radial)"
        />
      </g>
      <g filter="url(#prefix__filter2_f)">
        <path
          d="M465.5 15c38.883 0 67.5 23.943 67.5 61.343V783c0 20.5-11.5 57-65.5 57"
          stroke="url(#prefix__paint2_radial)"
        />
      </g>
    </g>
    <defs>
      <filter
        id="prefix__filter0_dd"
        x="48"
        y="0"
        width="519"
        height="956"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
        <feOffset dx="-32" dy="50" />
        <feGaussianBlur stdDeviation="30" />
        <feColorMatrix values="0 0 0 0 0.321569 0 0 0 0 0.321569 0 0 0 0 0.321569 0 0 0 0.25 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
        <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
        <feOffset dy="15" />
        <feGaussianBlur stdDeviation="7.5" />
        <feColorMatrix values="0 0 0 0 0.320833 0 0 0 0 0.320833 0 0 0 0 0.320833 0 0 0 0.1 0" />
        <feBlend in2="effect1_dropShadow" result="effect2_dropShadow" />
        <feBlend in="SourceGraphic" in2="effect2_dropShadow" result="shape" />
      </filter>
      <filter
        id="prefix__filter1_f"
        x="143.5"
        y="13"
        width="72"
        height="830"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur stdDeviation="1" result="effect1_foregroundBlur" />
      </filter>
      <filter
        id="prefix__filter2_f"
        x="463.5"
        y="12.5"
        width="72"
        height="830"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur stdDeviation="1" result="effect1_foregroundBlur" />
      </filter>
      <radialGradient
        id="prefix__paint1_radial"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(286.75008 212.24974 -632.54832 854.57482 179.75 390.25)"
      >
        <stop stopOpacity="0.2" />
        <stop offset="1" stopOpacity="0" />
      </radialGradient>
      <radialGradient
        id="prefix__paint2_radial"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(0 756.5 -2254.52 0 499 131)"
      >
        <stop stopOpacity="0" />
        <stop offset="0.453" stopOpacity="0.2" />
        <stop offset="1" stopOpacity="0" />
      </radialGradient>
      <linearGradient
        id="prefix__paint0_linear"
        x1="539"
        y1="654"
        x2="-169.5"
        y2="799.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F2F2F3" />
        <stop offset="0.64" stopColor="#CACED2" />
      </linearGradient>
      <pattern
        id="prefix__img1"
        patternUnits="objectBoundingBox"
        width="1"
        height="1"
        viewBox="0 0 375 812"
      >
        <image
          href="https://assets.coinbase.com/assets/portfolio.352f1ebd5622fb93068757ca3a33b88b.svg"
          width="375"
          height="812"
        />
      </pattern>
    </defs>
  </svg>
);

const SectionSeven = (props: SectionSevenProps): JSX.Element => {
  return (
    <section
      className={`px-14 flex flex-shrink-0 mx-auto overflow-hidden max-w-7xl w-full ${props.className}`}
      style={props.style}
    >
      <div className="flex items-center flex-row">
        <div className="flex items-start flex-col pt-24 pb-28 flex-1">
          {props.leftWrapper ? props.leftWrapper : leftWrapper(props)}
        </div>
        <div className="hidden md:flex pt-10 pl-6 justify-end" style={{ flex: 2 }}>
          {props.rightWrapper ? props.rightWrapper : rightWrapper()}
        </div>
      </div>
    </section>
  );
};

SectionSeven.defaultProps = defaultProps;

export default SectionSeven;
