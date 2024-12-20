import cn from "classnames";
import { Tag } from "~/components/FilterLiTag/FilterLiTag";
import StrapiImage from "~/components/StrapiImage";
import SmallArrow from "~/icons/components/SmallArrow";
import { Theme, type Category, type Portfolio } from "~/types";

const LastProjectCard = ({
  item,
  theme,
  reverseOrder = false,
  loading = "lazy",
}: {
  item: Portfolio;
  theme?: Theme;
  reverseOrder?: boolean;
  loading?: string;
}) => {
  const themes: any = {
    dark: {
      textColorTitle: "text-white",
      textColorPrimary: "text-yw-gray-250",
      textColorSecondary: "text-yw-gray-300",
      sectionBg: "bg-yw-primary-default",
      textColorThirdly: "text-yw-gray-400",
      buttonVariant: "btn-secondary-inverted",
      arrowStyle: "svg-black",
    },
    light: {
      textColorTitle: "text-black",
      textColorPrimary: "text-yw-primary-default",
      textColorSecondary: "text-yw-gray-300",
      sectionBg: "bg-yw-gray-100",
      textColorThirdly: "text-yw-gray-500",
      buttonVariant: "btn-secondary",
      arrowStyle: "svg-white",
    },
  };
  const themeData = themes[theme || Theme.light];

  let orderContent = "order-first";
  let orderImage = "order-second";

  if (reverseOrder) {
    orderContent = "order-second";
    orderImage = "order-first";
  }

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className={cn(orderContent)}>
            <h2 className={`yw-h3 mb-6 ${themeData.textColorTitle}`}>
              {item.attributes.title}
            </h2>

            <div className={`w-full ${orderImage} md:hidden mb-4`}>
              <StrapiImage
                image={item.attributes.image?.data}
                loading={loading}
                height="354"
                width="535"
              />
            </div>

            <div className={`text-sm mb-2 ${themeData.textColorSecondary}`}>
              <div className="yw-t2-med sm:text-lg mb-2">
                <span className={cn(themeData.textColorSecondary)}>
                  Industry:{"  "}
                </span>
                {item.attributes.industries.data?.map(
                  (industry: Category, idx, arr) => (
                    <span
                      key={industry.id}
                      className={`${themeData.textColorPrimary} font-bold`}
                    >
                      {`${industry.attributes.title}${
                        arr.length - 1 !== idx ? ", " : ""
                      }`}
                    </span>
                  )
                )}
              </div>
              <div className="yw-t2-med sm:text-lg mb-2">
                <span className={cn(themeData.textColorSecondary)}>
                  Timeline:{"  "}
                </span>
                <span className={`${themeData.textColorPrimary} font-bold`}>
                  {item.attributes.timeline}
                </span>
              </div>
              <div className="yw-t2-med sm:text-lg mb-6">
                <span className={cn(themeData.textColorSecondary)}>
                  Country:{"  "}
                </span>
                <span className={`${themeData.textColorPrimary} font-bold`}>
                  {item.attributes.country}
                </span>
              </div>

              <div className="flex flex-row font-bold text-yw-primary-default flex-wrap mb-4 gap-3">
                {item.attributes.technologies.data.map((category: Category) => (
                  <Tag
                    key={category.id}
                    title={category.attributes.title}
                    className="bg-yw-gray-600 text-white"
                  />
                ))}
              </div>

              <p
                className={`yw-t1 mb-8 ${themeData.textColorPrimary} line-clamp-4`}
              >
                {item.attributes.description}
              </p>
            </div>

            <a
              href={`/case-studies/${item.attributes.slug}`}
              className={`btn group rounded-full flex items-center justify-center whitespace-nowrap font-montserrat yw-button-small py-4 px-6 text-sm leading-none ${themeData.buttonVariant}`}
            >
              <span className="flex-1 text-center">
                {/* {item.attributes.buttonText} */}
                Open full case
              </span>
              <span className="ml-auto">
                <SmallArrow
                  className={`${themeData.arrowStyle} rotate-180 ltr:ml-2 rtl:mr-2`}
                  fill="#313339"
                />
              </span>
            </a>
          </div>

          <div className={`w-full ${orderImage} hidden md:block`}>
            <StrapiImage
              image={item.attributes.image?.data}
              onDragStart={(e) => e.preventDefault()}
              loading={loading}
              height="354"
              width="535"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastProjectCard;
