"use client";

import React from "react";
import { motion } from "framer-motion";
import { IconPhone, IconMail } from "@tabler/icons-react";
import Container from "../components/container"
import { Heading } from "../components/heading"
import { SubHeading } from "../components/subheading";
import ContactForm from "../components/forms/contactform";
import SEO from "../components/seo";


const Contact = () => {
  return (
    <>
      <SEO
        title="Contact Us | Priti-Naixa T-Permit Vehicle Services & Showroom"
        description="Get in touch with Priti-Naixa for T-Permit vehicle support, showroom inquiries, and transport license services. Call or visit us for expert guidance."
        keywords="contact Priti-Naixa, T-permit help, T-permit vehicle showroom contact, car showroom near me, transport license assistance, T-permit RTO services"
        url="https://pritinaixa.com/contact"
        image="/banner1.png"
      />

      <main >
        <Container className="max-w-7xl flex-col items-center justify-center p-4 md:pt-20 md:pb-10 ">
          <div className=" sm:flex justify-between items-center py-6 sm:py-0 ">
            <Heading> Contact US</Heading>
            {/* Info Cards */}
            <div className=" flex flex-col  md:flex-row gap-4 mt-4 sm:mt-0">
              <div
                className="flex items-center p-4 shadow-md cursor-pointer hover:shadow-md bg-yellow-400"
              >
                <IconPhone className="text-indigo-500 " size={24} />
                <div className="flex flex-wrap gap-4  font-semibold text-gray-800">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 transition-colors  duration-100 "
                    href="tel:+919136771018"
                  >
                    +91 9136771018
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 transition-colors"
                    href="tel:+919594111018"
                  >
                    +91 9594111018
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 transition-colors"
                    href="tel:+917208711018"
                  >
                    +91 7208711018
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 transition-colors"
                    href="tel:+917208523018"
                  >
                    +91 7208523018
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 transition-colors"
                    href="tel:+919136544018"
                  >
                    +91 9136544018
                  </motion.a>
                </div>
              </div>

              {/* Vertical line */}
              <div className="border-t sm:border-l border-gray-300"></div>

              <div
                className="flex items-center gap-2 p-4 shadow-md cursor-pointer hover:shadow-md bg-yellow-400"
              >
                <IconMail className="text-indigo-500" size={24} />
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 transition-colors font-semibold text-gray-800"
                  href="mailto:pritinaixa68@gmail.com"
                > pritinaixa68@gmail.com
                </motion.a>
              </div>
            </div>
          </div>


          <section className="w-full mt-4 sm:mt-12 py-10 bg-white border border-gray-200 rounded-xl pending-4 shadow-lg ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6">

              {/* Left Side - Contact Form + Info */}
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col gap-6 "
              >
                <SubHeading className="text-center" >
                  Fill out the form and we’ll get back to you as soon as possible.
                </SubHeading>

                {/* Contact Form */}
                <ContactForm />
              </motion.div>

              {/* Right Side - Google Map */}
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="w-full h-[300px] md:h-full"
              >
                <iframe
                  title="Google Map Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.1961717819304!2d90.412518!3d23.810331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7b5d3db5a0f%3A0xf1f60e2f62a2f0b2!2sYour%20Location!5e0!3m2!1sen!2sin!4v1671234567890"
                  className="w-full h-full rounded-md border-0 shadow-md"
                  loading="lazy"
                  allowFullScreen
                ></iframe>
              </motion.div>
            </div>
          </section>


        </Container>

      </main>
    </>
  )
}

export default Contact