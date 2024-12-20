interface StrapiFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string;
  width: number;
  height: number;
  size: number;
  url: string;
}

export interface IStrapiImage {
  id: number;
  attributes: {
    name: string;
    alternativeText: string;
    formats: {
      thumbnail: StrapiFormat;
      xl: StrapiFormat;
      l: StrapiFormat;
      m: StrapiFormat;
      s: StrapiFormat;
      xs: StrapiFormat;
    };
  };
}

export interface StrapiImageData {
  data: IStrapiImage;
}

export interface StrapiImagesData {
  data: IStrapiImage[];
}

export interface Portfolio {
  id: number;
  attributes: {
    title: string;
    slug: string;
    name: string;
    description: string;
    image: StrapiImageData;
    country: string;
    business_valuation?: string;
    total_downloads?: string;
    timeline: string;
    industries: { data: Category[] };
    sections: unknown[];
    services: unknown[];
    technologies: { data: Technology[] };
    testimonials: { data: Testimonial[] };
    count?: number;
  };
}

export interface Member {
  attributes: {
    availability: "Full-time" | "Part-time" | null;
    body: null | string;
    createdAt: string;
    department:
      | "founders"
      | "development"
      | "design"
      | "qa"
      | "marketing"
      | "sales"
      | "delivery";
    experience: number;
    expert_in: string[] | null;
    first_name: string;
    html_: null | string;
    image: StrapiImageData;
    is_author: null | boolean;
    join_date: null | string;
    last_name: string;
    meta_created_at: string;
    meta_updated_at: string;
    position: string;
    publishedAt: string;
    show_on_team_page: null | boolean;
    slug: null | string;
    updatedAt: string;
    worked_with: string[] | null;
  };
  id: number;
}
export enum Theme {
  light = "light",
  dark = "dark",
}

export interface PortfolioData {
  data: Portfolio[];
}

export interface TechnologyData {
  data: Technology[];
}

export interface CategoryData {
  data: Category[];
}
export interface Technology {
  id: number;
  attributes: {
    title: string;
    icon: StrapiImageData;
    category?: string;
    subcategory?: string;
    slug: string;
    portfolios?: PortfolioData;
    case_studies_description: string;
  };
}

export interface Category {
  id: number;
  attributes: {
    title: string;
    slug: string;
    portfolios?: PortfolioData;
    case_studies_description: string;
    blog_page_filter_priority: number;
    case_page_filter_priority?: number;
  };
}

export interface Testimonial {
  id: number;
  attributes: {
    full_name: string;
    position: string;
    image: StrapiImageData;
    text: string;
    link: string;
    review: string;
    review_stars: number;
    portfolio: Portfolio;
  };
}

export interface Article {
  id: number;
  attributes: {
    title: string;
    slug: string;
    meta_description: string;
    image: StrapiImageData;
    body: string;
    author: string;
    categories: { data?: Category[] };
    html_: string;
    toc_: string;
    meta_title: string;
    meta_created_at: string;
    meta_updated_at: string;
  };
}

export interface Author {
  id: number;
  attributes: {
    first_name: string;
    last_name: string;
    position: string;
    image: StrapiImageData;
    department: string;
  };
}
