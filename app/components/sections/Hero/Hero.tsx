import type { FC } from "react";
import { Link } from "@remix-run/react";
import mixpanel from "mixpanel-browser";
import cn from "classnames";
import Button from "~/components/Button";
import Raiting from "~/components/Raiting";
import ClutchIcon from "~/components/TestimonialCard/icons/clutch.svg";
import { useContactFormPage } from "~/contexts/ContactFormPage.context";
import StrapiImage from "../../StrapiImage";
import type { StrapiImageData } from "~/types";
import type { TWidgets } from "./Widgets";
import Widgets from "./Widgets";
import { GtmEvent } from "~/utils/gtmSendEvent";

type TLink = {
  link: string;
  upper_title: string;
  title: string;
  icon: StrapiImageData;
};

type TProps = {
  className?: string;
  theme?: string;
  includeServices?: boolean;
  dataSectionName?: string;
  review_stars?: number;
  section_navigation_name?: string;
  text?: string;
  title: string;
  title_html?: string;
  upperTitle?: string;
  image?: StrapiImageData;
  widgets?: TWidgets;
  embedImage?: string;
  dont_show_button?: boolean;
  links?: TLink[];
  casePage: boolean;
};

const Hero: FC<TProps> = ({
  className,
  dataSectionName,
  review_stars,
  section_navigation_name,
  image,
  text,
  title,
  title_html,
  upperTitle,
  widgets,
  embedImage,
  dont_show_button,
  links,
  casePage,
}) => {
  const { setIsShownContactForm, setEvent } = useContactFormPage();

  const showLinks = Boolean(links?.length);

  const splitedText = text?.split("\n").filter((t) => Boolean(t));

  const heroButtonHandler = () => {
    setEvent(GtmEvent.submit_talk_to_us);
    setIsShownContactForm(true);
    mixpanel.track("Talk to us (from hero)");
  };

  return (
    <section
      data-section-name={dataSectionName}
      data-sectionid={section_navigation_name}
      className={`bg-white pb-[72px] ${className}`}
    >
      <div className="container grid grid-cols-12 sm:gap-10">
        <div
          className={cn("col-span-12 grid gap-6 items-center", {
            "lg:col-span-7": image?.data || embedImage,
            "md:col-span-8": !(image?.data || embedImage),
          })}
        >
          {upperTitle && (
            <div className="yw-t1-bold !font-medium !font-montserrat text-yw-gray-950 col-span-12 lg:col-span-8 sm:mb-6 uppercase">
              {upperTitle}
            </div>
          )}
          {title_html ? (
            <h1
              dangerouslySetInnerHTML={{ __html: title_html }}
              className={cn(
                "col-span-12 lg:col-span-8 mb-2",
                casePage ? "yw-h2" : "yw-h1"
              )}
            ></h1>
          ) : (
            <h1
              className={cn("col-span-12 mb-2", casePage ? "yw-h2" : "yw-h1")}
            >
              {title}
            </h1>
          )}

          {!!image?.data && (
            <div className="col-span-12 sm:col-span-8 sm:col-start-3 items-center grid lg:hidden">
              <StrapiImage
                image={image?.data}
                alt={"hero-image"}
                width="100%"
                loading="eager"
              />
            </div>
          )}

          {embedImage && (
            <div className="col-span-12 sm:col-span-8 sm:col-start-3 items-center grid lg:hidden">
              <img
                alt={"hero"}
                src={embedImage}
                className="ltr:mr-4 rtl:ml-4 flex-shrink-0"
                loading="lazy"
              />
            </div>
          )}

          <div
            className={cn(
              "yw-t1 text-yw-gray-500 col-span-12 flex flex-col gap-4",
              showLinks ? "mb-0" : "mb-3"
            )}
          >
            {splitedText?.map((text) => (
              <div>{text}</div>
            ))}
          </div>

          {showLinks && (
            <ul className="col-span-12 flex gap-6 min-[700px]:gap-3 md:gap-[30px] sm:mt-4 flex-col min-[700px]:flex-row">
              {links?.map((item, i) => (
                <li key={item.link}>
                  <Button
                    as="a"
                    href={item.link}
                    id={`hero-link-${i + 1}`}
                    target="_blank"
                    size="sm"
                    className="!rounded-[48px] bg-yw-primary-default flex gap-2 justify-center min-[700px]:justify-normal whitespace-nowrap font-montserrat text-sm leading-none w-full min-[700px]:w-[191px]"
                  >
                    <StrapiImage
                      image={item.icon.data}
                      className="w-8 h-8 sm:w-10 sm:h-10"
                      alt={`hero-external-link-${i + 1}`}
                    />
                    <div className="font-montserrat text-white">
                      <div className="text-[10px] leading-3 sm:leading-4 font-medium">
                        {item?.upper_title}
                      </div>
                      <div className="text-sm sm:text-base">{item?.title}</div>
                    </div>
                  </Button>
                </li>
              ))}
            </ul>
          )}

          <div className="col-span-12">
            {widgets?.data && <Widgets data={widgets.data} className="mb-8" />}
            {review_stars ? (
              <Link
                to="https://clutch.co/profile/yojji#highlights"
                target="blank"
                className="order-1 sm:order-0"
              >
                <div className="flex flex-col items-start">
                  <div className="flex mb-2">
                    <p className="ltr:mr-2 rtl:ml-2 yw-t2 !font-bold">
                      {review_stars.toFixed(1)}
                    </p>
                    <Raiting raiting={review_stars} />
                  </div>
                  <div className="flex items-start">
                    <img
                      src={ClutchIcon}
                      alt="clutch"
                      loading="eager"
                      width="54px"
                      height="16px"
                    />
                    <div className="text-sm  ml-2">10 REVIEWS</div>
                  </div>
                </div>
              </Link>
            ) : null}

            {!dont_show_button && (
              <Button
                href="/"
                id="index-hero-consultation"
                className="btn group rounded-full yw-button-large btn-cta flex items-center justify-center whitespace-nowrap font-montserrat py-5 px-10 text-sm leading-none w-full sm:w-fit"
                onClick={heroButtonHandler}
              >
                Talk to us
              </Button>
            )}
          </div>
        </div>

        {!!image?.data && (
          <div className="col-span-12 sm:col-span-5 items-center lg:grid hidden">
            <StrapiImage
              image={image?.data}
              alt={"hero-image"}
              width="100%"
              loading="eager"
            />
          </div>
        )}
        {embedImage && (
          <div className="col-span-12 sm:col-span-5 pl-10 lg:grid hidden">
            <img
              alt={"hero"}
              src={embedImage}
              className="ltr:mr-4 rtl:ml-4 flex-shrink-0"
              loading="lazy"
            />
          </div>
        )}
      </div>
    </section>
  );
};

Hero.populate = ["image", "widgets", "links"];

export default Hero;
