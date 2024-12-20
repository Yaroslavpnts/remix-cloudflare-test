import type { Portfolio } from "~/types";
import { Theme } from "~/types";
import PortfolioCase from "./PortfolioCase";

const themes = {
  dark: {
    sectionBg: "bg-yw-primary-default",
  },
  light: {
    sectionBg: "bg-yw-gray-100",
  },
};
const PortfolioSection = ({
  portfolios,
  dataSectionName,
  title,
  theme,
}: {
  portfolios: Portfolio[];
  dataSectionName: string;
  theme: Theme;
  title?: string;
}) => {
  const themeData = themes[theme || Theme.light];

  return (
    <section
      data-section-name={dataSectionName}
      className={`${themeData.sectionBg} py-8 md:py-20`}
    >
      <div className="container">
        {title && <h2 className={`yw-h2 md:mb-20 mb-10`}>{title}</h2>}

        {portfolios?.data?.map((item, index: number) => (
          <div className="py-8" key={index}>
            <PortfolioCase
              item={item}
              theme={theme}
              reverseOrder={index % 2 !== 0}
              loading={index === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

PortfolioSection.populate = [
  "portfolios.image",
  "portfolios.industries",
  "portfolios.testimonials",
];

export default PortfolioSection;
