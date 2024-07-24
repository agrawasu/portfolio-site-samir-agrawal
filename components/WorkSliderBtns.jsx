import React, { useState, useEffect } from "react";
import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import { BsX } from "react-icons/bs";

const WorkSliderBtns = ({
  containerStyles,
  prevBtnStyles,
  nextBtnStyles,
  iconsStyles,
}) => {
  const swiper = useSwiper();
  const [isFirstSlide, setIsFirstSlide] = useState(true);
  const [isLastSlide, setIsLastSlide] = useState(false);
  const [hoveredPrev, setHoveredPrev] = useState(false);
  const [hoveredNext, setHoveredNext] = useState(false);

  useEffect(() => {
    if (swiper) {
      const handleSlideChange = () => {
        if (swiper.slides && swiper.slides.length) {
          setIsFirstSlide(swiper.activeIndex === 0);
          setIsLastSlide(swiper.activeIndex === swiper.slides.length - 1);
        }
      };

      handleSlideChange(); // Initial check
      swiper.on("slideChange", handleSlideChange);

      return () => {
        swiper.off("slideChange", handleSlideChange);
      };
    }
  }, [swiper]);

  useEffect(() => {}, [isFirstSlide, isLastSlide, hoveredPrev, hoveredNext]);

  return (
    <div className={containerStyles}>
      <button
        className={`bg-none border-2 border-accent text-accent hover:bg-accent hover:text-white text-[22px] w-[44px] h-[44px] flex justify-center items-center rounded-[15px] mx-5 transition-all duration-500 ${
          isFirstSlide
            ? "opacity-50 border-secondary text-secondary hover:bg-secondary hover:text-white/60 xl:border-secondary xl:text-secondary xl:hover:bg-secondary xl:hover:text-white/60 cursor-not-allowed hover:text-3xl duration-100 ease-in-out"
            : ""
        }`}
        onClick={() => !isFirstSlide && swiper.slidePrev()}
        onMouseEnter={() => setHoveredPrev(true)}
        onMouseLeave={() => setHoveredPrev(false)}
      >
        {isFirstSlide && hoveredPrev ? (
          <BsX className={iconsStyles} />
        ) : (
          <PiCaretLeftBold className={iconsStyles} />
        )}
      </button>
      <button
        className={`bg-none border-2 border-accent text-accent hover:bg-accent hover:text-white text-[22px] w-[44px] h-[44px] flex justify-center items-center rounded-[15px] mx-5 transition-all duration-500 ${
          isLastSlide
            ? "opacity-50 border-secondary text-secondary hover:bg-secondary hover:text-white/60 xl:border-secondary xl:text-secondary xl:hover:bg-secondary xl:hover:text-white/60 cursor-not-allowed hover:text-3xl duration-100 ease-in-out"
            : ""
        }`}
        onClick={() => !isLastSlide && swiper.slideNext()}
        onMouseEnter={() => setHoveredNext(true)}
        onMouseLeave={() => setHoveredNext(false)}
      >
        {isLastSlide && hoveredNext ? (
          <BsX className={iconsStyles} />
        ) : (
          <PiCaretRightBold className={iconsStyles} />
        )}
      </button>
    </div>
  );
};

export default WorkSliderBtns;
