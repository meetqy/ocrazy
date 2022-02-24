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
  return (
    <div className="flex max-md:min-w-full min-w-lg">
      <div className="flex flex-col sm:flex-row w-full">
        {props.formWrapper ? (
          props.formWrapper
        ) : (
          <>
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
          </>
        )}
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
      <h3 className="text-xl mb-8 text-gray-900 md:font-medium font-normal">{props.desc}</h3>
      {formWrapper(props)}
    </>
  );
};

const SectionSeven = (props: SectionSevenProps): JSX.Element => {
  return (
    <section
      className={`md:px-14 px-6 flex flex-shrink-0 mx-auto overflow-hidden max-w-7xl w-full ${props.className}`}
      style={props.style}
    >
      <div className="flex items-center flex-row">
        <div className="flex items-start flex-col pt-24 pb-28 flex-1">
          {props.leftWrapper ? props.leftWrapper : leftWrapper(props)}
        </div>
        <div className="hidden md:flex pt-10 pl-6 justify-end" style={{ flex: 2 }}>
          {props.rightWrapper}
        </div>
      </div>
    </section>
  );
};

SectionSeven.defaultProps = defaultProps;

export default SectionSeven;
