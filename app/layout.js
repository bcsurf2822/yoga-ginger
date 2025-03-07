import { Geist, Geist_Mono } from "next/font/google";
import { Great_Vibes } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const greatVibes = Great_Vibes({
  weight: "400",
  variable: "--font-great-vibes",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Yoga Ginger",
  description: "Website for Suzanne Chew at Yoga Ginger",
  icons: {
    icon: '/logos/yogaGingerLogo.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${greatVibes.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
