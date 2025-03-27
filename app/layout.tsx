import type { Metadata } from "next";
import { Merriweather, Manrope } from "next/font/google";
import "./globals.css";
import Footer from "@/components/frontend/footer";
import { Toaster } from "react-hot-toast";
import { siteConfig } from "@/config/meta";
const merriweather = Manrope({
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s - ${siteConfig.title}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: [
    "Izunwaonu Hospital",
    "Healthcare in Nigeria",
    "Hospital services Nigeria",
    "Medical care Nigeria",
    "Obstetrics and Gynecology Nigeria",
    "Surgery Department Nigeria",
    "Medical Department Nigeria",
    "Laboratory services Enugu Ezike",
    "Imaging services Nigeria",
    "Pediatrics Nigeria",
    "Emergency care Nigeria",
    "Counseling services Enugu Ezike",
    "Endoscopy Nigeria",
    "Dental care Nigeria",
    "Ambulance services Enugu Ezike",
    "Outpatient services Nigeria",
    "Healthcare provider Enugu Ezike",
    "Quality healthcare Nigeria",
    "Western Enugu Ezike hospital",
    "Patient care Nigeria",
    "Medical specialists Enugu Ezike",
    "Maternal healthcare Nigeria",
    "Child healthcare Enugu Ezike",
    "Diagnostic services Nigeria",
    "Surgical procedures Enugu Ezike",
    "Medical treatment Nigeria",
    "Healthcare facilities Enugu Ezike",
    "Hospital departments Nigeria",
    "24/7 healthcare Enugu Ezike",
    "Medical professionals Nigeria",
    "Healthcare consultations Enugu Ezike",
    "Medical emergency services",
    "Enugu Ezike healthcare system",
    "Hospital doctors Nigeria",
    "Medical examinations Enugu Ezike",
    "Hospital appointments Nigeria",
    "Healthcare technology Enugu Ezike",
    "Medical tests Nigeria",
    "Patient support services",
    "Hospital facilities Enugu Ezike",
  ],
  authors: [
    {
      name: "Izunwaonu",
      url: "https://izunwaonu.com.ng",
    },
  ],
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  creator: "Nigeria Hospital",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={merriweather.className}>
        <div className="bg-white">{children}</div>
        <Toaster position="bottom-right" reverseOrder={false} />
        <Footer />
      </body>
    </html>
  );
}
