import { createApi } from "~/api";
import { type Theme } from "~/types";
import { type LoaderFunctionArgs } from "@remix-run/cloudflare";
import { type FC } from "react";
import ClientTestimonialCard from "../TestimonialCard/ClientTestimonialCard";
import { useContactFormPage } from "~/contexts/ContactFormPage.context";
import { GtmEvent } from "~/utils/gtmSendEvent";

type TProps = {
  theme?: Theme;
  testimonials: any[];
  section_navigation_name: string;
  dataSectionName: string;
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

const ClientTestimonials: FC<TProps> = ({
  testimonials,
  section_navigation_name,
  theme,
  dataSectionName,
}) => {
  const { setIsShownContactForm, setEvent } = useContactFormPage();
  const estimateProjectHandler = () => {
    setEvent(GtmEvent.submit_estimate_project);
    setIsShownContactForm(true);
  };

  return (
    <section
      data-sectionid={section_navigation_name}
      className="bg-yw-gray-100"
      data-section-name={dataSectionName}
    >
      <div className="py-28 container mx-auto !grid grid-cols-12 gap-y-10 sm:gap-10 items-start 2xl:gap-x-16">
        <div className="col-span-12 lg:col-span-6 xl:col-span-4 xl:sticky xl:top-48">
          <h2 className="yw-h2 yw-gray-900 mb-4">Testimonials</h2>
          <p className="yw-t1 text-yw-gray-500 mb-8 hidden sm:block">
            Cloud-based solution for small, mid-sized, and large companies to
            manage payroll around the world.
          </p>
          <button
            className="btn group rounded-full hidden xl:flex items-center justify-center whitespace-nowrap font-montserrat py-4
            px-6 text-sm leading-none yw-button-small btn-primary"
            onClick={estimateProjectHandler}
          >
            Estimate project
          </button>
        </div>

        <div className="col-span-12 xl:col-span-8">
          {testimonials.map((testimonial) => {
            return (
              <ClientTestimonialCard
                testimonial={testimonial}
                key={"testimonial_" + testimonial.id}
                theme={theme}
                className="mb-16 last:mb-0 sm:mb-24"
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

ClientTestimonials.loader = loader;

export default ClientTestimonials;
