import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import Navbar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "HOPn Experiences",
    template: "%s | HOPn",
  },
  description: "Browse and book curated experiences with HOPn.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen antialiased`}>
        <div className="relative min-h-screen flex flex-col bg-gray-50 text-gray-900">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <footer className="px-6 py-10 text-center text-sm text-gray-600">
            © {new Date().getFullYear()} HOPn — All rights reserved
          </footer>
        </div>
      </body>
    </html>
  );
}