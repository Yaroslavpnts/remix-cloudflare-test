import React from "react";
import cn from "classnames";

import { Theme } from "~/types";
import CTABanner from "../CTABanner/CTABanner";
import Button from "~/components/Button";

import Flutter from "~/icons/components/Flutter";
import Checkmark from "~/icons/components/Checkmark";
import PlusIcon from "~/icons/components/PlusIcon";
import MinusIcon from "~/icons/components/MinusIcon";
import ReactLogo from "~/icons/components/ReactLogo";
import GooglePayLogo from "~/icons/google-pay-logo.svg";
import GoogleAdsLogo from "~/icons/google-ads-logo.svg";
import EbayLogo from "~/icons/ebay-logo.svg";
import AlibabaLogo from "~/icons/alibaba-logo.svg";

const CrossPlatformDevelopment = () => {
  return (
    <>
      <h2 className="yw-h2 text-white col-span-12">
        Cross-platform applications
      </h2>
      <p className="yw-t1 text-yw-gray-300 col-span-12 xl:col-span-6">
        Cross-platform development allows you to implement an application that
        runs on multiple operating systems. The project requires a single code
        base. This type of development allows you to reduce product development
        time and cost without compromising its quality.
        <br />
        <br />
        In this case, React Native is a win-win option for mobile cross-platform
        development, and our top-notch React Native experts will build an app
        that will operate smoothly on both Android and iOS.
      </p>

      <div className="col-span-12 xl:col-span-6 flex flex-col gap-y-6 text-start">
        <div className="bg-yw-gray-950 md:bg-inherit p-4 md:p-0 rounded-lg md:rounded-none flex items-center col-span-6">
          <div className="mr-4">
            <Checkmark bgColor="#45474D" checkmarkColor="#FFF" />
          </div>
          <div className="yw-h4 text-white">
            Simultaneous creation of applications for Android and iOS.
          </div>
        </div>
        <div className="bg-yw-gray-950 md:bg-inherit p-4 md:p-0 rounded-lg md:rounded-none flex items-center col-span-6">
          <div className="mr-4">
            <Checkmark bgColor="#45474D" checkmarkColor="#FFF" />
          </div>
          <div className="yw-h4 text-white">
            Maintaining the same style and behavior on all platforms.
          </div>
        </div>
        <div className="bg-yw-gray-950 md:bg-inherit p-4 md:p-0 rounded-lg md:rounded-none flex items-center col-span-6">
          <div className="mr-4">
            <Checkmark bgColor="#45474D" checkmarkColor="#FFF" />
          </div>
          <div className="yw-h4 text-white">
            The application is developed at the cost of one project but can work
            on several platforms.
          </div>
        </div>
      </div>
    </>
  );
};

const MVPs = () => {
  return (
    <>
      <h2 className="yw-h2 text-white col-span-12">
        MVPs, PoCs & working prototypes
      </h2>
      <p className="yw-t1 text-yw-gray-300 col-span-12 xl:col-span-6">
        The top choice for many companies is to develop a basic mobile app with
        limited functionality. This allows them to test the product idea and
        understand its viability. In such cases, cost and time are key. React
        Native allows you to create well-established, semi-static mobile apps
        that can be tested on a variety of platforms.
      </p>

      <div className="col-span-12 xl:col-span-6 flex flex-col gap-y-6 text-start">
        <div className="bg-yw-gray-950 md:bg-inherit p-4 md:p-0 rounded-lg md:rounded-none flex items-center col-span-6">
          <div className="mr-4">
            <Checkmark bgColor="#45474D" checkmarkColor="#FFF" />
          </div>
          <div className="yw-h4 text-white">
            Fast transformation of ideas into a working application.{" "}
          </div>
        </div>
        <div className="bg-yw-gray-950 md:bg-inherit p-4 md:p-0 rounded-lg md:rounded-none flex items-center col-span-6">
          <div className="mr-4">
            <Checkmark bgColor="#45474D" checkmarkColor="#FFF" />
          </div>
          <div className="yw-h4 text-white">
            Ability to easily test all ideas.
          </div>
        </div>
        <div className="bg-yw-gray-950 md:bg-inherit p-4 md:p-0 rounded-lg md:rounded-none flex items-center col-span-6">
          <div className="mr-4">
            <Checkmark bgColor="#45474D" checkmarkColor="#FFF" />
          </div>
          <div className="yw-h4 text-white">Excellent time-to-market.</div>
        </div>
      </div>
    </>
  );
};

