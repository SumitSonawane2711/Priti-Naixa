"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Dialog } from "@headlessui/react";

interface ProductCarouselProps {
  images: string[];
  name: string | undefined;
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({
  images,
  name,
}) => {
  const [activeImage, setActiveImage] = useState(images[0]);
  const [isOpen, setIsOpen] = useState(false);
  const [popupIndex, setPopupIndex] = useState(0);


  const handleClick = (index: number) => {
    setActiveImage(images[index]);
  };

  const openPopup = (index: number) => {
    setPopupIndex(index);
    setIsOpen(true);
  };

  const nextImage = () => {
    setPopupIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setPopupIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div>
      {/* Main Image */}
      <div
        className="rounded-2xl overflow-hidden shadow-lg cursor-pointer relative"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeImage}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.4 }}
            onClick={() => openPopup(images.indexOf(activeImage))}
          >
            <Image
              src={activeImage}
              alt={name || ""}
              width={800}
              height={500}
              className="w-full h-64 sm:h-80 md:h-96 object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-3 mt-3 overflow-x-auto pb-2">
        {images.map((img, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className={`cursor-pointer rounded-xl overflow-hidden border-2 ${
              activeImage === img ? "border-sky-500" : "border-transparent"
            }`}
            onClick={() => handleClick(i)}
          >
            <Image
              src={img}
              alt={`${name}-${i}`}
              width={120}
              height={80}
              className="object-cover w-24 h-16 sm:w-28 sm:h-20"
            />
          </motion.div>
        ))}
      </div>

      {/* Image Popup Modal */}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-white text-xl"
          >
            ✕
          </button>
          <button
            onClick={prevImage}
            className="absolute left-4 text-white text-3xl font-bold"
          >
            ‹
          </button>
          <Image
            src={images[popupIndex]}
            alt="Popup"
            width={900}
            height={600}
            className="object-contain max-h-[80vh] rounded-lg"
          />
          <button
            onClick={nextImage}
            className="absolute right-4 text-white text-3xl font-bold"
          >
            ›
          </button>
        </div>
      </Dialog>
    </div>
  );
};

export default ProductCarousel;
