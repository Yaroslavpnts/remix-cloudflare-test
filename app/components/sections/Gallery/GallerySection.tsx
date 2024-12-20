import type { StrapiImageData } from "~/types";
import { Theme } from "~/types";
import Gallery from "./Gallery";

const GallerySection = ({
  section_navigation_name,
  dataSectionName,
  theme,
  images,
}: {
  theme?: Theme;
  section_navigation_name?: string;
  dataSectionName?: string;
  images: { data: StrapiImageData[] };
}) => {
  const themes = {
    dark: {
      sectionBg: "bg-yw-primary-default",
    },
    light: {
      sectionBg: "bg-yw-gray-100",
    },
  };

  const themeData = themes[theme || Theme.light];

  return (
    <section
      className={`${themeData.sectionBg} py-[72px] sm:py-28 overflow-hidden`}
      data-sectionid={section_navigation_name}
      data-section-name={dataSectionName}
    >
      <div className="container">
        <Gallery items={images?.data} theme={theme} />
      </div>
    </section>
  );
};

export default GallerySection;
