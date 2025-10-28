import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "./components/navbar/header";
import { Footer } from "./components/footer";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Priti Naixa Pvt. Ltd. | T-Permit Vehicle & Car Sale Purchase and Exchange Services",
    template: "%s | Priti Naixa",
  },
   icons: {
    icon: "/favicon.png", 
  },
  description:
    "Priti Naixa provides trusted T-Permit vehicle services, RTO registration, finance assistance, and & Car sale purchase and exchange.",
  keywords: [
    "Priti Naixa",
    "T-permit cars in mumbai",
    "T-permit cars in maharashtra",
    "T-permit vehicles",
    "T-permit cars",
    "T-permit new car",
    "T-permit used car",
    "T-permit car showroom",
    "T-permit car sales and purchase",
    "T-permit RTO services",
    "car loan assistance",
    "Car Sale Purchase"
  ],
  metadataBase: new URL("https://pritinaixa.com"), 
  openGraph: {
    title: "Priti Naixa Pvt. Ltd. | T-Permit Vehicle & Car Sale Purchase and Exchange Services",
    description:
      "Your one-stop solution for commercial vehicle sales, purchase, registration, and permits.",
    url: "https://pritinaixa.com",
    siteName: "Priti-Naixa",
    images: [
      {
        url: "https://pritinaixa.com/og-banner.png",
        width: 1200,
        height: 630,
        alt: "Priti-Naixa T-Permit Vehicle Showroom",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Priti Naixa Pvt. Ltd. | T-Permit Vehicle & Car Sale Purchase and Exchange Services",
    description:
      "Priti Naixa Pvt. Ltd. T-Permit vehicle showroom offering sales, RTO, purchase, registration, and finance services.",
    images: ["https://pritinaixa.com/og-banner.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://pritinaixa.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 `}
      >
        {/* <Navbar/> */}
        <Header />
        <main className="mx-auto max-full ">
          {children}
        </main>
        <Toaster position="top-center" reverseOrder={false} />
        <Footer />

      </body>
    </html>
  );
}
