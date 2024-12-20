import React, { useState } from "react";
import { useLocation } from "@remix-run/react";
import Button from "./Button";
import { type TSectionItem } from "./Navigation";
import cn from "classnames";

// import { useI18next } from "gatsby-plugin-react-i18next";
// import { Link } from "gatsby-plugin-react-i18next";

// import services from "../data/services";
// import { useTranslation } from "gatsby-plugin-react-i18next";

import Discovery from "~/icons/discovery.png";
import UiUx from "~/icons/ui-ux.png";
import WebDevelopment from "~/icons/web-development.png";
import MobileDevelopment from "~/icons/mobile-development.png";
import SoftwareTesting from "~/icons/software-testing.png";
import Cloud from "~/icons/cloud.png";
import DigitalTransofrmation from "~/icons/digital-transformation.png";
import SoftwareDevelopment from "~/icons/software-development.png";
import ItConsulting from "~/icons/it-consulting.png";
import CustomDevelopment from "~/icons/custom-development.png";
import DedicatedTeam from "~/icons/team.png";
import StaffAugmentation from "~/icons/staff-augmentation.png";
import Outsourcing from "~/icons/outsourcing.png";
import MvpSoftwareDevelopment from "~/icons/mvp-software-development.png";
import HeaderMobile from "./HeaderMobile";
import { useContactFormPage } from "~/contexts/ContactFormPage.context";
import EventBanner from "./sections/EventBanner/EventBanner";
import { useEventBanner } from "~/contexts/EventBanner.context";
import { GtmEvent } from "~/utils/gtmSendEvent";

// const capitalize = (str: string) => {
//   return str.charAt(0).toUpperCase() + str.slice(1);
// };

// const siteLanguages: string[] = ["en", "de", "he"];

type TService = {
  title: string;
  text: string;
  icon: string;
  link: string;
};

const servicesPages = [
  "/services",
  "/services/custom-product-development",
  "/services/dedicated-team",
  "/services/staff-augmentation",
  "/services/discovery",
  "/services/ui-and-ux-design-services",
  "/services/web-development-services",
  "/services/mobile-development-services",
  "/services/software-testing-services",
  "/services/cloud-solutions",
  "/services/digital-transformation",
  "/services/software-development",
  "/services/it-consulting",
  "/services/it-outsourcing",
  "/services/mvp-software-development",
];

export const services: TService[] = [
  {
    title: "Discovery",
    text: `At this stage, all requirements and the needs of the target audience are scrupulously analyzed and the product vision and business goals are identified. Yojji specialists offer a comprehensive plan of the development process, a budget outline, and the most appropriate technology stack.`,
    icon: Discovery,
    link: "/services/discovery",
  },
  {
    title: "UI and UX Design",
    text: `Keeping abreast of the latest tendencies, Yojji provides a full range of UI/UX design services. The client gets intuitive and compelling web and mobile digital solutions.`,
    icon: UiUx,
    link: "/services/ui-and-ux-design-services",
  },
  {
    title: "Web development",
    text: `Keeping the goals of the client in mind and focusing on the users’ needs, Yojji provides a wide range of the latest technologies and processes to deliver the most effective web solutions.`,
    icon: WebDevelopment,
    link: "/services/web-development-services",
  },
  {
    title: "Mobile development",
    text: `Yojji has extensive expertise in cross-platform technologies and ensures that each custom-tailored solution has a flawless user interface, secure application code, and a fault-tolerant back-end part.`,
    icon: MobileDevelopment,
    link: "/services/mobile-development-services",
  },
  {
    title: "Software Testing",
    text: `A team of professional QA experts conducts various types of testing to ensure the product functions its best. You can choose software testing as part of a complete package or as a stand-alone offering.`,
    icon: SoftwareTesting,
    link: "/services/software-testing-services",
  },
  {
    title: "Cloud & DevOps",
    text: `By implementing the best cloud and DevOps practices, Yojji accelerates a business’ response to any challenges, reduces the development cycle, and improves performance and resilience.`,
    icon: Cloud,
    link: "/services/cloud-solutions",
  },
  {
    title: "Digital Transformation",
    text: `Unlock new opportunities with our Digital Transformation Service. Optimize operations, boost productivity, and drive long-term business growth.`,
    icon: DigitalTransofrmation,
    link: "/services/digital-transformation",
  },
  {
    title: "Software Development",
    text: `Turn ideas into high-performing software. Streamline development, reduce complexity, and achieve results with a team you can trust.`,
    icon: SoftwareDevelopment,
    link: "/services/software-development",
  },
  {
    title: "IT Consulting",
    text: `Transform your business with our IT Consulting. Simplify operations, boost security, and save up to 40% on infrastructure costs with expert guidance.`,
    icon: ItConsulting,
    link: "/services/it-consulting",
  },
  {
    title: "IT Outsourcing",
    text: `By choosing our IT outsourcing service, you're partnering up to supercharge your business with a handpicked team of tech engineers, and strategists.`,
    icon: Outsourcing,
    link: "/services/it-outsourcing",
  },
  {
    title: "MVP Software Development",
    text: `Our MVP development service helps you validate your idea, hook the early adopters, and get important feedback without breaking the bank.`,
    icon: MvpSoftwareDevelopment,
    link: "/services/mvp-software-development",
  },
];

