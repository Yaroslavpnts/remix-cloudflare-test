import { type Testimonial, Theme } from "~/types";
import StrapiImage from "../StrapiImage";
import QuoteBWIcon from "./icons/quote-bw.svg";
import QuoteGrayIcon from "./icons/quote-gray.svg";
import ClutchIcon from "./icons/clutch.svg";
import Raiting from "../Raiting";
import type { FC } from "react";

const ClutchLightIcon = ClutchIcon; //@TODO Fix it

type TProps = {
  theme?: Theme;
  testimonial: Testimonial;
  className?: string;
  reviewContentClassName?: string;
};

const TestimonialCard: FC<TProps> = ({
  theme,
  testimonial,
  className,
  reviewContentClassName = "",
}) => {
  const themes = {
    light: {
      cardClass: "card-light",
      textColorPrimary: "text-yw-primary-default",
      textColorSecondary: "text-yw-gray-500",
      quoteImage: "quote-bw",
      icon: QuoteBWIcon,
      clutchIcon: ClutchIcon,
    },
    dark: {
      cardClass: "card-dark",
      textColorPrimary: "text-white",
      textColorSecondary: 'text-yw-gray-300"',
      icon: QuoteGrayIcon,
      clutchIcon: ClutchLightIcon,
    },
  };
  const themeData = themes[theme || Theme.light];

  return (
    <div className={className}>
      <div
        className={`flex ${themeData.cardClass} w-full flex-col sm:flex-row lg:flex-col 2xl:flex-row gap-y-6 items-start ${themeData.textColorPrimary}`}
      >
        <div className="ltr:mr-6 rtl:ml-6 w-8 h-8 shrink-0">
          <img
            src={themeData.icon}
            alt="quote"
            loading="lazy"
            width="30"
            height="32"
          />
        </div>
        <div className={`w-full grid grid-cols-12 ${reviewContentClassName}`}>
          <blockquote
            className="yw-gray-900 break-words col-span-full mb-8"
            cite={testimonial.attributes.link}
          >
            {testimonial.attributes.text}
          </blockquote>
          <div className="col-span-12 sm:col-span-8 flex">
            <StrapiImage
              image={testimonial.attributes.image?.data}
              className="ltr:mr-4 rtl:ml-4 w-[56px] h-[56px] min-w-[56px] min-h-[56px] self-start mb-4 sm:mb-0"
            />
            <div className="flex justify-between w-full items-center self-start mb-4 sm:mb-0">
              <div>
                <div className="yw-h4">{testimonial.attributes.full_name}</div>
                <div className="yw-t2 text-yw-gray-400">
                  {testimonial.attributes.position}
                </div>
              </div>
            </div>
          </div>
          {testimonial.attributes.review_stars && (
            <div className="flex flex-col self-center col-span-12 sm:col-span-4 items-start sm:items-end">
              <div className="flex">
                <p className="ltr:mr-2 rtl:ml-2 yw-t2 !font-bold {{ textColor }}">
                  {testimonial.attributes.review_stars.toFixed(1)}
                </p>
                {/* {{ rating.render(testimonial.reviewStars) }} */}
                <Raiting raiting={testimonial.attributes.review_stars} />
              </div>
              {testimonial.attributes.review === "clutch" && (
                <img
                  src={themeData.clutchIcon}
                  alt="clutch"
                  loading="lazy"
                  width="54px"
                  height="16px"
                />
              )}
            </div>)}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
