import cn from "classnames";
import { Theme } from "~/types";
import Card from "./Card";
import Button from "~/components/Button";
import { useContactFormPage } from "~/contexts/ContactFormPage.context";
import { GtmEvent } from "~/utils/gtmSendEvent";

const themes = {
  dark: {
    textColorPrimary: "text-white",
    textColorSecondary: "text-yw-gray-300",
    sectionBg: "bg-yw-primary-default",
    cardBg: "card-dark",
  },
  light: {
    textColorPrimary: "text-yw-primary-default",
    textColorSecondary: "text-yw-gray-500",
    sectionBg: "bg-yw-gray-100",
    cardBg: "card-light",
  },
};

export enum CardsSectionLayoutVariant {
  title_is_separate_row = "title_is_separate_row",
  title_is_part_of_grid = "title_is_part_of_grid",
  title_is_separate_column = "title_is_separate_column",
}

enum ColumnsQuantity {
  two_columns = "option - 2",
  three_columns = "option - 3",
}

enum ButtonText {
  contact_us = "Contact Us",
  get_a_free_consultation = "Get a free consultation",
}

const CardsSection = ({
  columns_quantity,
  dataSectionName,
  description,
  heading,
  items = [],
  mode,
  section_navigation_name,
  theme,
  heading_html,
  layout_variant,
  button_text,
  index_cards,
}: {
  columns_quantity: string;
  dataSectionName: string;
  description?: string;
  heading?: string;
  mode?: "card" | "block";
  items?: any[];
  section_navigation_name: string;
  theme?: Theme;
  heading_html: string;
  layout_variant: CardsSectionLayoutVariant;
  button_text?: ButtonText;
  index_cards?: boolean;
}) => {
  const { setIsShownContactForm, setEvent } = useContactFormPage();

  const themeData = themes[theme || Theme.light];

  columns_quantity = columns_quantity || ColumnsQuantity.three_columns;

  layout_variant ??= CardsSectionLayoutVariant.title_is_separate_row;
  mode ??= "card";

  const sectionCtaHandler = () => {
    setIsShownContactForm(true);
    setEvent(
      button_text === ButtonText.contact_us
        ? GtmEvent.submit_contact_us
        : GtmEvent.submit_free_consultation
    );
  };

  return (
    <section
      data-sectionid={section_navigation_name}
      className={`${themeData.sectionBg} py-28`}
      data-section-name={dataSectionName}
    >
      <div className="container grid grid-cols-12 sm:gap-10 gap-y-10">
        <div
          className={cn({
            "col-span-12 sm:col-span-6 lg:col-span-6":
              layout_variant ===
                CardsSectionLayoutVariant.title_is_part_of_grid &&
              columns_quantity === ColumnsQuantity.two_columns,
            "col-span-12 sm:col-span-6 lg:col-span-4":
              layout_variant ===
                CardsSectionLayoutVariant.title_is_part_of_grid &&
              columns_quantity === ColumnsQuantity.three_columns,
            "col-span-12 md:col-span-6 lg:col-span-4":
              layout_variant ===
              CardsSectionLayoutVariant.title_is_separate_column,
            "col-span-12":
              layout_variant ===
              CardsSectionLayoutVariant.title_is_separate_row,
          })}
        >
          {heading && (
            <h2
              className={cn(
                "yw-h2 max-w-[360px] sm:max-w-[680px] mb-8",
                themeData.textColorPrimary,
                {
                  "!mb-2": description,
                }
              )}
            >
              {heading}
            </h2>
          )}
          {heading_html && (
            <h2
              className={`${themeData.textColorPrimary} yw-h2 mb-4 md-title`}
              dangerouslySetInnerHTML={{ __html: heading_html }}
            ></h2>
          )}
          {description && (
            <div
              className={cn(`${themeData.textColorSecondary} yw-t1 mb-4`, {
                "sm:max-w-[550px]":
                  layout_variant ===
                  CardsSectionLayoutVariant.title_is_separate_row,
                "sm:max-w-xs":
                  layout_variant !==
                  CardsSectionLayoutVariant.title_is_separate_row,
              })}
            >
              {description}
            </div>
          )}
          {button_text && (
            <Button
              id="web-development-solutions-consultation"
              className="btn group rounded-full btn-cta flex items-center justify-center whitespace-nowrap font-montserrat text-lg leading-none w-full sm:w-fit"
              size="md"
              onClick={sectionCtaHandler}
            >
              {button_text}
            </Button>
          )}
        </div>

        {layout_variant !==
          CardsSectionLayoutVariant.title_is_separate_column &&
          items.map((el: any, i: number) => (
            <Card
              key={"cards-section_" + i}
              data={el}
              theme={theme}
              mode={mode}
              card_number={index_cards ? String(i + 1).padStart(2, "0") : null}
              className={cn({
                "col-span-12 sm:col-span-6 lg:col-span-6 items-start":
                  columns_quantity === ColumnsQuantity.two_columns,
                "col-span-12 sm:col-span-6 lg:col-span-4 items-start":
                  columns_quantity === ColumnsQuantity.three_columns,
              })}
            />
          ))}
        {layout_variant ===
          CardsSectionLayoutVariant.title_is_separate_column && (
          <div
            className={`grid grid-cols-12 col-span-12 md:col-span-6 lg:col-span-8 gap-y-10 sm:gap-x-10 md:gap-x-0 lg:gap-x-10`}
          >
            {items.map((el: any, i: number) => (
              <Card
                key={"cards-section_" + i}
                data={el}
                theme={theme}
                mode={mode}
                card_number={
                  index_cards ? String(i + 1).padStart(2, "0") : null
                }
                className={cn(
                  "col-span-12 sm:col-span-6 md:col-span-12 lg:col-span-6 items-start",
                  {
                    "!col-span-12": items.length % 2 && i === items.length - 1,
                  }
                )}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default CardsSection;
