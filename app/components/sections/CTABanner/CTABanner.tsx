import { useContactFormPage } from "~/contexts/ContactFormPage.context";
import StrapiImage from "~/components/StrapiImage";
import type { StrapiImageData } from "~/types";
import { Theme } from "~/types";

const CTABanner = ({
  buttonText,
  dataSectionName,
  heading,
  image,
  section_navigation_name,
  theme,
}: {
  buttonText: string;
  dataSectionName: string;
  heading: string;
  image?: { data: StrapiImageData };
  section_navigation_name?: string;
  theme?: Theme;
}) => {
  const { setIsShownContactForm } = useContactFormPage();

  const themes = {
    dark: {
      sectionBg: "bg-yw-primary-default",
      bannerBg: "bg-[#B8DFFF]",
    },
    light: {
      sectionBg: "bg-yw-gray-100",
      bannerBg: "bg-[#DFF1FF]",
    },
  };

  const themeData = themes[theme || Theme.light];

  return (
    <section
      data-sectionid={section_navigation_name}
      className={`${themeData.sectionBg} py-20`}
      data-section-name={dataSectionName}
    >
      <div className="container">
        <div
          className={`${themeData.bannerBg} rounded-3xl grid grid-cols-12 sm:gap-10 gap-y-6`}
        >
          <div
            className={`col-span-12 ${
              image?.data ? "lg:col-span-8" : "lg:col-span-10"
            } p-8 sm:p-12 lg:py-14 lg:pl-[88px] flex flex-col justify-between`}
          >
            <h2 className="text-lg md:text-[34px] md:leading-[46.75px] font-bold mb-8">
              {heading}
            </h2>

            <div className="flex gap-4 flex-row items-end">
              <div
                className={`flex gap-4 flex-wrap-reverse lg:flex-row ${
                  image?.data && "flex-col-reverse"
                }`}
              >
                <button
                  data-button="consultation"
                  onClick={() => {
                    setIsShownContactForm(true);
                  }}
                  className="btn group rounded-full flex items-center justify-center whitespace-nowrap font-montserrat py-4 px-6 text-sm leading-none yw-button-small btn-primary w-fit"
                >
                  {buttonText}
                </button>

                {/* <div className="flex-1 whitespace-nowrap">
                  <div className="yw-h4">Yevhen Piotrovskyi</div>
                  <div className="yw-t2-med text-yw-cta-default">
                    Co-founder of Yojji
                  </div>
                </div> */}
              </div>
              {/* {image?.data && (
                <div className="lg:hidden relative flex-1">
                  <StrapiImage
                    image={image?.data}
                    className="max-h-full mt-auto max-w-[400px] ml-auto w-full"
                  />
                </div>
              )} */}
            </div>
          </div>

          {image?.data && (
            <div className="lg:flex hidden col-span-4 relative  bottom-0 right-0 h-full right-9 max-w-sm md:h-[115%] top-[-15%]">
              <StrapiImage image={image?.data} className="max-h-full mt-auto" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

CTABanner.populate = ["image"];

export default CTABanner;
