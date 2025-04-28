// app/layout.tsx
'use client';

import { Figtree } from "next/font/google";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import "./globals.css";
import Navbar from "../components/navBar";
import NewLetter from "../components/NewLetter";
import Footer from "../components/footer";
import Chatbot from "@/components/chatbot";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [isExcludedRoute, setIsExcludedRoute] = useState(false);

  useEffect(() => {
    // Exclude routes like /admin and /complete-form from the root layout
    setIsExcludedRoute(
      pathname.startsWith("/admin") || pathname.startsWith("/complete-form")
    );
  }, [pathname]);

  return (
    <html lang="en">
      <body className={`${figtree.variable} antialiased`}>
        {isExcludedRoute ? (
          children
        ) : (
          <>
            <Navbar />
            {children}
            <Chatbot />
            <NewLetter />
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
