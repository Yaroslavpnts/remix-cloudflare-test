import type { FC } from "react";
import React, { createRef, useRef, useState, useEffect } from "react";

let scrolling = false;

type THeadings = {
  title: string;
};

type TContent = {
  title: string;
  text: string;
  content_html: string;
};

type TProps = {
  headings: THeadings[];
  content: TContent[];
  section_navigation_name: string;
  dataSectionName: string;
};

const ScrollingSectionDynamicMenu: FC<TProps> = ({
  headings,
  content,
  section_navigation_name,
  dataSectionName,
}) => {
  const scrollRefs = useRef<any>([]);
  const navRefs = useRef<any>([]);

  const [active, setActive] = useState(0);

  scrollRefs.current = [...Array(headings.length).keys()].map(
    (_, i) => scrollRefs.current[i] ?? createRef()
  );

  navRefs.current = [...Array(headings.length).keys()].map(
    (_, i) => navRefs.current[i] ?? createRef()
  );

  const scrollTo = (idx: number) => {
    scrolling = true;
    scrollRefs.current[idx].current.scrollIntoView({ behavior: "smooth" });
    setActive(idx);
    setTimeout(() => {
      scrolling = false;
    }, 1000);
  };

  const scrollHandler = () => {
    if (scrolling === true) return;

    const scrollRefsElements = scrollRefs.current;

    scrollRefsElements.forEach((el: any, i: number) => {
      if (!el.current) {
        return;
      }
      const rect = el.current.getBoundingClientRect();
      const elemTop = rect.top;
      const elemBottom = rect.bottom;
      const isVisible =
        elemTop < window.innerHeight / 2 && elemBottom > window.innerHeight / 2;

      if (isVisible) {
        setActive(i);
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler, true);
    return () => {
      window.removeEventListener("scroll", scrollHandler, true);
    };
  }, []);
  return (
    <section
      className="bg-yw-gray-100 py-28 items-start"
      data-sectionid={section_navigation_name}
      data-section-name={dataSectionName}
    >
      <div className="container !grid grid-cols-12 sm:gap-10 items-start">
        <div className="col-span-6 md:grid grid-cols-6 gap-y-6 break-normal sticky top-[40px] lg:top-[160px] hidden">
          <p className="yw-t3 uppercase text-[#313339] col-span-4">Contents</p>
          <div id="cloud-menu" className="col-span-12 md:grid gap-y-6">
            {headings.map((menuItem, idx: number) => (
              <div
                className="text-yw-gray-400 yw-t1 cloud-benefits cursor-pointer nav-item"
                key={idx}
                ref={navRefs.current[idx]}
                onClick={(e) => {
                  scrollTo(idx);
                }}
              >
                <span
                  className={`nav-link ${
                    active === idx
                      ? "border-l-2 border-sky-500 pl-3 text-yw-primary-default"
                      : ""
                  }`}
                >
                  {menuItem.title}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 grid grid-cols-6 gap-y-8 cloud-section">
          {content.map((item, idx: number) => (
            <div
              key={idx}
              id={`s-${idx}`}
              ref={scrollRefs.current[idx]}
              className="col-span-8"
            >
              <h3 className="yw-h3 mb-4">{item.title}</h3>
              {item.text && (
                <p className="yw-t1">{item.text}</p>
              )}
              {item.content_html && (
                <p className="yw-t1" dangerouslySetInnerHTML={{__html: item.content_html}}></p>
              )} 
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScrollingSectionDynamicMenu;
