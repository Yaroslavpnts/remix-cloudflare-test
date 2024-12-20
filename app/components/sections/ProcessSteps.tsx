import { Theme } from "~/types";
import StrapiImage from "../StrapiImage";

const ProcessSteps = ({
  theme,
  title,
  section_navigation_name,
  items = [],
  dataSectionName,
}: {
  theme: Theme;
  title: string;
  section_navigation_name: string;
  items: any;
  dataSectionName: string;
}) => {
  const themes: any = {
    dark: {
      textColorPrimary: "text-white",
      sectionBg: "bg-yw-primary-default",
    },
    light: {
      textColorPrimary: "text-yw-primary-default",
      sectionBg: "bg-yw-gray-100",
    },
  };
  const themeData = themes[theme || Theme.light];

  return (
    <section
      data-sectionid={section_navigation_name}
      className={`${themeData.sectionBg} py-28`}
      data-section-name={dataSectionName}
    >
      <div className="container grid grid-cols-12 gap-y-10 md:gap-10 xl:items-start">
        <h3
          className={`yw-h2 ${themeData.textColorPrimary} col-span-12 xl:col-span-4 text-center text-start xl:sticky xl:top-[150px]`}
        >
          {title}
        </h3>

        <div className="col-span-12 xl:col-span-8 grid grid-cols-1 gap-y-4">
          {items.map((item, index) => (
            <div key={"process_steps_" + index}>
              {index === 0 && (
                <div className="h-px bg-[#707378] w-full mb-4"></div>
              )}
              <div className="flex items-center pb-4">
                {item.icon.data || item.iconDark.data ? (
                  <StrapiImage
                    image={
                      theme == "light" ? item?.iconDark?.data : item?.icon?.data
                    }
                    width="34"
                    height="40"
                    loading="lazy"
                    alt={item.title ? item.title : "Process steps section icon"}
                    className="mr-4"
                  />
                ) : (
                  <p className="text-stroke yw-h2 mr-4">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                )}
                <h3 className={themeData.textColorPrimary + " yw-h3 relative"}>
                  {item.text}
                </h3>
              </div>

              <div className="h-px bg-[#707378] w-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
