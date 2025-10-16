import Image from "next/image";
import Container from "../components/container";
import { Heading } from "../components/heading";
import { SubHeading } from "../components/subheading";
import { Timeline } from "../components/timeline";
import { SectionHeading } from "../components/section-heading";

export default function AboutPage() {
  return (
    <main className="min-h-screen flex items-start justify-start">
      <Container className="min-h-screen p-4 md:pt-20 md:pb-10">

        {/* Main Heading */}
        <Heading>Hello, We are PritiNaixa Pvt. Ltd.</Heading>

        {/* Sub Heading */}
        <SubHeading>
          Driving trust, transparency, and opportunities in the T-permit used car
          and passenger vehicle business.
        </SubHeading>

        {/* Company Overview */}
        <div className="w-full mt-6 p-10  border bg-white border-gray-200 rounded-xl pending-4 shadow-lg">
          <SectionHeading >
            About the Business
          </SectionHeading>
          {/* Timeline Component */}
          <Timeline />
          <p className=" text-sm md:text-base leading-relaxed">
            Initially, in <span className="font-semibold">May 2018</span>, we started
            as a proprietorship under the name{" "}
            <span className="font-semibold">Yogendra Singh Tours and Travels</span>,
            focusing on T-permit used car buy & sell business. Gradually, with our
            growth and dedication, we registered as{" "}
            <span className="font-semibold">Priti Naixa Private Limited</span> in{" "}
            <span className="font-semibold">March 2025</span>.
          </p>
          <p className="text-sm md:text-base leading-relaxed mt-3">
            Our founder and CEO/MD is{" "}
            <span className="font-semibold">Mrs. Priti</span>, joined by{" "}
            <span className="font-semibold">Mr. Yogendra Singh</span> as the second
            MD. Within just a few months, our team has grown to{" "}
            <span className="font-semibold">25–30 passionate professionals</span>{" "}
            who work directly with senior management in an open, engaging, and
            satisfying environment.
          </p>
          <p className="text-sm md:text-base leading-relaxed mt-3">
            We take pride in being recognized as the{" "}
            <span className="font-semibold">Best Place to Work</span> for employee
            engagement and satisfaction.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className=" border rounded-xl p-6 shadow-md bg-gradient-to-b from-gray-800  to-sky-800">
            <SectionHeading className="text-white">Our Mission</SectionHeading>
            <SubHeading  className="text-gray-200">
              To cover the maximum geographical areas in Mumbai and Maharashtra in
              the T-permit passenger vehicle business segment.
            </SubHeading>
          </div>
          <div className="border rounded-xl p-6 shadow-md bg-gradient-to-b from-gray-800  to-sky-800">
            <SectionHeading className="text-white">Our Vision</SectionHeading>
            <SubHeading className="text-gray-200">
              To empower individuals, drivers, and investors to build sustainable
              livelihoods by starting their own small businesses in tours and
              travels.
            </SubHeading>
          </div>
        </div>

        {/* USP Section */}
        <div className="bg-indigo-50 border rounded-xl p-6 shadow-md mt-8">
          <SectionHeading >
            What Makes Us Different?
          </SectionHeading>
          <p className="text-sm md:text-base text-gray-700 mt-2">
            <span className="font-semibold">
              No commission, verified cars with affordable discounts,
            </span>{" "}
            trusted by <span className="font-semibold">5000+ customers</span>.
          </p>
        </div>

        {/* Team Members */}
        <div className="mt-10">
          <SectionHeading >Our Leadership</SectionHeading>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white border rounded-xl shadow-md p-6 flex flex-col items-center">
              <Image
                src="/images/priti.jpg"
                alt="Mrs. Priti - CEO & MD"
                className="w-28 h-28 rounded-full object-cover shadow-md mb-4"
                width={112}
                height={112}
              />
              <h4 className="font-semibold text-gray-800">Mrs. Priti</h4>
              <p className="text-sm text-gray-500">Founder & CEO / MD</p>
            </div>
            <div className="bg-white border rounded-xl shadow-md p-6 flex flex-col items-center">
              <Image
                src="/images/yogendra.jpg"
                alt="Mr. Yogendra Singh - MD"
                width={112}
                height={112}
                className="w-28 h-28 rounded-full object-cover shadow-md mb-4"
              />
              <h4 className="font-semibold text-gray-800">Mr. Yogendra Singh</h4>
              <p className="text-sm text-gray-500">Managing Director</p>
            </div>
          </div>
        </div>


      </Container>
    </main>
  );
}
