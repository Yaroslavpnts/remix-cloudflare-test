import { type FC } from "react";
import { useContactFormPage } from "~/contexts/ContactFormPage.context";
import { Theme } from "~/types";

type TItems = {
  title: string;
  text: string;
};

type TProps = {
  theme: Theme;
  title: string;
  description: string;
  section_navigation_name: string;
  items: TItems[];
  dataSectionName: string;
};

const ConsultationSteps: FC<TProps> = ({
  theme,
  title,
  description,
  section_navigation_name,
  items,
  dataSectionName,
}) => {
  const { setIsShownContactForm } = useContactFormPage();

  const themes = {
    dark: {
      textColorPrimary: "text-white",
      textColorSecondary: "text-yw-gray-300",
      sectionBg: "bg-yw-primary-default",
      buttonVariant: "btn-secondary-inverted",
      textStroke: "text-stroke-dark text-yw-primary-default",
    },
    light: {
      textColorPrimary: "text-[#313339]",
      textColorSecondary: "text-[#45474D]",
      textStroke: "text-stroke-light text-yw-gray-100",
      sectionBg: "bg-yw-gray-100",
      buttonVariant: "btn-secondary",
    },
  };

  const themeData = themes[theme || Theme.light];

  return (
    <section
      data-section-name={dataSectionName}
      data-sectionid={section_navigation_name}
      className={`${themeData.sectionBg} py-28`}
    >
      <div className="container !grid grid-cols-12 gap-y-10 sm:gap-10 relative items-start">
        <div className="col-span-12 xl:col-span-6 xl:sticky xl:top-[180px]">
          <h2 className={`yw-h2 mb-4 ${themeData.textColorPrimary}`}>
            {title}
          </h2>
          {description && (
            <p className={`yw-t1 ${themeData.textColorSecondary} mb-8`}>
              {description}
            </p>
          )}
          <button
            data-button="consultation"
            className={`btn ${themeData.buttonVariant} rounded-full yw-button-small m-auto ltr:sm:ml-0 rtl:sm:mr-0`}
            onClick={() => {
              setIsShownContactForm(true);
            }}
          >
            Get a free consultation
          </button>
        </div>

        <div className="col-span-12 xl:col-span-6">
          {items.map((item: any, idx) => (
            <div
              key={"cons_step_" + idx}
              className="relative pt-[100px] mb-[60px]"
            >
              <p
                className={`${themeData.textStroke} text-[144px] col-span-3 line-[158.4px] font-bold font-montserrat absolute -top-[15px]`}
              >
                {String(idx + 1).padStart(2, "0")}
              </p>

              <h2
                className={`mb-4 yw-h2 relative ${themeData.textColorPrimary}`}
              >
                {item.title}
              </h2>
              <p
                className={`yw-t1 col-span-5 relative ${themeData.textColorSecondary}`}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConsultationSteps;
