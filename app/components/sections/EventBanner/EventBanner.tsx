import cn from "classnames";
import eventLogo from "./icons/event-logo.svg";
import closeIcon from "~/icons/close.svg";
import { useEventBanner } from "~/contexts/EventBanner.context";

const EventBanner = () => {
  const { isShownEventBanner, setisShownEventBanner } = useEventBanner();

  return (
    <section
      className={cn(
        "bg-yw-cta-default text-white font-montserrat text-sm sm:text-base py-6 sm:py-4 fixed bottom-0 lg:static w-full",
        isShownEventBanner ? "block" : "hidden"
      )}
    >
      <div className="container flex flex-col sm:flex-row gap-y-3 sm:gap-0 sm:items-center">
        <img
          src={eventLogo}
          alt="event-logo"
          className="mr-6 hidden sm:block h-16"
        />
        <div className="sm:mr-10 flex justify-between">
          <div className="flex flex-col gap-1">
            <div className="text-base font-bold leading-[22px]">
              Let’s meet at{" "}
              <a
                href="https://jsnation.us"
                target="_blank"
                className="underline"
              >
                JSNation 2024
              </a>
            </div>
            <div className="font-medium leading-5 sm:leading-[22px]">
              November 18-21
            </div>
            <div className="font-medium leading-5 sm:leading-[22px]">
              New York, US
            </div>
          </div>
          <div
            className="cursor-pointer block sm:hidden"
            onClick={() => setisShownEventBanner(false)}
          >
            <img
              className="ltr:mr-1 rtl:ml-1"
              src={closeIcon}
              alt="close contact modal"
              width="16px"
              height="16px"
            />
          </div>
        </div>
        <div className="flex gap-6 items-center">
          <div className="w-[64px] h-[64px] rounded-full overflow-hidden hidden lg:block">
            <img
              src="/images/yevhen-sm.png"
              alt="member"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col gap-1 w-full sm:w-auto">
            <div className="font-bold leading-5 sm:leading-[22px]">
              Yevhen Piotrovskyi
            </div>
            <div className="font-medium mb-6 sm:mb-0 leading-5 sm:leading-[22px]">
              Chief Technology Officer
            </div>
            <a
              href="https://cal.com/yevhen"
              target="_blank"
              className="border-[1px] py-4 px-6 border-white rounded-full sm:rounded-none sm:border-none sm:p-0 w-full text-center font-bold sm:w-auto sm:underline sm:font-medium sm:text-start sm:block after:content-[''] sm:after:content-['!'] leading-[14px] sm:leading-[22px]"
            >
              Let's Connect
            </a>
          </div>
        </div>
        <div
          className="ml-auto p-1 cursor-pointer hidden sm:block self-start"
          onClick={() => setisShownEventBanner(false)}
        >
          <img
            className="ltr:mr-1 rtl:ml-1"
            src={closeIcon}
            alt="close contact modal"
            width="16px"
            height="16px"
          />
        </div>
      </div>
    </section>
  );
};

export default EventBanner;
