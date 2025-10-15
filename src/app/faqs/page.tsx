"use client";

import React from "react";
import { motion } from "framer-motion";
import Accordion from "../components/accordians";

const faqs = [
  // 🚖 T-Permit Car Related
  { 
    id: 1,
    question: "What is a T-Permit car?",
    answer:
      "A T-Permit car is a vehicle registered for commercial use under the transport category, allowing it to operate for passenger transport or rental services.",
  },
  {
    id: 2,
    question: "Can I book a T-Permit car for outstation trips?",
    answer:
      "Yes, our T-Permit cars are fully authorized for both local and outstation travel, ensuring comfort and compliance throughout your journey.",
  },
  {
    id: 3,
    question: "Are T-Permit cars insured and licensed?",
    answer:
      "Absolutely. Every T-Permit car under Priti Naixa is verified, insured, and licensed as per RTO norms for passenger safety.",
  },

  // 🛠️ Priti Naixa Services
  {
    id: 4,
    question: "What services does Priti Naixa offer?",
    answer:
      "We provide car rental services for corporate travel, weddings, airport transfers, and outstation trips with experienced chauffeurs.",
  },
  { id: 5,
    question: "Can I rent a car without a driver?",
    answer:
      "Currently, all our services are chauffeur-driven to ensure safety, reliability, and compliance with T-Permit regulations.",
  },
  { id: 6,
    question: "Do you offer subscription or long-term car rental plans?",
    answer:
      "Yes, we provide flexible weekly, monthly, and long-term rental packages for individuals and corporate clients.",
  },

  // 📍 Locations & Enquiries
  {
    id: 7,
    question: "Where is Priti Naixa located?",
    answer:"We are based in Pune, Maharashtra, and operate across nearby cities including Mumbai, Nashik, and Kolhapur.",
  },
  {
    id: 8,
    question: "How can I make a booking or enquiry?",
    answer:"You can book directly from our website’s booking form or contact us via WhatsApp, call, or email for quick assistance.",
  },
  {
    id: 9,
    question: "Do you provide airport pickup and drop services?",
    answer:
      "Yes, we offer convenient airport transfers to and from major airports in Maharashtra with professional drivers.",
  },
  {
    id: 10,
    question: "Is there customer support available?",
    answer:
      "Our support team is available 24/7 to assist you with bookings, route details, and emergency assistance.",
  },
];

export default function FAQPage() {
  return (
    <div className="w-full flex flex-col">
      {/* 🏁 Banner Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative bg-gradient-to-r from-sky-600 to-sky-400 text-white py-16 md:py-24 flex flex-col justify-center items-center text-center"
      >
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-base md:text-lg max-w-2xl">
          Your guide to understanding our T-Permit cars, services, and booking process with Priti Naixa.
        </p>
      </motion.section>

      {/* 💬 FAQ Accordion Section */}
      <section className="py-10 md:py-16 px-4 sm:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl md:text-3xl font-semibold text-center mb-8 text-gray-800"
          >
            Customer Common Thoughts & Questions
          </motion.h2>

          {/* ✅ Existing Accordion Component */}
          <Accordion items={faqs} />
        </div>
      </section>
    </div>
  );
}
