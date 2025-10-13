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
      "https://imgs.search.brave.com/YioxK82UkByGpZVn0pjeSJfyM_cmfekV4TcIBcJ82m8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGlt/Zy5jYXJkZWtoby5j/b20vaW1hZ2VzL2Nh/cmV4dGVyaW9yaW1h/Z2VzLzYzMHg0MjAv/TWFydXRpL1dhZ29u/LVItdG91ci85NDQy/LzE2NzU5MjI3MTA3/MjAvZnJvbnQtbGVm/dC1zaWRlLTQ3Lmpw/Zz9pbXdpZHRoPTQy/MCZpbXBvbGljeT1y/ZXNpemU",
      "https://imgs.search.brave.com/Bfq1r1BhsWH5SIHI9ojMJlYAai13tlRoJiOS1ePU9mM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tYy5i/YWphamZpbnNlcnYu/aW4vbWVkaWEvY2F0/YWxvZy9wcm9kdWN0/L20vYS9tYXJ1dGlz/dXp1a2lhcmVuYXdh/Z29ucnRvdXJoM3Np/bGt5c2lsdmVyX2Fk/ZGl0aW9uYWw3Lmpw/ZWc",
      "https://imgs.search.brave.com/_Du81ZIHIHF5C-r99rsinzGjAAL9G0uNLodCsIjqAyg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hei1j/aS1hZmRlLXByZC1h/cmVuYS0wMS1lN2Zt/aDNkeGFjYmdleWg1/LnowMS5henVyZWZk/Lm5ldC8tL21lZGlh/L2ltYWdlcy9tYXJ1/dGkvbWFydXRpc3V6/dWtpL2Nhci9jYXIt/c3BlY3MtaW1hZ2Uv/dG91ci90b3VyLW0t/Y2FyLWltZy53ZWJw",
    ],
    description:
      "The 2025 Maruti Suzuki WagonR VXI combines comfort and efficiency, perfect for city drives with flexible CNG and Petrol options.",
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
      "/cars/new-cars/maruti-wagonr-lxi-1.png",
      "https://imgs.search.brave.com/Bfq1r1BhsWH5SIHI9ojMJlYAai13tlRoJiOS1ePU9mM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tYy5i/YWphamZpbnNlcnYu/aW4vbWVkaWEvY2F0/YWxvZy9wcm9kdWN0/L20vYS9tYXJ1dGlz/dXp1a2lhcmVuYXdh/Z29ucnRvdXJoM3Np/bGt5c2lsdmVyX2Fk/ZGl0aW9uYWw3Lmpw/ZWc",
      "https://imgs.search.brave.com/_Du81ZIHIHF5C-r99rsinzGjAAL9G0uNLodCsIjqAyg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hei1j/aS1hZmRlLXByZC1h/cmVuYS0wMS1lN2Zt/aDNkeGFjYmdleWg1/LnowMS5henVyZWZk/Lm5ldC8tL21lZGlh/L2ltYWdlcy9tYXJ1/dGkvbWFydXRpc3V6/dWtpL2Nhci9jYXIt/c3BlY3MtaW1hZ2Uv/dG91ci90b3VyLW0t/Y2FyLWltZy53ZWJw",
    ],
    description:
      "A 7-seater MPV designed for family and tour use, the Ertiga Tour M delivers practicality, comfort, and impressive mileage.",
  },
  {
    id: "maruti-wagonr-vxi",
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
      "https://imgs.search.brave.com/4kJxraCWZCH3Ytxb9VCXxddvWDE3pGRnJjDjfwDYJ7Q/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jb250/ZW50LmNhcmxlbG8u/Y29tL3VwbG9hZHMv/bW9kZWwvd2Fnb24t/ci0xLndlYnA",
      "https://imgs.search.brave.com/q8_SRFPegKqeeQzKnysyCihh_CGh5ZZCOnDs2dCm16A/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jb250/ZW50LmNhcmxlbG8u/Y29tL3VwbG9hZHMv/bW9kZWwvd2Fnb24t/ci0zLndlYnA",
      "https://imgs.search.brave.com/YioxK82UkByGpZVn0pjeSJfyM_cmfekV4TcIBcJ82m8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGlt/Zy5jYXJkZWtoby5j/b20vaW1hZ2VzL2Nh/cmV4dGVyaW9yaW1h/Z2VzLzYzMHg0MjAv/TWFydXRpL1dhZ29u/LVItdG91ci85NDQy/LzE2NzU5MjI3MTA3/MjAvZnJvbnQtbGVm/dC1zaWRlLTQ3Lmpw/Zz9pbXdpZHRoPTQy/MCZpbXBvbGljeT1y/ZXNpemU",
      "https://imgs.search.brave.com/q8_SRFPegKqeeQzKnysyCihh_CGh5ZZCOnDs2dCm16A/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jb250/ZW50LmNhcmxlbG8u/Y29tL3VwbG9hZHMv/bW9kZWwvd2Fnb24t/ci0zLndlYnA",
      "https://imgs.search.brave.com/Bfq1r1BhsWH5SIHI9ojMJlYAai13tlRoJiOS1ePU9mM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tYy5i/YWphamZpbnNlcnYu/aW4vbWVkaWEvY2F0/YWxvZy9wcm9kdWN0/L20vYS9tYXJ1dGlz/dXp1a2lhcmVuYXdh/Z29ucnRvdXJoM3Np/bGt5c2lsdmVyX2Fk/ZGl0aW9uYWw3Lmpw/ZWc",
      "https://imgs.search.brave.com/_Du81ZIHIHF5C-r99rsinzGjAAL9G0uNLodCsIjqAyg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hei1j/aS1hZmRlLXByZC1h/cmVuYS0wMS1lN2Zt/aDNkeGFjYmdleWg1/LnowMS5henVyZWZk/Lm5ldC8tL21lZGlh/L2ltYWdlcy9tYXJ1/dGkvbWFydXRpc3V6/dWtpL2Nhci9jYXIt/c3BlY3MtaW1hZ2Uv/dG91ci90b3VyLW0t/Y2FyLWltZy53ZWJw",
    ],
    description:
      "The Hyundai Aura SX CNG offers style and economy, combining a premium sedan feel with exceptional fuel efficiency for daily rides.",
  },
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
      "https://imgs.search.brave.com/Iq8tLWKSjKlmQ53iLzWJ8ShFVLLOiIaKj8GuyEDgdKY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdk/LmFlcGxjZG4uY29t/LzY0MngzNjEvY3cv/ZWMvNDI4NDQvTWFy/dXRpLVN1enVraS1F/cnRpZ2EtRXh0ZXJp/b3ItMTczMTM1Lmpw/Zz93bT0xJnE9ODA",
      "https://imgs.search.brave.com/XQiNrMCclqu3WzF76K1hMzIxjU736XuO83wMdl6bDCk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y2FyYW5kYmlrZS5j/b20vX25leHQvaW1h/Z2U_dXJsPWh0dHBz/Oi8vaW1hZ2VzLmNh/cmFuZGJpa2UuY29t/L2Nhci1pbWFnZXMv/Y29sb3JzL21hcnV0/aS1zdXp1a2kvZXJ0/aWdhL21hcnV0aS1z/dXp1a2ktZXJ0aWdh/LXBlYXJsLW1ldGFs/bGljLWFyY3RpYy13/aGl0ZS5wbmc_dj0x/NjUzMzEyODMyJnc9/MTYwMCZxPTkw",
    ],
    description:
      "The Hyundai Aura SX CNG offers style and economy, combining a premium sedan feel with exceptional fuel efficiency for daily rides.",
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
      "https://imgs.search.brave.com/vlVGyJYH-l8gj7bI1nupNqIlGXryR6ROio6Hu6B0WgE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hdXRv/LmhpbmR1c3RhbnRp/bWVzLmNvbS9fbmV4/dC9pbWFnZT91cmw9/aHR0cHM6Ly9hdXRv/LmhpbmR1c3RhbnRp/bWVzLmNvbS9jbXMt/aW1hZ2VzL21hcnV0/aXN1enVraV9lcnRp/Z2EvaW1hZ2VzL2V4/dGVyaW9yX21hcnV0/aXN1enVraS1lcnRp/Z2EyMDIyX2Zyb250/LWxlZnQtc2lkZS0x/XzYwMHg0MDAuanBn/Jnc9Mzg0MCZxPTc1",
      "https://imgs.search.brave.com/yXpP8APdhmGxj-LmiA9VzhFo9aGHgwDFYQll1PjlDi0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YXV0b3Zpc3RhLmlu/L2Fzc2V0cy9pbWcv/bmV3X2NhcnNfY29s/b3VyX3ZhcmlhbnRz/L25leHQtZ2VuLWVy/dGlnYS1jb2xvdXIt/cGVhcmwtbWV0YWxs/aWMtYXVidXJuLXJl/ZC5wbmc",
    ],
    description:
      "The Hyundai Aura SX CNG offers style and economy, combining a premium sedan feel with exceptional fuel efficiency for daily rides.",
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
      "https://imgs.search.brave.com/vlVGyJYH-l8gj7bI1nupNqIlGXryR6ROio6Hu6B0WgE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hdXRv/LmhpbmR1c3RhbnRp/bWVzLmNvbS9fbmV4/dC9pbWFnZT91cmw9/aHR0cHM6Ly9hdXRv/LmhpbmR1c3RhbnRp/bWVzLmNvbS9jbXMt/aW1hZ2VzL21hcnV0/aXN1enVraV9lcnRp/Z2EvaW1hZ2VzL2V4/dGVyaW9yX21hcnV0/aXN1enVraS1lcnRp/Z2EyMDIyX2Zyb250/LWxlZnQtc2lkZS0x/XzYwMHg0MDAuanBn/Jnc9Mzg0MCZxPTc1",
      "https://imgs.search.brave.com/OMCL-wPw3aBvVHrSdnX64CifXI3TCIs9-APX6FvDgNE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMub3ZlcmRyaXZl/LmluL3dwLWNvbnRl/bnQvb2RnYWxsZXJ5/LzIwMTgvMTEvNDg0/MjhfMjAxOS1NYXJ1/dGktU3V6dWtpLUVy/dGlnYV80Njh4MjYz/LmpwZw",
    ],
    description:
      "The Hyundai Aura SX CNG offers style and economy, combining a premium sedan feel with exceptional fuel efficiency for daily rides.",
  },
  {
    id: "maruti-dzire-tours",
    brand: "Maruti Suzuki",
    name: "Dzire Tour S CNG",
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
      Fuel: "Petrol, CNG",
    },
    images: [
      "https://imgs.search.brave.com/w8ftjAvldCl0s9jliziSdV0uHPiG2l9krf_BlXSBgSQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGlt/Zy5jYXJkZWtoby5j/b20vaW1hZ2VzL2Nh/cmV4dGVyaW9yaW1h/Z2VzLzYzMHg0MjAv/TWFydXRpL1N3aWZ0/LUR6aXJlLVRvdXIv/ODg2My8xNzE3Mzk3/OTE3MzgyL2Zyb250/LWxlZnQtc2lkZS00/Ny5qcGc_dHI9dy02/NjQ",
      "https://imgs.search.brave.com/3Mi8K8u1tjWTFcmbkcwb-1cCWZUAiG1XPrqic18L68o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cHJhdGhhbW1vdG9y/cy5jb20vcG0vaW1h/Z2VzL3RvdXItcy9j/b2xvci8xLndlYnA",
    ],
    description:
      "The Hyundai Aura SX CNG offers style and economy, combining a premium sedan feel with exceptional fuel efficiency for daily rides.",
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
      Fuel: "Petrol, CNG",
    },
    images: [
      "https://imgs.search.brave.com/WH2O21qqpqwOzhEkQSk4cb7d5BKVR_oyH35TVdk5nUo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wYXJr/cGx1cy1ia3QtaW1n/LnBhcmtwbHVzLmlv/L3Byb2R1Y3Rpb24v/Y2hhcmlvdF9zdGFn/aW5nL3B1YmxpYy9l/eHRlcmlvcmltYWdl/MTY1anBnaW1hZ2Vf/MjAyMzA4MDgxOTMw/MjQyMDQxMDkuanBn",
      "https://imgs.search.brave.com/5zjXzQO6bbr8qCFebfBuMcmIbuT8QI9mT504n2pj600/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hdXRv/LmhpbmR1c3RhbnRp/bWVzLmNvbS9fbmV4/dC9pbWFnZT91cmw9/aHR0cHM6Ly9pbWFn/ZXMuaGluZHVzdGFu/dGltZXMuY29tL2F1/dG8vYXV0by1pbWFn/ZXMvaHl1bmRhaS9h/dXJhL2V4dGVyaW9y/X2h5dW5kYWktYXVy/YV9yZWFyLWxlZnQt/dmlld182MDB4NDAw/LmpwZyZ3PTM4NDAm/cT03NQ",
      "https://imgs.search.brave.com/YioxK82UkByGpZVn0pjeSJfyM_cmfekV4TcIBcJ82m8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGlt/Zy5jYXJkZWtoby5j/b20vaW1hZ2VzL2Nh/cmV4dGVyaW9yaW1h/Z2VzLzYzMHg0MjAv/TWFydXRpL1dhZ29u/LVItdG91ci85NDQy/LzE2NzU5MjI3MTA3/MjAvZnJvbnQtbGVm/dC1zaWRlLTQ3Lmpw/Zz9pbXdpZHRoPTQy/MCZpbXBvbGljeT1y/ZXNpemU",
    ],
    description:
      "The Hyundai Aura SX CNG offers style and economy, combining a premium sedan feel with exceptional fuel efficiency for daily rides.",
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
      Fuel: "Petrol, CNG",
    },
    images: [
      "https://imgs.search.brave.com/AgkYHmL4H1A_oyxB6mHGvBB084AMZ4qJxvZRKG8NrhA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdk/LWN0LmFlcGxjZG4u/Y29tLzY2NHg0MTUv/bi94dnFmcTBiXzE2/MzkxMzEuanBnP3E9/ODA",
      "https://imgs.search.brave.com/qykpHTQ-qbENlvvls5PGZndMwRpi9E_Z-_zZyQAlQVQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuOTF3aGVlbHMu/Y29tL2Fzc2V0cy9j/X2ltYWdlcy9nYWxs/ZXJ5L2h5dW5kYWkv/YXVyYS9oeXVuZGFp/LWF1cmEtNy0xNzM4/NjgyOTc0LmpwZz93/PTEyMDAmcT04MA",
    ],
    description:
      "The Hyundai Aura SX CNG offers style and economy, combining a premium sedan feel with exceptional fuel efficiency for daily rides.",
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
      Fuel: "Petrol, CNG",
    },
    images: [
      "https://imgs.search.brave.com/kUuTDJjcUrxYmz3aYPZfGUEwDGgswKTESakO9qSZcUE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMtY2RuLmNhcnMy/NC5jb20vcHJvZC9h/dXRvLW5ld3MyNC1j/bXMvTmV3c3Jvb20v/MjAyNC8wOS8wMy9l/NzA5NjFiYi1iOTE3/LTQ3OTYtODdiMS1l/NWI2Nzc3ODllZDUt/SHl1bmRhaS1BdXJh/LUUtSHktQ05HLUxh/dW5jaGVkLndlYnA_/dz0yNzYmZHByPTMm/b3B0aW1pemU9bG93/JmZvcm1hdD1hdXRv/JnF1YWxpdHk9NTA",
      "https://imgs.search.brave.com/niCokpgZMpayv0WwVb4-9l_74YIN7M3lNQkxIxHHX7Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jb250/ZW50LmNhcmxlbG8u/Y29tL3VwbG9hZHMv/bW9kZWwvYXVyYS00/LndlYnA",
      "https://imgs.search.brave.com/0-Uzxpllk2d5SfkJvR4i4zsElO6W1NHEK54onVS9t1o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jb250/ZW50LmNhcmxlbG8u/Y29tL3VwbG9hZHMv/bW9kZWwvYXVyYS01/LndlYnA",
    ],
    description:
      "The Hyundai Aura SX CNG offers style and economy, combining a premium sedan feel with exceptional fuel efficiency for daily rides.",
  },
  
];
