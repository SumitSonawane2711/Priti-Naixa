"use client";

import React from "react";
import { motion,Variants } from "framer-motion";
import { cn } from "@/lib/utils";

const wordVariant: Variants = {
    hidden: { opacity: 0, x: 25, filter: "blur(6px)" },
    show: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: {
        delay:0.3,
        duration: 0.3,
        type: "spring",
        stiffness: 120,
        damping: 12,
        ease: "easeOut",
      },
    },
  };

export const SubHeading = ({
  as: Tag = "h2",
  children,
  className,
}: {
  as?: "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      variants={wordVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <Tag
        className={cn(
          "text-gray-600 max-w-lg py-2 text-sm md:text-base",
          className
        )}
      >
        {children}
      </Tag>
    </motion.div>
  );
};
