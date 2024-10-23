import type { Metadata } from "next";
import localFont from "next/font/local";
import { Exo } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/navbar/Navbar";

const font = Exo({
  subsets: ["latin"],
})

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Airbnb | Vacation rentals, cabin, houses & many more",
  description: "Airbnb Clone | Vacation rentals, cabin, houses & many more",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/*<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>*/}
      <body className={font.className}>
      <Navbar/>
        {children}
      </body>
    </html>
  );
}
