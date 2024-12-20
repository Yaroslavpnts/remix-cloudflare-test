import CTABanner from "./components/sections/CTABanner/CTABanner";
import CardsSection from "./components/sections/CardsSection/CardsSection";
import Hero from "./components/sections/Hero/Hero";
import ModelsOfCooperation from "./components/sections/ModelsOfCooperation/ModelsOfCooperation";
import WhatWeDevelop from "./components/sections/WhatWeDevelop/WhatWeDevelop";
import BackendApproach from "./components/sections/BackendApproach";
import ProcessSteps from "./components/sections/ProcessSteps";
import Faq from "./components/sections/Faq";
import Contact from "./components/sections/Contact/Contact";
import ProcessSection from "./components/sections/ProcessSection/ProcessSection_";
import WorkFlowSection from "./components/sections/WorkFlowSections/WorkFlowSections";
import InfoProfessionSection from "./components/sections/InfoProfessionSection/InfoProfessionSection";
import TextSection from "./components/portfolio/TextSection";
import Features from "./components/portfolio/Features";
import RecentArticles from "./components/sections/RecentArticles/RecentArticles";
import OurTeam from "./components/OurTeam/OurTeam";
import SectionWithList from "./components/sections/SectionWithList/SectionWithList";
import Footer from "./components/sections/Footer/Footer";
import TextAndImageSlider from "./components/TextAndImageSlider";
import ClientTestimonials from "./components/sections/ClientTestimonials";
import PortfolioFeaturedCases from "./components/PortfolioFeaturedCases/PortfolioFeaturedCases";
import ProcessPoints from "./components/sections/ProcessPoints/ProcessPoints";
import ReasonsSections from "./components/sections/ReasonsSection/ReasonsSection";
import CompanyStatistic from "./components/sections/CompanyStatistic/CompanyStatictic";
import CompanyLocation from "./components/sections/CompanyLocation/CompanyLocation";
import CompanyHistory from "./components/sections/CompanyHistory/CompanyHistory";
import Why from "./components/sections/Why/Why";
import Industries from "./components/sections/Industries/Industries";
import ContactFormFullPage from "./components/sections/ContactFormFullPage/ContactFormFullPage";
import BaseCardSection from "./components/sections/BaseCardSection/BaseCardSection";
import Header from "./components/Header";
import DiscoveryTeam from "./components/sections/DiscoveryTeam/DiscoveryTeam";
import AboutCompany from "./components/sections/AboutCompany/AboutCompany";
import DiscoveryBenefits from "./components/sections/DiscoveryBenefits/DiscoveryBenefits";
import TechExcellenceShowcase from "./components/sections/TechnicalExcellenceShowcase/TechnicalExcellenceShowcase";
import ScrollingSectionDynamicMenu from "./components/sections/ScrollingSectionDynamicMenu/ScrollingSectionDynamicMenu";
import UiUxTabs from "./components/UiUxTabs/UiUxTabs";
import HeadingWithList from "./components/sections/HeadingWithList/HeadingWithList";
import Cost from "./components/sections/Cost/Cost";
import CasePreviewSection from "./components/sections/CasePreviewSection/CasePreviewSection";
import ConsultationSteps from "./components/sections/ConsultationsSteps/ConsultationSteps";
import DesignOutcome from "./components/sections/DesignOutcome/DesignOutcome";
import OurApproach from "./components/sections/OurApproach/OurApproach";
import { StickyLayout } from "./components/sections/StickyLayout/StickyLayout";
import MobileTechnology from "./components/sections/MobileTechnology/MobileTechnology";
import TabsAccordion from "./components/sections/TabsAccordion/TabsAccordion";
import { SeoText } from "./components/sections/SeoText/SeoText";
import BenefitBanner from "./components/sections/BenefitBanner/BenefitBanner";
import WebDevelopmentManifesto from "./components/sections/WebDevelopmentManifesto/WebDevelopmentManifesto";
import TextTwoColumns from "./components/sections/TextTwoColumns/TextTwoColumns";
import Hero404 from "./components/Hero404/Hero404";
import OurAuthors from "./components/sections/AuthorsSection/AuthorsSection";
import CommonTextSection from "./components/sections/CommonTextSection";
import PortfolioSection from "./components/sections/PortfolioSection/PortfolioSection";
import TechnologiesAndTools from "./components/sections/TechnologiesAndTools/TechnoliesAndTools";
import OtherCaseStudiesSection from "./components/sections/OtherCaseStudiesSection/OtherCaseStudiesSection";
import GallerySection from "./components/sections/Gallery/GallerySection";
import CandidatesSection from "./components/sections/CandidatesSection/CandidatesSection";
import Solutions from "./components/portfolio/Solutions";
import CaseTechnolgies from "./components/sections/CasePreviewSection/CaseTechnologies";
import Mention from "./components/sections/Mention/Mention";
import CaseTitle from "./components/sections/CaseTitle/CaseTitle";
import ScopeOfWork from "./components/sections/ScopeOfWork/ScopeOfWork";
import ProjectTeam from "./components/OurTeam/ProjectTeam";
import OurSolutions from "./components/sections/OurSolutions/OurSolutions";
import SimilarCases from "./components/sections/SimilarCases/SimilarCases";
import ProjectTechnologies from "./components/sections/ProjectTechnologies/ProjectTechnologies";
import BreadCrumbs from "./components/BreadCrumbs/BreadCrumbs";
import CTAWithLogo from "./components/sections/CTAWithLogo/CTAWithLogo";

