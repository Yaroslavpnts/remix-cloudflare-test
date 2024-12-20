import type { FC } from "react";
import { useEffect, useState } from "react";

export type TSectionItem = {
  text: string;
};

type TProps = {
  items: TSectionItem[];
};

const Navigation: FC<TProps> = ({ items }) => {
  const [activeId, setActiveId] = useState<string>(items[0]?.text);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("[data-sectionid]");

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight * 0.8) {
          setActiveId(section.getAttribute("data-sectionid") || "");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (text: string) => {
    setActiveId(text);

    const section = document.querySelector(`[data-sectionid="${text}"]`);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      id="navigation"
      className="transition-top duration-300 ease-out px-4 mx-auto hidden lg:block fixed w-full z-10 top-20 drop-shadow-header bg-white"
    >
      <ul className="flex justify-between items-stretch">
        {items.map((item: { text: string }, index: number) => (
          <li
            key={"nav_item_" + index}
            onClick={() => handleClick(item?.text)}
            className={`text-yw-gray-400 hover:text-yw-gray-500 w-full yw-t2 p-4 border-b-4 border-transparent text-center hover:border-yw-cta-default cursor-pointer flex items-center justify-center ${
              activeId === item.text ? "nav-active" : ""
            }`}
          >
            {item?.text}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
