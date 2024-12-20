import React, { useState } from "react";
import cn from "classnames";
import { ServiceCard, services } from "./Header";

import CustomDevelopment from "~/icons/custom-development.png";
import DedicatedTeam from "~/icons/team.png";
import StaffAugmentation from "~/icons/staff-augmentation.png";

// import { Link } from "gatsby-plugin-react-i18next";
// import { useI18next } from "gatsby-plugin-react-i18next";
// import { useTranslation } from "gatsby-plugin-react-i18next";

interface INavData {
  name: string;
  withDropDown: boolean;
  url: string;
  // urlLang: string | undefined;
}
interface INavItemProps {
  navData: INavData;
  className?: string;
}

const NavItem = ({ navData, className }: INavItemProps) => {
  // const { t } = useTranslation();
  const { name, withDropDown: hasDropDown, url } = navData;
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
  // const { language } = useI18next();

  // const isNotHebrew = language !== "he";
  const isNotHebrew = true;

  const navItemWithoutLink = (
    <div className="flex items-center justify-between">
      <div className={isMenuOpen ? "text-yw-cta-default" : undefined}>
        {name}
      </div>
      {hasDropDown && (
        <span className={isMenuOpen ? "rotate-180" : undefined}>
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
          </svg>
        </span>
      )}
    </div>
  );

  const navItemWithLink = (
    <div className="w-full">
      <a
        href={url}
        className="block"
        //  language={urlLang}
      >
        {name}
      </a>
    </div>
  );

  const navItem = hasDropDown ? navItemWithoutLink : navItemWithLink;

  return (
    <li
      className={`py-4 border-b-2 border-yw-gray-300 ${className}`}
      onClick={() => {
        hasDropDown && setMenuOpen((prevState) => !prevState);
      }}
    >
      {navItem}
      {hasDropDown && (
        <div
          className={cn(
            "services-dropdown-menu bg-white mx-auto rounded-bl-3xl rounded-br-3xl hidden ",
            isMenuOpen && "!block"
          )}
        >
          <div className="block">
            <div className="py-4 yw-t1-bold">
              <a href={url}>{"All Services"}</a>
            </div>
            {isNotHebrew && (
              <div className="ltr:pr-4 rtl:pl-4 ltr:mr-4 rtl:ml-4">
                <div className="yw-primary-default yw-t3-upper lg:mb-8">
                  {"Models of cooperation"}
                </div>
                <div className="grid grid-cols-1 gap-4">
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
            )}

            {isNotHebrew && (
              <div>
                <div className="yw-primary-default yw-t3-upper lg:mb-8">
                  {"Services"}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.values(services).map((el, i) => {
                    return <ServiceCard {...el} />;
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </li>
  );
};

export default NavItem;
