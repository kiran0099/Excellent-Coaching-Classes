import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Excellent Coaching Classes | SSC Tuition in Nalasopara East, Mumbai",
  description:
    "Top-rated SSC coaching for Class 9th & 10th in Nalasopara East. Expert teachers, proven results, and personalized attention. Book a free demo today!",
  keywords:
    "coaching classes Nalasopara, SSC tuition Nalasopara East, Class 10 coaching Mumbai, Class 9 tuition Nalasopara, board exam preparation",
  openGraph: {
    title: "Excellent Coaching Classes | Nalasopara East",
    description:
      "Transforming Hard Work into Board Excellence. Top SSC coaching in Nalasopara East, Mumbai.",
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Montserrat:wght@700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
