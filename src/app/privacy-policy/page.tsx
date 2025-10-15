"use client";
import React from "react";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-800 py-16 px-6 md:px-16">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto bg-white shadow-md rounded-2xl p-8 md:p-12"
            >
                <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-blue-600">
                    Privacy Policy
                </h1>

                <p className="text-sm text-neutral-500 mb-10 text-center">
                    Last updated: {new Date().toLocaleDateString()}
                </p>

                <section className="space-y-6 leading-relaxed">
                    <p>
                        At <strong>Priti Naixa</strong>, your privacy is of utmost
                        importance to us. This Privacy Policy explains how we collect, use,
                        and protect your personal information when you interact with our
                        website or visit our showroom.
                    </p>

                    <h2 className="text-xl font-semibold text-blue-600">
                        1. Information We Collect
                    </h2>
                    <p>
                        We may collect personal details such as your name, phone number,
                        email address, and other contact information when you:
                    </p>
                    <ul className="list-disc list-inside ml-4">
                        <li>Book a test drive or make an inquiry</li>
                        <li>Apply for finance or insurance</li>
                        <li>Request service or maintenance</li>
                        <li>Subscribe to our newsletters or updates</li>
                    </ul>

                    <h2 className="text-xl font-semibold text-blue-600">
                        2. How We Use Your Information
                    </h2>
                    <p>Your data helps us to:</p>
                    <ul className="list-disc list-inside ml-4">
                        <li>Provide better sales and service experiences</li>
                        <li>Respond to inquiries and process bookings</li>
                        <li>Send promotional offers and updates (if opted in)</li>
                        <li>Improve our website and marketing campaigns</li>
                    </ul>

                    <h2 className="text-xl font-semibold text-blue-600">
                        3. Sharing Your Information
                    </h2>
                    <p>
                        We may share limited information with trusted third parties such as:
                    </p>
                    <ul className="list-disc list-inside ml-4">
                        <li>Finance and insurance partners</li>
                        <li>Vehicle service providers and logistics partners</li>
                        <li>Legal or regulatory authorities (if required)</li>
                    </ul>
                    <p>
                        We never sell your personal information to third parties for
                        marketing purposes.
                    </p>

                    <h2 className="text-xl font-semibold text-blue-600">4. Cookies</h2>
                    <p>
                        Our website uses cookies to enhance your browsing experience and
                        analyze site traffic. You can disable cookies through your browser
                        settings at any time.
                    </p>

                    <h2 className="text-xl font-semibold text-blue-600">
                        5. Data Security
                    </h2>
                    <p>
                        We implement strict security measures to protect your personal data
                        from unauthorized access, alteration, or disclosure.
                    </p>

                    <h2 className="text-xl font-semibold text-blue-600">
                        6. Your Rights
                    </h2>
                    <p>
                        You have the right to access, modify, or request deletion of your
                        personal data. To exercise these rights, please contact us using the
                        details below.
                    </p>

                    <h2 className="text-xl font-semibold text-blue-600">
                        7. Contact Information
                    </h2>
                    <p>
                        If you have any questions about this Privacy Policy, please contact
                        us:
                    </p>
                    <ul className="list-none space-y-1 ml-1">
                        <li>
                            📍 <strong>Showroom:</strong> Priti Naixa Motors, Near XYZ
                            Highway, Nashik, Maharashtra, India
                        </li>
                        <li>📞 <strong>Phone:</strong> +91 91367 71018</li>
                        <li>✉️ <strong>Email:</strong> pritinaixa68@gmail.com</li>
                    </ul>

                    <h2 className="text-xl font-semibold text-blue-600">
                        8. Updates to This Policy
                    </h2>
                    <p>
                        We may update this Privacy Policy from time to time. The updated
                        version will be posted on our website with a revised “Last Updated”
                        date.
                    </p>
                </section>

                <div className="mt-12 text-center">
                    <p className="text-sm text-neutral-500">
                        Thank you for trusting <strong>Priti Naixa</strong>. Your privacy
                        matters to us.
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default PrivacyPolicy;
