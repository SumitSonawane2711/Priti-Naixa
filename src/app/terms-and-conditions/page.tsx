"use client";
import React from "react";
import { motion } from "framer-motion";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 py-16 px-6 md:px-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto bg-white shadow-md rounded-2xl p-8 md:p-12"
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-blue-600">
          Terms & Conditions
        </h1>
        <p className="text-sm text-neutral-500 mb-10 text-center">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <section className="space-y-6 leading-relaxed">
          <p>
            Welcome to <strong>Priti Naixa</strong>. By accessing or using our
            website and services, you agree to comply with and be bound by the
            following terms and conditions. Please read them carefully before
            using our services.
          </p>

          <h2 className="text-xl font-semibold text-blue-600">
            1. General Information
          </h2>
          <p>
            The website and all its content, including images, text, and
            graphics, are owned and operated by Priti Naixa. These terms apply
            to all visitors, users, and others who access or use our website.
          </p>

          <h2 className="text-xl font-semibold text-blue-600">
            2. Use of Our Website
          </h2>
          <p>
            You agree to use our website for lawful purposes only and not to:
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>Violate any local, national, or international laws</li>
            <li>Upload harmful or malicious software</li>
            <li>Interfere with or disrupt website functionality</li>
            <li>Use our content for unauthorized commercial purposes</li>
          </ul>

          <h2 className="text-xl font-semibold text-blue-600">
            3. Vehicle Information and Pricing
          </h2>
          <p>
            All vehicle details and prices displayed on our website are for
            informational purposes only and may be subject to change without
            prior notice. While we strive for accuracy, Priti Naixa is not
            responsible for typographical errors, omissions, or outdated
            information.
          </p>

          <h2 className="text-xl font-semibold text-blue-600">
            4. Finance and Loan Assistance
          </h2>
          <p>
            Loan approvals and finance offers are subject to eligibility
            criteria, verification, and approval from our partnered financial
            institutions. Priti Naixa does not guarantee loan approval.
          </p>

          <h2 className="text-xl font-semibold text-blue-600">
            5. Booking and Payments
          </h2>
          <p>
            Any vehicle booking made through our website or showroom is
            considered confirmed only upon payment acknowledgment. Booking
            amounts are non-transferable and may be non-refundable in certain
            cases. Please refer to your sales agreement for detailed terms.
          </p>

          <h2 className="text-xl font-semibold text-blue-600">
            6. Intellectual Property
          </h2>
          <p>
            All website content, including text, graphics, logos, and images,
            are the property of Priti Naixa and protected under copyright laws.
            Unauthorized use, copying, or distribution is strictly prohibited.
          </p>

          <h2 className="text-xl font-semibold text-blue-600">
            7. Third-Party Links
          </h2>
          <p>
            Our website may contain links to third-party websites or services
            that are not controlled by us. Priti Naixa is not responsible for
            the content, privacy policies, or practices of any third-party
            websites.
          </p>

          <h2 className="text-xl font-semibold text-blue-600">
            8. Limitation of Liability
          </h2>
          <p>
            Priti Naixa shall not be held liable for any direct, indirect,
            incidental, or consequential damages arising from the use or
            inability to use our website or services.
          </p>

          <h2 className="text-xl font-semibold text-blue-600">
            9. Privacy Policy
          </h2>
          <p>
            Please refer to our{" "}
            <a
              href="/privacy-policy"
              className="text-blue-500 underline hover:text-blue-700"
            >
              Privacy Policy
            </a>{" "}
            page to understand how we collect and manage your personal
            information.
          </p>

          <h2 className="text-xl font-semibold text-blue-600">
            10. Governing Law
          </h2>
          <p>
            These terms are governed by and construed in accordance with the
            laws of India. Any disputes shall be subject to the jurisdiction of
            the courts located in Nashik, Maharashtra.
          </p>

          <h2 className="text-xl font-semibold text-blue-600">
            11. Changes to Terms
          </h2>
          <p>
            We reserve the right to modify or update these Terms & Conditions at
            any time without prior notice. The latest version will always be
            available on our website.
          </p>

          <h2 className="text-xl font-semibold text-blue-600">
            12. Contact Us
          </h2>
          <p>
            For any queries regarding these Terms & Conditions, please contact
            us:
          </p>
          <ul className="list-none space-y-1 ml-1">
            <li>
              📍 <strong>Showroom:</strong> Priti Naixa Motors, Near XYZ
              Highway, Nashik, Maharashtra, India
            </li>
            <li>📞 <strong>Phone:</strong> +91 98765 43210</li>
            <li>✉️ <strong>Email:</strong> info@pritinaixa.com</li>
          </ul>
        </section>

        <div className="mt-12 text-center">
          <p className="text-sm text-neutral-500">
            Thank you for visiting <strong>Priti Naixa</strong>. By continuing
            to use our services, you acknowledge that you have read and agreed
            to these terms.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default TermsAndConditions;
