import {  cars as carsNew } from "@/app/data/old_cars";
import { Separator } from "@/app/components/ui/separator";
import { Badge } from "@/app/components/ui/badge";
import BookingModal from "@/app/components/BookingModal";
import SectionCarousel from "@/app/components/section_carousel";
import { SectionHeading } from "@/app/components/section-heading";
import { SubHeading } from "@/app/components/subheading";
import ProductCarousel from "@/app/components/product_carousel";

export async function generateStaticParams() {

  return carsNew.map((car) => ({ id: car.id }));
}

const CarDetailPage = ({params} : {params: {id:string}}) => {
  const { id } = params;
  const car = carsNew.find((car) => car.id === id);

  
  const selectedCars = carsNew
    .filter((c) => c.id !== car?.id)
    .map((car) => ({
      id: car.id,
      title: car.name,
      description: `${car.transmission} | ${car.fuelType}`,
      imageUrl: car.images[0],
      altText: `${car.name} ${car.model}`,
      detailLink: `/old_cars/${car.id}`,
    }));

  if (!car) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        Car details not found.
      </div>
    );
  }

  return (
    <div
      
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
    >
      {/* Hero Section */}
      <section className="grid md:grid-cols-2 gap-8">
         {/* Product Carousel */}
      <ProductCarousel
        images={car.images}   // array of image URLs
        name={car.model}
      />

        {/* Car Info */}
        <div>
          <h1
            
            className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2 text-gray-900"
          >
            {car.name} {car.model}

          </h1>

          <div className="flex align-middle gap-3 mb-4 items-center">
            <Badge className="bg-accent shadow-md text-yellow-800  px-3 py-1 text-sm">
              T Permit Vehicle
            </Badge>
            <Badge className="bg-accent shadow-md text-yellow-800 px-3 py-1 text-sm">
              Used Car
            </Badge>
            <p className="text-gray-600  text-sm sm:text-base">
              {car.ownership}
            </p>
            <p className="text-gray-600  text-sm sm:text-base">
              Model Year: {car.year}
            </p>
          </div>
          <p className="text-gray-600 mb-3 text-sm sm:text-base">
            {car.description}
          </p>
          

          <BookingModal
            car={{ brand: car.name, model: car?.model || "", variant: car.variant, year: car.year, fuelType: car.fuelType }}
          />

          <Separator className="my-5" />

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm sm:text-base">
            <p>
              <strong>Fuel Type:</strong> {car.fuelType}
            </p>
            <p>
              <strong>Body Type:</strong> {car.bodyType}
            </p>
            <p>
              <strong>Seats:</strong> {car.seats}
            </p>
            <p>
              <strong>Transmission:</strong> {car.transmission}
            </p>
            <p>
              <strong>Color:</strong> {car.color}
            </p>
            <p>
              <strong>Budget:</strong> {car.budget}
            </p>
          </div>

          <Separator className="my-6" />

        </div>
      </section>

      {/* Key Features */}
      <div
        className="w-full mt-6 p-10  border bg-white border-gray-200 rounded-xl pending-4 shadow-lg"
      >
        <SectionHeading>
          Key Features
        </SectionHeading>
        <div className="grid grid-cols-2 gap-4">
          {Object.entries(car.keyFeatures).map(([key, value], i) => (
            <div
              key={i}
              className="p-3 bg-gray-50 rounded-xl border border-gray-100 shadow-sm"
            >
              <p className="font-semibold text-sky-700">{key}</p>
              <p className="text-gray-700 text-sm sm:text-base">{value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <section
        
        className="mt-12"
      >
        <SectionHeading>
          Pre & Post Purchase Services
        </SectionHeading>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "RTO Registration & Permit Assistance",
              desc: "Complete RTO registration, T Permit processing, and number plate support.",
            },
            {
              title: "Car Insurance",
              desc: "Comprehensive or third-party insurance with easy renewal options.",
            },
            {
              title: "Loan & Finance Help",
              desc: "Assistance with EMI options and car loans from trusted financial partners.",
            },
            {
              title: "Maintenance Support",
              desc: "Free initial maintenance and service reminders post-purchase.",
            },
            {
              title: "Roadside Assistance",
              desc: "24/7 roadside support, towing, and repair assistance.",
            },
            {
              title: "Post Buy Services",
              desc: "Extended warranty and after-sales care for long-term satisfaction.",
            },
          ].map((service, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md p-5 border border-gray-100"
            >
              <h4 className="text-lg font-semibold text-sky-700 mb-2">
                {service.title}
              </h4>
              <p className="text-gray-600 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full mt-10 md:mt-10 border-1 border-indigo-200 rounded-2xl p-4 sm:p-6 bg-gray-100 ">
        <div className="text-start mb-8">
          <SectionHeading >
            You May Also Like
          </SectionHeading>
          <SubHeading >
            Explore our latest offerings with detailed insights.
          </SubHeading>

          <SectionCarousel
            cards={selectedCars}
            autoPlay={false} // Set to true if desired
            slidesToShow={{ mobile: 1, tablet: 3, desktop: 3 }}
            showArrows={true}
          />
        </div>
      </section>
      
    </div>
  );
};

export default CarDetailPage;
