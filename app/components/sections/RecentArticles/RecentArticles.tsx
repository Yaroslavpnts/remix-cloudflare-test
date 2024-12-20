import ArrowBlueIcon from "~/icons/components/ArrowBlueIcon";
import type { FC } from "react";
import ArticleCard from "~/components/ArticleCard";
import { type LoaderFunctionArgs } from "@remix-run/cloudflare";
import { createApi } from "~/api";
import type { Article, Category } from "~/types";
import { Theme } from "~/types";

type TProps = {
  dataSectionName: string;
  recentArticles: Article[];
  section_navigation_name: string;
  theme: Theme;
  title: string;
  category?: { data?: Category };
};

export const loader = async ({ context, request }: LoaderFunctionArgs) => {
  const api = createApi(context, request);
  const params = {
    populate: ["items", "image", "author", "author.image", "categories"],
    pagination: {
      limit: -1,
    },
    sort: {
      meta_created_at: "desc",
    },
    filters: {
      redirect_code: {
        $null: true,
      },
    },
  };

  const url = `/articles`;
  const data = await api.get(url, { params });

  if (!data?.data?.[0]) {
    throw new Response(null, {
      status: 404,
      statusText: "Not Found",
    });
  }

  return {
    recentArticles: data?.data,
  };
};

const RecentArticles: FC<TProps> = ({
  dataSectionName,
  recentArticles,
  section_navigation_name,
  theme,
  title,
  category,
}) => {
  const themes: any = {
    dark: {
      textColorPrimary: "text-white",
      sectionBg: "bg-yw-primary-default",
    },
    light: {
      textColorPrimary: "text-yw-primary-default",
      sectionBg: "bg-yw-gray-100",
    },
  };

  const categorySlug = category?.data?.attributes.slug;

  let articles = recentArticles.slice(0, 3);

  if (categorySlug) {
    articles = recentArticles
      .filter((article) =>
        article.attributes.categories.data?.some(
          (category) => category.attributes.slug === categorySlug
        )
      )
      .slice(0, 3);
  }

  const themeData = themes[theme || Theme.light];

  return (
    <section
      className={`${themeData.sectionBg} py-8 md:py-20`}
      data-sectionid={section_navigation_name}
      data-section-name={dataSectionName}
    >
      <div className="articles-section container grid grid-cols-12 gap-y-4 sm:gap-y-10 md:gap-y-4 xl:gap-y-10 sm:gap-x-4 lg:gap-x-10">
        <h2
          className={`${themeData.textColorPrimary} mb-6 sm:mb-0 yw-h2 col-span-12 sm:col-span-8 order-0 self-center`}
        >
          {title}
        </h2>
        <div
          className={`col-span-12 sm:col-span-4 sm:justify-self-end self-center order-last sm:order-none`}
        >
          <a
            href="/blog"
            className="text-yw-cta-default yw-button-small pl-0 mb-1 flex items-center cursor-pointer"
          >
            More articles
            <div className="ltr:ml-2 rtl:mr-2">
              <ArrowBlueIcon />
            </div>
          </a>
        </div>
        {articles?.map((article: any) => (
          <ArticleCard
            article={article}
            key={article.id}
            className="col-span-12 sm:col-span-6 lg:col-span-4"
            theme={theme}
          />
        ))}
      </div>
    </section>
  );
};

RecentArticles.loader = loader;

export default RecentArticles;
