import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

const title =
  "Find a Bohra - Matrimonial and Dating App for Dawoodi Bohra Community";
const description =
  "Find your life partner in the Dawoodi Bohra community. Connect with like-minded individuals who share your values, traditions, and love for Kaari-chaaval. Safe, respectful, and culturally aligned dating experience.";

export const metadata: Metadata = {
  metadataBase: new URL("https://findabohra.com"),
  title: title,
  description: description,
  keywords:
    "Dawoodi Bohra, dating app, marriage, matrimony, matrimonial app, community, Bohra singles, cultural dating, traditional values, modern love",
  authors: [{ name: "Find a Bohra" }],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: title,
    description: description,
    url: "https://findabohra.com",
    siteName: "Find a Bohra",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: `${title} logo`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${inter.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
