import { type FC } from "react";

type TProps = {
  section_navigation_name: string;
  dataSectionName: string;
};

const AboutCompany: FC<TProps> = ({
  section_navigation_name,
  dataSectionName,
}) => (
  <section
    data-section-name={dataSectionName}
    className="bg-yw-primary-default py-28"
    data-sectionid={section_navigation_name}
  >
    <div className="container grid grid-cols-12 gap-y-10 lg:gap-10">
      <div className="col-span-12 grid grid-cols-1 gap-y-4">
        <div className="text-white yw-h2 md:w-4/5 lg:w-3/5 xl:w-1/2">
          Yojji software development company
        </div>
        <div className="grid grid-cols-12 gap-y-8 lg:gap-10 text-yw-gray-200">
          <div className="col-span-12 md:col-span-6 break-normal">
            <p>
              Yojji is a result-oriented team of professional web developers who
              create custom-made products to help our clients benefit the most.
              Our services are aimed at those who are in search of highly
              professional cutting-edge IT solutions. If you need help with
              planning and developing applications from scratch, making
              improvements to existing ones, building top-notch web and mobile
              solutions and/or conducting their multi-stage testing, you can
              rely on our skilled experts.
            </p>
          </div>
          <div className="col-span-12 md:col-span-6 break-normal">
            <p>
              We are keen on helping our clients enter the digital world quickly
              and easily by providing them with efficient services in the
              IT-sphere from the mobile application and website development to
              information technology consulting. With Yojji as your partner, you
              can achieve all of your strategic business objectives through the
              most innovative technologies and advanced solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutCompany;
