import { FC } from "react";
import StrapiImage from "~/components/StrapiImage";
import { useContactFormPage } from "~/contexts/ContactFormPage.context";
import { StrapiImageData } from "~/types";

type TCTAWithLogo = {
  title: string;
  description: string;
  button_text: string;
  icon: StrapiImageData;
};

const CTAWithLogo: FC<TCTAWithLogo> = ({
  title,
  description,
  button_text,
  icon,
}) => {
  const { setIsShownContactForm } = useContactFormPage();

  return (
    <section className="py-28 bg-yw-gray-100">
      <div className="container">
        <div className="flex justify-between items-center p-8 lg:py-[56px] lg:px-[88px] bg-[#313339] rounded-[24px] flex-col lg:flex-row gap-10">
          <div>
            <div className="yw-h2 text-white xl:max-w-[670px] mb-[18px]">
              {title}
            </div>

            <div className="flex justify-center sm:max-w-[400px] mb-[18px] mx-auto lg:hidden lg:max-w-[300px]">
              <StrapiImage image={icon?.data} className="w-full h-auto" />
            </div>

            <div className="yw-t2 text-[#E7E9EA] font-medium mb-[18px] lg:max-w-[575px]">
              {description}
            </div>

            <button
              className="yw-button-small !font-bold bg-[#0057FF] text-white rounded-[48px] w-full lg:w-auto"
              onClick={() => setIsShownContactForm(true)}
            >
              {button_text}
            </button>
          </div>

          <div className="hidden justify-center max-w-[286px] lg:flex">
            <StrapiImage image={icon?.data} className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAWithLogo;
