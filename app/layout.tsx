import type {Metadata} from "next";
import localFont from "next/font/local";
import {Exo} from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/navbar/Navbar";
import ClientOnly from "@/app/components/ClientOnly";
import ToasterProvider from "@/app/providers/ToasterProvider";
import RegisterModal from "@/app/components/modals/RegisterModal";
import LoginModal from "@/app/components/modals/LoginModal";
import RentModal from "@/app/components/modals/RentModal";
import React from "react";
import getCurrentUser from "@/app/actions/getCurrentUser";

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

export default async function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    const currentUser = await getCurrentUser();
    return (
        <html lang="en">
        {/*<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>*/}
        <body className={font.className}>
        <ClientOnly>
            <ToasterProvider/>
            <RentModal/>
            <RegisterModal/>
            <LoginModal/>
            <Navbar currentUser={currentUser}/>
        </ClientOnly>
        {children}
        </body>
        </html>
    );
}
