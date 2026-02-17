import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "../components/Footer";
import "./globals.css";

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
        default: "YourBrand | Premium Digital Assets",
        template: "%s | YourBrand",
    },
    description: "Discover high-quality digital assets, templates, and resources for your creative projects.",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://yourbrand.com", // Replace with actual domain
        siteName: "YourBrand",
        title: "YourBrand | Premium Digital Assets",
        description: "Discover high-quality digital assets, templates, and resources for your creative projects.",
        images: [
            {
                url: "/og-image.jpg", // Ensure this image exists in public/
                width: 1200,
                height: 630,
                alt: "YourBrand - Premium Digital Assets",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "YourBrand | Premium Digital Assets",
        description: "Discover high-quality digital assets, templates, and resources for your creative projects.",
        creator: "@yourbrand", // Replace with actual handle
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
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {children}
                <Footer />
            </body>
        </html>
    );
}
