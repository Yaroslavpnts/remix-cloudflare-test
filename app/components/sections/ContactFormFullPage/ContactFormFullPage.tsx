import { useEffect, type FC, useRef } from "react";
import { type LoaderFunctionArgs } from "@remix-run/cloudflare";
import cn from "classnames";
import logolight from "~/icons/logo-light.svg";
import closeIcon from "~/icons/close.svg";
import ContactForm from "../Contact/ContactForm";
import type { TContact } from "../Contact/CompanyContact";
import CompanyContact from "../Contact/CompanyContact";
import { createApi } from "~/api";
import TestimonialCard from "~/components/TestimonialCard/TestimonialCard";
import { type Testimonial, Theme } from "~/types";
import { useContactFormPage } from "~/contexts/ContactFormPage.context";

const contacts: TContact[] = [
  {
    fullName: "Ildar Kulmuhametov",
    email: "ildar.kulmuhametov@yojji.io",
    location: "NL, Amsterdam",
    position: "CEO, Co-Founder",
    image: "/images/ildar-small-sq.png",
    alt: "Ildar Kulmuhametov",
  },
  {
    fullName: "Yevhen Piotrovskyi",
    email: "yevhen.piotrovskyi@yojji.io",
    location: "USA, Austin",
    position: "CTO, Co-Founder",
    image: "/images/yevhen-small-sq.png",
    alt: "Yevhen Piotrovskyi",
  },
];

type TProps = {
  theme?: "dark" | "light";
  testimonials?: Testimonial[];
};

export const loader = async ({ context, request }: LoaderFunctionArgs) => {
  const api = createApi(context, request);
  const data = await api.get(
    `/testimonials?populate=image&sort=createdAt:desc`
  );

  return {
    testimonials: data?.data,
  };
};

const ContactFormFullPage: FC<TProps> = ({ theme = "dark", testimonials }) => {
  const { isShownContactForm, setIsShownContactForm, event, setEvent } =
    useContactFormPage();
  const contactFormRef = useRef<HTMLDivElement>(null);

  const themes = {
    dark: {
      textColorPrimary: "text-white",
      textColorSecondary: "text-yw-gray-300",
      sectionBg: "bg-yw-primary-default",
      cardBg: "card-light",
    },
    light: {
      textColorPrimary: "text-yw-primary-default",
      textColorSecondary: "text-yw-primary-default opacity-10",
      sectionBg: "bg-yw-gray-100",
      cardBg: "card-dark",
    },
  };

  const themeData = themes[theme];

  useEffect(() => {
    if (!contactFormRef.current) {
      return;
    }

    if (isShownContactForm) {
      document.body.style.overflow = "hidden";
    } else {
      setEvent(null);
      document.body.style.overflow = "hidden auto";
    }
  }, [isShownContactForm]);

  return (
    <div
      id="contact-full-page"
      className={cn(
        `fixed inset-0 flex flex-col z-20 overflow-y-auto transition-[top] duration-200 overscroll-none`,
        themeData.sectionBg,
        isShownContactForm ? "top-0" : "top-full"
      )}
      ref={contactFormRef}
    >
      <div
        className={`px-4 sm:px-14 py-6 sm:py-[14px] flex items-center justify-between ${themeData.sectionBg} sticky top-0 z-10`}
      >
        <a className="text-white" href="/" aria-label="brand logo">
          <img
            src={logolight}
            alt="Yojji logo"
            loading="lazy"
            width="86"
            height="20"
          />
        </a>
        <button
          onClick={() => setIsShownContactForm(false)}
          className="text-white text-sm font-semibold flex items-center leading-tight capitalize"
        >
          <span className="ltr:mr-1 rtl:ml-1">Close</span>
          <img
            className="ltr:mr-1 rtl:ml-1"
            src={closeIcon}
            alt="close contact modal"
            loading="lazy"
            width="14px"
            height="14px"
          />
        </button>
      </div>

      <div className="container">
        <div className="pt-6 lg:pt-10 max-w-[560px] lg:max-w-none mx-auto">
          <div
            className={`${themeData.textColorPrimary} yw-h2 lg:text-start mb-8`}
          >
            Let’s talk about your project
          </div>

          <div className="grid grid-cols-12 sm:gap-10 mb-10">
            <div className="col-span-12 lg:col-span-6 relative order-2 md:order-1">
              <div className={`${themeData.textColorPrimary} lg:block mb-8`}>
                <div className="mb-6 yw-h3 font-bold font-montserrat">
                  {"Meet up in person"}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {contacts?.map((contact) => (
                    <CompanyContact key={contact.email} contact={contact} />
                  ))}
                </div>
              </div>

              {!!testimonials?.length && (
                <div>
                  <div className="yw-h3 text-white mb-6">
                    {"Clients say about us"}
                  </div>
                  {testimonials?.map((testimonial) => (
                    <TestimonialCard
                      key={"testim_contact_" + testimonial.id}
                      theme={Theme.dark}
                      testimonial={testimonial}
                      className={"mb-4"}
                      reviewContentClassName="max-w-[460px]"
                    />
                  ))}
                </div>
              )}
            </div>

            <div className="col-span-12 lg:col-span-6 order-1 md:order-2">
              <ContactForm
                subtitle="Get a Consultation"
                showTitle={true}
                className={`${themeData.cardBg} px-8 py-6 rounded-3xl sticky top-16 mb-6`}
                formOnContactPage
                event={event}
                theme={Theme.light}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ContactFormFullPage.loader = loader;

export default ContactFormFullPage;
