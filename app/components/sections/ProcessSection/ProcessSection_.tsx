import { type FC, useState } from "react";
import cn from "classnames";
import TagList from "~/components/TagList";
import Button from "~/components/Button";
import Checkmark from "~/icons/components/Checkmark";
import PlusIcon from "~/icons/components/PlusIcon";
import MinusIcon from "~/icons/components/MinusIcon";

import { Theme } from "~/types";

interface IStepProps {
  tab_title: string;
  title: string;
  description?: string;
  tab_content: string;
  list_content?: string;
  link?: string;
  theme?: Theme;
}

interface IStepAccordionData {
  step: IStepProps;
  isAccordionOpen: boolean;
  theme?: Theme;
}

interface IStepSectionProps {
  title?: string;
  items: IStepProps[];
  openTabIndex: number;
  tagsTitle: string;
  tags: string;
  theme: Theme;
  section_navigation_name: string;
  dataSectionName: string;
}

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

const Step: FC<IStepProps> = ({
  title,
  description,
  tab_content,
  list_content,
  link,
  theme,
}) => {
  const listContent = list_content?.split("\n");
  const themeData = themes[theme || Theme.light];

  return (
    <>
      <div className="col-span-2 lg:w-[50%]">
        {link ? (
          <a href={link}>
            <h2 className={`${themeData.textColorPrimary} yw-h1 mb-4`}>
              {title}
            </h2>
          </a>
        ) : (
          <h2 className={`${themeData.textColorPrimary} yw-h1 mb-4`}>
            {title}
          </h2>
        )}
        <p className={`${themeData.textColorPrimary} yw-t1`}>{description}</p>
      </div>

      <div
        className={`${themeData.textColorPrimary} yw-t1 col-span-2 lg:col-span-1 whitespace-pre-line md-text`}
      >
        {tab_content}
      </div>

      <ul className="col-span-2 lg:col-span-1">
        {listContent?.map((el, i) => {
          return (
            <li
              key={i}
              className={`${themeData.textColorPrimary} mb-6 yw-h4 flex items-center`}
            >
              <div className="mr-4">
                <Checkmark bgColor="#44474D" checkmarkColor="#FFF" />
              </div>
              {el}
            </li>
          );
        })}
      </ul>
    </>
  );
};

const StepAccordion: FC<IStepAccordionData> = ({
  step,
  isAccordionOpen,
  theme,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(isAccordionOpen);
  const themeData = themes[theme || Theme.light];

  const handleClick = () => setIsOpen((prevState) => !prevState);

  return (
    <>
      <div
        className="flex justify-between items-center col-span-2"
        onClick={handleClick}
      >
        <h2 className={`yw-h3 ${themeData.textColorPrimary}`}>
          {step.tab_title}
        </h2>
        <div className="flex justify-center items-center bg-yw-gray-700 rounded-full w-10 h-10 cursor-pointer">
          {isOpen ? (
            <MinusIcon color={"#EFF1F4"} />
          ) : (
            <PlusIcon color={"#EFF1F4"} />
          )}
        </div>
      </div>
      {isOpen ? <Step theme={theme} {...step} /> : null}
    </>
  );
};

const ProcessSection: FC<IStepSectionProps> = ({
  title,
  theme,
  items = [],
  tagsTitle,
  tags,
  section_navigation_name,
  dataSectionName,
}) => {
  const [activeStep, setActiveStep] = useState(0);

  const themeData = themes[theme || Theme.light];

  return (
    <section
      data-name="process-section"
      className={`py-28 ${themeData.sectionBg}`}
      data-sectionid={section_navigation_name}
      data-section-name={dataSectionName}
    >
      <div className="grid grid-cols-12 gap-y-10 sm:gap-10 container">
        {title && (
          <h2 className={`col-span-12 yw-h2 ${themeData.textColorPrimary}`}>
            {title}
          </h2>
        )}

        <div className="col-span-12 hidden lg:flex lg:flex-wrap gap-6">
          {items.map((el, i) => {
            return (
              <Button
                href="/"
                key={`${el.tab_title}-${i}`}
                id={`process-section-tab-${i}`}
                className={cn(
                  "btn group rounded-full btn-cta flex items-center justify-center whitespace-nowrap font-montserrat w-full sm:w-fit",
                  {
                    "bg-yw-gray-500": i !== activeStep,
                  }
                )}
                size="md"
                onClick={() => setActiveStep(i)}
              >
                {el.tab_title}
              </Button>
            );
          })}
        </div>

        <div className="col-span-12 hidden lg:block">
          {items.map((el, i) => {
            const isActiveStep = i === activeStep ? "grid" : "hidden";

            return (
              <div
                key={i}
                className={`${isActiveStep} grid-cols-2 gap-10 mb-10 lg:mb-0`}
              >
                <Step theme={theme} {...el} />
              </div>
            );
          })}
        </div>

        <div className="col-span-12 grid grid-cols-2 gap-y-10 lg:hidden">
          {items.map((el, i) => {
            const isAccordionOpen = 0 === i;

            return (
              <StepAccordion
                key={i}
                step={el}
                isAccordionOpen={isAccordionOpen}
                theme={theme}
              />
            );
          })}
        </div>
        <TagList title={tagsTitle} tags={tags} theme={theme} />
      </div>
    </section>
  );
};

export default ProcessSection;
