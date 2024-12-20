import { type FC, Suspense, useEffect, useState } from "react";
import cn from "classnames";
import Cookies from "./Cookies";
import Header from "./Header";
import Footer from "./sections/Footer/Footer";
import ContactFormFullPage from "./sections/ContactFormFullPage/ContactFormFullPage";
import { useLoaderData } from "@remix-run/react";
import type { Theme } from "~/types";
// import { Helmet } from "react-helmet";
// import { useTranslation } from "gatsby-plugin-react-i18next";
// import Header from "./Header";
// import ContactFormFullPage from "./sections/ContactFormFullPage";
// import HeaderMobile from "./HeaderMobile";
// import Cookies from "./sections/Cookies";
// import { useContactPage } from "../contexts/contactPageManagerContext";
// import { useScrollValue } from "../hooks/useScrollValue";

// import lightFav from "../assets/favicon-light.png";
// import darkFav from "../assets/favicon-dark.png";
// import { Script } from "gatsby";

// const themeFavIcon = () => {
//   if (typeof window === "undefined") return;

//   const matcher = window.matchMedia("(prefers-color-scheme: dark)");

//   if (matcher.matches) {
//     return <link rel="shortcut icon" type="image/png" href={lightFav} />;
//   }

//   return <link rel="shortcut icon" type="image/png" href={darkFav} />;
// };

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const Layout: FC<{
  children: any;
  footerTheme?: keyof typeof Theme;
  fullStructure?: boolean;
}> = ({ children, footerTheme, fullStructure = true }) => {
  // const { i18n } = useTranslation();
  // const [cookiesAccepted, setCookiesAccepted] = useState(false);
  // const [delayedCookiesConsent, setDelayedCookiesConsent] = useState(false);
  // const scrollValue = useScrollValue();

  // // initialize show cookies state
  // useEffect(() => {
  //   setTimeout(() => {
  //     setDelayedCookiesConsent(true);
  //   }, 4000);

  //   const initialCookiesAccepted = localStorage.getItem("cookiesAccepted") === "true";
  //   setCookiesAccepted(initialCookiesAccepted);
  // }, []);

  // // sync show cookies state with local storage
  // useEffect(() => {
  //   localStorage.setItem("cookiesAccepted", cookiesAccepted.toString());
  // }, [cookiesAccepted]);

  // const { openContactModal, contactModalIsOpen, closeContactModal } = useContactPage();

  // const ogImage = "https://yojji.io/static/images/card-yojji.jpg"

  const { pageData, footerData, testimonials } = useLoaderData<typeof loader>();

  const [cookiesAccepted, setCookiesAccepted] = useState(false);
  const [delayedCookiesConsent, setDelayedCookiesConsent] = useState(false);

  const navigationSections = pageData?.sections
    ?.map((section: any, id: number) => {
      if (!section.section_navigation_name) {
        return null;
      }

      return { text: section.section_navigation_name, id };
    })
    .filter(Boolean);

  const acceptCookies = (bool: boolean) => {
    setCookiesAccepted(bool);
    localStorage.setItem("cookiesAccepted", String(bool));
  };

  // initialize show cookies state
  useEffect(() => {
    const isInitialCookiesAccepted =
      localStorage.getItem("cookiesAccepted") === "true";
    if (isInitialCookiesAccepted) {
      setCookiesAccepted(true);
      return;
    }

    setTimeout(() => {
      setDelayedCookiesConsent(true);
    }, 4000);
  }, []);

  return (
    <Suspense fallback={<div>loading</div>}>
      <div className="app-version hidden">1.0.1</div>

      {/* <Script src="/lazy-bg.js"></Script> */}

      <div className="relative">
        {/* <HeaderMobile onContact={openContactModal} /> */}
        {fullStructure && (
          <Header
            isNavigation={pageData?.header_navigation}
            navigationSections={navigationSections || []}
          />
        )}
        {/* <ContactFormFullPage onClose={closeContactModal} show={contactModalIsOpen} /> */}

        <div className="relative h-full w-full">{children}</div>

        {fullStructure && (
          <Footer theme={footerTheme} columns={footerData.columns} />
        )}

        {fullStructure && (
          <ContactFormFullPage theme="dark" testimonials={testimonials} />
        )}
        {/* {delayedCookiesConsent && !cookiesAccepted && <Cookies setState={setCookiesAccepted} />} */}
      </div>

      {delayedCookiesConsent && !cookiesAccepted && (
        <Cookies setState={acceptCookies} />
      )}

      <div
        className={cn(
          "border-white border-[1px] fixed bottom-[16px] md:bottom-[77px] z-2 sm:!right-[55px] !right-[20px] cursor-pointer bg-yw-primary-default w-[54px] h-[54px] rounded-full flex items-center justify-center"
          // scrollValue > 200 ? "block" : "hidden"
        )}
        onClick={scrollToTop}
      >
        <img
          src="/icons/arrow-white.svg"
          className="rotate-90"
          loading="lazy"
          alt="arrow"
          width="15"
          height="14"
        />
      </div>
    </Suspense>
  );
};

export default Layout;
