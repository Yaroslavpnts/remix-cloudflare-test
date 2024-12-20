import { FC } from "react";
import CheckmarkCircleBlack from "./icons/checkmark-circle-black.svg";
import CheckmarkCircleFill from "./icons/checkmark-circle-fill.svg";
import CustomDevelopment from "./icons/custom-development.svg";
import DedicatedTeam from "./icons/dedicated-team.svg";
import StaffAugmentation from "./icons/staff-augmentation.svg";
import { Theme } from "~/types";

const modelsOfCooperation = [
  {
    metaName: "custom-product",
    icon: {
      dark: CustomDevelopment,
      light: CustomDevelopment,
    },
    cardHeading: "Custom development",
    cardDescription:
      "Our cutting-edge services add value to your company, help automate processes, and increase productivity and revenue. Besides, we partner with startups and bring their ideas to life.",
    listWithNumbers: true,
    list: [
      { name: "Discovery", link: "/services/discovery" },
      { name: "Design", link: "/services/ui-and-ux-design-services" },
      { name: "Development", link: "/services/software-development" },
      { name: "QA testing", link: "/services/software-testing-services" },
      { name: "Deployment", link: "" },
    ],
    link: "/services/custom-product-development",
  },
  {
    metaName: "dedicated-team",
    icon: {
      dark: DedicatedTeam,
      light: DedicatedTeam,
    },
    cardHeading: "Dedicated team",
    cardDescription:
      "Yojji has a diverse pool of talent with deep technical expertise that focuses on the business’s goals and requirements. Our team provides high-quality deliverables on time and within budget.",
    listWithNumbers: false,
    list: [
      "The pool of the best talents",
      "Fast start",
      "Full-time dedication",
      "Teamwork",
    ],
    link: "/services/dedicated-team",
  },
  {
    metaName: "staff-augmentation",
    icon: {
      dark: StaffAugmentation,
      light: StaffAugmentation,
    },
    cardHeading: "Staff augmentation",
    cardDescription:
      "If you require additional resources to cooperate with your in-house development team, our highly experienced professionals are ready to bring their skills to the table and fill certain skill gaps.",
    listWithNumbers: false,
    list: ["The pool of the best talent", "Fast start", "Full-time dedication"],
    link: "/services/staff-augmentation",
  },
];

const themes = {
  dark: {
    textColorPrimary: "text-white",
    textColorSecondary: "text-yw-gray-300",
    sectionBg: "bg-yw-primary-default",
    cardBg: "card-dark bg-[#1F2124]",
    secondaryBg: "bg-yw-primary-default",
    buttonVariant: "btn-secondary-inverted",
    iconPrefix: "color.svg",
    checkIcon: CheckmarkCircleFill,
    arrowStyle: "svg-black",
  },
  light: {
    textColorPrimary: "text-yw-primary-default",
    textColorSecondary: "text-yw-gray-500",
    sectionBg: "bg-yw-gray-100",
    cardBg: "card-light",
    secondaryBg: "bg-yw-gray-100",
    buttonVariant: "btn-secondary",
    iconPrefix: "gray.svg",
    checkIcon: CheckmarkCircleBlack,
    arrowStyle: "svg-white",
  },
};

type Content = typeof modelsOfCooperation;

type ModelsOfCooperationItemProps = {
  item: Content[number];
  listItem:
    | string
    | {
        name: string;
        link: string;
      };
  index: number;
  themeData: (typeof themes)[keyof typeof themes];
};

const ModelsOfCooperationItem: FC<ModelsOfCooperationItemProps> = ({
  item,
  listItem,
  index,
  themeData,
}) => {
  return (
    <div
      key={index}
      className={`${themeData.secondaryBg} ${themeData.textColorPrimary} p-4 rounded-lg flex items-center col-span-2`}
    >
      <div className="yw-h3 rtl:ml-4 ltr:mr-4">
        {item.listWithNumbers ? (
          (index + 1).toString().padStart(2, "0")
        ) : (
          <img
            src={themeData.checkIcon}
            alt="checkmark"
            width="24"
            height="24"
            loading="lazy"
          />
        )}
      </div>
      <div className="yw-h4">{listItem?.name || listItem}</div>
    </div>
  );
};

const ModelsOfCooperation = ({
  heading,
  theme,
  section_navigation_name,
  content = modelsOfCooperation,
  dataSectionName,
}: {
  heading?: string;
  theme?: Theme;
  section_navigation_name: string;
  content?: Content;
  dataSectionName?: string;
}) => {
  const themeData = themes[theme || Theme.light];

  return (
    <section
      className={`${themeData.sectionBg} py-20`}
      data-section-name={dataSectionName}
      data-sectionid={section_navigation_name}
    >
      <div className="container grid grid-cols-12 gap-y-10 gap-4">
        <h2 className={`${themeData.textColorPrimary} yw-h2 mb-10 col-span-12`}>
          {heading}
        </h2>

        {content.map((item, i) => {
          return (
            <div
              key={i}
              className={`${themeData.cardBg} lg:col-span-4 flex flex-col justify-between col-span-12 items-start`}
            >
              <div className="mb-8 flex justify-center flex-col">
                <div className="mb-4 ">
                  <img
                    src={item.icon[theme || Theme.light]}
                    width="86"
                    height="86"
                    loading="lazy"
                    className="max-h-[56px] max-w-[56px] sm:max-h-[86px] sm:max-w-[86px]"
                  />
                </div>
                <h3 className={`${themeData.textColorPrimary} yw-h3 mb-4`}>
                  {item.cardHeading}
                </h3>
                <div className={`${themeData.textColorSecondary} yw-t1 mb-4`}>
                  {item.cardDescription}
                </div>

                <div className="grid grid-cols-2 gap-4 text-start">
                  {item.list.map((listItem, index) => {
                    return typeof listItem === "object" && listItem.link ? (
                      <a
                        href={listItem.link}
                        key={index}
                        className="col-span-2"
                      >
                        <ModelsOfCooperationItem
                          item={item}
                          listItem={listItem}
                          index={index}
                          themeData={themeData}
                        />
                      </a>
                    ) : (
                      <ModelsOfCooperationItem
                        key={index}
                        item={item}
                        listItem={listItem}
                        index={index}
                        themeData={themeData}
                      />
                    );
                  })}
                </div>
              </div>

              {/* <Button as="a" href={item.link} className="w-full">
                {item.cardHeading}
              </Button> */}
              <a
                href={item.link}
                className={`btn group rounded-full flex items-center justify-center whitespace-nowrap font-montserrat yw-button-small py-4 px-6 text-sm leading-none ${themeData.buttonVariant} w-full`}
              >
                <span className="text-center">{item.cardHeading}</span>
                <span>
                  <svg
                    className={`${themeData.arrowStyle} rotate-180 ltr:ml-2 rtl:mr-2`}
                    width="14"
                    height="15"
                    viewBox="0 0 14 15"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.65265 7.72974H13.4109V6.41089H2.65265L7.92969 0.933603L6.97993 0.0185613L0.185983 7.07031L6.97993 14.1221L7.92969 13.207L2.65265 7.72974Z"
                      fill="#313339"
                    ></path>
                  </svg>
                </span>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ModelsOfCooperation;
