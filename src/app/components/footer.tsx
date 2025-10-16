"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IconBrandFacebook, IconBrandInstagram, IconBrandYoutube } from "@tabler/icons-react";
import { SectionHeading } from "./section-heading";
import { SubHeading } from "./subheading";
import Container from "./container";

export const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-neutral-300 mt-16">
      {/* CTA Section */}
        <section className="bg-sky-600  text-white text-center py-10 px-4">
          <SectionHeading className=" text-white-100">
            Drive Home Your Dream Car Today!
          </SectionHeading>
          <div className=" flex justify-center">
            <p className="max-w-xl text-sm md:text-base text-gray-200 mb-4">
              Explore our latest range of brand-new cars with exclusive offers,
              easy financing, and post-sale support.
            </p>
          </div>

          <Link
            href="/contact"
            className="bg-white text-gray-700 font-semibold px-6 py-3 rounded-lg shadow-lg  transition"
          >
            Contact Us Now
          </Link>
        </section>


      {/* Main Footer */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6 py-12 border-t border-neutral-800">
        {/* Logo & Info */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="/logo.png"
              alt="Showroom Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <h3 className="text-xl font-semibold text-white">Priti Naixa Pvt. Ltd.</h3>
          </div>
          <p className="text-sm text-neutral-400 mb-4 leading-relaxed">
            Trusted automotive <span className="text-accent">T-permit</span> dealership offering new cars & used cars, finance solutions,
            RTO assistance, insurance, and after-sales services — all under one roof.
          </p>
          <div className="flex gap-4">
            <Link href="https://www.facebook.com/share/1A693CpYnj/?mibextid=wwXIfr" target="_blank" aria-label="Facebook">
              <IconBrandFacebook className="w-5 h-5 hover:text-white transition" />
            </Link>
            <Link href="https://www.instagram.com/priti_naixa_?igsh=MWt5ZnM4ZjhiZ3VsNQ%3D%3D&utm_source=qr" target="_blank" aria-label="Instagram">
              <IconBrandInstagram className="w-5 h-5 hover:text-white transition" />
            </Link>
            <Link href="https://youtube.com/@pritinaixa2018?si=dzisIPRvF_0pkC7Y" target="_blank" aria-label="YouTube">
              <IconBrandYoutube className="w-5 h-5 hover:text-white transition" />
            </Link>
            {/* <Link href="https://twitter.com" target="_blank" aria-label="Twitter">
              <IconBrandTwitter className="w-5 h-5 hover:text-white transition" />
            </Link>
            <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
              <IconBrandLinkedin className="w-5 h-5 hover:text-white transition" />
            </Link> */}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
            <li><Link href="/new-cars" className="hover:text-white">New Cars</Link></li>
            <li><Link href="/old-cars" className="hover:text-white">Used Cars</Link></li>
            <li><Link href="/services" className="hover:text-white">Services</Link></li>

          </ul>
        </div>

        {/* Policies */}
        <div>
          <h4 className="text-white font-semibold mb-4">Policies</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link href="/terms-and-conditions" className="hover:text-white">Terms & Conditions</Link></li>
            <li><Link href="/faqs" className="hover:text-white">FAQs</Link></li>
            <li><Link href="/contact" className="hover:text-white ">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact / Address */}
        <div>
          <h4 className="text-white font-semibold mb-4">Showroom Address</h4>
          <p className="text-sm text-neutral-400 mb-3">
            <strong>Reg. Office : </strong>  <br /> Shop 1 & 2, Tarique Galaxy, Plot-181, <br />Sector-2, Taloja, Panvel, Raigarh,(MH), Maharashtra 410208, India.
          </p>
          <p className="text-sm text-neutral-400 mb-3">
            <strong>2nd Branh : </strong> <br />Shop No. 5/6, Abu Bakar, Empire, Surgey No. 97, <br />Shilphata Mahape Road, Opp. AK Compound, Shilphata, Mumbra - 400612, India.
          </p>
          <p className="text-sm text-neutral-400">
            <strong>Phone:</strong> +91 91367 71018 <br />
            <strong>Email:</strong> pritinaixa68@gmail.com
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800 py-4 text-center text-xs text-neutral-500">
        © {new Date().getFullYear()} Priti Naixa Pvt. Ldt. All rights reserved.
        | Designed with ❤️ by <span className="text-red-600 font-bold"><Link href={'https://www.sinss.in'}>SINSS</Link></span>
      </div>
    </footer>
  );
};
