"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  children: string;
  delay?: number;
  className?:string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  children,
  delay = 0.1,
  className 
}) => {
  // Parent container controls stagger timing
  const container: Variants = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: delay,
        when: "beforeChildren",
      },
    },
  };

  // Each word fades, slides, and de-blurs in
  const wordVariant: Variants = {
    hidden: { opacity: 0, x: 25, filter: "blur(6px)" },
    show: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 120,
        damping: 12,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.h2
      className={cn("text-lg mb-2 sm:text-xl md:text-2xl font-bold sm:font-semibold text-gray-800 sm:mb-2 leading-snug",className)}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
    >
      {children.split(" ").map((word, idx) => (
        <motion.span
          key={word + idx}
          variants={wordVariant}
          className="inline-block mr-1"
        >
          {word}
        </motion.span>
      ))}
    </motion.h2>
  );
};
