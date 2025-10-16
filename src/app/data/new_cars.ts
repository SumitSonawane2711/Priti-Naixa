// cars_new.ts

export interface Car {
  id: string;
  brand: string;
  name: string;
  year: string;
  fuelType: string[];
  bodyType: string;
  transmission: string[];
  seats: number;
  rto: string[];
  discount: string;
  color: string;
  budget: string;
  keyFeatures: { [key: string]: string } | string;
  images: string[];
  model?: string;
  variant?: string;
  description?: string;
}

export const brands = ["Maruti Suzuki", "Hyundai", "Tata"];

export const cars: Car[] = [
  // Maruti Suzuki
  
  {
    id: "maruti-ertiga-tourm",
    brand: "Maruti Suzuki",
    name: "Ertiga Tour M",
    year: "2025",
    fuelType: ["Petrol", "CNG"],
    bodyType: "MPV",
    transmission: ["Manual", "Automatic"],
    seats: 7,
    rto: ["All Mumbai", "MH"],
    discount: "Depends on variant",
    color: "All",
    budget: "Affordable",
    keyFeatures: {
      Engine: "1.2L K12N Dual VVT Petrol Engine",
      Power: "83 PS @ 6000 rpm",
      Torque: "113 Nm @ 4000 rpm",
      Mileage: "21.79 km/l (Petrol), 28.4 km/kg (CNG)",
      Transmission: "5-speed Manual, 5-speed AMT",
      Fuel: "Petrol, CNG",
    },
    images: [
      "/cars/new-cars/maruti-suzuki/maruti-ertiga-tourm-3.png",
      "/cars/new-cars/maruti-suzuki/maruti-ertiga-tourm-1.png",
      "/cars/new-cars/maruti-suzuki/maruti-ertiga-tourm-2.png",
    ],
    description:
      "The Maruti-Ertiga-Tourm CNG / Petrol offers style and economy, combining a premium sedan feel with exceptional fuel efficiency for daily rides.",
  },
  {
    id: "maruti-ertiga-vxi",
    brand: "Maruti Suzuki",
    name: "Ertiga VXI",
    year: "2025",
    fuelType: ["Petrol", "CNG"],
    bodyType: "MPV",
    transmission: ["Manual", "Automatic"],
    seats: 7,
    rto: ["All Mumbai", "MH"],
    discount: "Depends on variant",
    color: "All",
    budget: "Affordable",
    keyFeatures: {
      Engine: "1.2L K12N Dual VVT Petrol Engine",
      Power: "83 PS @ 6000 rpm",
      Torque: "113 Nm @ 4000 rpm",
      Mileage: "21.79 km/l (Petrol), 28.4 km/kg (CNG)",
      Transmission: "5-speed Manual, 5-speed AMT",
      Fuel: "Petrol, CNG",
    },
    images: [
      "/cars/new-cars/maruti-suzuki/maruti-ertiga-vxi-2.png",
      "/cars/new-cars/maruti-suzuki/maruti-ertiga-vxi-1.png",
      "/cars/new-cars/maruti-suzuki/maruti-ertiga-vxi-3.png",
    ],
    description:
      "The Maruti-Ertiga-vxi CNG / Petrol offers style and economy, combining a premium sedan feel with exceptional fuel efficiency for daily rides.",
  },
  {
    id: "maruti-ertiga-zxi",
    brand: "Maruti Suzuki",
    name: "Ertiga ZXI",
    year: "2025",
    fuelType: ["Petrol", "CNG"],
    bodyType: "MPV",
    transmission: ["Manual", "Automatic"],
    seats: 7,
    rto: ["All Mumbai", "MH"],
    discount: "Depends on variant",
    color: "All",
    budget: "Affordable",
    keyFeatures: {
      Engine: "1.2L K12N Dual VVT Petrol Engine",
      Power: "83 PS @ 6000 rpm",
      Torque: "113 Nm @ 4000 rpm",
      Mileage: "21.79 km/l (Petrol), 28.4 km/kg (CNG)",
      Transmission: "5-speed Manual, 5-speed AMT",
      Fuel: "Petrol, CNG",
    },
    images: [
      "/cars/new-cars/maruti-suzuki/maruti-ertiga-zxi-1.png",
      "/cars/new-cars/maruti-suzuki/maruti-ertiga-zxi-2.png",
      "/cars/new-cars/maruti-suzuki/maruti-ertiga-zxi-3.png",
    ],
    description:
      "The Maruti-Ertiga-zxi CNG / Petrol offers style and economy, combining a premium sedan feel with exceptional fuel efficiency for daily rides.",
  },
  {
    id: "maruti-dzire-tours",
    brand: "Maruti Suzuki",
    name: "Dzire Tour S CNG",
    year: "2025",
    fuelType: ["Petrol","CNG"],
    bodyType: "Sedan",
    transmission: ["Manual"],
    seats: 5,
    rto: ["All Mumbai", "MH"],
    discount: "Depends on variant",
    color: "All",
    budget: "Affordable",
    keyFeatures: {
      Engine: "1.2L K12N Dual VVT Petrol Engine",
      Power: "83 PS @ 6000 rpm",
      Torque: "113 Nm @ 4000 rpm",
      Mileage: "21.79 km/l (Petrol), 28.4 km/kg (CNG)",
      Transmission: "5-speed Manual, 5-speed AMT",
      Fuel: "Petrol, CNG",
    },
    images: [
      "/cars/new-cars/maruti-suzuki/maruti-dzire-tours-2.png",
      "/cars/new-cars/maruti-suzuki/maruti-dzire-tours-1.png",
      "/cars/new-cars/maruti-suzuki/maruti-dzire-tours-3.png",
    ],
    description:
      "The Maruti Dzire-Tours CNG / Petrol offers style and economy, combining a premium sedan feel with exceptional fuel efficiency for daily rides.",
  },
  {
    id: "maruti-wagonr-tourh3",
    brand: "Maruti Suzuki",
    name: "WagonR Tour H3",
    year: "2025",
    fuelType: ["Petrol", "CNG"],
    bodyType: "Hatchback",
    transmission: ["Manual", "Automatic"],
    seats: 5,
    rto: ["All Mumbai", "MH"],
    discount: "Depends on variant",
    color: "All",
    budget: "Affordable",
    keyFeatures: {
      Engine: "1.2L K12N Dual VVT Petrol Engine",
      Power: "83 PS @ 6000 rpm",
      Torque: "113 Nm @ 4000 rpm",
      Mileage: "21.79 km/l (Petrol), 28.4 km/kg (CNG)",
      Transmission: "5-speed Manual, 5-speed AMT",
      Fuel: "Petrol, CNG",
    },
    images: [
      "/cars/new-cars/maruti-suzuki/wagonr-silky-silver.png",
      "/cars/new-cars/maruti-suzuki/wagon-r-tour-Image-2.png",
      "/cars/new-cars/maruti-suzuki/wagon-r-tour-1.png",
    ],
    description:
      "The 2025 Maruti Suzuki Wagonr-Tourh3 combines comfort and efficiency, perfect for city drives with flexible CNG and Petrol options.",
  },
  {
    id: "maruti-wagonr-lxi",
    brand: "Maruti Suzuki",
    name: "WagonR LXI",
    year: "2025",
    fuelType: ["Petrol", "CNG"],
    bodyType: "Hatchback",
    transmission: ["Manual", "Automatic"],
    seats: 5,
    rto: ["All Mumbai", "MH"],
    discount: "Depends on variant",
    color: "All",
    budget: "Affordable",
    keyFeatures: {
      Engine: "1.2L K12N Dual VVT Petrol Engine",
      Power: "83 PS @ 6000 rpm",
      Torque: "113 Nm @ 4000 rpm",
      Mileage: "21.79 km/l (Petrol), 28.4 km/kg (CNG)",
      Transmission: "5-speed Manual, 5-speed AMT",
      Fuel: "Petrol, CNG",
    },
    images: [
      "/cars/new-cars/maruti-suzuki/maruti-wagonr-lxi-3.png",
      "/cars/new-cars/maruti-suzuki/maruti-wagonr-lxi-2.png",
      "/cars/new-cars/maruti-suzuki/maruti-wagonr-lxi-4.png",
    ],
    description:
      "The 2025 Maruti Suzuki Wagonr-Tourh3 combines comfort and efficiency, perfect for city drives with flexible CNG and Petrol options.",
  },
  {
    id: "maruti-wagon-r-vxi",
    brand: "Maruti Suzuki",
    name: "WagonR VXI",
    year: "2025",
    fuelType: ["Petrol", "CNG"],
    bodyType: "Hatchback",
    transmission: ["Manual", "Automatic"],
    seats: 5,
    rto: ["All Mumbai", "MH"],
    discount: "Depends on variant",
    color: "All",
    budget: "Affordable",
    keyFeatures: {
      Engine: "1.2L K12N Dual VVT Petrol Engine",
      Power: "83 PS @ 6000 rpm",
      Torque: "113 Nm @ 4000 rpm",
      Mileage: "21.79 km/l (Petrol), 28.4 km/kg (CNG)",
      Transmission: "5-speed Manual, 5-speed AMT",
      Fuel: "Petrol, CNG",
    },
    images: [
      "/cars/new-cars/maruti-suzuki/maruti-wagon-r-vxi-1.png",
      "/cars/new-cars/maruti-suzuki/maruti-wagon-r-vxi-2.png",
      "/cars/new-cars/maruti-suzuki/maruti-wagon-r-vxi-3.png",
    ],
    description:
      "The Maruti-Wagon-r-vxi CNG / Petrol offers style and economy, combining a premium sedan feel with exceptional fuel efficiency for daily rides.",
  },

  // Hyundai
  {
    id: "hyundai-aura-e",
    brand: "Hyundai",
    name: "Aura E CNG",
    year: "2025",
    fuelType: ["CNG"],
    bodyType: "Sedan",
    transmission: ["Manual"],
    seats: 5,
    rto: ["All Mumbai", "MH"],
    discount: "Depends on variant",
    color: "All",
    budget: "Affordable",
    keyFeatures: {
      Engine: "1.2L K12N Dual VVT Petrol Engine",
      Power: "83 PS @ 6000 rpm",
      Torque: "113 Nm @ 4000 rpm",
      Mileage: "21.79 km/l (Petrol), 28.4 km/kg (CNG)",
      Transmission: "5-speed Manual, 5-speed AMT",
      Fuel: "CNG",
    },
    images: [
      "/cars/new-cars/hundai/hyundai-aura-e-1.png",
      "/cars/new-cars/hundai/hyundai-aura-e-2.png",
      "/cars/new-cars/hundai/hyundai-aura-e-3.png",
    ],
    description:
      "The Hyundai Aura E CNG offers style and economy, combining a premium sedan feel with exceptional fuel efficiency for daily rides.",
  },
  {
    id: "hyundai-aura-s",
    brand: "Hyundai",
    name: "Aura S CNG",
    year: "2025",
    fuelType: ["CNG"],
    bodyType: "Sedan",
    transmission: ["Manual"],
    seats: 5,
    rto: ["All Mumbai", "MH"],
    discount: "Depends on variant",
    color: "All",
    budget: "Affordable",
    keyFeatures: {
      Engine: "1.2L K12N Dual VVT Petrol Engine",
      Power: "83 PS @ 6000 rpm",
      Torque: "113 Nm @ 4000 rpm",
      Mileage: "21.79 km/l (Petrol), 28.4 km/kg (CNG)",
      Transmission: "5-speed Manual, 5-speed AMT",
      Fuel: "CNG",
    },
    images: [
      "/cars/new-cars/hundai/hyundai-aura-s-3.png",
      "/cars/new-cars/hundai/hyundai-aura-s-1.png",
      "/cars/new-cars/hundai/hyundai-aura-s-2.png",
    ],
    description:
      "The Hyundai Aura-s offers style and economy, combining a premium sedan feel with exceptional fuel efficiency for daily rides.",
  },
  {
    id: "hyundai-aura-sx",
    brand: "Hyundai",
    name: "Aura SX CNG",
    year: "2025",
    fuelType: ["CNG"],
    bodyType: "Sedan",
    transmission: ["Manual", "Automatic"],
    seats: 5,
    rto: ["All Mumbai", "MH"],
    discount: "Depends on variant",
    color: "All",
    budget: "Affordable",
    keyFeatures: {
      Engine: "1.2L K12N Dual VVT Petrol Engine",
      Power: "83 PS @ 6000 rpm",
      Torque: "113 Nm @ 4000 rpm",
      Mileage: "21.79 km/l (Petrol), 28.4 km/kg (CNG)",
      Transmission: "5-speed Manual, 5-speed AMT",
      Fuel: "CNG",
    },
    images: [
      "/cars/new-cars/hundai/hyundai-aura-sx-3.png",
      "/cars/new-cars/hundai/hyundai-aura-sx-1.png",
      "/cars/new-cars/hundai/hyundai-aura-sx-2.png",
    ],
    description:
      "The Hyundai Aura SX CNG offers style and economy, combining a premium sedan feel with exceptional fuel efficiency for daily rides.",
  },
];