const StreamlinedUI = () => {
  return (
    <>
      <h2 className="yw-h2 text-white col-span-12">Apps with simplified UI</h2>
      <p className="yw-t1 text-yw-gray-300 col-span-12 xl:col-span-6">
        Many smash applications focus on the core features instead of
        prioritizing complex animations. These applications can be successfully
        developed using React Native. The point is that React Native has a limit
        in terms of the complexity of a native app that can be replicated
        without loss of performance. Therefore, a thorough analysis in the early
        stages of the project and consultation with a company that provides
        custom mobile app development services is a must.
      </p>

      <div className="col-span-12 xl:col-span-6 flex flex-col gap-y-6 text-start">
        <div className="bg-yw-gray-950 md:bg-inherit p-4 md:p-0 rounded-lg md:rounded-none flex items-center col-span-6">
          <div className="mr-4">
            <Checkmark bgColor="#45474D" checkmarkColor="#FFF" />
          </div>
          <div className="yw-h4 text-white">
            Development of intuitive and appealing UIs.
          </div>
        </div>
        <div className="bg-yw-gray-950 md:bg-inherit p-4 md:p-0 rounded-lg md:rounded-none flex items-center col-span-6">
          <div className="mr-4">
            <Checkmark bgColor="#45474D" checkmarkColor="#FFF" />
          </div>
          <div className="yw-h4 text-white">
            Following best practices in user experience.
          </div>
        </div>
        <div className="bg-yw-gray-950 md:bg-inherit p-4 md:p-0 rounded-lg md:rounded-none flex items-center col-span-6">
          <div className="mr-4">
            <Checkmark bgColor="#45474D" checkmarkColor="#FFF" />
          </div>
          <div className="yw-h4 text-white">
            Application optimization for a smooth operation.
          </div>
        </div>
      </div>
    </>
  );
};

const NativeAPIs = () => {
  return (
    <>
      <h2 className="yw-h2 text-white col-span-12 xl:w-1/2">
        Apps with low to moderate dependency on native APIs
      </h2>
      <p className="yw-t1 text-yw-gray-300 col-span-12 xl:col-span-6">
        Many mobile apps developed with React Native should use native APIs to
        implement some functions (e.g., camera or GPS). Some applications
        require more, but this can lead to a drastic change in performance.
        Experienced developers always know in which situation it is necessary to
        leverage native APIs, and in which cases it is better to stick to other
        options.
      </p>

      <div className="col-span-12 xl:col-span-6 flex flex-col gap-y-6 text-start">
        <div className="bg-yw-gray-950 md:bg-inherit p-4 md:p-0 rounded-lg md:rounded-none flex items-center col-span-6">
          <div className="mr-4">
            <Checkmark bgColor="#45474D" checkmarkColor="#FFF" />
          </div>
          <div className="yw-h4 text-white">Reliable use of native APIs.</div>
        </div>
        <div className="bg-yw-gray-950 md:bg-inherit p-4 md:p-0 rounded-lg md:rounded-none flex items-center col-span-6">
          <div className="mr-4">
            <Checkmark bgColor="#45474D" checkmarkColor="#FFF" />
          </div>
          <div className="yw-h4 text-white">
            Optimized use of APIs to improve performance and scalability.
          </div>
        </div>
        <div className="bg-yw-gray-950 md:bg-inherit p-4 md:p-0 rounded-lg md:rounded-none flex items-center col-span-6">
          <div className="mr-4">
            <Checkmark bgColor="#45474D" checkmarkColor="#FFF" />
          </div>
          <div className="yw-h4 text-white">
            Finding the most efficient way to implement each function.
          </div>
        </div>
      </div>
    </>
  );
};

const StageAccordion = ({
  tabHeading,
  component,
  theme = Theme.dark,
}: {
  tabHeading: string;
  theme: Theme;
  component: JSX.Element;
}) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => setOpen((prevState) => !prevState);
  const textColor =
    theme === Theme.dark ? "text-white" : "text-yw-primary-default";

  return (
    <>
      <div
        className="col-span-12 flex md:hidden justify-between items-center"
        onClick={handleClick}
      >
        <h4 className={`yw-h3 ${textColor}`}>{tabHeading}</h4>
        <div className="flex justify-center items-center bg-yw-gray-700 rounded-full w-10 h-10 cursor-pointer">
          {open ? <MinusIcon color="#FFF" /> : <PlusIcon color="#FFF" />}
        </div>
      </div>

      {open && component}
    </>
  );
};

const mobileComponents = {
  "Cross-platform development": <CrossPlatformDevelopment />,
  MVPs: <MVPs />,
  "Streamlined UI": <StreamlinedUI />,
  "Native APIs": <NativeAPIs />,
};

