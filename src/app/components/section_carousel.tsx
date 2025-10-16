"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

interface Card {
  id: string;
  title: string;
  description?: string;
  imageUrl: string;
  altText?: string;
  detailLink: string;

}

interface SectionCarouselProps {
  cards: Card[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  slidesToShow?: {
    mobile?: number;
    tablet?: number;
    desktop?: number;
  };
  showArrows?: boolean;
  showDots?: boolean
}

const SectionCarousel: React.FC<SectionCarouselProps> = ({
  cards,
  autoPlay = true,
  autoPlayInterval = 4000,
  slidesToShow = { mobile: 1.1, tablet: 2, desktop: 3.3 }, // Slightly more for partial preview
  showArrows = true,
  showDots = true
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(slidesToShow.desktop || 3);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // ✅ Responsive slides
  useEffect(() => {
    const updateSlides = () => {
      if (window.innerWidth < 640) {
        setVisibleSlides(slidesToShow.mobile || 1.1);
      } else if (window.innerWidth < 1024) {
        setVisibleSlides(slidesToShow.tablet || 2.2);
      } else {
        setVisibleSlides(slidesToShow.desktop || 3.3);
      }
    };
    updateSlides();
    setCurrentIndex(0)
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, [slidesToShow]);

  useEffect(() => {
    setIsTouchDevice("ontouchstart" in window);
  }, []);

  // ✅ Infinite loop navigation
  const nextSlide = useCallback(()=>{
    const maxIndex = cards.length - Math.floor(visibleSlides);

    // Move to next slide only if not at the last valid position
    if (currentIndex < maxIndex) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setCurrentIndex(0); // Optional: loop back to start
    }
  },[cards.length, visibleSlides,currentIndex]) 

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    } else {
      setCurrentIndex(cards.length - Math.floor(visibleSlides)); // Optional: loop to last valid start
    }
  };


  // ✅ Auto play
  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, nextSlide]);

  // ✅ Touch swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  };

  // ✅ Dots navigation
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // ✅ Calculate translation
  const getTranslateX = () => `-${currentIndex * (100 / visibleSlides)}%`;

  if (cards.length === 0) return null;


  return (
    <section className="relative w-full overflow-hidden py-8">
      <div
        className="relative overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-700 ease-in-out py-2"
          style={{
            transform: `translateX(${getTranslateX()})`,
          }}
        >
          {cards.map((card) => (
            <div
              key={card.id}
              className="flex-shrink-0 px-2"
              style={{ width: `${100 / visibleSlides}%` }}
            >
              <div className="w-full bg-gray-50 border border-gray-300 rounded-lg overflow-hidden transform transition-all duration-300 relative group">
                {/* Image */}
                <div
                  className="h-48 sm:h-56 bg-cover bg-center"
                  style={{ backgroundImage: `url(${card.imageUrl})` }}
                >
                </div>

                {/* Content */}
                <div className="px-2 py-4 flex flex-col h-35 justify-between">
                  <div>
                    <h3 className=" max-w-lg  text-base md:text-lg font-bold md:font-semibold text-gray-800 mb-1 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-3 ">
                      {card.description}
                    </p>
                  </div>
                  <Link
                    href={card.detailLink}
                    className="text-sm z-10 hover:bg-yellow-400 border-1 border-yellow-400 w-max py-1 px-4 font-semibold shadow-md text-black transition-all duration-300"
                  >See Details</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Arrows (hidden on mobile) */}
      {showArrows && !isTouchDevice && (
        <>
          {/* ⬅️ Previous Button */}
          {currentIndex > 0 && (
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 cursor-pointer border-2 border-gray-400 bg-white/70 hover:bg-white shadow-lg text-gray-600 hover:text-blue-600 p-2 rounded-full transition-all z-10"
              aria-label="Previous"
            >
              <IconChevronLeft/>
            </button>
          )}

          {/* ➡️ Next Button */}
          {currentIndex < cards.length - Math.floor(visibleSlides) && (
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer border-2 border-gray-400 bg-white/70 hover:bg-white  shadow-lg text-gray-600 hover:text-blue-600 p-2 rounded-full transition-all z-10"
              aria-label="Next"
            >
              <IconChevronRight />
            </button>
          )}
        </>
      )}


      {/* ✅ Navigation dots */}
      {showDots && (
        <div className="flex justify-center mt-4 space-x-2">
          {Array.from(
            { length: Math.max(1, cards.length - Math.floor(visibleSlides) + 1) },
            (_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${index === currentIndex
                  ? "bg-blue-600 w-4"
                  : "bg-gray-400 hover:bg-gray-500"
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            )
          )}
        </div>
      )}


    </section>
  );
};

export default SectionCarousel;
