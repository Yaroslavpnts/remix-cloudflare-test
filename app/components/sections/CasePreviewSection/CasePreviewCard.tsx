import { type FC } from "react";
import StrapiImage from "~/components/StrapiImage";
import SmallArrow from "~/icons/components/SmallArrow";
import { type Portfolio, Theme, type Category } from "~/types";
import { slugify } from "~/utils/slugify";

type TProps = {
  theme: Theme;
  item: Portfolio;
  clipped: boolean;
};

const themes = {
  dark: {
    cardBg: "card-dark",
    textColorPrimary: "text-white",
    textColorSecondary: "text-yw-gray-300",
    buttonVariant: "btn-secondary-inverted",
    arrowStyle: "svg-black",
  },
  light: {
    cardBg: "card-light",
    textColorPrimary: "yw-primary-default",
    buttonVariant: "btn-secondary",
    arrowStyle: "svg-white",
    textColorSecondary: "text-yw-gray-500",
  },
};

const CasePreviewSectionCard: FC<TProps> = ({ theme, item, clipped }) => {
  const themeData = themes[theme || Theme.light];
  const link = "/case-studies/" + slugify(item.attributes.slug);

  return (
    <div className={`${themeData.cardBg} col-span-12 md:col-span-6`}>
      {item?.attributes?.image && (
        <div className="flex justify-center mb-11">
          <StrapiImage
            image={item.attributes.image.data}
            width="470px"
            height="311px"
            loading="lazy"
          />
        </div>
      )}
      <div className="text-center flex flex-col justify-between items-center w-full h-full">
        {!clipped && (
          <>
            <div
              className={`flex flex-col ${themeData.textColorSecondary} mb-4 gap-y-2`}
            >
              <h3
                className={`${themeData.textColorPrimary} yw-h3 text-yw-gray-900`}
              >
                {item.attributes.title}
              </h3>
              <p className="yw-t2 text-yw-gray-500 text-ellipsis line-clamp-2 max-h-10">
                {item.attributes.description}
              </p>
              {item.attributes.industries?.data
                .map((category: Category) => category.attributes.title)
                .join(" • ")}
            </div>
            <a
              href={link}
              className={`btn group rounded-full flex items-center justify-center whitespace-nowrap font-montserrat yw-button-small py-4 px-6 text-sm leading-none ${themeData.buttonVariant}`}
            >
              <span className="flex-1 text-center">Open full case</span>
              <span className="ml-auto">
                <SmallArrow
                  className={`${themeData.arrowStyle} rotate-180 ltr:ml-2 rtl:mr-2`}
                  fill="#313339"
                />
              </span>
            </a>
          </>
        )}
      </div>
    </div>
  );
};

export default CasePreviewSectionCard;
