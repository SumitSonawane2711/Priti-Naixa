"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { cars } from "@/app/data/old_cars";
import Link from "next/link";
import { Heading } from "../components/heading";

// Group cars by brand
const groupedCars = cars.reduce((acc, car) => {
    if (!acc[car.brand]) acc[car.brand] = [];
    acc[car.brand].push(car);
    return acc;
}, {} as Record<string, typeof cars>);

const brands = Object.keys(groupedCars);

export default function OldCarsPage() {
    const [activeBrand, setActiveBrand] = useState(brands[0]);

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-6 md:px-12 lg:px-20">
            {/* Page Header */}
            <Heading className=" mb-10">
                Explore Our Used 2023 to 2025 Car Collection
            </Heading>

            {/* Brand Tabs */}
            <div className="flex flex-wrap gap-3 mb-10">
                {brands.map((brand) => (
                    <motion.button
                        key={brand}
                        onClick={() => setActiveBrand(brand)}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className={`px-6 py-2 bg-white border border-yellow-400/50 cursor-pointer font-medium text-sm md:text-base transition-all duration-300 
              ${activeBrand === brand
                                ? "bg-yellow-400 text-blak shadow-md font-semibold"
                                : "bg-white text-gray-700 "
                            }`}
                    >
                        {brand}
                    </motion.button>
                ))}
            </div>

            {/* Animated Car Grid */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeBrand}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.h2
                        className="text-md md:text-2xl font-semibold text-gray-700 mb-6 md:text-left"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        {activeBrand}
                    </motion.h2>

                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {groupedCars[activeBrand].map((car, index) => (
                            <Link href={`/old_cars/${car.id}`} key={car.id} className="no-underline">
                                <motion.div
                                    key={car.id}
                                    className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                >
                                    <div className="relative h-52 w-full overflow-hidden">
                                        <Image
                                            src={`${car.images[0]}`}
                                            alt={car.name}
                                            fill
                                            className="object-cover hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                                            {car.name}
                                        </h3>
                                        <p className="text-sm text-gray-500 mb-2">
                                            {car.bodyType} • {car.fuelType.join("/")} • {car.seats} Seats
                                        </p>
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-600 font-semibold">
                                                {car.budget}
                                            </span>
                                            <motion.button
                                                className=" text-sm cursor-pointer z-10 hover:bg-yellow-400 border-1 border-yellow-400 w-max py-1 px-4 font-semibold shadow-md text-black transition-all duration-300"
                                            >
                                                View Details
                                            </motion.button>
                                        </div>
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Footer Note */}
            <motion.div
                className="mt-16 text-center text-gray-600"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                ✨ All models are available in multiple colors & variants
            </motion.div>
        </div>
    );
}
