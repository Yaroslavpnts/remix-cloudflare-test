import { memo } from "react";
import cn from "classnames";

const InfiniteScrollingText = ({ theme = "gray", className = "" }) => {
  const themes = {
    dark: {
      textColorPrimary: "text-white",
      borderedText: "bordered-dark",
    },
    light: {
      textColorPrimary: "text-yw-primary-default",
      borderedText: "bordered-light",
    },
    gray: {
      textColorPrimary: "text-yw-gray-400",
      borderedText: "bordered-gray",
    },
  };

  const themeData = themes[theme];

  return (
    <div className={cn("slider", className)}>
      <div className={theme == "gray" ? "slide-track-bottom" : "slide-track"}>
        {[...Array(30).keys()].map((item) => (
          <div
            key={item}
            className={cn("slide", {
              [themeData.borderedText]: item % 2 == 0 || theme == "gray",
              bordered: item % 2 == 0,
              [themeData.textColorPrimary]: item % 2 != 0,
            })}
          >
            YOJJI
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(InfiniteScrollingText);
