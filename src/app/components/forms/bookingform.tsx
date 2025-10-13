"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { SectionHeading } from "../section-heading";
import { IconAlertCircle, IconSquareRoundedCheck } from "@tabler/icons-react";
import { SubHeading } from "../subheading";

interface BookingFormProps {
    car: {
        brand: string;
        model: string;
        variant?: string;
        year: string;
        fuelType: string[];
    };
    onClose: () => void;
}

interface FormValues {
    name: string;
    phone: string;
    city: string;
}

const BookingForm: React.FC<BookingFormProps> = ({ car, onClose }) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<FormValues>();

    const [submitted, setSubmitted] = useState(false);
    const [name, setName] = useState('')

    const onSubmit = async (data: FormValues) => {
        const payload = {
            name: data.name,
            phone: data.phone,
            city: data.city,
            carInfo: `${car.brand} ${car.model || ""} ${car.variant || ""}`.trim(),
            year: car.year,
            fuelType: Array.isArray(car.fuelType)
                ? car.fuelType.join(", ")
                : car.fuelType,
            submittedAt: new Date().toISOString(),
        };

        setName(data.name)
        try {
            const webhookURL = "https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjYwNTY0MDYzNjA0MzA1MjY1NTUzMjUxMzIi_pc"; // ✅ same Pabbly webhook

            const res = await fetch(webhookURL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (res.ok) {
                setSubmitted(true);
                toast.custom((t) => (
                    <div
                        className={`${t.visible ? "animate-enter" : "animate-leave"
                            } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
                    >
                        <div className="flex-1 w-0 p-4">
                            <div className="flex items-start">
                                <div className="flex-shrink-0 pt-0.5">
                                    <IconSquareRoundedCheck className="h-6 w-6 text-green-500" />
                                </div>
                                <div className="ml-3 flex-1">
                                    <p className="text-sm font-semibold text-gray-900">
                                        Thank you, {data.name || "there"}! 🎉
                                    </p>
                                    <p className="mt-1 text-sm text-gray-600">
                                        Your booking for{" "}
                                        <span className="font-medium text-sky-600">
                                            {car.brand} {car.model}
                                        </span>{" "}
                                        has been received. We’ll contact you shortly!
                                    </p>
                                    <p className="mt-1 text-xs text-sky-500 font-medium">
                                        #CarBookingSuccess #DriveWithUs
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ));
                reset();
            } else {
                toast.custom((t) => (
                    <div
                        className={`${t.visible ? "animate-enter" : "animate-leave"
                            } max-w-md w-full bg-red-50 shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
                    >
                        <div className="flex-1 w-0 p-4">
                            <div className="flex items-start">
                                <div className="flex-shrink-0 pt-0.5">
                                    <IconAlertCircle className="h-6 w-6 text-red-500" />
                                </div>
                                <div className="ml-3 flex-1">
                                    <p className="text-sm font-semibold text-gray-900">
                                        Something went wrong!
                                    </p>
                                    <p className="mt-1 text-sm text-gray-600">
                                        Please try submitting your booking again.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ));
            }
        } catch (error) {
            console.error("Error sending booking:", error);
            toast.error("Network error! Please try again later.");
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className=" bg-white rounded-2xl shadow-lg p-6 sm:p-8 w-full max-w-md mx-auto"
        >
             
            {submitted ? (
                <div
                    className={"animate-enter max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5"}
                >
                   
                    <div className="flex-1 w-0 p-4">
                        <div className="flex items-start">
                            <div className="flex-shrink-0 pt-0.5">
                                <IconSquareRoundedCheck className="h-6 w-6 text-green-500" />
                            </div>
                            <div className="ml-3 flex-1">
                                <p className="text-sm font-semibold text-gray-900">
                                    Thank you, {name || "there"}! 🎉
                                </p>
                                <p className="mt-1 text-sm text-gray-600">
                                    Your enquiry for{" "}
                                    <span className="font-medium text-sky-600">
                                        {car.brand} {car.model}
                                    </span>{" "}
                                    has been received. We’ll contact you shortly!
                                </p>
                                <p className="mt-1 text-xs text-sky-500 font-medium">
                                    #CarBookingSuccess #DriveWithUs #BookingWithUs
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            ) : (
                <>
                    <SectionHeading>{car.brand}</SectionHeading>
                    <SubHeading>Book Enquiry for this car now, hurry up!</SubHeading>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        {/* Full Name */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Full Name
                            </label>
                            <input
                                type="text"
                                {...register("name", { required: "Name is required" })}
                                className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-sky-400 outline-none"
                                placeholder="Enter your name"
                            />
                            {errors.name && (
                                <p className="text-red-500 text-xs mt-1">
                                    {errors.name.message}
                                </p>
                            )}
                        </div>

                        {/* Phone Number */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                {...register("phone", {
                                    required: "Phone number is required",
                                    pattern: {
                                        value: /^[0-9]{10}$/,
                                        message: "Enter a valid 10-digit number",
                                    },
                                })}
                                className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-sky-400 outline-none"
                                placeholder="Enter your phone number"
                            />
                            {errors.phone && (
                                <p className="text-red-500 text-xs mt-1">
                                    {errors.phone.message}
                                </p>
                            )}
                        </div>

                        {/* City */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                City
                            </label>
                            <input
                                type="text"
                                {...register("city", { required: "City is required" })}
                                className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-sky-400 outline-none"
                                placeholder="Enter your city"
                            />
                            {errors.city && (
                                <p className="text-red-500 text-xs mt-1">
                                    {errors.city.message}
                                </p>
                            )}
                        </div>

                        {/* Buttons */}
                        <div className="flex gap-3 mt-4">
                            <motion.button
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                type="submit"
                                disabled={isSubmitting}
                                className="flex-1 bg-sky-600 text-white py-2.5 rounded-lg font-medium hover:bg-sky-700 transition"
                            >
                                {isSubmitting ? "Submitting..." : "Submit"}
                            </motion.button>

                            <button
                                type="button"
                                onClick={onClose}
                                className="flex-1 border border-gray-300 py-2.5 rounded-lg font-medium hover:bg-gray-100 transition"
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </>
            )}
        </motion.div>
    );
};

export default BookingForm;
