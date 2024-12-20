import { type FC } from "react";
import cn from 'classnames'
import StrapiImage from "~/components/StrapiImage";
import Checkmark from "~/icons/components/Checkmark";
import NodeLogo from "~/icons/node-service-black.svg";
import ReactLogo from "~/icons/react-service-black.svg";
import VueLogo from "~/icons/vue-service-black.svg";
import TypeLogo from "~/icons/typescript-service-black.svg";
import AngularLogo from "~/icons/angular-service-black.svg";
import { Theme } from "~/types";

type TItems = {
  icon: any;
  title: string;
  text: string;
  tags: string;
  description: string;
  technologies: boolean;
  buttonLink: string;
  buttonText: string;
};

type TProps = {
  theme: Theme;
  title: string;
  description: string;
  icon: any;
  section_navigation_name: string;
  items: TItems[];
  dataSectionName: string;
};

const InfoProfessionSection: FC<TProps> = ({
  items,
  theme,
  title,
  section_navigation_name,
  dataSectionName,
}) => {
  const themes: any = {
    dark: {
      textColorPrimary: "text-white",
      sectionBg: "bg-yw-primary-default",
      textColorSecondary: "text-yw-gray-300",
      cardBg: "card-dark",
      secondaryBg: "bg-[#ffffff0d]",
      stepIcon: "/svg/checkmark-circle-fill.svg", // todo fix
      buttonVariant: "btn-secondary-inverted",
      arrowStyle: "svg-black",
    },
    light: {
      textColorPrimary: "text-yw-primary-default",
      sectionBg: "bg-yw-gray-100",
      textColorSecondary: "text-yw-gray-500",
      cardBg: "card-light",
      secondaryBg: "bg-yw-gray-100",
      stepIcon: "/svg/checkmark-circle-black.svg", // todo fix
      buttonVariant: "btn-secondary",
      arrowStyle: "svg-white",
    },
  };
  const themeData = themes[theme || Theme.light];

  return (
    <section
      className={`${themeData.sectionBg} py-20`}
      data-sectionid={section_navigation_name}
      data-section-name={dataSectionName}
    >
      <div className="container grid grid-cols-12 gap-y-10 xl:gap-10">
        <h2
          className={`${themeData.textColorPrimary} yw-h2 mb-10 text-center sm:text-start col-span-12`}
        >
          {title}
        </h2>
        {items.map((item, idx) => {
          const tags = item.tags.split(",");
          return (
            <div
              key={idx}
              className={`${themeData.cardBg} ${
                items.length > 2 ? "xl:col-span-4" : "xl:col-span-6"
              } flex flex-col justify-between col-span-12`}
            >
              <div className="mb-8 text-center sm:text-start flex justify-center flex-col w-full">
                <div className="mb-4 self-center sm:self-start">
                  <StrapiImage
                    image={item?.icon?.data}
                    className="w-[86px] h-[86px]"
                  />
                </div>
                <h3 className={`${themeData.textColorPrimary} yw-h3 mb-4`}>
                  {item.title}
                </h3>
                <div className={`${themeData.textColorSecondary} yw-t1 mb-4`}>
                  {item.description}
                </div>

                <div className="grid sm:grid-cols-2 gap-3 text-start">
                  {item?.technologies ? (
                    <>
                      <div
                        className={`${themeData.secondaryBg} ${themeData.textColorPrimary} col-span-1 p-4 rounded-lg flex items-center justify-center mb-4`}
                      >
                        <div className="yw-h3 rtl:ml-4 ltr:mr-4">
                          <img loading="lazy" src={NodeLogo} alt="Nodejs" />
                        </div>
                      </div>
                      <div
                        className={`${themeData.secondaryBg} ${themeData.textColorPrimary} col-span-1 p-4 rounded-lg flex items-center justify-center mb-4`}
                      >
                        <div className="yw-h3 rtl:ml-4 ltr:mr-4">
                          <img
                            loading="lazy"
                            src={ReactLogo}
                            alt="Technology"
                          />
                        </div>
                      </div>
                      <div
                        className={`${themeData.secondaryBg} ${themeData.textColorPrimary} col-span-1 p-4 rounded-lg flex items-center justify-center mb-4`}
                      >
                        <div className="yw-h3 rtl:ml-4 ltr:mr-4">
                          <img loading="lazy" src={VueLogo} alt="Vue" />
                        </div>
                      </div>
                      <div
                        className={`${themeData.secondaryBg} ${themeData.textColorPrimary} col-span-1 p-4 rounded-lg flex items-center justify-center mb-4`}
                      >
                        <div className="yw-h3 rtl:ml-4 ltr:mr-4">
                          <img loading="lazy" src={TypeLogo} alt="Typescript" />
                        </div>
                      </div>
                      <div
                        className={`${themeData.secondaryBg} ${themeData.textColorPrimary} col-span-2 p-4 rounded-lg flex items-center justify-center mb-4`}
                      >
                        <div className="yw-h3 rtl:ml-4 ltr:mr-4">
                          <img loading="lazy" src={AngularLogo} alt="Angular" />
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {tags.map((tag: string, idx) => (
                        <div
                          key={idx}
                          className={cn("p-4 rounded-lg flex items-center mb-4 col-span-1",
                            themeData.secondaryBg,
                            themeData.textColorPrimary, {
                            "col-span-2" : idx === tags.length - 1 && tags.length % 2
                          })}
                        >
                          <div className="yw-h3 rtl:ml-4 ltr:mr-4">
                            {<Checkmark bgColor="#313339" checkmarkColor="white" width={28} height={28}/>}
                          </div>
                          <h4 className="yw-h4">{tag}</h4>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              </div>
              <a
                href={item.buttonLink}
                className={`btn group rounded-full flex items-center justify-center whitespace-nowrap font-montserrat yw-button-small py-4 px-6 text-sm leading-none ${themeData.buttonVariant} w-full`}
              >
                <span className="flex-1 text-center">{item.buttonText}</span>
                <span className="ml-auto">
                  <svg
                    className={`${themeData.arrowStyle} rotate-180 ltr:ml-2 rtl:mr-2`}
                    width="14"
                    height="15"
                    viewBox="0 0 14 15"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.65265 7.72974H13.4109V6.41089H2.65265L7.92969 0.933603L6.97993 0.0185613L0.185983 7.07031L6.97993 14.1221L7.92969 13.207L2.65265 7.72974Z"
                      fill="#313339"
                    ></path>
                  </svg>
                </span>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default InfoProfessionSection;
