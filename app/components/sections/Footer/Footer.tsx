import logoLight from "../../../icons/logo-light.svg";
import logoDark from "../../../icons/logo.svg";
import { createApi } from "~/api";
import { type LoaderFunctionArgs } from "@remix-run/cloudflare";
import { Theme } from "~/types";
import SubscriptionForm from "../Subscription/SubscriptionForm";
import { GtmEvent } from "~/utils/gtmSendEvent";

type TProps = {
  theme?: Theme;
  columns: any[];
  dataSectionName: string;
};

const socialLinks = [
  {
    link: "https://www.linkedin.com/company/yojji",
    label: "linkedin",
    src: `/footer-icons/linkedin`,
  },
  {
    link: "https://www.facebook.com/yojji.io",
    label: "facebook",
    src: `/footer-icons/facebook`,
  },
  {
    link: "https://www.instagram.com/yojji.io",
    label: "instagram",
    src: `/footer-icons/instagram`,
  },
  {
    link: "https://dribbble.com/yojji_io",
    label: "dribble",
    src: `/footer-icons/basketball`,
  },
  {
    link: "https://www.behance.net/Yojji",
    label: "behance",
    src: `/footer-icons/be`,
  },
  {
    link: "https://www.youtube.com/channel/UCi7mDgJgfcpPQIxSuiorhVg",
    label: "youtube",
    src: `/footer-icons/youtube`,
  },
];

export const loader = async ({ context, request }: LoaderFunctionArgs) => {
  const api = createApi(context, request);
  const data = await api.get(
    `/footer?populate=columns.items,columns.sub_items`
  );

  return {
    columns: data?.data?.attributes?.columns || [],
  };
};

const Footer = ({ theme = Theme.dark, columns, dataSectionName }: TProps) => {
  const themes = {
    dark: {
      textColorPrimary: "text-white",
      textColorSecondary: "text-yw-gray-300",
      textColorSecondaryHover: "hover:text-white",
      sectionBg: "bg-yw-primary-default",
      footerBg: "bg-[#454850]",
      footerTextColor: "text-yw-gray-300",
      logo: logoLight,
      linkColor: "text-white",
      linkColorHover: "hover:border-b-white",
    },
    light: {
      textColorPrimary: "text-yw-primary-default",
      textColorSecondary: "text-yw-gray-500",
      textColorSecondaryHover: "hover:text-yw-primary-default",
      sectionBg: "bg-yw-gray-100",
      footerBg: "bg-yw-gray-200",
      footerTextColor: "text-yw-gray-500",
      logo: logoDark,
      linkColor: "text-yw-cta-default",
      linkColorHover: "hover:border-b-yw-cta-default",
    },
  };

  const themeData = themes[theme || Theme.light];

  return (
    <>
      <section
        className={`${themeData.sectionBg} pb-12 sm:pb-14 lg:pb-24 pt-14 lg:pt-[72px]`}
        data-section-name={dataSectionName || "footer.hardcoded"}
        style={{ contentVisibility: "auto" }}
      >
        <div className="container grid grid-cols-12 gap-y-7 sm:gap-x-5">
          <div className="flex justify-between flex-col lg:flex-row col-span-12 pb-7 border-solid border-b border-b-yw-gray-600">
            <div className="flex flex-col order-1 lg:order-0">
              <a href="/" className="mb-8" aria-label="brand logo">
                <img
                  src={themeData.logo}
                  alt="Yojji logo"
                  width="100"
                  height="100"
                  loading="lazy"
                />
              </a>
              {/* <div className="mb-11">
              <div className={`${themeData.textColorPrimary} mb-4 yw-h5`}>
                Offices
              </div>
            </div> */}

              <div className="gap-6 flex justify-between sm:justify-normal mb-8">
                {socialLinks?.map((item, idx) => (
                  <a
                    key={"social_" + idx}
                    href={item.link}
                    rel="nofollow noreferrer"
                    target="_blank"
                    aria-label={item.label}
                  >
                    <img
                      src={
                        item.src +
                        (theme !== Theme.light ? ".svg" : "-dark.svg")
                      }
                      alt={item.label}
                      width="24"
                      height="24"
                      loading="lazy"
                    />
                  </a>
                ))}
              </div>

              <div
                className={`${themeData.textColorSecondary} yw-t2 flex flex-wrap flex-col gap-2 items-baseline`}
              >
                <span>Drop us a line:</span>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-16 lg:flex-col lg:gap-4">
                  <a
                    href="mailto:hello@yojji.io"
                    className={`${themeData.linkColor} border-b border-b-transparent leading-none ${themeData.linkColorHover} font-bold pl-[2px]`}
                  >
                    hello@yojji.io
                  </a>
                </div>
                <a
                  href="tel:+442045773275"
                  className={`${themeData.linkColor}`}
                >
                  +442045773275
                </a>
              </div>
            </div>

            <div className="order-0 lg:order-1 mb-10 lg:mb-0">
              <SubscriptionForm
                title={
                  "Subscribe to our newsletter \n for the latest IT updates"
                }
                event={GtmEvent.submit_email_footer}
                inFooter={true}
                theme={theme}
                className="max-w-[393px]"
              />
            </div>
          </div>

          {columns?.map((column, i) => {
            return (
              <div
                className="col-span-6 sm:col-span-4 lg:col-span-3 xl:col-span-2 order-2"
                key={"col_" + i}
              >
                <div className={`${themeData.textColorPrimary} mb-4 yw-h5`}>
                  {column.title}
                </div>
                <ul>
                  {column.items?.map((item, idx) => (
                    <li key={"col_item_" + idx} className="text-sm mb-2">
                      <a
                        href={item.link ?? "#"}
                        className={`${themeData.textColorSecondary} ${themeData.textColorSecondaryHover} yw-t2`}
                      >
                        {item.anchor}
                      </a>
                    </li>
                  ))}
                </ul>

                {column?.sub_title && (
                  <>
                    <div
                      className={`${themeData.textColorPrimary} mb-4 pt-6 yw-h5`}
                    >
                      {column?.sub_title}
                    </div>
                    <ul>
                      {column?.sub_items?.map((item, idx) => (
                        <li key={idx + "a"} className="text-sm mb-2">
                          <a
                            href={item.link ?? "#"}
                            className={`${themeData.textColorSecondary} ${themeData.textColorSecondaryHover} yw-t2`}
                          >
                            {item.anchor}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <footer className={`${themeData.footerBg} py-6 col-span-12`}>
        <div
          className={`${themeData.footerTextColor} container flex justify-between gap-2 yw-t2-med`}
        >
          <p>© {new Date().getFullYear()} by Yojji. All rights reserved</p>
          <div className="flex flex-wrap gap-x-6">
            <a
              href="/privacy"
              className={`cursor-pointer whitespace-nowrap ${themeData.textColorSecondaryHover}`}
              target="_blank"
            >
              Privacy policy
            </a>
            <a
              href="/cookie"
              className={`cursor-pointer whitespace-nowrap ${themeData.textColorSecondaryHover}`}
              target="_blank"
            >
              Cookie policy
            </a>
            <a
              href="/terms-of-service"
              className={`cursor-pointer whitespace-nowrap ${themeData.textColorSecondaryHover}`}
              target="_blank"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer.loader = loader;

export default Footer;
