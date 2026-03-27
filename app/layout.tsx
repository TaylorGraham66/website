import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Taylor Graham",
  description: "Node.js stuff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        <div className="fixed inset-0 -z-10 overflow-hidden bg-slate-950">

          <div className="aurora-layer aurora-1"></div>
          <div className="aurora-layer aurora-2"></div>
          <div className="aurora-layer aurora-3"></div>
          <div className="absolute inset-0 opacity-20 bg-[url('/noise.png')]"></div>
          
        </div>

        {children}
      </body>
    </html>
  );
}
