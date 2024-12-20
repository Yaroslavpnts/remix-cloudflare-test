import React, { FC, useEffect, useRef, useState } from "react";
import cn from "classnames";
import arrowLeft from "~/icons/arrow-left.svg";
import arrowRight from "~/icons/arrow-right.svg";
import { Theme } from "~/types";

type TSliderProps = {
  title: string;
  items: React.ReactNode[];
  className?: string;
  theme: Theme;
};

const themes: any = {
  dark: {
    titleColor: "text-white",
    sectionBg: "bg-yw-primary-default",
  },
  light: {
    titleColor: "text-black",
    sectionBg: "bg-yw-gray-100",
  },
};

const minSwipeDistance = 20;

const Slider: FC<TSliderProps> = ({ title, items, className, theme }) => {
  const [currentIndex, setCurrentIndex] = useState(1); // Start at 1 because of cloned slides
  const [isAnimating, setIsAnimating] = useState(false);
  const containerXRef = useRef<HTMLDivElement>(null);

  const touchStartXRef = useRef(0);
  const touchEndXRef = useRef(0);

  const themeData = themes[theme || Theme.light];

  const itemsWithClones = [
    items[items.length - 1], // Clone of the last item at the start
    ...items,
    items[0], // Clone of the first item at the end
  ];

  const handleTransitionEnd = () => {
    setIsAnimating(false);

    if (currentIndex === 0) {
      // Jump to the actual last item without animation
      setCurrentIndex(items.length);
    } else if (currentIndex === items.length + 1) {
      // Jump to the actual first item without animation
      setCurrentIndex(1);
    }
  };

  const handleSwipe = (direction: number) => {
    if (isAnimating) return; // Prevent spamming

    setIsAnimating(true);
    setCurrentIndex((prevIndex) => prevIndex + direction);
  };

  useEffect(() => {
    containerXRef.current?.addEventListener(
      "transitionend",
      handleTransitionEnd
    );

    return () => {
      containerXRef.current?.removeEventListener(
        "transitionend",
        handleTransitionEnd
      );
    };
  }, [currentIndex]);

  // Handle the start of touch or mouse event
  const handleStart = (clientX: number) => {
    touchStartXRef.current = clientX;
  };

  // Handle the movement of touch or mouse event
  const handleMove = (clientX: number) => {
    touchEndXRef.current = clientX;
  };

  const handleTouchStart = (e: React.TouchEvent) =>
    handleStart(e.changedTouches[0].clientX);

  const handleTouchMove = (e: React.TouchEvent) =>
    handleMove(e.changedTouches[0].clientX);

  const handleMouseDown = (e: React.MouseEvent) => handleStart(e.clientX);

  const handleMouseMove = (e: React.MouseEvent) => handleMove(e.clientX);

  const handleMoveEnd = () => {
    const delta = touchStartXRef.current - touchEndXRef.current;

    if (delta > minSwipeDistance) {
      handleSwipe(1);
    } else if (delta < -minSwipeDistance) {
      handleSwipe(-1);
    }
  };

  const handleClick = (currentIndex: number, nextIndex: number) => {
    const delta = nextIndex - currentIndex;

    if (delta) {
      handleSwipe(delta);
    }
  };

  return (
    <section
      className={cn(
        "bg-yw-primary-default relative",
        themeData.sectionBg,
        className
      )}
    >
      <div
        className="container pb-5"
        ref={containerXRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleMoveEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMoveEnd}
      >
        {title && (
          <h2 className={cn("yw-h2 mb-10", themeData.titleColor)}>{title}</h2>
        )}
        <div className="flex overflow-x-hidden">
          <div
            className={cn(
              "flex",
              isAnimating
                ? "transition-transform duration-500 ease-in-out"
                : "transition-none"
            )}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {itemsWithClones.map((item, index) => (
              <div
                className="min-w-full"
                key={`carousel-item-${item?.toString()}-${index}`}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="hidden sm:flex flex-wrap items-center justify-center absolute left-1/2 bottom-20 md:bottom-24 -translate-x-1/2 gap-3 w-full container">
          <div
            className="p-5 border-[1px] border-white h-[54px] w-[54px] rounded-full mr-5 cursor-pointer flex items-center justify-center"
            onClick={() => handleClick(currentIndex, currentIndex - 1)}
          >
            <img
              className="w-[14px] h-[14px] max-w-none"
              src={arrowLeft}
              alt="slider previous button"
              loading="lazy"
            />
          </div>
          <div className="flex gap-3">
            {items.map((_, i) => (
              <span
                key={`slider-bullet-${i}`}
                className={cn(
                  "h-[18px] w-[18px] rounded-full cursor-pointer",
                  currentIndex === i + 1 ? "bg-yw-gray-300" : "bg-yw-gray-500"
                )}
                onClick={() => handleClick(currentIndex, i + 1)}
              ></span>
            ))}
          </div>
          <div
            className="p-5 border-[1px] border-white h-[54px] w-[54px] rounded-full ml-5 cursor-pointer flex items-center justify-center"
            onClick={() => handleClick(currentIndex, currentIndex + 1)}
          >
            <img
              className="w-[14px] h-[14px] max-w-none"
              src={arrowRight}
              alt="slider next button"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
