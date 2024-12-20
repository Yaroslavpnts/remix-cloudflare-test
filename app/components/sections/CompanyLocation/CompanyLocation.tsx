import { StrapiImageStatic } from "~/components/StrapiImage";

const CompanyLocation = ({ dataSectionName }) => (
  <section
    className="bg-yw-gray-900 py-[110px]"
    data-section-name={dataSectionName}
  >
    <div className="container grid grid-cols-12 gap-y-[53px]">
      <h2 className="yw-h2 col-span-12 text-white">Our location</h2>
      <div className="col-span-12">
        <StrapiImageStatic
          strapiSrc="offices_locations_map_3c056df26a.webp"
          alt="yojji offices location map"
          className="w-full"
          width="1110"
          height="121"
          loading="lazy"
        />
      </div>
    </div>
  </section>
);

export default CompanyLocation;
