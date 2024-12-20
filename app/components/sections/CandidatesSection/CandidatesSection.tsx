import type { Member } from "~/types";
import { Theme } from "~/types";
import cn from "classnames";
import CandidateCard from "./CandidateCard";
import { useContactFormPage } from "~/contexts/ContactFormPage.context";

const CandidatesSection = ({
  title,
  description,
  theme,
  section_navigation_name,
  items = { data: [] },
  dataSectionName,
}: {
  title?: string;
  description?: string;
  theme?: Theme;
  section_navigation_name: string;
  items?: { data: Member[] };
  dataSectionName: string;
}) => {
  const { setIsShownContactForm } = useContactFormPage();

  const themes = {
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

  const availableCandidates = items.data?.filter(
    (m) => m.attributes?.availability
  );
  return (
    <section
      data-sectionid={section_navigation_name}
      className={`${themeData.sectionBg} py-28`}
      data-section-name={dataSectionName}
    >
      <div className="container grid grid-cols-12 gap-y-8 sm:gap-8">
        <div className={cn("col-span-12 md:w-2/3")}>
          {title && (
            <h2 className={`${themeData.textColorPrimary} yw-h2 mb-4`}>
              {title}
            </h2>
          )}

          {description && (
            <div className={`${themeData.textColorSecondary} yw-t1`}>
              {description}
            </div>
          )}
        </div>
        <div className="grid col-span-12 grid-cols-[repeat(auto-fill,minmax(375px,max-content))] gap-8 justify-center">
          {availableCandidates?.map((member: any, i: number) => (
            <CandidateCard
              key={"candidate-section_" + i}
              data={member}
              theme={theme}
              setIsShown={setIsShownContactForm}
              className={cn("w-[320px] xs:w-[375px] justify-self-center")}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CandidatesSection;
