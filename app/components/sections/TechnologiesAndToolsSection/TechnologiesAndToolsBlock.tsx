import { Fragment } from "react";
import type { StrapiImageData } from "~/types";
import TechnologiesAndToolsItems from "./TechnologiesAndToolsItems";

type TItem = {
  icon: StrapiImageData;
  title: string;
};

function TechnologiesAndToolsBlock({
  items,
  title,
  theme,
}: {
  items: {
    [key: string]: TItem[] | { [key: string]: { [key: string]: TItem[] } };
  };
  title: string;
  theme: any;
}) {
  return (
    <div className="grid grid-cols-12 border-b border-b-[#AFB3B850] last:border-none py-14 first:pt-0">
      {Array.isArray(items) ? (
        <>
          <div
            className={`col-span-12 sm:col-span-5 yw-h3 mb-8 sm:mb-0 ${theme.textColorPrimary} `}
          >
            {title}
          </div>
          <TechnologiesAndToolsItems
            items={items}
            itemClassName={theme.textColorPrimary}
          />
        </>
      ) : (
        <>
          <div className={`col-span-12 yw-h3 mb-14 ${theme.textColorPrimary}`}>
            {title}
          </div>
          {Object.entries(items).map(([key, tech], id) => (
            <Fragment key={id}>
              <div
                className={`col-span-12 yw-h3 sm:col-span-5 text-yw-gray-400 mb-8 sm:mb-0`}
              >
                {key}
              </div>
              <TechnologiesAndToolsItems
                items={tech}
                containerClassName="mb-12 last:mb-0"
                itemClassName={theme.textColorPrimary}
              />
            </Fragment>
          ))}
        </>
      )}
    </div>
  );
}

export default TechnologiesAndToolsBlock;
