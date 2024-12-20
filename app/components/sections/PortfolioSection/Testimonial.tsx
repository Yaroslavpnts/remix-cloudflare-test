import ClutchIcon from "../../TestimonialCard/icons/clutch.svg";
import type { FC } from "react";
import { useState } from "react";
import StrapiImage from "~/components/StrapiImage";
import Raiting from "~/components/Raiting";
import type { Testimonial as TTestimonial } from "~/types";
import { Theme } from "~/types";

type TProps = {
  theme?: Theme;
  testimonial: TTestimonial;
  className?: string;
};

const themes = {
  light: {
    textColorPrimary: "text-yw-gray-500",
  },
  dark: {
    textColorPrimary: "text-white",
  },
};

const Testimonial: FC<TProps> = ({ theme, testimonial, className }) => {
  const themeData = themes[theme || Theme.light];
  const [showMore, setShowMore] = useState(false);

  return (
    <div className={className}>
      <div className="mb-4">
        <div className="flex items-center mb-2.5 sm:mb-0">
          <StrapiImage
            image={testimonial.attributes.image?.data}
            className="ltr:mr-4 rtl:ml-4 w-14 h-14 rounded-full"
          />

          <div>
            <div>
              <span className="yw-t2">{testimonial.attributes.full_name}</span>,{" "}
              <span className="yw-h5">{testimonial.attributes.position}</span>
            </div>

            {testimonial.attributes.review_stars && (
              <div className="flex gap-2">
                <p className="yw-t2">
                  {testimonial.attributes.review_stars.toFixed(1)}
                </p>
                <Raiting raiting={testimonial.attributes.review_stars} />
                {testimonial.attributes.review === "clutch" && (
                  <img
                    src={ClutchIcon}
                    alt="clutch"
                    loading="lazy"
                    width="54px"
                    height="16px"
                  />
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      <blockquote
        className={`${themeData.textColorPrimary} break-words yw-t2 mb-8`}
        cite={testimonial.attributes.link}
      >
        {showMore
          ? testimonial.attributes.text
          : `${testimonial.attributes.text.substring(0, 310)}... `}
        <span
          onClick={() => setShowMore((s) => !s)}
          className={`yw-t2-med text-yw-cta-default cursor-pointer inline-block`}
        >
          {" "}
          {showMore ? "Show less" : "Show more"}
        </span>
      </blockquote>
    </div>
  );
};

export default Testimonial;
