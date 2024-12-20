import { type FC } from "react";
import Raiting from "~/components/Raiting";
import StrapiImage from "~/components/StrapiImage";
import { Theme } from "~/types";

type TItems = {
  icon: any;
  title: string;
  description: string;
  review_stars: number;
};

type TProps = {
  theme: Theme;
  items: TItems;
  order?: string;
  style?: React.CSSProperties;
};

const ServiceTestimonialSingle: FC<TProps> = ({
  items,
  theme,
  order = "",
  style,
}) => {
  const themes: any = {
    dark: {
      cartBg: "card-dark",
      textColor: "text-white",
      textSecondary: "text-yw-gray-500",
    },
    light: {
      cartBg: "card-light",
      textColor: "yw-primary-default",
      textSecondary: "text-yw-gray-300",
    },
  };
  const themeData = themes[theme || Theme.light];
  return (
    <div style={style} className={`p-6 ${order}`}>
      <p className={`${themeData.textColor} yw-h4 mb-8`}>{items.description}</p>
      <div className="flex mb-4">
        <StrapiImage
          image={items.icon?.data}
          className="ltr:mr-4 rtl:ml-4 w-[56px] h-[56px]"
          loading="lazy"
        />
        <div>
          <div className={`${themeData.textColor} mb-2`}>{items.title}</div>
          <div className="flex items-center">
            <p
              className={`ltr:mr-2 rtl:ml-2 yw-t2 !font-bold ${themeData.textColor}`}
            >
              {items.review_stars?.toFixed(1)}
            </p>

            <Raiting raiting={items.review_stars} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceTestimonialSingle;
