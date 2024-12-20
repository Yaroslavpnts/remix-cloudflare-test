import type { FC } from "react";
import { Theme } from "~/types";
import type { Technology } from "~/types";
import TechnologiesAndToolsItems from "../TechnologiesAndToolsSection/TechnologiesAndToolsItems";

type TCaseTechnolgiesProps = {
  title: string;
  technologies: { data: Technology[] };
  dataSectionName: string;
  theme: Theme;
};

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

const CaseTechnolgies: FC<TCaseTechnolgiesProps> = ({
  title,
  technologies = { data: [] },
  dataSectionName,
  theme,
}) => {
  const technologiesData = technologies?.data?.map((technology) => ({
    icon: technology?.attributes?.icon,
    title: technology?.attributes?.title,
  }));

  if (!technologiesData || !technologiesData.length) {
    return null;
  }

  const themeData = themes[theme || Theme.light];

  return (
    <section
      className={`py-8 md:py-20 ${themeData.sectionBg} ${themeData.textColorPrimary}`}
      data-section-name={dataSectionName}
    >
      <div className="container grid grid-cols-12 gap-y-10 sm:gap-10">
        <div className="col-span-12 md:col-span-5 md:pr-10">
          <div className="yw-h2">{title}</div>
        </div>

        <TechnologiesAndToolsItems
          items={technologiesData}
          containerClassName="col-span-12 md:col-span-7"
        />
      </div>
    </section>
  );
};

export default CaseTechnolgies;
