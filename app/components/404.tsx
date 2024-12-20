import Hero404 from "./Hero404/Hero404";
import Header from "./Header";
import ContactFormFullPage from "./sections/ContactFormFullPage/ContactFormFullPage";

const Page = () => (
  <div>
    <Header navigationSections={[]} />
    <Hero404 />
    <ContactFormFullPage theme={"dark"} />
  </div>
);

export default Page;