const MobileTechnology = () => {
  const [activeBackEndTechnology, setActiveBackEndTechnology] =
    React.useState(0);

  return (
    <div>
      <section className="bg-yw-primary-default py-[104px]">
        <div className="container grid grid-cols-12 gap-y-10">
          <div className="col-span-12 grid grid-cols-6 relative">
            <div className="col-span-6 lg:col-span-5 z-[2] order-1 lg:order-0 mb-4 max-w-[966px]">
              <h2 className="yw-h2 mb-6 text-white">
                React Native is a perfect option for building various types of
                mobile applications.
              </h2>
              <p className="yw-t1 text-yw-gray-300">
                We have deep expertise in JavaScript, so in many cases, we use
                React Native in mobile development. Using React Native, we are
                in our element. Our specialists combine this technology with
                back-end development based on Node.js, front-end development,
                product design, and testing to develop applications based on
                React Native.
                <br />
                <br />
                When is it reasonable to use React Native in mobile development?
                There is no one-fits-all solution, and the decision to use one
                or another technology is made on a case-by-case basis.
                Therefore, you can contact our mobile development company
                directly. We will study in detail your requirements and the
                specifics of the project, and answer all your questions.
                However, some clear React Native winners include:
              </p>
            </div>

            <div className="order-0 lg:order-1 lg:col-end-7 lg:col-span-1 mb-6">
              <ReactLogo className="//ml-auto ml-26px w-[81px] h-[68px] sm:w-40 sm:h-36" />
            </div>
          </div>

          <div className="lg:flex hidden col-span-12 gap-6">
            {Object.keys(mobileComponents).map((el, i) => (
              <Button
                href="/"
                key={`${el}-${i}`}
                id={`react-native-section-tab-${i}`}
                className={cn(
                  "btn group rounded-full btn-cta flex items-center justify-center whitespace-nowrap font-montserrat w-full sm:w-fit",
                  {
                    "bg-yw-gray-500": i !== activeBackEndTechnology,
                  }
                )}
                size="md"
                onClick={() => setActiveBackEndTechnology(i)}
              >
                {el}
              </Button>
            ))}
          </div>

          {Object.values(mobileComponents).map((el, i) => {
            const isDisplayed =
              i === activeBackEndTechnology ? "md:grid hidden" : "hidden";

            return (
              <div
                className={`${isDisplayed} col-span-12 grid grid-cols-12 gap-y-6 gap-x-10`}
              >
                {el}
              </div>
            );
          })}

          {Object.entries(mobileComponents).map(([key, component]) => {
            return (
              <StageAccordion
                tabHeading={key}
                component={component}
                theme={Theme.dark}
              />
            );
          })}
        </div>
      </section>

      <CTABanner
        heading="Are you still not sure if it is React Native that you need?"
        subHeading="Contact our seniors so that you can get detailed advice on how to proceed with your project"
        theme={Theme.dark}
        buttonText={"Get free consultation"}
      />

      <section className="bg-yw-gray-100 py-[104px]">
        <div className="container grid grid-cols-12 gap-y-[72px]">
          <div className="col-span-12 grid sm:grid-cols-6 grid-cols-6 md:grid-cols-6 relative">
            <div className="order-1 lg:order-0 col-span-6 lg:col-span-4 z-[2]">
              <h2 className="yw-h2 mb-6 text-primary-default">
                We also use Flutter
              </h2>
              <p className="yw-t1 text-yw-gray-500">
                For our company, Flutter is a great choice when it comes to
                crafting highly functional applications with a custom user
                interface of any complexity. Flutter is completely free and
                offers open-source code. Therefore, this framework reduces
                product development time and time to market. Besides,
                Flutter-based applications have perfect performance and are
                fast, so this framework is a win-win option for startups that
                want to test their business model.
                <br />
                <br />
                However, note that Flutter is not a magic bullet for all
                problems, so only a professional company will be able to help
                you choose the right technology for each specific case.
              </p>
            </div>

            <div className="scale-50 lg:scale-100 order-0 lg:order-1 grid lg:col-end-8 lg:col-span-2">
              <Flutter />
            </div>
          </div>

          <div className="col-span-12 grid grid-cols-3 lg:flex gap-6 items-center lg:justify-between">
            <p className="yw-h3 text-yw-primary-default col-span-3">Used by:</p>
            <img
              src={GooglePayLogo}
              alt="goggle-pay-logo"
              className="max-h-8 sm:min-h-[32px] h-6"
            />
            <img
              src={GoogleAdsLogo}
              alt="google-ads-logo"
              className="col-span-1 max-h-8 sm:min-h-[32px] h-6"
            />
            <img
              src={EbayLogo}
              alt="ebay-logo"
              className="col-span-1 max-h-8 sm:min-h-[32px] h-6"
            />
            <img
              src={AlibabaLogo}
              alt="alibaba-logo"
              className="col-span-1 max-h-8 sm:min-h-[28px] h-6"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default MobileTechnology;
