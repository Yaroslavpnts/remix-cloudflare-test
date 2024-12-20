import { useState, type FC } from "react";
import TechnologiesAndToolsBlock from "./TechnologiesAndToolsBlock";
import TechnologiesAndToolsFilters from "./TechnologiesAndToolsFilters";
import { Theme } from "~/types";
import type { StrapiImageData } from "~/types";

type TItem = {
  icon: StrapiImageData;
  title: string;
  category: string;
  subcategory?: string;
};

type TItems = {
  id: number;
  attributes: TItem;
}[];

type TProps = {
  theme: Theme;
  title: string;
  section_navigation_name: string;
  items: { data: TItems };
  dataSectionName: string;
};

function prepareStructure(items: TItems) {
  const order: string[] = [];

  const structure =
    items?.reduce((acc, item) => {
      const { category, subcategory, title, icon } = item.attributes;

      if (!order.includes(category)) {
        order.push(category);
      }

      // Handle subcategories
      if (subcategory) {
        // Initialize acc[category] as an object if it doesn't already exist
        if (!acc[category]) {
          acc[category] = {};
        }

        // Initialize acc[category][subcategory] as an array if it doesn't already exist
        if (!acc[category][subcategory]) {
          acc[category][subcategory] = [];
        }

        // Push the item into the appropriate subcategory array
        acc[category][subcategory].push({ title, icon });
      } else {
        // Handle categories without subcategories

        // Initialize acc[category] as an array if it doesn't already exist
        if (!acc[category]) {
          acc[category] = [];
        }

        // Push the item directly into the category array
        acc[category].push({ title, icon });
      }

      return acc;
    }, {} as Record<string, any>) || {};

  return { order, structure };
}

const themes: any = {
  light: {
    textColorPrimary: "text-yw-primary-default",
    sectionBg: "bg-yw-gray-100",
  },
  dark: {
    textColorPrimary: "text-white",
    sectionBg: "bg-yw-primary-default",
  },
};

const TechnologiesAndToolsSection: FC<TProps> = ({
  items,
  theme,
  title,
  section_navigation_name,
  dataSectionName,
}) => {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const themeData = themes[theme || Theme.light];

  const { structure, order } = prepareStructure(items?.data);

  const handleChangeActiveFilters = (current: string) => {
    setActiveFilters((prev) => {
      if (prev.includes(current)) {
        return prev.filter((f) => f !== current);
      }
      return [...prev, current];
    });
  };

  const activeItems = activeFilters.length ? activeFilters : order;

  return (
    <section
      className={`${themeData.sectionBg} py-28`}
      data-sectionid={section_navigation_name}
      data-section-name={dataSectionName}
    >
      <div className="container grid gap-y-10">
        {title && (
          <h2 className={`yw-h2 ${themeData.textColorPrimary}`}>{title}</h2>
        )}

        <TechnologiesAndToolsFilters
          items={order}
          activeFilters={activeFilters}
          handleChangeFilter={handleChangeActiveFilters}
        />

        <div className="grid gap-y-6 lg:gap-10">
          {activeItems?.map((key) => (
            <TechnologiesAndToolsBlock
              key={"case_technologies_" + key}
              theme={themeData}
              items={structure[key]}
              title={key}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologiesAndToolsSection;
