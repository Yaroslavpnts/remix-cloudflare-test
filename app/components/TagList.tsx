import type { FC } from "react";
import { Theme } from "~/types";

type TProps = {
  title: string;
  tags: string;
  theme: Theme;
};

const TagList: FC<TProps> = ({ title, tags, theme }) => {
  const items = tags?.split(",");
  const themes = {
    light: {
      textColorPrimary: "text-yw-primary-default",
      textColorSecondary: "text-yw-gray-500",
    },
    dark: {
      textColorPrimary: "text-white",
      textColorSecondary: "text-yw-gray-300",
    },
  };
  const themeData = themes[theme || Theme.light];

  return (
    items && (
      <div className="col-span-12 grid grid-cols-3 lg:grid-cols-6 gap-6 break-all items-end pt-16">
        <p
          className={`yw-h3 ${themeData.textColorPrimary} col-span-3 lg:col-span-1 text-start lg:text-center break-normal`}
        >
          {title}:
        </p>
        {items?.map((tag: string, idx) => (
          <p
            key={'tag_'+idx}
            className={`yw-h4 ${themeData.textColorSecondary} col-span-1 text-start lg:text-center`}
          >
            {tag}
          </p>
        ))}
      </div>
    )
  );
};

export default TagList;
