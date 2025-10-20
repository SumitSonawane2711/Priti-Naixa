"use client";
import Container from "./components/container";
import Carousel from "./components/carousel";
import SectionCarousel from "./components/section_carousel";
import { SectionHeading } from "./components/section-heading";
import { Testimonials } from "./components/testimonials";
import { useState } from "react";
import { cars as carsNew } from "@/app/data/new_cars";
import { cars as usedCars } from "@/app/data/old_cars";
import CustomerReviews from "./components/CustomerReviews";
import Link from "next/link";
import { SubHeading } from "./components/subheading";
import Accordion from "./components/accordians";
import { IconChevronRight } from "@tabler/icons-react";
import Image from "next/image";
import Head from "next/head";
import Script from "next/script";


export default function Home() {



  const faqs = [
    {
      id: 1,
      question: "Do you offer car exchange services?",
      answer:
        "Yes, we offer car exchange services only for T-permit where you can exchange your old car for a new or pre-owned vehicle of your choice. Our experts provide a fair valuation of your existing car."
    },
    {
      id: 2,
      question: "How do I sell my car to Priti Naixa Pvt. Ltd.?",
      answer:
        "1. Contact us or visit our showroom for car inspection.Get a free valuation based on market price and car condition.Complete documentation and receive instant payment."
    },
    {
      id: 3,
      question: "Can I buy a car on finance through Priti Naixa Pvt. Ltd.?",
      answer:
        "Yes. We have tie-ups with leading financial institutions and banks to offer easy car loan options with minimal documentation and quick approval."
    },
    {
      id: 4,
      question: "Do you provide warranty or after-sales service for used cars?",
      answer:
        "Yes, selected vehicles come with limited warranty and service support. Warranty coverage depends on the car’s model, age, and condition."
    }
  ];

  const NewModelTab = [
    "Maruti Suzuki", "Hyundai"
  ]

  const UsedModelTab = [
    "Maruti Suzuki", "Hyundai"
  ]

  const [newfeatured, setNewFeatured] = useState(NewModelTab[0]);
  const [usedfeatured, setUsedFeatured] = useState(UsedModelTab[0]);

  const FilteredNewCars = carsNew.filter(car => car.brand === newfeatured);
  const FilteredUsedCars = usedCars.filter(car => car.brand === usedfeatured);

  const slides = [
    {
      title: "Find Your Perfect T-Permit Car",
      description:
        "Discover a wide range of brand-new T-Permit vehicles designed for performance, comfort, and long journeys. Get the best finance and exchange offers today!",
      buttonText: "Explore New Cars",
      buttonLink: "/new_cars",
      imageUrl: "/priti-naixa-new-t-permitcar-banner.png",
      altText: "Brand New T-Permit Cars",
    },
    {
      title: "Certified Used T-Permit Cars",
      description:
        "Buy trusted, inspected, and affordable used T-Permit cars with complete service history. Enjoy high mileage, reliability, and great resale value.",
      buttonText: "Browse Used Cars",
      buttonLink: "/old_cars",
      imageUrl: "/priti-naixa-used-car-banner.png",
      altText: "Used T-Permit Cars for Sale",
    },
    // {
    //   title: "Premium Tyres & Accessories",
    //   description:
    //     "Choose from a wide range of branded tyres and high-quality car accessories. Perfect fit, long-lasting performance, and expert installation guaranteed.",
    //   buttonText: "Shop Tyres & Parts",
    //   buttonLink: "/tyres-accessories",
    //   imageUrl:
    //     "/banner2.jpg",
    //   altText: "Car Tyres and Accessories",
    // },
    {
      title: "Expert Post-Sale Services",
      description:
        "Keep your T-Permit car running like new with our expert servicing, genuine parts, and 24x7 roadside assistance. Hassle-free maintenance guaranteed.",
      buttonText: "Book a Service",
      buttonLink: "/services",
      imageUrl: "/priti-naixa-t-permit-car-service-banner.png",
      altText: "T-Permit Car Servicing and Maintenance",
    },
  ];


  const NewCards = FilteredNewCars.map(car => ({
    id: car.id,
    title: `${car.name} ${car.year} |  ${car.brand}`,
    description: ` ${car.transmission} | ${car.fuelType}`,
    imageUrl: car.images[0],
    altText: `${car.year} ${car.model} image`,
    detailLink: `/new_cars/${car.id}`,
  }));

  const UsedCards = FilteredUsedCars.map(car => ({
    id: car.id,
    title: `${car.name} ${car.year} | ${car.brand}`,
    description: ` ${car.transmission} | ${car.fuelType}`,
    imageUrl: car.images[0],
    altText: `${car.year} ${car.model} image`,
    detailLink: `/new_cars/${car.id}`,
  }));

  return (
    <>
      <Script
        id="ld-json"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AutoDealer",
            name: "Priti Naixa Private Limited T-Permit Vehicle Showroom",
            image: "https://pritinaixa.com/logo.png",
            "@id": "",
            url: "https://pritinaixa.com",
            telephone: "+91-9136771018",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Shop 1 & 2, Tarique Galaxy, Plot-181,",
              addressLocality: "Sector-2, Taloja, Panvel, Raigarh,(MH),",
              addressRegion: "Maharashtra",
              postalCode: "410208",
              addressCountry: "IN",
            },
            
            sameAs: [
              "https://www.facebook.com/share/1A693CpYnj/?mibextid=wwXIfr",
              "https://www.instagram.com/priti_naixa_?igsh=MWt5ZnM4ZjhiZ3VsNQ%3D%3D&utm_source=qr",
              "https://youtube.com/@pritinaixa2018?si=dzisIPRvF_0pkC7Y",
            ],
          }),
        }}
      />

      <Head>
        {slides.map((slide, i) => (
          <link
            key={i}
            rel="preload"
            as="image"
            href={slide.imageUrl}
            fetchPriority="high"
          />
        ))}
      </Head>
      <main>

        <Carousel slides={slides} autoPlay={true} autoPlayInterval={8000} />

        <Container className=" max-w-7xl flex-col items-center justify-center  ">


          <section className="w-full mt-12 border-1 bg-white  border-gray-300 rounded-xl pending-4 shadow-lg">

            <div className="pl-4 pt-4 border-b border-gray-300 ">
              <SectionHeading delay={0.5}>
                New Collections
              </SectionHeading>
              {/* <SubHeading className="text-lg ">
              Explore our latest offerings with detailed insights.
            </SubHeading> */}
              <div className="flex overflow-x-auto  w-max ">
                {NewModelTab.map((tab, index) => (
                  <button
                    key={index}
                    onClick={() => setNewFeatured(tab)}
                    className={`px-4 py-2 mx-1 font-bold cursor-pointer sm:font-semibold text-sm whitespace-nowrap transition-colors duration-300 ${newfeatured === tab
                      ? ' border-b-3 border-accent text-gray-900 '
                      : 'hover:bg-gray-300 '
                      }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>


            <SectionCarousel
              cards={NewCards}
              autoPlay={false} // Set to true if desired
              slidesToShow={{ mobile: 1.3, tablet: 2.2, desktop: 3.3 }}
              showArrows={true}
              showDots={true}
            />
            <div className='text-start px-10 py-4 border-t border-gray-300'>
              <Link href={'/new_cars'} className="text-sm font-bold  flex  md:font-semibold text-slate-900 hover:text-accent w-max">
                Explore More <IconChevronRight />
              </Link>
            </div>
          </section>

          <section className="w-full mt-12 border-1 bg-white  border-gray-300 rounded-xl pending-4 shadow-lg">

            <div className="pl-4 pt-4 border-b border-gray-300 ">
              <SectionHeading delay={0.5}>
                Used Collections
              </SectionHeading>
              {/* <SubHeading className="text-lg ">
              Explore our latest offerings with detailed insights.
            </SubHeading> */}
              <div className="flex overflow-x-auto pb-0 w-max ">
                {UsedModelTab.map((tab, index) => (
                  <button
                    key={index}
                    onClick={() => setUsedFeatured(tab)}
                    className={`px-4 py-2 mx-1 font-bold cursor-pointer sm:font-semibold text-sm whitespace-nowrap transition-colors duration-300 ${usedfeatured === tab
                      ? ' border-b-3 border-accent text-gray-900 '
                      : 'hover:bg-gray-300 '
                      }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>


            <SectionCarousel
              cards={UsedCards}
              autoPlay={false} // Set to true if desired
              slidesToShow={{ mobile: 1.3, tablet: 2.2, desktop: 3.3 }}
              showArrows={true}
              showDots={true}
            />
            <div className='text-start px-10 py-4 border-t border-gray-300'>
              <Link href={'/old_cars'} className="text-sm font-bold  flex  md:font-semibold text-slate-900 hover:text-accent w-max">
                Explore More <IconChevronRight />
              </Link>
            </div>
          </section>

          <section className="mt-12">
            <div className=" mx-auto flex flex-col lg:flex-row items-center ">

              {/* Left: Image */}
              <div className=" md:rounded-lg rounded-t-lg overflow-hidden shadow-md">
                <Image
                  width={500}
                  height={600}
                  src="https://imgs.search.brave.com/DpNP5A-WyKan_eoEhe9ZcOHVpq_jnDw2LfsaLvzGwAM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9qa3R5/cmUtbWVkaWEtMS5z/My5hcC1zb3V0aC0x/LmFtYXpvbmF3cy5j/b20vSktfU21hcnRf/dHlyZV8yX1gxX0NU/Q18wMV9iZDg5NDRk/ZTU3LmpwZz9mb3Jt/YXQ9YXV0byZ3aWR0/aD02NDAmcXVhbGl0/eT03NQ" // replace with actual image path
                  alt="JK Tyre Franchise"
                  className="w-full  md:rounded-lg rounded-t-lg"
                />
              </div>

              {/* Right: Content */}
              <div className="w-full lg:w-1/2 px-6 bg-gradient-to-b from-gray-800  to-sky-800 shadow-xl rounded-b-2xl md:rounded-b-none md:rounded-br-2xl py-10 lg:text-left"
              >
                <SectionHeading className="text-white ">
                  JK Tyre Franchise Verified Dealer
                </SectionHeading>
                <SubHeading className="text-gray-200 ">
                  Partner with one of India’s most trusted tyre brands — <strong>JK Tyre</strong>.
                  As an authorized verified dealer, we provide complete support for franchise setup,
                  branding, and operational excellence to ensure smooth business performance.
                </SubHeading>
                <SubHeading className="text-gray-200 mb-6">
                  With JK Tyre’s nationwide presence and high customer trust, you can expand your
                  automotive business with guaranteed quality, genuine products, and strong after-sales support.
                </SubHeading>
                <Link href={'/contact'} className="px-4 py-2 text-sm hover:bg-yellow-400 border border-yellow-400 shadow-md text-white  hover:text-slate-900 cursor-pointer font-semibold transition-all duration-300">
                  Enquire Now
                </Link>
              </div>

            </div>
          </section>

          <section className="w-full mt-12 py-10  border border-gray-200 rounded-xl pending-4 shadow-lg">
            <div className="px-8">
              <SectionHeading >Customer Reviews</SectionHeading>
              <SubHeading className="">See what our happy customers say about us.</SubHeading>
            </div>

            <CustomerReviews
              reviews={[
                { id: '1', title: 'Happy delivery Prince T&T. Priti Naixa taloja phase 1 Navi Mumbai', videoUrl: 'https://www.youtube.com/embed/4H4V5lpr_w0' },
                { id: '2', title: 'Happy delivery M.A. T&T. Priti Naixa taloja phase 1 Navi Mumbai', videoUrl: 'https://www.youtube.com/embed/4JODQoh2Mxs' },
                { id: '3', title: 'Very happy driver. Priti Naixa fleet. WagonR,Dzire,Aura,Ertiga all cars available', videoUrl: 'https://www.youtube.com/embed/85c56aF3s68' },
                { id: '4', title: 'Happy delivery at Priti naixa. 2023 modal WagonR. Silver colour. Very happy Costmor', videoUrl: 'https://www.youtube.com/embed/N_rU8qLE36M' },
                { id: '5', title: 'Happy delivery Rudra T&T . Priti Naixa taloja phase 1 Navi Mumbai', videoUrl: 'https://www.youtube.com/embed/S-gQ2F3yJqI' },
                { id: '6', title: 'Happy delivery at Priti Naixa . Taloja phase 1 Navi Mumbai', videoUrl: 'https://www.youtube.com/embed/H4iCrljn8fU' },
              ]}
            />
            <div className="px-8">
              <Testimonials />
            </div>
          </section>

          <section className="py-12 ">
            <div className="text-center mb-8">
              <SectionHeading >
                Frequently Asked Questions
              </SectionHeading>
              <div className=" flex justify-center">
                <SubHeading >
                  Find answers to common queries about our tyre franchise opportunities.
                </SubHeading>
              </div>

            </div>

            <Accordion items={faqs} />
          </section>
        </Container>
      </main>
    </>
  );
}
