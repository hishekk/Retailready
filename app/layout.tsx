import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RetailReady",
  description: "RetailReady: A unified approach to retailer compliance | Y Combinator",
  icons: {
    icon: "/favicon.jpeg", // /public path
  },
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
          {children}
          <Footer />
       
      </body>
    </html>
  );
}
