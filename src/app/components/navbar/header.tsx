"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Container from "../container";
import { IconAlignJustified, IconMail, IconPhone, IconX } from "@tabler/icons-react";

export const Header = () => {

  const navItems = [
    {
      title: "New Cars", href: "/new_cars",

    },
    {
      title: "Used Cars", href: "/old_cars",

    },
    {
      title: "Services", href: "/services",
    },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },

  ];

  const [hovered, setHovered] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);


  // Scroll shadow effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (

    <nav
      className={`sticky top-0 z-50 w-full backdrop-blur transition-all ${scrolled ? "bg-white shadow-md" : "bg-gray-900/90 border-b text-white border-amber-100"}`}
    >
      <Container className=" max-w-7xl ">
        <div className=" flex max-w-6xl items-center justify-between ">
          {/* Logo */}
          <div className="flex items-center gap-10">
            <Link href={"/"} className="flex items-center gap-2 text-xl font-bold">
              <Image
                className="w-10 h-10 object-contain"
                src={"/logo.png"}
                height={32}
                width={32}
                alt="Logo"
                priority
              />
              Priti Naixa Pvt. Ltd.
            </Link>

            {/* Desktop Nav */}
            <div className="hidden items-center gap-2 md:flex relative ">
              {navItems.map((item, idx) => (
                <div
                  key={idx}
                  className="relative"
                  onMouseEnter={() => {
                    setHovered(idx);
                  }}
                  onMouseLeave={() => {
                    setHovered(null);
                  }}
                >
                  <Link
                    className="relative px-2 py-1 text-md text-semibold"
                    href={item.href || "#"}
                  >
                    {hovered === idx && (
                      <motion.div
                        layoutId="nav-underline"
                        className="border-b-2 border-accent absolute inset-0 "
                      />
                    )}
                    <span className="relative z-10">{item.title}</span>
                  </Link>

                </div>
              ))}
            </div>
          </div>

          {/* Search (desktop only) */}
          {/* <form action={"/search"} className="hidden md:block">
            <label htmlFor="site-search" className="sr-only">
              Search
            </label>
            <input
              id="site-search"
              name="q"
              type="search"
              placeholder="Search..."
              className="w-full rounded-md border bg-white/30 px-3 py-2 text-sm shadow-sm placeholder:text-neutral-400 focus:border-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-200"
            />
          </form> */}

          <div className=" flex items-center gap-3 md:gap-6">
            <motion.a
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 transition-colors"
              href="tel:+919136771018"
            >
              <IconPhone size={24} /> <span className="hidden md:inline">+91 9136771018</span>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 transition-colors"
              href="mailto:pritinaixa68@gmail.com"
            >
              <IconMail size={24} /> <span className="hidden md:inline">pritinaixa68@gmail.com</span>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden ">
            <button
              aria-label="Open menu"
              className="rounded-md p-2 hover:bg-neutral-100"
              onClick={() => setMobileOpen((prev) => !prev)}
            >
              <span className="text-4xl">{mobileOpen ? <IconX /> : <IconAlignJustified />}</span>
            </button>
          </div>
        </div>
      </Container>


      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full  left-0 w-full border-2 border-gray-200  rounded-b-2xl  md:hidden bg-white text-gray-700 shadow-slate-800 shadow-md z-50 overflow-hidden"
          >
            <div className="flex flex-col px-4 py-2">
              {navItems.map((item, idx) => (
                <div key={idx} className="border-b">
                  {/* Main Link or Dropdown Toggle */}
                  <div
                    className='flex items-center justify-between py-2 text-sm font-bold cursor-pointer'
                  >
                    <Link
                      href={item.href || "#"}
                    >
                      {item.title}
                    </Link>

                  
                  </div>

                  
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
