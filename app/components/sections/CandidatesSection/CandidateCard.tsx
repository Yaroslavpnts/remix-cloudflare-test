import { Theme } from "~/types";
import cn from "classnames";
import type { Member } from "~/types";
import StrapiImage from "~/components/StrapiImage";

const CandidateCard = ({
  theme,
  className,
  setIsShown,
  data,
}: {
  theme: "light" | "dark" | undefined;
  className?: string;
  setIsShown: Function;
  data: Member;
}) => {
  const themes = {
    dark: {
      bgPill: "bg-yw-gray-800",
      buttonVariant: "btn-secondary-inverted",
      cardBg: "card-dark",
      textColorPrimary: "text-white",
      textColorSecondary: "text-yw-gray-300",
    },
    light: {
      bgPill: "bg-white",
      buttonVariant: "btn-secondary",
      cardBg: "card-light",
      textColorPrimary: "text-yw-gray-900",
      textColorSecondary: "text-yw-gray-800",
    },
  };
  const themeData = themes[theme || Theme.light];

  const {
    availability,
    experience,
    expert_in,
    first_name,
    image,
    position,
    worked_with,
  } = data?.attributes || {};

  return (
    <div
      className={cn(
        themeData.cardBg,
        "flex flex-col gap-6 px-6 items-start",
        className
      )}
    >
      <div className="flex gap-3">
        {image?.data ? (
          <div className="w-14 h-14 rounded-full overflow-hidden shrink-0">
            <StrapiImage
              image={image?.data}
              width="56"
              height="56"
              loading="lazy"
              className="rounded-full"
              alt={"avatar-" + first_name}
            />
          </div>
        ) : null}
        <div>
          <div className={`yw-h4 ${themeData.textColorPrimary}`}>
            {first_name}
          </div>
          <div className="yw-t2-bold text-yw-gray-400 text-ellipsis min-h-[45px] max-h-[45px] line-clamp-2">
            {position}
          </div>
        </div>
      </div>

      {!!expert_in?.length && (
        <div>
          <div
            className={`${themeData.textColorPrimary} yw-t2-bold flex gap-2 items-center mb-3`}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 1.5L11.3175 6.195L16.5 6.9525L12.75 10.605L13.635 15.765L9 13.3275L4.365 15.765L5.25 10.605L1.5 6.9525L6.6825 6.195L9 1.5Z"
                fill="#FF9900"
                stroke="#FF9900"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Expert in
          </div>
          <ul className="flex gap-1 flex-wrap sm:max-h-[120px] overflow-hidden">
            {expert_in.map((item) => (
              <li
                key={item}
                className="yw-t2-med text-yw-cta-default flex items-center justifu-center py-1.5 px-3 rounded-lg border border-[#CBDDFF] bg-[#EEF4FF]"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {!!worked_with?.length && (
        <div>
          <div className={`${themeData.textColorPrimary} yw-t2-bold  mb-3`}>
            Also worked with
          </div>
          <ul className="flex gap-1 flex-wrap sm:max-h-[120px] overflow-hidden">
            {worked_with.map((item) => (
              <li
                key={item}
                className={`${themeData.bgPill} yw-t2-med flex items-center justify-center py-1.5 px-3 rounded-lg border border-yw-gray-300 ${themeData.textColorSecondary}`}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex items-start gap-10 w-full">
        <div className="flex-1">
          <div className={`yw-t2-bold ${themeData.textColorPrimary} mb-1`}>
            Experience
          </div>
          <div className="yw-t2-bold text-yw-cta-default">
            {experience} years
          </div>
        </div>

        <div className="flex-1">
          <div className={`yw-t2-bold ${themeData.textColorPrimary} mb-1`}>
            Availability
          </div>
          <div className="yw-t2-bold text-yw-cta-default">{availability}</div>
        </div>
      </div>

      <button
        data-button="consultation"
        onClick={() => setIsShown((s) => !s)}
        className={`btn group rounded-full flex items-center justify-center whitespace-nowrap font-montserrat yw-button-small py-4 px-6 text-sm leading-none ${themeData.buttonVariant} md:w-fit w-full mt-auto`}
      >
        Request full CV
      </button>
    </div>
  );
};

export default CandidateCard;
