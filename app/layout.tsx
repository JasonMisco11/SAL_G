import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar"; // Import your component

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VivaDecor | Modern Interior Design",
  description: "Transform your living space with VivaDecor.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Navbar sits at the top of the application */}
        <Navbar /> 
        
        {/* Main content flows underneath */}
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}