const shouldHighlightNavItem = (
  currentUrl: string,
  desiredUrl: string | string[]
) => {
  if (typeof desiredUrl === "string") {
    return desiredUrl === currentUrl;
  }

  return desiredUrl.includes(currentUrl);
};

const menusEnum = {
  services: 1,
  tech: 2,
  industries: 3,
};

export const ServiceCard = ({
  title,
  text,
  link,
  icon,
  className,
}: {
  title: string;
  text: string;
  link: string;
  icon?: string;
  className?: string;
}) => {
  const hoverWithLink = link.length
    ? "hover:bg-yw-gray-100 cursor-pointer"
    : "cursor-default";

  return (
    <a href={link} className={cn(hoverWithLink, className)}>
      <div className="flex p-4 rounded-lg max-w-[350px]">
        <div className="mr-2 flex-shrink-0">
          <img src={icon} alt={title} width="40" height="40" loading="lazy" />
        </div>
        <div>
          <div className="yw-gray-900 yw-h5 mb-2">{title}</div>
          <div className="yw-gray-500 yw-t2 line-clamp-3">{text}</div>
        </div>
      </div>
    </a>
  );
};

// let prevScrollpos = 0;

const Header = ({
  displayShadow,
  navigationSections,
  isNavigation,
}: {
  displayShadow?: boolean;
  navigationSections?: TSectionItem[];
  isNavigation?: boolean;
}) => {
  const { setIsShownContactForm: onContact, setEvent } = useContactFormPage();
  const { isShownEventBanner } = useEventBanner();

  const [menuIsOpen, setMenuIsOpen] = useState<number | null>(null);

  const headerRef = React.useRef<HTMLDivElement>(null);

  const { pathname: currentUrl } = useLocation();

  const contactUsHandler = () => {
    setEvent(GtmEvent.submit_contact_us_header);
    onContact(true);
  };

  return (
    <>
      <HeaderMobile contactUsHandler={contactUsHandler} />
      <header
        ref={headerRef}
        className={cn(
          "transition-[top] duration-300 ease-out hidden lg:flex lg:flex-col justify-between fixed w-full top-0 0 z-20 bg-white"
        )}
        style={{ transition: "top 0.3s" }}
        onMouseLeave={() => setMenuIsOpen(null)}
      >
        <EventBanner />
        <div className="flex items-center justify-between px-4 sm:px-14 py-6 sm:py-[14px] h-20">
          <a href="/" aria-label="brand logo">
            <svg
              width="86"
              height="21"
              viewBox="0 0 86 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29.8045 20.1436C35.3399 20.1436 39.4411 16.0684 39.4411 10.5015C39.4411 4.93464 35.3399 0.859375 29.8045 0.859375C24.244 0.859375 20.168 4.96127 20.168 10.5015C20.168 16.0417 24.244 20.1436 29.8045 20.1436ZM29.8045 16.2853C26.6594 16.2853 24.0489 14.044 24.0489 10.5015C24.0489 6.95895 26.6594 4.71477 29.8045 4.71477C32.9496 4.71477 35.6128 6.95895 35.6128 10.5015C35.6128 14.044 32.9496 16.2853 29.8045 16.2853Z"
                fill="#313539"
              />
              <path
                d="M12.4835 13.3332L5.31628 0.886719H0.859375L8.56861 14.2974V20.0842H12.4835V13.3332Z"
                fill="#313539"
              />
              <path
                d="M12.7247 6.04006L15.7361 0.857422H20.1328L14.9532 9.89691L12.7247 6.04006Z"
                fill="#313539"
              />
              <rect
                x="81.8633"
                y="8.57129"
                width="3.85462"
                height="3.85685"
                fill="#0057FF"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M78.007 0.857422H74.1523V8.57227H78.007V0.857422ZM78.007 12.4291H74.1523V20.1417H78.007V12.4291Z"
                fill="#313539"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M54.8812 12.8992C54.8812 17.5849 52.414 20.1417 47.7351 20.1417C45.0694 20.1417 42.7158 19.1666 41.2695 17.379L43.8217 14.1993C44.8993 15.5806 46.0903 16.2848 47.5082 16.2848C49.3514 16.2848 51.0265 15.2285 51.0265 13.143V4.71427H43.3396V0.857422H54.8812V8.57227H51.0273V12.4291H54.8812V12.8992Z"
                fill="#313539"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M70.2991 12.8992C70.2991 17.5849 67.832 20.1417 63.153 20.1417C60.4874 20.1417 58.1337 19.1666 56.6875 17.379L59.2397 14.1993C60.3173 15.5806 61.5083 16.2848 62.9262 16.2848C64.7694 16.2848 66.4445 15.2285 66.4445 13.143V4.71427H58.7576V0.857422H70.2991V8.57227H66.4453V12.4291H70.2991V12.8992Z"
                fill="#313539"
              />
            </svg>
          </a>

          <div className="hidden sm:flex items-center">
            <nav>
              <ul className="hidden lg:flex items-center text-sm text-yw-primary-active cursor-pointer">
                <li
                  className="mr-10 flex items-center "
                  onMouseEnter={() => {
                    setMenuIsOpen(menusEnum.services);
                  }}
                >
                  <a href="/services" className={cn("mr-1 relative")}>
                    <span
                      className={`${
                        shouldHighlightNavItem(currentUrl, servicesPages)
                          ? "selected-header-item"
                          : ""
                      } selected-header-item-hover`}
                    >
                      Services
                    </span>
                  </a>

                  <span className={menuIsOpen ? "rotate-180" : ""}>
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                    </svg>
                  </span>
                </li>
                <li
                  className="mr-10 flex items-center relative"
                  onMouseEnter={() => setMenuIsOpen(null)}
                >
                  <a
                    href="/solutions"
                    className={`${
                      shouldHighlightNavItem(currentUrl, "/solutions")
                        ? "selected-header-item"
                        : ""
                    } selected-header-item-hover`}
                  >
                    Solutions
                  </a>
                </li>
                <li
                  className="mr-10 flex items-center relative"
                  onMouseEnter={() => setMenuIsOpen(null)}
                >
                  <a
                    href="/case-studies"
                    className={`${
                      shouldHighlightNavItem(currentUrl, "/case-studies")
                        ? "selected-header-item"
                        : ""
                    } selected-header-item-hover`}
                  >
                    Case studies
                  </a>
                </li>
                <li
                  className="mr-10 flex items-center relative"
                  onMouseEnter={() => setMenuIsOpen(null)}
                >
                  <a
                    href="/about"
                    className={`${
                      shouldHighlightNavItem(currentUrl, "/about")
                        ? "selected-header-item"
                        : ""
                    } selected-header-item-hover`}
                  >
                    About us
                  </a>
                </li>
                {/* <li
                className="mr-10 flex items-center relative"
                onMouseEnter={() => setMenuIsOpen(null)}
              >
                <a
                  href="/career"
                  className={`${
                    shouldHighlightNavItem(currentUrl, "/career")
                      ? "selected-header-item"
                      : ""
                  } selected-header-item-hover`}
                >
                  Careers
                </a>
              </li> */}
                <li
                  className="mr-10 flex items-center relative"
                  onMouseEnter={() => setMenuIsOpen(null)}
                >
                  <a
                    href="/blog"
                    className={`${
                      shouldHighlightNavItem(currentUrl, "/blog")
                        ? "selected-header-item"
                        : ""
                    } selected-header-item-hover`}
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </nav>

            <Button
              size="md"
              onMouseEnter={() => setMenuIsOpen(null)}
              id="header-contact-us"
              onClick={contactUsHandler}
            >
              Contact us
            </Button>
          </div>

          {menuIsOpen && (
            <div
              className={cn(
                "services-dropdown-menu absolute bg-white top-[calc(100%+1px)] mx-auto left-0 right-0 p-14 drop-shadow-header rounded-bl-3xl rounded-br-3xl w-[1050px] max-w-[1050px] min-[1200px]:w-[1178px] min-[1200px]:max-w-[1178px]"
                // menuIsOpen && "!block"
              )}
            >
              <div className="flex">
                <div className="border-r border-yw-gray-300 pr-4 mr-4">
                  <div className="yw-primary-default yw-t3-upper mb-8">
                    Models of cooperation
                  </div>
                  <div className="grid grid-cols-1 gap-2">
                    <ServiceCard
                      title={"Custom development"}
                      text={`Yojji specialists with deep expertise provide full-cycle product
              development for delivering first-class solutions catered to the
              business needs.`}
                      link="/services/custom-product-development"
                      icon={CustomDevelopment}
                    />
                    <ServiceCard
                      title={"Dedicated team"}
                      text={`Our blend of qualified specialists reduces the time to market and
              optimizes customers’ business processes, guaranteeing client
              retention and business growth.`}
                      link="/services/dedicated-team"
                      icon={DedicatedTeam}
                    />
                    <ServiceCard
                      title="Staff augmentation"
                      text="Experts with deep technical knowledge are ready to fill any skill gaps."
                      link="/services/staff-augmentation"
                      icon={StaffAugmentation}
                    />
                  </div>
                </div>
                <div>
                  <div className="yw-primary-default yw-t3-upper mb-8">
                    Services
                  </div>
                  <div
                    className={cn(
                      "grid grid-cols-2 gap-2 services-scrollbar pr-[14px]",
                      isShownEventBanner ? "h-[365px]" : "h-[450px]"
                    )}
                  >
                    {Object.values(services).map((el, i) => {
                      const isActive = currentUrl.includes(el.link)
                        ? "bg-yw-gray-100"
                        : "";

                      return (
                        <ServiceCard
                          {...el}
                          key={"service_card_" + i}
                          className={isActive}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
      {/* {isNavigation && Navigation({ items: navigationSections })} */}
    </>
  );
};

export default Header;
