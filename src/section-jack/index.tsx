import { useScroll } from 'ahooks';
import React, { useState } from 'react';
import './index.less';

export interface SectionJackProps {
  reverse: boolean;
}

const SectionJack = (props: SectionJackProps) => {
  const [top, setTop] = useState(0);
  const scroll = useScroll(document);
  const scrllTop = scroll?.top || 0;
  setTimeout(() => setTop(props.reverse ? -scrllTop : scrllTop));

  return (
    <section className="w-full">
      <div className={`section-jack ${props.reverse && 'reverse'}`} style={{ minHeight: '650px' }}>
        <div className="w-3/5">
          <div className={`py-5 ${props.reverse ? 'pl-5' : 'pr-5'}`}>
            <div
              style={{
                backgroundImage: `url(https://cdn.shopify.com/s/files/1/0248/8709/9439/files/Tailwind-Challenge_new-2_1050x.png?v=1634548088)`,
                backgroundSize: '100%',
                paddingBottom: '31.4465%',
                backgroundPositionX: top + 'px',
              }}
            />
          </div>
        </div>
        <div className="w-2/5">
          <div
            className="py-10 px-5 max-w-3xl text-zinc-700"
            style={{ fontFamily: 'Gotham', color: '#543b5b' }}
          >
            <h4 className="text-3xl tracking-widest font-extrabold">FOR DURING</h4>
            <h2 className="text-6xl tracking-widest pb-2 font-light">ENDURANCE FUEL</h2>
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11.685"
                height="24.13"
                viewBox="0 0 11.685 24.13"
              >
                <path
                  id="Path_538"
                  data-name="Path 538"
                  d="M2302.346,508.617l8.8-12.177c.319-.481.641-.682.878-.682.326,0,.492.384.26.945l-4.419,9.613h4.9c.966,0,1.234.69.562,1.453l-9.642,11.434c-.384.489-.719.686-.951.686-.35,0-.478-.444-.21-1.007l4.209-8.8h-3.771C2302,510.084,2301.733,509.438,2302.346,508.617Z"
                  transform="translate(-2302.018 -495.758)"
                  fill="#543b5b"
                />
              </svg>
              <span className="text-xl tracking-wider ml-3 font-extrabold">
                CALORIES, ELECTROLYTES, HYDRATION & JOY
              </span>
            </p>
            <p className="text-xl pt-5 max-w-lg leading-7">
              Endurance Fuel mixes clear with water to provide all your calories, electrolytes and
              hydration. Simple to use with a clean, light taste. Just pour, shake and go!
            </p>
            <button className="px-10 tracking-widest py-3 mt-5 border-2 border-zinc-800 font-medium">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionJack;
