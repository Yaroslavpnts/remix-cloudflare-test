import { useEnv } from "~/hooks/useEnv";
import { type IStrapiImage } from "~/types";

const StrapiImage = ({
  image,
  className,
  loading = "lazy",
  ...rest
}: {
  className?: string;
  image: IStrapiImage;
  width?: string;
  height?: string;
  loading?: "lazy" | "eager";
  sizes?: string;
  alt?: string;
  onDragStart?: (e: React.DragEvent<HTMLImageElement>) => void;
}) => {
  const env = useEnv();

  if (!image || !image.attributes) return null;
  const imageSrc = env.STRAPI_URL + image.attributes.url;
  let imageSrcSet = "";
  if (image.attributes.formats) {
    imageSrcSet = Object.keys(image.attributes.formats)
      .map(
        (key) =>
          `${env.STRAPI_URL}${image.attributes.formats[key].url} ${image.attributes.formats[key].width}w`
      )
      .join(", ");
  }
  return (
    <img
      className={className}
      src={imageSrc}
      srcSet={imageSrcSet}
      loading={loading}
      {...rest}
      alt={image.attributes.alternativeText}
    />
  );
};

const sizes = {
  thumbnail: "310",
  s: "500",
  m: "1024",
  l: "1536",
  xl: "1920",
};

export const StrapiImageStatic = ({
  strapiSrc,
  className,
  loading = "lazy",
  alt,
  ...rest
}: {
  className?: string;
  strapiSrc: string;
  width?: string;
  height?: string;
  loading?: "lazy" | "eager";
  sizes?: string;
  alt?: string;
}) => {
  const env = useEnv();
  const imageSrc = env.STRAPI_URL + "/uploads/" + strapiSrc;

  const imageSrcSet = Object.keys(sizes)
    .map(
      (key) => `${env.STRAPI_URL}/uploads/${key}_${strapiSrc} ${sizes[key]}w`
    )
    .join(", ");
  return (
    <img
      className={className}
      src={imageSrc}
      srcSet={imageSrcSet}
      loading={loading}
      alt={alt}
      {...rest}
    />
  );
};

export default StrapiImage;
