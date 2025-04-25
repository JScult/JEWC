// app/layout.tsx
'use client';

import { Figtree } from "next/font/google";
import { usePathname } from "next/navigation"; // import this
import { useEffect, useState } from "react";
import "./globals.css";
import Navbar from "../components/navBar";
import NewLetter from "../components/NewLetter";
import Footer from "../components/footer";

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
  const [isAdminRoute, setIsAdminRoute] = useState(false);

  useEffect(() => {
    setIsAdminRoute(pathname.startsWith("/admin"));
  }, [pathname]);

  return (
    <html lang="en">
      <body className={`${figtree.variable} antialiased`}>
        {isAdminRoute ? (
          children
        ) : (
          <>
            <Navbar />
            {children}
            <NewLetter />
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
