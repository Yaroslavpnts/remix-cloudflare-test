import { Theme, type Article } from "~/types";
import StrapiImage from "./StrapiImage";

const addFilter = (value: string) => {
  const formattedDate = new Date(value).toLocaleDateString("en-US", {
    timeZone: "UTC",
    month: "long",
    day: "2-digit",
    year: "numeric",
  });

  const [day, month, year] = formattedDate?.split(" ");

  return `${month.substring(0, 3)} ${day}, ${year}`;
};

const ArticleCard = ({
  article,
  theme,
  className = "",
  loading = "lazy",
}: {
  article: Article;
  theme?: Theme;
  className?: string;
  loading?: "lazy" | "eager";
}) => {
  const themes = {
    dark: {
      textColorPrimary: "text-white",
      cardBg: "",
      buttonVariant: "secondary:inverted",
      infoBg: "bg-yw-gray-800",
      infoTextColor: "text-yw-gray-300",
    },
    light: {
      textColorPrimary: "text-yw-primary-default",
      cardBg: "",
      buttonVariant: "secondary",
      infoBg: "bg-yw-gray-200",
      infoTextColor: "text-yw-gray-400",
    },
  };
  const themeData = themes[theme || Theme.light];

  const author = article.attributes.author?.data?.attributes;

  return (
    <div
      className={`${themeData.cardBg} ${className} underline-text-hover flex flex-col flex-1`}
    >
      <a href={`/blog/${article.attributes.slug}`}>
        {article.attributes.image && (
          <div className="mb-4 max-h-[216px] rounded-[20px] overflow-hidden">
            <StrapiImage
              image={article.attributes.image?.data}
              className="w-full h-full object-cover"
              sizes="(min-width: 400px) 400px, 30vw"
              alt={article.attributes.title + " - article cover"}
              loading={loading}
            />
          </div>
        )}

        <div
          className={`${themeData.textColorPrimary} yw-h4 mb-4 blog-title h-14 overflow-hidden`}
        >
          {article.attributes.title}
        </div>
      </a>
      <div className="flex flex-col justify-end flex-1">
        <div>
          <div className="yw-t2-med text-yw-gray-300 mb-2"></div>
        </div>
        {author && (
          <a href={`/authors/${author.slug}`}>
            <div className="flex mb-4 items-center">
              {author.image && (
                <StrapiImage
                  image={author.image?.data}
                  className=" rounded-full h-14 w-14 flex-shrink-0 object-cover object-top mr-4"
                  sizes="56px"
                  alt={author.first_name}
                />
              )}
              <div className="">
                <div
                  className={`${themeData.textColorPrimary} font-bold yw-h5 mb-2`}
                >
                  {author.first_name} {author.last_name}
                </div>
                <div className="yw-t2 text-yw-gray-400">{author.position}</div>
              </div>
            </div>
          </a>
        )}
        <div className="flex items-center">
          <div
            className={`${themeData.infoBg} ${themeData.infoTextColor} yw-t2-med rounded-lg py-[6px] px-3 ltr:mr-2 rtl:ml-2`}
          >
            {addFilter(article?.attributes?.meta_created_at)}
            {/* {{ date | dateFilter }} */}
          </div>
          <div
            className={`${themeData.infoBg} ${themeData.infoTextColor} yw-t2-med rounded-lg py-[6px] px-3`}
          >
            {Math.ceil(article?.attributes?.body?.split(/\s/g).length / 200)}{" "}
            min to read
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
