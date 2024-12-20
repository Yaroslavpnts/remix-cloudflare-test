import { type FC, useState } from "react";
import MinusIcon from "~/icons/components/MinusIcon";
import PlusIcon from "~/icons/components/PlusIcon";
import { Theme } from "~/types";

type TItems = {
  title: string;
  text: string;
  html: string;
};

type TProps = {
  theme: string;
  title: string;
  description: string;
  section_navigation_name: string;
  items: TItems[];
  dataSectionName: string;
};

const Faq: FC<TProps> = ({
  theme,
  title,
  description,
  section_navigation_name,
  items,
  dataSectionName,
}) => {
  const themes: any = {
    dark: {
      textColorPrimary: "text-white",
      textColorSecondary: "text-yw-gray-300",
      sectionBg: "bg-yw-primary-default",
    },
    light: {
      textColorPrimary: "text-yw-primary-default",
      textColorSecondary: "text-yw-gray-500",
      sectionBg: "bg-yw-gray-100",
    },
  };
  const themeData = themes[theme || Theme.light];

  const [openedItems, setOpenedItems] = useState<number[]>([]);

  return (
    <section
      data-sectionid={section_navigation_name}
      className={`${themeData.sectionBg} py-[104px]`}
      data-section-name={dataSectionName}
    >
      <div className="container grid grid-cols-12 gap-y-8">
        <div className="col-span-12 mb-4">
          <h2 className={`${themeData.textColorPrimary} yw-h2 mb-4 xl:w-3/5`}>
            {title}
          </h2>
          <p className={`${themeData.textColorSecondary} yw-t1 xl:w-3/5`}>
            {description}
          </p>
        </div>

        {items.map((item, idx) => (
          <div
            key={"faq_" + idx}
            className="grid col-span-12 border-b border-yw-gray-500 pb-8"
          >
            <div
              onClick={() => {
                if (openedItems.includes(idx)) {
                  setOpenedItems(openedItems.filter((i) => i !== idx));
                } else {
                  setOpenedItems([...openedItems, idx]);
                }
              }}
              className="question flex justify-between items-center md:grid grid-cols-12 col-span-12 cursor-pointer gap-y-2 gap-x-2 md:gap-10"
            >
              <div
                className={`yw-h3 ${themeData.textColorPrimary} md:col-span-7 lg:col-span-8`}
              >
                {item.title}
              </div>
              <div className="flex justify-center items-center bg-yw-gray-800 rounded-full cursor-pointer h-[40px] w-[40px] min-w-[40px] min-h-[40px] md:col-start-12 md:col-span-5 lg:col-span-4 justify-self-end">
                {openedItems.includes(idx) ? (
                  <MinusIcon color="#FAFAFC" />
                ) : (
                  <PlusIcon color="#FAFAFC" />
                )}
              </div>
            </div>
            <div className="grid grid-cols-12 col-span-12 md:gap-10">
              {openedItems.includes(idx) ? (
                <>
                  <div
                    className={`answer whitespace-pre-line md-text yw-t1 col-span-12 md:col-span-7 lg:col-span-8 ${themeData.textColorSecondary} pt-5`}
                    dangerouslySetInnerHTML={{ __html: item.html || item.text }}
                  ></div>
                  <div className="md:col-span-5 lg:col-span-4"></div>
                </>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
