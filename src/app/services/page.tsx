"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ServiceDetailPage() {
  const services = [
    {
      title: "RTO Paperwork & Vehicle Insurance",
      description:
        "We assist in completing RTO paperwork and help customers with both NT & TR driving licence procedures, ensuring hassle-free registration and insurance processing.",
    },
    {
      title: "Finance / Loan Assistance",
      description:
        "Partnered with over 10 major banks and financial institutions to provide quick car loans, flexible EMIs, and attractive interest rates.",
    },
    {
      title: "Buyback / Resale",
      description:
        "We deal in both old and new car sales and purchases, providing fair market valuation and smooth ownership transfer for your existing vehicles.",
    },
    {
      title: "Fleet Car Services",
      description:
        "We offer reliable fleet car solutions for businesses and corporates, including vehicle leasing, maintenance, and registration management.",
    },
    {
      title: "JK Tyre Franchise (Verified Dealer)",
      description:
        "We are an authorized JK Tyre dealer offering genuine products, fitting, and replacement services for a wide range of vehicles.",
    },
    {
      title: "Vehicle Battery Services",
      description:
        "Providing reliable battery solutions — genuine brand batteries available for sale with expert guidance.",
    },
    {
      title: "Post Sales Services",
      description:
        "Our post-sales support includes car servicing, washing, and mechanical works to keep your vehicle performing like new.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop"
          alt="Services Banner"
          fill
          className="object-cover brightness-50"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-white drop-shadow-lg">
            Detailed Services & Post-Sale Support
          </h1>
          <p className="text-lg sm:text-xl text-gray-100 mt-4 max-w-2xl mx-auto">
            From financing to post-purchase maintenance — we cover every step of
            your car journey with complete support.
          </p>
        </motion.div>
      </section>

      {/* Marketing Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto px-4 py-12 text-center"
      >
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">
          What Services Do We Provide Apart from Car Sales?
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          We’re not just about selling cars — we ensure a seamless experience
          from the moment you step in until long after your purchase. With
          financing, insurance, servicing, and buyback options, we’ve got your
          automotive needs covered.
        </p>
      </motion.section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 text-left"
            >
              <h3 className="text-xl font-semibold text-sky-700 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Closing Note */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className=" text-neutral-800 text-center py-10 px-4"
      >
        <h3 className="text-2xl font-semibold mb-3">Customer Satisfaction First</h3>
        <p className="max-w-3xl mx-auto text-sm sm:text-base ">
          We serve our customers with the highest business standards and ensure
          you receive premium quality, transparency, and reliable after-sales
          service.
        </p>
      </motion.section>
    </div>
  );
}
