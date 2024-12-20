import { type FC, useRef } from "react";
import cn from "classnames";
import { type Testimonial, Theme } from "~/types";
import StrapiImage from "../StrapiImage";
import QuoteBWIcon from "./icons/quote-bw.svg";
import QuoteGrayIcon from "./icons/quote-gray.svg";
import ClutchIcon from "./icons/clutch.svg";
import Raiting from "../Raiting";
import { useIsVisible } from "~/hooks/useIsVisible";

const ClutchLightIcon = ClutchIcon; //@TODO Fix it

type TProps = {
  theme?: Theme;
  testimonial: Testimonial;
  className?: string;
  reviewContentClassName?: string;
};

const ClientTestimonialCard: FC<TProps> = ({
  theme,
  testimonial,
  className,
  reviewContentClassName = "",
}) => {
  const clientTestimonialCardRef = useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible(clientTestimonialCardRef);

  const themes = {
    light: {
      textColorPrimary: "text-yw-primary-default",
      icon: QuoteBWIcon,
      clutchIcon: ClutchIcon,
    },
    dark: {
      textColorPrimary: "text-white",
      icon: QuoteGrayIcon,
      clutchIcon: ClutchLightIcon,
    },
  };
  const themeData = themes[theme || Theme.light];

  return (
    <div
      className={cn(className, {
        "animate-fadeIn": isVisible,
      })}
      ref={clientTestimonialCardRef}
    >
      <div
        className={`flex w-full flex-col sm:flex-row gap-6 sm:gap-9 ${themeData.textColorPrimary}`}
      >
        <div className="w-8 h-8 shrink-0 sm:w-12 sm:h-[50px]">
          <img
            src={themeData.icon}
            alt="quote"
            loading="lazy"
            className="h-8 w-[30px] sm:h-[50px] sm:w-12"
          />
        </div>
        <div className={`w-full ${reviewContentClassName}`}>
          <blockquote
            className="yw-gray-900 break-words mb-9 yw-h3"
            cite={testimonial.attributes.link}
          >
            {testimonial.attributes.text}
          </blockquote>

          <div className="flex order-first sm:order-last self-center sm:self-start sm:mt-4 w-full">
            <div className="flex flex-col sm:flex-row justify-between w-full items-start sm:items-center">
              <div className="flex items-center mb-4 sm:mb-0">
                <StrapiImage
                  image={testimonial.attributes.image?.data}
                  className="ltr:mr-4 rtl:ml-4 w-14 h-14 rounded-full sm:w-[85px] sm:h-[85px]"
                />
                <div>
                  <div className="yw-h4 mb-1">
                    {testimonial.attributes.full_name}
                  </div>
                  <div className="yw-t1 text-yw-gray-400">
                    {testimonial.attributes.position}
                  </div>
                </div>
              </div>

              {testimonial.attributes.review_stars && (
                <div className="flex flex-col items-start sm:items-end">
                  <div className="flex mb-2">
                    <Raiting
                      raiting={testimonial.attributes.review_stars}
                      containerClassName={"gap-2"}
                      iconProps={{
                        className: "w-3 h-3 sm:w-6 sm:h-6",
                      }}
                    />
                  </div>
                  {testimonial.attributes.review === "clutch" && (
                    <img
                      src={themeData.clutchIcon}
                      alt="clutch"
                      loading="lazy"
                      className="w-[54px] h-4 sm:h-6 sm:w-[77px]"
                    />
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientTestimonialCard;
