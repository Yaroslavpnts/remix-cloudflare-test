import { FC } from "react";
import cn from "classnames";
import { TWidgetProps } from "../Widgets";

const DesignRushWidget: FC<TWidgetProps> = ({
  averageRating,
  reviewsCount,
  className,
}) => {
  return (
    <div className={cn("w-[135px] relative", className)}>
      <a
        href="https://www.designrush.com/agency/profile/yojji#reviews"
        target="_blank"
        className="no-underline"
      >
        <svg
          width="59"
          height="48"
          viewBox="0 0 59 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <g clip-path="url(#clip0_5603_8170)">
            <path d="M59 0H0V48H59V0Z" fill="url(#pattern0_5603_8170)" />
          </g>
          <defs>
            <pattern
              id="pattern0_5603_8170"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use
                xlinkHref="#image0_5603_8170"
                transform="matrix(0.00565511 0 0 0.00675676 -0.00330494 0)"
              />
            </pattern>
            <clipPath id="clip0_5603_8170">
              <rect width="59" height="48" fill="white" />
            </clipPath>
            <image
              id="image0_5603_8170"
              width="178"
              height="148"
              xlinkHref="data:image/png;base64,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"
            />
          </defs>
        </svg>

        <span className="flex text-[#093890] text-[20px] font-medium leading-8 whitespace-nowrap absolute top-0 left-[82px]">
          <span className="mr-[25px] w-[23px]">
            <svg
              width="19"
              height="17"
              viewBox="0 0 19 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.26442 0.725443C9.3386 0.497118 9.6616 0.497118 9.73578 0.725442L11.5774 6.39314C11.6105 6.49525 11.7057 6.56438 11.8131 6.56438H17.7724C18.0125 6.56438 18.1123 6.87159 17.9181 7.0127L13.0969 10.5155C13.01 10.5787 12.9736 10.6905 13.0068 10.7926L14.8483 16.4603C14.9225 16.6887 14.6612 16.8785 14.467 16.7374L9.64574 13.2345C9.55892 13.1714 9.44128 13.1714 9.35446 13.2345L4.5332 16.7374C4.33898 16.8785 4.07765 16.6887 4.15184 16.4603L5.99338 10.7926C6.02656 10.6905 5.99021 10.5787 5.90335 10.5155L1.08212 7.0127C0.887902 6.87159 0.987718 6.56438 1.2278 6.56438H7.18716C7.29452 6.56438 7.38968 6.49525 7.42285 6.39314L9.26442 0.725443Z"
                fill="#093890"
              />
            </svg>
          </span>
          <span
            className="designrush-reviews-rating font-semibold absolute -top-[6px] ml-6
          "
          >
            {averageRating}
          </span>
        </span>
        <span className="designrush-reviews-count absolute top-[22px] right-0 text-black text-[10px] font-semibold leading-3 tracking-[0.06em] whitespace-nowrap uppercase">
          {reviewsCount} reviews
        </span>
        <span className="absolute top-[30px] right-0 flex">
          <span className="text-[10px] font-normal; leading-4 tracking-[0.08em] text-left text-black mr-[3px] uppercase">
            on
          </span>
          <span className="text-[9px] font-bold leading-[17px] tracking-[0.14em] text-left text-black uppercase">
            designrush
          </span>
        </span>
      </a>
    </div>
  );
};

export default DesignRushWidget;
