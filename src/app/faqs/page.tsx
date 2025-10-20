"use client";

import React from "react";
import { motion } from "framer-motion";
import Accordion from "../components/accordians";
import Container from "../components/container";


const faqs = [
  // 🚖 T-Permit Car Related
  { 
    id: 1,
    question: "How can I make the inquiry?",
    answer:
    "Go to the website, call us or fill the contact form or visit our offices."
  },
  {
    id: 2,
    question: "What services does Priti Naixa Pvt. Ltd. provide?",
    answer:
    "We specialize in the buying and selling of both new and pre-owned T-permit cars. We also assist with vehicle financing, insurance, RTO documentation, and ownership transfer services."
 },
  {
    id: 3,
    question: "Where is Priti Naixa Pvt. Ltd. located?",
    answer:
    "We are located in Navi Mumbai, Mumbra Shilphata Branch_2:Thane",
  },

  // 🛠️ Priti Naixa Services
  {
    id: 4,
    question: "Do you offer car exchange services?",
    answer:
  "Yes, we offer car exchange services only for T-permit where you can exchange your old car for a new or pre-owned vehicle of your choice. Our experts provide a fair valuation of your existing car." 
 },
  { id: 5,
    question: "How do I sell my car to Priti Naixa Pvt. Ltd.?",
    answer:
    "Contact us or visit our showroom for car inspection.If you are running any loan for your particular vehicle then as Priti Naixa will close the loan 1st as per foreclosure amount and rest amount instantly transfer to your account. We will keep a small amount for Loan NOC and RTO/Insurance transfer purposes only."
  },
  { id: 6,
    question: "Can I buy a car on finance through Priti Naixa Pvt. Ltd.?",
    answer:
      "Yes. We have tie-ups with leading financial institutions and banks to offer easy car loan options with minimal documentation and quick approval.",
  },

  // 📍 Locations & Enquiries
  {
    id: 7,
    question: "Do you provide warranty or after-sales service for used cars?",
    answer:"Yes, selected vehicles come with limited warranty and service support. Warranty coverage depends on the car’s model, age, and condition.",
  },
  {
    id: 8,
    question: "How long does the ownership transfer process take?",
    answer:"The RTO ownership transfer usually takes 7 to 21 working days, depending on the RTO jurisdiction and documentation accuracy.",
  },
  {
    id: 9,
    question: "Can I book a car online?",
    answer:
      "Yes, you can reserve a car online by paying a small booking amount through our official channels. Our team will contact you to complete the remaining process.",
  },
  {
    id: 10,
    question: "What if I change my mind after booking a car?",
    answer:
      "In case of cancellation, the booking amount is 100% fully refundable as per company policies depending on the terms mentioned at the time of booking. Please check with our sales team for detailed terms.",
  },
  {
    id: 11,
    question: "Do you assist with vehicle insurance renewal?",
    answer:"Yes, we offer insurance renewal and claim assistance through our partnered insurance companies."
  },
  {
    id: 12,
    question:"How can I contact Priti Naixa Pvt. Ltd.?",
    answer: "You can reach us at: Phone: [9594111018 / 7208711018 / 7208523018 /9136544018 / 9136771018] 📧 Email: [pritinaixa68@gmail.com] 🌐 Website: [www.pritinaixa.com]"
  },
  {
    id:13,
    question: "Do you provide tire replacement services?",
    answer:"Yes, we provide tire replacement and fitting services for all major car brands. Our team can help you choose the right tire type and size based on your driving style and vehicle model."
  },
  {
    id:14,
    question: "Can I get tire alignment and balancing done at Priti Naixa Pvt. Ltd.?",
    answer:"Absolutely. We offer wheel alignment, balancing, and rotation services to ensure smooth driving, improved mileage, and even tire wear."
  },
  {
    id:15,
    question: "Which tire brands do you offer?",
    answer:"We deal with reputed tire brand such as JKTYRE, ensuring high quality and long-lasting performance."
  },
  {
    id:16,
    question: "Do you check tire condition during car inspection?",
    answer:"Yes, our technicians conduct a comprehensive tire check—including tread depth, air pressure, and wear patterns—during every vehicle inspection or service."
  },
  {
    id:17,
    question:"Do you provide car battery replacement services?",
    answer:"Yes, we offer car battery replacement and installation services for all major battery brands only LivFast."
  },
  {
    id:18,
    question:"How do I know when my car battery needs replacement?",
    answer:"Common signs include slow engine crank, dimming headlights, and the battery warning light on the dashboard. Our technicians can also test your battery's health during routine maintenance."
  },
  {
    id:19,
    question:"Do you provide emergency battery jump-start assistance?",
    answer:"Yes, we offer on-call battery jump-start and replacement assistance within our service areas. You can call our helpline for quick roadside support."
  },
  {
    id:20,
    question:"Are your tire and battery products covered under warranty?",
    answer:"Yes, all new tires and batteries purchased from us come with a manufacturer warranty. The warranty period and terms vary by brand and model."
  },
  {
    id:21,
    question:"Can I exchange my old battery for a new one?",
    answer:"Yes, we have a battery exchange program where you can trade in your old battery and get an instant discount on a new one."
  },
  {
    id:22,
    question:"How often should I replace my car tires?",
    answer:"Typically, car tires should be replaced every 50,000 to 70,000 kilometers or every 1 to 2 years, depending on usage, road conditions, and tire quality."
  },
  {
    id:23,
    question:"Can I book tire or battery services in advance?",
    answer:"Yes, you can book an appointment for tire replacement, wheel alignment, or battery service by contacting our support team or visiting our website."
  },
  {
    id:24,
    question:"Does Priti Naixa Pvt. Ltd. offer car rental / Fleet services?",
    answer:"Yes, we have the biggest Fleet car OLA/Uber/Rapido facility in the T-permit business segment offering Fleet and leasing services for both individuals and corporate clients. You can pay your rent on a daily basis only by comparing with competitive rates."
  },
  {
    id:25,
    question:"What types of vehicles are available for rent?",
    answer:"We have a wide range of T-Permit vehicles including hatchbacks, sedans, luxury brands with Maruti Suzuki and Hyundai available for business use."
  },
  {
    id:26,
    question:"Can I fleet/rent a car for OLA/Uber uses?",
    answer:"Yes, only in Mumbai & Maharashtra. Charges are based on daily package rates, including tolls and driver allowances (if applicable).Out of Maharashtra fleet services are not available."
  },
  {
    id:27,
    question:"Do you offer long-term leasing for corporate clients?",
    answer:"Yes, we provide fleet leasing and management solutions for companies, including long-term rentals, regular servicing, and driver management."
  },
  {
    id:28,
    question:"Is fuel included in the rental cost?",
    answer:"Rental charges are generally exclusive of fuel unless mentioned in the specific package. Customers are responsible for refueling the vehicle during the rental period."
  },
  {
    id:29,
    question:"How do I book a car for rent or fleet service?",
    answer:"Rental charges are generally exclusive of fuel unless mentioned in the specific package. Customers are responsible for refueling the vehicle during the rental period."
  },
  {
    id:30,
    question:"How do I book a car for rent or fleet service?",
    answer:"You can book online, over the phone, or by visiting our showroom. Advance booking is recommended, especially during festivals."
  },
  {
    id:31,
    question:"What are the payment options available?",
    answer:"We accept cash, bank transfer, UPI, debit/credit cards, and corporate billing options for long-term clients."
  },
  {
    id:32,
    question:"Do you provide GPS-enabled cars?",
    answer:"Yes, most of our rental and fleet vehicles are equipped with GPS tracking systems for safety, navigation, and trip monitoring."
  },
  {
    id:33,
    question:"Are your rental vehicles insured?",
    answer:"Yes, all our cars are comprehensively insured. However, the renter is responsible for damages not covered by insurance (e.g., negligence or contract violation)."
  },
  {
    id:34,
    question:"Can I extend my rental period after booking?",
    answer:"Yes, you can extend your rental duration by informing us in advance. Additional charges will apply as per the revised duration."
  },
  {
    id:35,
    question:"How do I become a corporate fleet partner with Priti Naixa Pvt. Ltd.?",
    answer:"You can contact our Fleet Department via email or phone to discuss partnership terms, bulk car supply, or long-term leasing agreements."
  },
  {
    id:36,
    question:"What happens if extra work is required after inspection?",
    answer:"They should call you and get your approval before carrying out extra work beyond the initial estimate. Confirm how they handle emergent issues and cost escalation."
  }


];

export default function FAQPage() {
  return (
    <Container className="max-w-7xl flex-col items-center justify-center">
      {/* 🏁 Banner Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative bg-gradient-to-r from-sky-600 to-sky-400 text-white py-16 md:py-24 flex flex-col justify-center items-center text-center"
      >
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-base md:text-lg max-w-2xl">
          Your guide to understanding our T-Permit cars, services, and booking process with Priti Naixa.
        </p>
      </motion.section>

      {/* 💬 FAQ Accordion Section */}
      <section className="py-10 md:py-16 px-4 sm:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl md:text-3xl font-semibold text-center mb-8 text-gray-800"
          >
            Customer Common Thoughts & Questions
          </motion.h2>

          {/* ✅ Existing Accordion Component */}
          <Accordion items={faqs} />
        </div>
      </section>
    </Container>
  );
}
