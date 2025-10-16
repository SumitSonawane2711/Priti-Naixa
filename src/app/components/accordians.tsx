"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconChevronDown } from "@tabler/icons-react";

interface AccordionItem {
  id: number;
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-4 px-4 sm:px-0">
      {items.map((item, index) => (
        <div
          key={item.id}
          className="border border-blue-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          {/* Header */}
          <button
            onClick={() => toggleAccordion(index)}
            className={`w-full flex justify-between items-center px-6 py-4 text-left transition-colors duration-300 ${
              activeIndex === index
                ? "bg-accent text-slate-800"
                : "bg-white hover:bg-accent text-gray-800"
            }`}
          >
            <span className="font-semibold text-base sm:text-lg">{item.question}</span>
            <motion.div
              animate={{ rotate: activeIndex === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <IconChevronDown className="w-5 h-5 text-slate-800" />
            </motion.div>
          </button>

          {/* Content */}
          <AnimatePresence initial={false}>
            {activeIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="overflow-hidden bg-blue-50 border-t border-blue-100"
              >
                <p className="px-6 py-4 text-gray-700 text-sm sm:text-base">
                  {item.answer}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
