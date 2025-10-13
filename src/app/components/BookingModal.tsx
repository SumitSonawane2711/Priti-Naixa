"use client";

import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { motion } from "framer-motion";
import BookingForm from "./forms/bookingform";
import { IconX } from "@tabler/icons-react";

interface BookingModalProps {
  car: {
    brand: string;
    model: string;
    variant?: string;
    year: string;
    fuelType: string[];
  };
}

const BookingModal: React.FC<BookingModalProps> = ({ car }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* ✅ Book Now Button (self-contained) */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="w-full cursor-pointer sm:w-auto bg-sky-600 text-white px-8 py-2 rounded-lg font-medium border border-accent hover:bg-sky-700 transition"
      >
        Book Now
      </motion.button>

      {/* ✅ Popup Modal */}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        {/* Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm"
        />

        {/* Modal Content */}
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-accent rounded-2xl shadow-2xl w-full max-w-lg p-4 sm:p-6"
          >
            <div>
              <button
                onClick={() => setIsOpen(false)}
                className="justify-end w-full flex mb-4"
              >
                <IconX className="cursor-pointer text-yellow-600 hover:text-yellow-800" />
              </button>
            </div>
            <BookingForm car={car} onClose={() => setIsOpen(false)} />
          </motion.div>
        </div>
      </Dialog>
    </>
  );
};

export default BookingModal;
