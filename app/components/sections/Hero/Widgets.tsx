import { ComponentType, FC } from "react";
import cn from "classnames";
import ClutchWidget from "./ClutchWidget/ClutchWidget";
import GoodFirmsWidget from "./GoodFirmsWidget/GoodFirmsWidget";
import DesignRushWidget from "./DesignRushWidget/DesignRushWidget";

type WidgetName = "Clutch" | "Goodfirms" | "DesignRush";

type TWidgetData = {
  id: number;
  attributes: {
    average_rating: number;
    total_reviews: number;
    widget_name: WidgetName;
  };
};

export type TWidgets = {
  data: TWidgetData[];
  className?: string;
};

export type TWidgetProps = {
  averageRating: number;
  reviewsCount: number;
  className?: string;
};

type TWidgetsMapping = {
  [index in WidgetName]: ComponentType<TWidgetProps>;
};

const widgets: TWidgetsMapping = {
  Clutch: ClutchWidget,
  Goodfirms: GoodFirmsWidget,
  DesignRush: DesignRushWidget,
};

const Widgets: FC<TWidgets> = ({ data, className }) => {
  return (
    <div
      className={cn(
        "flex flex-wrap justify-start gap-8 items-center",
        className
      )}
    >
      {data
        .sort((curr, prev) => curr.id - prev.id)
        .map((widgetData) => {
          const { id, attributes } = widgetData;

          const WidgetComponent = widgets[widgetData.attributes.widget_name];

          return WidgetComponent ? (
            <WidgetComponent
              key={id}
              className="col-span-6 sm:col-span-4 lg:col-span-2"
              averageRating={attributes.average_rating}
              reviewsCount={attributes.total_reviews}
            />
          ) : null;
        })}
    </div>
  );
};

export default Widgets;
