import { useEffect, useRef, useState } from "react";
import TagChevronIcon from "~/icons/tag-chevron.svg";

const CategoriesMenu = ({ categories, activeCategory }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const showControls = categories.length > 4; // TODO - make this dynamic

  const blogTagsScrollRef = useRef(null);
  const leftArrowsRef = useRef([]);
  const rightArrowsRef = useRef([]);

  useEffect(() => {
    blogTagsScrollRef.current.scrollLeft = scrollPosition;
  }, [scrollPosition]);

  useEffect(() => {
    const blogTagsScroll = blogTagsScrollRef.current as any;

    let timerId = null;
    const handleScroll = () => {
      if (timerId) {
        clearTimeout(timerId);
      }
      timerId = setTimeout(() => {
        setScrollPosition(blogTagsScroll.scrollLeft);
      }, 100);
    };

    if (blogTagsScroll) {
      blogTagsScroll.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (blogTagsScroll) {
        blogTagsScroll.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const handleLeftArrow = () => {
    if (blogTagsScrollRef.current) {
      setScrollPosition((lastPosition) => Math.max(lastPosition - 200, 0));
    }
  };

  const handleRightArrow = () => {
    if (blogTagsScrollRef.current) {
      setScrollPosition((lastPosition) => {
        const newScrollPosition = Math.min(
          lastPosition + 200,
          blogTagsScrollRef.current.scrollWidth -
            blogTagsScrollRef.current.clientWidth
        );

        return newScrollPosition;
      });
    }
  };

  return (
    <div className="relative col-span-11">
      <div className="cover">
        {showControls && (
          <button
            className="left z-1"
            id="scroll-left"
            onClick={handleLeftArrow}
            ref={(el) => leftArrowsRef.current.push(el)}
          >
            <img
              loading="lazy"
              src={TagChevronIcon}
              alt="chevron"
              width="16px"
              height="16px"
            />
          </button>
        )}
        <div className="scroll-images" ref={blogTagsScrollRef}>
          {showControls && (
            <div
              className={`h-full w-8 bg-gradient-to-r from-yw-gray-100 to-transparent absolute left-7 top-0`}
            ></div>
          )}

          <ul className="flex w-full gap-6">
            <li>
              <a href="/blog">
                <div
                  className={`bg-yw-gray-200 ltr:mr-2 rtl:ml-2 rounded-2xl yw-t2 py-[6px] px-3 cursor-pointer whitespace-nowrap ${
                    !activeCategory ? "active-tag" : ""
                  }`}
                >
                  All posts
                </div>
              </a>
            </li>
            {categories
              .filter((category) => {
                return category.attributes.articles.data.attributes.count > 0;
              })
              .map((category) => {
                const activeClass =
                  category.attributes.slug === activeCategory
                    ? "active-tag"
                    : "";

                return (
                  <li key={category.id}>
                    <a href={`/blog/category/${category.attributes.slug}`}>
                      <div
                        className={`bg-yw-gray-200 ltr:mr-2 rtl:ml-2 rounded-2xl yw-t2 py-[6px] px-3 cursor-pointer whitespace-nowrap ${activeClass}`}
                      >
                        {category.attributes.title} (
                        {category.attributes.articles.data.attributes.count})
                      </div>
                    </a>
                  </li>
                );
              })}
          </ul>

          {showControls && (
            <div
              className={`h-full w-8 bg-gradient-to-l from-yw-gray-100 to-transparent absolute right-7 top-0`}
            ></div>
          )}
        </div>

        {showControls && (
          <button
            className="right"
            id="scroll-right"
            onClick={handleRightArrow}
            ref={(el) => rightArrowsRef.current.push(el)}
          >
            <img
              src={TagChevronIcon}
              alt="chevron"
              className="rotate-180 z-10"
              loading="lazy"
              width="16px"
              height="16px"
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default CategoriesMenu;
