import React, { useCallback, useEffect, useState } from "react";
import MobileMenu from "../icons/components/MobileMenu";
import Button from "./Button";
import cn from "classnames";
// import { useI18next } from "gatsby-plugin-react-i18next";
// import { Link } from "gatsby-plugin-react-i18next";

import NavItem from "./NavItem";
import { Link } from "@remix-run/react";
import EventBanner from "./sections/EventBanner/EventBanner";
// import Navigation from "../data/navigation.json";
// import { useTranslation } from "gatsby-plugin-react-i18next";

const Navigation = [
  {
    name: "Services",
    url: "/services",
    withDropDown: true,
  },
  {
    name: "Solutions",
    url: "/solutions",
    withDropDown: false,
  },
  {
    name: "Case studies",
    url: "/case-studies",
    withDropDown: false,
    urlLang: "en",
  },
  {
    name: "About us",
    url: "/about",
    withDropDown: false,
  },
  // {
  //   name: "Careers",
  //   url: "/career",
  //   withDropDown: false,
  // },
  {
    name: "Blog",
    url: "/blog",
    withDropDown: false,
  },
];

// const capitalize = (str: string) => {
//   return str.charAt(0).toUpperCase() + str.slice(1);
// };

// const siteLanguages = ["en"];
let prevScrollpos = 0;

const HeaderMobile = ({
  contactUsHandler,
}: {
  contactUsHandler: () => void;
}) => {
  // const { t } = useTranslation();

  // const { languages, originalPath, language } = useI18next();

  const [navigationIsOpen, setNavigationIsOpen] = useState<boolean>(false);
  const headerRef = React.useRef<HTMLDivElement>(null);

  const displayHeaderNavigation = useCallback(() => {
    let currentScrollPos = window.pageYOffset;

    if (headerRef.current && prevScrollpos > currentScrollPos) {
      headerRef.current.style.top = "0";
    } else if (headerRef.current) {
      headerRef.current.style.top = "-80px";
    }

    prevScrollpos = currentScrollPos;
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      displayHeaderNavigation();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (navigationIsOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [navigationIsOpen]);

  const currentUrl =
    typeof window !== "undefined" ? document.location.pathname : "";

  return (
    <header
      className={cn(
        `flex flex-col
        lg:hidden justify-between bg-white fixed top-0 z-10 w-full`
      )}
      style={{ transition: "top 0.3s" }}
      ref={headerRef}
    >
      <EventBanner />
      <div
        className="flex
        lg:hidden items-center justify-between px-4 ltr:pr-8 rtl:pl-8 sm:px-14 py-6 sm:py-[14px]"
      >
        <Link to="/" aria-label="brand logo">
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
        </Link>

        <div className="hidden sm:flex items-center" onClick={contactUsHandler}>
          <Button size="md">{"Contact us"}</Button>
        </div>

        <Button
          size="md"
          variant="secondary"
          className="hidden sm:flex lg:hidden items-center group"
          onClick={() => setNavigationIsOpen((prev) => !prev)}
        >
          <MobileMenu
            className="ltr:mr-2 rtl:ml-2 group-hover:stroke-white"
            width="14"
            height="14"
            viewBox="0 0 24 24"
          />
          {"Menu"}
        </Button>
        <MobileMenu
          className="sm:hidden cursor-pointer"
          onClick={() => setNavigationIsOpen((prev) => !prev)}
        />

        {navigationIsOpen && (
          <div
            className={cn(
              `container mx-auto z-3 p-14 grid-cols-12 bg-white overflow-auto absolute top-[calc(100%)] left-0 h-[90vh] grid`
              // navigationIsOpen ? "grid" : "hidden"
            )}
          >
            <nav className="col-span-12 mb-12">
              <ul className="items-center yw-t1-bold text-yw-primary-active cursor-pointer">
                {Navigation.filter((el) =>
                  false ? el.url !== "/career" : el
                ).map((el) => {
                  return (
                    <NavItem
                      navData={el}
                      className={`${
                        currentUrl.includes(el.url) ? "text-yw-cta-default" : ""
                      }`}
                    />
                  );
                })}
              </ul>
            </nav>

            <div
              className={cn("col-span-12 mb-12", {
                "mb-44": navigationIsOpen,
              })}
            >
              <h3 className="yw-h2-mobile text-yw-gray-900 mb-4">
                {"Have an idea?"}
                <br />
                {"Contact us to work together"}
              </h3>
              <Button
                variant="cta"
                className="w-full"
                onClick={contactUsHandler}
              >
                {"Contact us"}
              </Button>
            </div>

            {/* <div className="col-span-12 ">
            <p className="yw-t2-med text-yw-gray-400">{"Language:"}</p>
            <ul className="flex">
              {siteLanguages.map((el, i, arr) => (
                <li key={"site_langs_" + i}>
                  <a
                    className={cn(
                      "yw-t2-med cursor-pointer pr-4 block whitespace-no-wrap"
                      // i === 0 && "rounded-t",
                      // i === arr.length - 1 && "rounded-b",
                      // language === el ? "text-yw-cta-default" : "text-yw-gray-500"
                    )}
                    // language={el}
                    href={"/"}
                    // to={languages.includes(el) ? originalPath : "/"}
                  >
                    {capitalize(el)}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}
          </div>
        )}
      </div>
    </header>
  );
};

export default HeaderMobile;
