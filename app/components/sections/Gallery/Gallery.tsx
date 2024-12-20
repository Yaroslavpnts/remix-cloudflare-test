import { useState } from "react";
import StrapiImage from "~/components/StrapiImage";
import type { StrapiImageData } from "~/types";
import { Theme } from "~/types";

const getIndex = (n, m) => {
  const result = n % m;
  return result >= 0 ? result : result + m;
};

const minSwipeDistance = 50;

const Gallery = ({
  theme,
  items = [],
}: {
  theme?: Theme;
  items: StrapiImageData[];
}) => {
  const themes = {
    dark: {
      buttonVariant: "btn-secondary-inverted",
      arrowStyle: "svg-black",
    },
    light: {
      buttonVariant: "btn-secondary",
      arrowStyle: "svg-white",
    },
  };

  const themeData = themes[theme || Theme.light];

  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const onPrev = () => {
    setActiveIndex((i) => {
      if (i - 1 < 0) {
        return items.length - 1;
      }

      return i - 1;
    });
  };

  const onNext = () => {
    setActiveIndex((i) => {
      if (i + 1 > items.length - 1) {
        return 0;
      }

      return i + 1;
    });
  };

  const onTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  const onTouchEnd = (e) => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) onNext();
    if (isRightSwipe) onPrev();
  };

  const onMouseDown = (e) => {
    setTouchEnd(null);
    setTouchStart(e.clientX);
  };
  const onMouseMove = (e) => {
    if (touchStart) {
      setTouchEnd(e.clientX);
    }
  };

  const Arrow = ({ className = "" }) => (
    <svg
      className={`${themeData.arrowStyle} ${className} min-w-[14px]`}
      width="14"
      height="15"
      viewBox="0 0 14 15"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.65265 7.72974H13.4109V6.41089H2.65265L7.92969 0.933603L6.97993 0.0185613L0.185983 7.07031L6.97993 14.1221L7.92969 13.207L2.65265 7.72974Z"
        fill="#313339"
      ></path>
    </svg>
  );

  return (
    <div className="w-full h-full relative md:pt-[40%] pt-[50%]">
      <div
        className="w-full h-full absolute top-0 bottom-0"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onTouchEnd}
      >
        {items?.map((item, i) => {
          const indexLeft = getIndex(activeIndex - 1, items.length);
          const indexRight = getIndex(activeIndex + 1, items.length);

          let containerClassName = "";
          let className = "";

          if (i === activeIndex) {
            containerClassName = "gallery-container--active";
            className = "gallery-item--active";
          } else if (i === indexRight) {
            containerClassName = "gallery-container--right";
            className = "gallery-item--right";
          } else if (i === indexLeft) {
            containerClassName = "gallery-container--left";
            className = "gallery-item--left";
          }

          return (
            <div
              className={`${containerClassName} gallery-container select-none`}
              key={"gallery-citem" + i}
            >
              <div
                className={`${className} gallery-item px-3 md:px-5 lg:px-7 pt-6
                md:pt-9 lg:pt-[61px] flex`}
              >
                <StrapiImage
                  className={
                    "w-full h-auto max-h-full rounded-b-md md:rounded-b-sm rounded-t-md pointer-events-none mt-auto"
                  }
                  image={item}
                />
              </div>
            </div>
          );
        })}
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className={`btn-secondary z-10 yw-button-small gallery-nav lg:left-[10.5%] sm:left-[9%] left-[8%] md:h-[46px] md:w-[46px] ${
          items?.length < 3 && "hidden"
        } ${items?.length == 1 && "hidden"}`}
      >
        <Arrow />
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className={`btn-secondary z-10 yw-button-small gallery-nav lg:right-[10.5%] sm:right-[9%] right-[8%] md:h-[46px] md:w-[46px] ${
          items?.length == 1 && "hidden"
        }`}
      >
        <Arrow className={"-rotate-180"} />
      </button>
    </div>
  );
};

export default Gallery;
