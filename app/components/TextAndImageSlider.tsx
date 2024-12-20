import StrapiImage from "./StrapiImage";
import { type StrapiImagesData } from "~/types";

const TextAndImageSlider = ({
  title,
  subtitle,
  images,
}: {
  title: string;
  subtitle: string;
  images: StrapiImagesData;
}) => {
  return (
    <section className="bg-yw-gray-100 py-20">
      <div className="container">
        <div className="yw-h2 mb-2 mt-12 text-yw-primary-default">{title}</div>
        <div className="yw-t1 mb-8 text-yw-gray-500">{subtitle}</div>

        <div className="overflow-x-scroll flex w-100% scrolling-wrapper scroll-smooth">
          {images.data.map((image) => (
            <div className="block flex-none" key={image.id}>
              <StrapiImage
                image={image}
                className="ltr:mr-2 rtl:ml-2 flex-shrink-0 h-[420px] w-full"
                width="598"
                height="420"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TextAndImageSlider;
