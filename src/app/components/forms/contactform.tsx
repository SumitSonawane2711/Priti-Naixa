"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

const PABBLY_WEBHOOK_URL = "https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjYwNTY0MDYzNjA0MzA1MjY0NTUzNTUxMzEi_pc"; // 🔗 Replace with your actual Pabbly webhook URL

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(PABBLY_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success("Your message has been sent successfully. Our team will reach out soon.");
        setFormData({ name: "", number: "", email: "", message: "" });
      } else {
        toast.error("Failed to send message. Please try again!");
      }
    } catch (error) {
      toast.error("Something went wrong!");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 w-full max-w-md mx-auto"
    >
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        className="p-3 border border-secondary rounded-md focus:ring-1 focus:ring-indigo-300 outline-none"
      />
      <input
        type="number"
        name="number"
        placeholder="Your Number"
        value={formData.number}
        onChange={handleChange}
        className="p-3 border border-secondary rounded-md focus:ring-1 focus:ring-indigo-300 outline-none"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        className="p-3 border border-secondary rounded-md focus:ring-1 focus:ring-indigo-300 outline-none"
      />
      <textarea
        name="message"
        rows={4}
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        className="p-3 border border-secondary rounded-md focus:ring-1 focus:ring-indigo-300 outline-none"
      ></textarea>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        disabled={loading}
        type="submit"
        className={`px-4 py-2 text-sm rounded hover:bg-yellow-400 border border-yellow-400 shadow-md cursor-pointer font-semibold transition-all duration-300 ${
          loading ? "opacity-70 cursor-not-allowed" : ""
        }`}
      >
        {loading ? "Sending..." : "Send Message"}
      </motion.button>
    </form>
  );
}
