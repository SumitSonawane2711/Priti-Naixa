"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { Heading } from "./heading";
import { SubHeading } from "./subheading";
import Head from "next/head";

interface Slide {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  imageUrl: string;
  altText?: string;
}

interface CarouselProps {
  slides: Slide[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showDots?: boolean;
}

const Carousel: React.FC<CarouselProps> = ({
  slides,
  autoPlay = true,
  autoPlayInterval = 6000,
  showDots = true,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const numSlides = slides.length;

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % numSlides);
  }, [numSlides]);

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? numSlides - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => nextSlide(), autoPlayInterval);
    return () => clearInterval(timer);
  }, [autoPlay, autoPlayInterval, nextSlide]);

  const slideVariants: Variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 },
      },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
      transition: { duration: 0.3 },
    }),
  };

  const textMotion: Variants = {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
    exit: { opacity: 0, y: -30, transition: { duration: 0.4 } },
  };

  const currentSlide = slides[currentIndex];

  return (

    <>
      <Head>
        {slides.map((slide, index) => (
          <link
            key={index}
            rel="preload"
            as="image"
            href={slide.imageUrl}
            fetchPriority="high"
          />
        ))}
      </Head>

      <div className="relative w-full h-[80vh] md:h-[90vh] max-w-screen overflow-hidden bg-gray-900 border-b-2 border-gray-500">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 flex flex-col-reverse md:flex-row"
            style={{
              backgroundImage: `url(${currentSlide.imageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            {/* LEFT SIDE CONTENT BOX */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                variants={textMotion}
                animate="animate"
                exit="exit"
                className="bg-gray-900 md:bg-gray-900/90 p-6  shadow-lg h-max md:m-10 self-end"
              >
                <Heading  className=" md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-white">
                  {currentSlide.title}
                </Heading>
                <SubHeading className="text-sm md:text-xl lg:text-xl mb-4 md:mb-8 font-light text-gray-200 leading-relaxed">
                  {currentSlide.description}
                </SubHeading>
                <a
                  href={currentSlide.buttonLink}
                  className="inline-flex items-center justify-center bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold text-sm md:text-lg py-2 px-4 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-[1.03] active:scale-95"
                >
                  {currentSlide.buttonText}
                </a>
              </motion.div>
            </AnimatePresence>

            {/* RIGHT SIDE IMAGE */}
            <div
              className="md:hidden w-full md:w-1/2 h-[50vh] md:h-full bg-center bg-cover relative"
              style={{ backgroundImage: `url(${currentSlide.imageUrl})` }}
              aria-label={currentSlide.altText || currentSlide.title}
            >
              <div className="" />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 bg-gray-800/60 hover:bg-gray-700/80 text-white p-4 rounded-full z-20 transition hidden md:block"
          aria-label="Previous Slide"
        >
          <IconArrowLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 bg-gray-800/60 hover:bg-gray-700/80 text-white p-4 rounded-full z-20 transition hidden md:block"
          aria-label="Next Slide"
        >
          <IconArrowRight size={24} />
        </button>

        {/* Dots Navigation */}
        {showDots && (
          <div className="absolute top-6 left-1/2 -translate-x-1/2 flex space-x-3 z-20 p-2 bg-black/30 rounded-full">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={`w-3 h-3 rounded-full border-2 border-white transition-all duration-300 ${i === currentIndex
                  ? "bg-yellow-400 w-4 h-4 shadow-md"
                  : "bg-gray-500 hover:bg-white/50"
                  }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Carousel;
