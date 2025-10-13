"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { cars as carsNew } from "@/app/data/new_cars";
import { Separator } from "@/app/components/ui/separator";
import { Badge } from "@/app/components/ui/badge";
import { Dialog } from "@headlessui/react"; // for popup modal
import BookingModal from "@/app/components/BookingModal";
import SectionCarousel from "@/app/components/section_carousel";
import { SectionHeading } from "@/app/components/section-heading";
import { SubHeading } from "@/app/components/subheading";


export async function generateStaticParams() {
  const cars = [
    { id: "maruti-wagonr-tourh3" },
    { id: "maruti-wagonr-lxi" },
    { id: "maruti-wagonr-vxi" },
    { id: "maruti-ertiga-tourm" },
    { id: "maruti-ertiga-vxi" },
    { id: "maruti-ertiga-zxi" },
    { id: "maruti-dzire-tours" },
    { id: "hyundai-aura-e" },
    { id: "hyundai-aura-s" },
    { id: "hyundai-aura-sx" }
  ];

  return cars.map((car) => ({ id: car.id }));
}

const CarDetailPage = ({params} : {params: {id:string}}) => {
  const { id } = params;
  const car = carsNew.find((car) => car.id === id);
  const [activeImage, setActiveImage] = useState(car?.images?.[0]);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [popupIndex, setPopupIndex] = useState(0);

  const selectedCars = carsNew
    .filter((c) => c.id !== car?.id)
    .map((car) => ({
      id: car.id,
      title: car.name,
      description: car.model,
      imageUrl: car.images[0],
      altText: `${car.name} ${car.model}`,
      detailLink: `/new_cars/${car.id}`,
    }));

  if (!car) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        Car details not found.
      </div>
    );
  }

  const openPopup = (index: number) => {
    setPopupIndex(index);
    setIsOpen(true);
  };

  const nextImage = () => {
    setPopupIndex((prev) => (prev + 1) % car.images.length);
  };

  const prevImage = () => {
    setPopupIndex((prev) => (prev - 1 + car.images.length) % car.images.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
    >
      {/* Hero Section */}
      <section className="grid md:grid-cols-2 gap-8">
        {/* Image Carousel */}
        <div>
          <div
            className="rounded-2xl overflow-hidden shadow-lg cursor-pointer relative"
            onClick={() => openPopup(car.images.indexOf(activeImage!))}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeImage}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4 }}
              >
                <Image
                  src={activeImage || ""}
                  alt={car.name}
                  width={800}
                  height={500}
                  className="w-full h-64 sm:h-80 md:h-96 object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Thumbnails */}
          <div className="flex gap-3 mt-3 overflow-x-auto pb-2">
            {car.images.map((img, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className={`cursor-pointer rounded-xl overflow-hidden border-2 ${activeImage === img ? "border-sky-500" : "border-transparent"
                  }`}
                onClick={() => setActiveImage(img)}
              >
                <Image
                  src={img}
                  alt={`${car.name}-${i}`}
                  width={120}
                  height={80}
                  className="object-cover w-24 h-16 sm:w-28 sm:h-20"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Car Info */}
        <div>
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2 text-gray-900"
          >
            {car.name} {car.model} ({car.variant})

          </motion.h1>

          <div className="flex align-middle gap-3 mb-4  items-center">
            <Badge className="bg-accent shadow-md text-yellow-800 px-3 py-1 text-sm">
              T Permit Vehicle
            </Badge>
            <p className="text-gray-600 mb-3 text-sm sm:text-base">
              Model Year: {car.year}
            </p>
          </div>
          <p className="text-gray-600 mb-3 text-sm sm:text-base">
            {car.description}
          </p>
          <Separator className="my-5" />

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm sm:text-base">
            <p>
              <strong>Fuel Type:</strong> {car.fuelType}
            </p>
            <p>
              <strong>Body Type:</strong> {car.bodyType}
            </p>
            <p>
              <strong>Seats:</strong> {car.seats}
            </p>
            <p>
              <strong>Transmission:</strong> {car.transmission}
            </p>
            <p>
              <strong>Color:</strong> {car.color}
            </p>
            <p>
              <strong>Budget:</strong> {car.budget}
            </p>
          </div>

          <Separator className="my-6" />
          {/* Book Now Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsBookingOpen(true)}
            className=" w-full sm:w-auto bg-sky-600 text-white px-8 border-1 border-accent cursor-pointer py-2 rounded-lg font-medium hover:bg-sky-700 transition"
          >
            Book Now
          </motion.button>

          <BookingModal
            isOpen={isBookingOpen}
            onClose={() => setIsBookingOpen(false)}
            car={{ brand: car.name, model: car?.model || "", variant: car.variant, year: car.year, fuelType: car.fuelType }}
          />

        </div>
      </section>

      {/* Key Features */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="w-full mt-6 p-10  border bg-white border-gray-200 rounded-xl pending-4 shadow-lg"
      >
        <h2 className="text-2xl font-semibold mb-5 text-gray-900">
          Key Features
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {Object.entries(car.keyFeatures).map(([key, value], i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="p-3 bg-gray-50 rounded-xl border border-gray-100 shadow-sm"
            >
              <p className="font-semibold text-sky-700">{key}</p>
              <p className="text-gray-700 text-sm sm:text-base">{value}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Services Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-12"
      >
        <SectionHeading>
          Pre & Post Purchase Services
        </SectionHeading>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "RTO Registration & Permit Assistance",
              desc: "Complete RTO registration, T Permit processing, and number plate support.",
            },
            {
              title: "Car Insurance",
              desc: "Comprehensive or third-party insurance with easy renewal options.",
            },
            {
              title: "Loan & Finance Help",
              desc: "Assistance with EMI options and car loans from trusted financial partners.",
            },
            {
              title: "Maintenance Support",
              desc: "Free initial maintenance and service reminders post-purchase.",
            },
            {
              title: "Roadside Assistance",
              desc: "24/7 roadside support, towing, and repair assistance.",
            },
            {
              title: "Post Buy Services",
              desc: "Extended warranty and after-sales care for long-term satisfaction.",
            },
          ].map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-2xl shadow-md p-5 border border-gray-100"
            >
              <h4 className="text-lg font-semibold text-sky-700 mb-2">
                {service.title}
              </h4>
              <p className="text-gray-600 text-sm">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <section className="w-full mt-10 md:mt-10 border-1 border-indigo-200 rounded-2xl p-4 sm:p-6 bg-gray-100 ">
        <div className="text-start mb-8">
          <SectionHeading >
            You May Also Like
          </SectionHeading>
          <SubHeading >
            Explore our latest offerings with detailed insights.
          </SubHeading>

          <SectionCarousel
            cards={selectedCars}
            autoPlay={false} // Set to true if desired
            slidesToShow={{ mobile: 1, tablet: 4, desktop: 3 }}
            showArrows={true}
          />
        </div>
      </section>



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
            src={car.images[popupIndex]}
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
    </motion.div>
  );
};

export default CarDetailPage;
