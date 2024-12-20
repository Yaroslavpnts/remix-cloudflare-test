import { FC } from "react";
import cn from "classnames";
import ContactForm from "./ContactForm";
import CompanyContact, { TContact } from "./CompanyContact";
import { Theme } from "~/types";
import { useEventBanner } from "~/contexts/EventBanner.context";
import { GtmEvent } from "~/utils/gtmSendEvent";

const steps = [
  "Fill out our contact form for a free consultation, or book an online meeting directly via the <a href='https://calendly.com/yojji/intro-call-with-yojji' target='_blank' id='calendly-link' class='yw-t1-bold text-yw-cta-default inline'>Calendly link</a>.",
  "We discuss your project even if you have just an raw idea.",
  "We choose a model and approach that are suitable for your case and budget.",
];

const contacts: TContact[] = [
  {
    fullName: "Ildar Kulmuhametov",
    email: "ildar.kulmuhametov@yojji.io",
    location: "NL, Amsterdam",
    position: "CEO, Co-Founder",
    image: "/images/ildar-sm.png",
    alt: "Ildar Kulmuhametov",
  },
  {
    fullName: "Yevhen Piotrovskyi",
    email: "yevhen.piotrovskyi@yojji.io",
    location: "USA, Austin TX",
    position: "CTO, Co-Founder",
    image: "/images/yevhen-sm.png",
    alt: "Yevhen Piotrovskyi",
  },
  {
    fullName: "Timofey Lebedev",
    email: "timofey.lebedev@yojji.io",
    location: "Spain, Madrid",
    position: "COO, Co-Founder",
    image: "/images/timofey-sm.png",
    alt: "Timofey Lebedev",
  },
];

type TProps = {
  theme?: Theme;
  title?: string;
  subtitle?: string;
  form_title?: string;
  section_navigation_name?: string;
  dataSectionName?: string;
  projects_count?: number;
  experts_count?: number;
  years_on_the_market_count?: number;
  header?: string;
  className: string;
};

const Contact: FC<TProps> = ({
  theme,
  title = "Have an idea?",
  subtitle = "Let’s work together",
  form_title = "Let’s do a first step",
  section_navigation_name,
  dataSectionName,
  projects_count,
  experts_count,
  years_on_the_market_count,
  header,
  className,
}) => {
  const { isShownEventBanner } = useEventBanner();

  const themes = {
    dark: {
      textColorPrimary: "text-white",
      textColorSecondary: "text-yw-gray-100",
      sectionBg: "bg-yw-primary-default",
      cardBg: "card-light",
    },
    light: {
      textColorPrimary: "text-yw-primary-default",
      textColorSecondary: "text-yw-gray-300",
      sectionBg: "bg-yw-gray-100",
      cardBg: "card-dark",
    },
  };

  const themeData = themes[theme || Theme.light];

  // const [openCalendly, setOpenCalendly] = useState(false);

  // useEffect(() => {
  //   const calendlyLink = document?.getElementById("calendly-link");

  //   const toggleCalendly = () => {
  //     setOpenCalendly((s) => !s);
  //   };

  //   calendlyLink?.addEventListener("click", toggleCalendly);

  //   return () => {
  //     calendlyLink?.removeEventListener("click", toggleCalendly);
  //   };
  // }, []);

  return (
    <section
      data-sectionid={section_navigation_name}
      className={`contact ${themeData.sectionBg}`}
      data-section-name={dataSectionName}
    >
      <div
        className={cn(
          "container pb-8 md:pb-28 pt-8 md:pt-20",
          className && isShownEventBanner ? className : "",
          isShownEventBanner && !className ? "lg:pt-48" : ""
        )}
      >
        <div
          className={cn(
            "grid grid-cols-12 sm:gap-10 gap-8 mb-8 md:mb-16 xl:mb-10",
            {
              "pt-12 md:pt-8": header,
            }
          )}
        >
          <div
            className={cn("col-span-12 lg:col-span-6 order-1", {
              "pt-6": !header,
            })}
          >
            {header && <h1 className="yw-h1 mb-10">{header}</h1>}
            <div
              className={`${themeData.textColorPrimary} mb-8 md:mb-16 lg:mb-[70px] yw-h2 whitespace-pre-line sm:text-start sm:max-w-md`}
            >
              <div className="mb-6">{title}</div>
              <div className="yw-h3">{subtitle}</div>
            </div>
            <div className="mb-6 lg:mb-14 xl:mb-[70px]">
              {steps.map((item, index) => (
                <div
                  className="flex gap-4 pb-4 items-stretch"
                  key={`$steps_${index}`}
                >
                  <div
                    className={cn(
                      "flex flex-col relative after:content-[''] after:block after:absolute after:w-[2px] after:bg-yw-gray-300 after:-translate-x-px after:left-1/2",
                      {
                        "after:h-0": index === steps.length - 1,
                        "contact-section-increased-step-height":
                          index !== steps.length - 1,
                      }
                    )}
                  >
                    <div className="h-4 w-4 rounded-full bg-yw-gray-300 shrink-0"></div>
                  </div>
                  <div
                    className={`${themeData.textColorPrimary} yw-t1 leading-7`}
                    dangerouslySetInnerHTML={{ __html: item }}
                  ></div>
                </div>
              ))}
            </div>
            {projects_count && experts_count && years_on_the_market_count && (
              <div className="hidden lg:flex justify-between yw-h1">
                <div>
                  <div className="mb-1">{projects_count}+</div>
                  <div className="yw-h5">Projects</div>
                </div>
                <div>
                  <div className="mb-1">{experts_count}+ </div>
                  <div className="yw-h5">Experts</div>
                </div>
                <div>
                  <div className="mb-1">{years_on_the_market_count}+</div>
                  <div className="yw-h5">Years on the market</div>
                </div>
              </div>
            )}
          </div>

          <div className="col-span-12 lg:col-span-6 order-2">
            <ContactForm
              subtitle={form_title}
              showTitle={true}
              className={`${themeData.cardBg} px-10 pt-14 pb-12`}
              event={GtmEvent.submit_footer}
              theme={
                (theme || Theme.light) === Theme.light
                  ? Theme.dark
                  : Theme.light
              }
            />
          </div>
        </div>

        <div className={`${themeData.textColorPrimary}`}>
          <div className="mb-6 yw-h3 text-start">Meet up in person</div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  lg:gap-10 gap-6 md:justify-between lg:justify-normal">
            {contacts.map((contact, index) => (
              <CompanyContact
                contact={contact}
                key={"comp_contact_" + index}
                className={cn({
                  "md:justify-self-end lg:justify-self-auto": index % 2 === 1,
                })}
              />
            ))}
          </div>
        </div>
      </div>
      {/* <Callendly open={openCalendly} onClose={setOpenCalendly} /> */}
    </section>
  );
};

export default Contact;
