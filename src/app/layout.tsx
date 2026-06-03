import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import OfferPopup from "@/components/OfferPopup";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Excellent Coaching Classes | We Ensure All-Round Excellence",
  description:
    "Top-rated coaching institute from Nursery to 12th Commerce in Nalasopara East, Mumbai. Expert faculty, proven results, and personalized attention.",
  keywords:
    "coaching classes Nalasopara, nursery to 12th coaching Mumbai, 11th 12th commerce tuition Nalasopara East, board exam preparation, SSC HSC coaching",
  openGraph: {
    title: "Excellent Coaching Classes | Nalasopara East",
    description: "We Ensure All-Round Excellence — Top coaching from Nursery to 12th Commerce in Nalasopara East, Mumbai.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${roboto.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <OfferPopup />
      </body>
    </html>
  );
}
