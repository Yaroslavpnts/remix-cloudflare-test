import type { FC } from "react";
import { Theme } from "~/types";
import Checkmark from "~/icons/components/Checkmark";

type TProps = {
  section_navigation_name?: string;
  theme: Theme;
  dataSectionName: string;
};

const DiscoveryTeam: FC<TProps> = ({
  theme,
  section_navigation_name,
  dataSectionName,
}) => {
  const themes: any = {
    dark: {
      textColorPrimary: "text-white",
      cardBg: "card-dark",
    },
    light: {
      textColorPrimary: "text-yw-primary-default",
      cardBg: "bg-yw-gray-100",
    },
  };

  const themeData = themes[theme || Theme.light];

  const professions = [
    "Project manager",
    "Business analyst or solution architect",
    "Chief technology officer",
    "UX/UI designer",
    "Backend, frontend, or mobile developer",
    "Marketing manager",
  ];

  return (
    <section
      className="bg-yw-gray-100 py-28"
      data-sectionid={section_navigation_name}
      data-section-name={dataSectionName}
    >
      <div className="container grid grid-cols-12 gap-y-6 md:gap-10">
        <div className="col-span-12 max-w-[727px]">
          <h2 className="yw-h2 mb-4">Discovery team</h2>
          <p className="yw-t1 text-yw-gray-500">
            Here are the most important professionals who can easily handle the
            entire discovery phase of your software project.
          </p>
        </div>
        {professions.map((item, idx) => (
          <div
            key={"disc_team_" + idx}
            className={`col-span-12 md:col-span-6 flex items-center ${themeData.cardBg} w-full rounded-3xl`}
          >
            <div className="ltr:mr-4 rtl:ml-4">
              <Checkmark bgColor="#0057FF" checkmarkColor="#FFF" />
            </div>
            <p className={`${themeData.textColorPrimary} yw-h4 flex-1`}>
              {item}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DiscoveryTeam;
