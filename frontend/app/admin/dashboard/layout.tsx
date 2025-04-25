import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css"; // Import global styles
import Sidebar from "@/components/admin/SideBar"; // Import the Sidebar component

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JEWC25 App",
  description: "Heritage Meets Innovation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex min-h-screen`}>
        {/* Sidebar on the left */}
        <Sidebar />

        {/* Main content area */}
        <main className="ml-16 md:ml-64 flex-1 p-4">
          {children}
        </main>
      </body>
    </html>
  );
}