export const strapiComponentsRegistry = {
  "page.portfolio-section": PortfolioSection,
  "page.about-company": AboutCompany,
  "page.backend-approach": BackendApproach,
  "page.benefit-baner": BenefitBanner, // not found
  "page.blog-preview-section": RecentArticles,
  "page.candidate-section": CandidatesSection,
  "page.cards": CardsSection,
  "page.case-preview-section": CasePreviewSection,
  "page.common-text-section": CommonTextSection,
  "page.company-history": CompanyHistory,
  "page.company-location": CompanyLocation,
  "page.company-statistic": CompanyStatistic,
  "page.consultation-steps": ConsultationSteps,
  "page.contact": Contact,
  "page.cost": Cost,
  "page.cta-banner": CTABanner,
  "page.design-outcome": DesignOutcome,
  "page.discovery-benefits": DiscoveryBenefits,
  "page.discovery-team": DiscoveryTeam,
  "page.faq": Faq,
  "page.footer-wrapper": Footer,
  "page.gallery": GallerySection,
  "page.header": Header,
  "page.heading-with-list": HeadingWithList,
  "page.hero": Hero,
  "page.hero404": Hero404,
  "page.industry": Industries,
  "page.info-profesion-section": InfoProfessionSection,
  "page.mobile-technologys": MobileTechnology,
  "page.models-of-cooperation": ModelsOfCooperation,
  "page.other-case-studies-section": OtherCaseStudiesSection,
  "page.our-approach": OurApproach,
  "page.our-authors": OurAuthors,
  "page.our-team": OurTeam,
  "page.pop-up-form": ContactFormFullPage,
  "page.portfolio-featured-cases": PortfolioFeaturedCases,
  "page.process-points-section": ProcessPoints,
  "page.process-section": ProcessSection,
  "page.process-steps": ProcessSteps,
  "page.reasons-section": ReasonsSections, // not found
  "page.scrolling-section-dynamic-menu": ScrollingSectionDynamicMenu,
  "page.section-with-list": SectionWithList,
  "page.seo-text": SeoText,
  "page.sticky-layout": StickyLayout,
  "page.tabs-accordion": TabsAccordion,
  // "page.tech-stack-devs-team": TechStackDevsTeam, // not found
  "page.technical-excellence-showcase": TechExcellenceShowcase,
  "page.technologies-and-tools": TechnologiesAndTools,
  // "page.technology-section": TechStack,
  "page.testimonials": ClientTestimonials,
  "page.text-and-image-slider": TextAndImageSlider,
  "page.text-section": TextSection,
  "page.text-two-column": TextTwoColumns,
  "page.ui-ux-tabs": UiUxTabs,
  "page.web-development-manifesto": WebDevelopmentManifesto,
  "page.web-technologies": BaseCardSection,
  "page.what-we-develop": WhatWeDevelop,
  "page.why": Why,
  "page.work-flow-section": WorkFlowSection, // not found
  "portfolio.case-technolgies": CaseTechnolgies,
  "portfolio.solutions": Solutions, // not found
  "portfolio.features": Features, // not found
  "portfolio.text-section": TextSection, // not found
  "portfolio.case-title": CaseTitle,
  "portfolio.scope-of-work": ScopeOfWork,
  "portfolio.mention": Mention,
  "portfolio.project-team": ProjectTeam,
  "portfolio.our-solutions": OurSolutions,
  "portfolio.similar-cases": SimilarCases,
  "portfolio.project-technologies": ProjectTechnologies,
  "page.breadcrumbs": BreadCrumbs,
  "page.cta-with-logo": CTAWithLogo,
};

// function getParamNames(func) {
//   // Convert function to string and normalize (remove comments, spaces, etc.)
//   const funcString = func.toString().replace(/\/\*.*?\*\//g, '').replace(/\/\/.*$/gm, '').trim();

//   // Match for traditional function parameters, arrow function parameters, including destructured parameters
//   let result = funcString.match(/(?:function.*?\(([^)]*)\))|(?:\(([^)]*)\)\s*=>)|(?:([^\s(]+)\s*=>)/);
//   if (!result) return [];

//   // Extract the parameter part from the match
//   const params = result[1] || result[2] || result[3];
//   if (!params) return [];

//   // Handling destructured parameters by checking for '{' which indicates an object
//   if (params.indexOf('{') !== -1 || params.indexOf('[') !== -1) {
//     // Attempt to directly return a string representation for destructured objects/arrays
//     return [params];
//   } else {
//     // Split parameters by comma for non-destructured cases
//     return params.split(',').map(param => param.trim()).filter(param => param !== '');
//   }
// }

// const res = []

// Object.keys(strapiComponentsRegistry).forEach((key) => {
//   const component = strapiComponentsRegistry[key];
//   res.push({key, params: getParamNames(component) })
// })

// console.log(JSON.stringify(res, null, 2))
