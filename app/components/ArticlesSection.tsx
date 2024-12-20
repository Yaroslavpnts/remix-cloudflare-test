import { type Article, Theme } from "~/types";
import ArticleCard from "./ArticleCard";

const ArticlesSection = ({
  theme,
  heading,
  articles,
}: {
  theme?: Theme;
  heading: string;
  articles: Article[];
}) => {
  const themes = {
    dark: {
      textColorPrimary: "text-white",
      sectionBg: "bg-yw-primary-default",
    },
    light: {
      textColorPrimary: "text-yw-primary-default",
      sectionBg: "bg-yw-gray-100",
    },
  };
  const themeData = themes[theme || Theme.light];

  return (
    <section className={`${themeData.sectionBg} py-8 md:py-20`}>
      <div className="articles-section container grid grid-cols-12 gap-y-[55px] sm:gap-x-4 lg:gap-x-10">
        <div className="col-span-12 flex justify-between items-center">
          <h2 className={`${themeData.textColorPrimary} yw-h2`}>{heading}</h2>
          <a
            href="/blog"
            className="text-yw-cta-default yw-button-small mb-1 flex items-center6 cursor-pointer"
          >
            More articles
            <div className="ltr:ml-2 rtl:mr-2">
              <img
                src="/icons/arrow-blue.svg"
                loading="lazy"
                className="rotate-180"
                alt="arrow"
                width="14"
                height="15"
              />
            </div>
          </a>
        </div>

        {articles.map((article) => {
          return (
            <ArticleCard
              article={article}
              className="col-span-12 md:col-span-4"
              key={"articles_section_article_" + article.id}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ArticlesSection;
