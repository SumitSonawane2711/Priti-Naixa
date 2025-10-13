"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  IconPhone,
  IconMail,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
} from "@tabler/icons-react";

export const Navbar = () => {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full bg-accent text-blue-950 flex flex-col md:flex-row md:justify-between items-center px-6 py-3 text-sm md:text-base font-medium gap-3 md:gap-8 shadow-md"
    >
      {/* Left Side - Contact Info */}
      <div className="flex items-center gap-3 md:gap-6">
        <motion.a
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 transition-colors"
          href="tel:+91823749348"
        >
          <IconPhone size={18} /> +91 82374 9348
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 transition-colors"
          href="mailto:pritineixa@gmail.com"
        >
          <IconMail size={18} /> pritineixa@gmail.com
        </motion.a>
      </div>

      {/* Right Side - Social Icons */}
      <div className="flex items-center gap-4">
        {[
          { Icon: IconBrandFacebook, link: "https://facebook.com" },
          { Icon: IconBrandInstagram, link: "https://instagram.com" },
          { Icon: IconBrandLinkedin, link: "https://linkedin.com" },
          { Icon: IconBrandTwitter, link: "https://twitter.com" },
        ].map(({ Icon, link }, i) => (
          <motion.a
            key={i}
            whileHover={{ scale: 1.2, rotate: 5 }}
            className=" transition-colors"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon size={20} />
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};
