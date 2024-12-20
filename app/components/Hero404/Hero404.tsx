import Button from "../Button";
import { useNavigate } from "@remix-run/react";

const Hero404 = () => {
  const navigate = useNavigate();

  return (
    <section className={"bg-white pb-12 bgg pt-48"}>
      <div className="container grid grid-cols-12 sm:gap-10">
        <div className="col-span-12 sm:col-span-8">
          <h1 className="yw-h1 mb-6">404 - Page Not Found</h1>
          <div className="yw-t1 yw-gray-500 mb-12">
            Oops! It seems like you’ve taken a wrong turn. The page you’re
            looking for might be on a coffee break. Don’t worry! We’ll help you
            get back on track.
          </div>
          <Button
            onClick={() => {
              navigate("/");
            }}
            id="index-hero-consultation"
            className="btn group rounded-full yw-button-large btn-cta flex items-center justify-center whitespace-nowrap font-montserrat py-5 px-10 text-lg leading-none"
          >
            Visit our Homepage
          </Button>

        </div>
      </div>
    </section>
  );
};

export default Hero404;
