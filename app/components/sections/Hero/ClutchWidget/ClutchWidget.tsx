import { FC } from "react";
import cn from "classnames";
import { Star } from "./templates/Star";
import { TWidgetProps } from "../Widgets";

const maxStars = 5;

const ClutchWidget: FC<TWidgetProps> = ({
  averageRating,
  reviewsCount,
  className,
}) => {
  const arr = Array.from({ length: maxStars }).map((_, index) => index);

  const isAverageRatingInteger = Number.isInteger(averageRating);
  let halfStarAdded = false;

  const stars = arr.map((_, index) => {
    if (index <= averageRating - 1) {
      return <Star filled="full" />;
    }

    if (!isAverageRatingInteger && !halfStarAdded) {
      halfStarAdded = true;

      return <Star filled="half" />;
    }

    return <Star filled="none" />;
  });

  return (
    <div className={cn("max-w-[215px]", className)}>
      <a
        className="no-underline max-w-[200p]"
        target="_blank"
        href="https://clutch.co/profile/yojji?utm_source=widget&utm_medium=2&utm_campaign=widget&utm_content=logo&utm_term=#highlights"
      >
        <div className="flex">
          <div>
            <span className="text-[#6a797e] block text-[10px] tracking-[1px] mb-[10px] uppercase whitespace-nowrap">
              reviewed on
            </span>
            <span className="block h-[20px] w-[82px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 87.861 25"
                className="max-w-[500px]"
                style={{
                  transform:
                    "translate(-50%, -50%) scale(0.7) translate(50%, 50%)",
                }}
              >
                <path
                  fill="#17313b"
                  d="M22.861 0h4v25h-4zm18 17.025c0 3.826-3.217 4.131-4.174 4.131-2.391 0-2.826-2.238-2.826-3.588V8h-4v9.548c0 2.37.744 4.326 2.048 5.63 1.152 1.153 2.878 1.783 4.748 1.783 1.326 0 3.204-.413 4.204-1.326V25h4V8h-4v9.025zM52.861 2h-4v6h-3v4h3v13h4V12h3V8h-3zm15.597 17.917c-.871.783-2.021 1.217-3.283 1.217-2.782 0-4.825-2.043-4.825-4.848s1.978-4.762 4.825-4.762c1.24 0 2.412.413 3.305 1.196l.607.522 2.697-2.696-.675-.609C69.522 8.504 67.415 7.7 65.174 7.7c-5 0-8.631 3.608-8.631 8.565 0 4.936 3.718 8.673 8.631 8.673 2.283 0 4.412-.804 5.979-2.26l.652-.609-2.739-2.694-.608.542zM86.061 9.482C84.909 8.33 83.559 7.7 81.689 7.7c-1.326 0-2.828.413-3.828 1.325V0h-4v25h4v-9.365c0-3.826 2.718-4.13 3.675-4.13 2.391 0 2.325 2.239 2.325 3.587V25h4v-9.887c0-2.37-.495-4.326-1.8-5.631z"
                />
                <path
                  fill="#FF3D2E"
                  d="M65.043 13.438a2.891 2.891 0 1 1 0 5.784 2.891 2.891 0 0 1 0-5.784"
                />
                <path
                  fill="#17313b"
                  d="M17.261 18.721c-1.521 1.565-3.587 2.413-5.761 2.413-4.456 0-7.696-3.5-7.696-8.304 0-4.826 3.24-8.326 7.696-8.326 2.153 0 4.196.847 5.74 2.391l.608.609 2.674-2.674-.587-.609C17.718 1.938 14.718.7 11.5.7 4.935.7 0 5.917 0 12.851c0 6.913 4.957 12.109 11.5 12.109 3.24 0 6.24-1.26 8.457-3.543l.587-.609-2.652-2.717-.631.63z"
                />
              </svg>
            </span>
          </div>
          <div>
            <div className="clutch-stars-container flex">{stars}</div>
            <div className="clutch-reviews-count text-sm text-[#6a797e] tracking-[1px] mt-2 text-left uppercase whitespace-nowrap">
              {reviewsCount} reviews
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ClutchWidget;
