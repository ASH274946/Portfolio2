import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import SiteBackdrop from "@/components/layout/SiteBackdrop";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lanke Kiran Teja | Full-Stack & Mobile Developer",
  description:
    "Computer Science student and full-stack developer: Flutter, React, Node.js, FastAPI. Building readable code and interfaces that feel good to use.",
  keywords: [
    "Full-Stack Developer",
    "Flutter",
    "React",
    "Hyderabad",
    "Mobile Development",
    "FastAPI",
  ],
  authors: [{ name: "Lanke Kiran Teja" }],
  openGraph: {
    title: "Lanke Kiran Teja | Full-Stack & Mobile Developer",
    description:
      "CS undergrad building web and mobile apps with Flutter, React, and modern backends.",
    siteName: "Lanke Kiran Teja",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@KiranTejz20005",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} ${inter.variable} h-full font-mono antialiased`}
    >
      <body className="flex min-h-full flex-col bg-black text-zinc-200">
        <SiteBackdrop />
        <Navbar />
        <main className="relative z-10 flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
