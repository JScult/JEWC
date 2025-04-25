"use client"; // Add this directive at the top

import Image from "next/image";
import { usePathname } from "next/navigation"; // Import usePathname
import Link from "next/link"; // Import Link from next/link
import {
  Home,
  Users,
  Edit,
  FileText,
  Eye,
  Smartphone,
  LogOut,
} from "lucide-react";

const Sidebar: React.FC = () => {
  const pathname = usePathname(); // Get the current path

  const isActive = (path: string) => pathname === path; // Check if the path is active

  return (
    <div className="fixed left-0 top-0 h-screen w-16 md:w-64 bg-gradient-to-b from-purple-600 to-red-600 text-white flex flex-col items-center py-4 shadow-lg">
      {/* Logo and Title */}
      <div className="flex items-center mb-8">
        <div className="w-12 h-auto rounded-full mr-2 md:mr-3">
          <Image src="/Assets/jewc.png" width={500} height={500} alt="Logo" className="w-full h-full rounded-full" />
        </div>
        <div className="hidden md:block">
          <h1 className="text-lg font-bold">JEWC25</h1>
          <p className="text-xs">Heritage Meets Innovation</p>
        </div>
      </div>
      <hr className="hidden md:block w-52 bg-white mb-6" />

      {/* Navigation Items */}
      <nav className="flex flex-col space-y-4 w-full">
        <Link
          href="/admin/dashboard"
          className={`flex justify-start items-center w-full px-2 md:px-4 py-2 rounded-r-full ${
            isActive("/admin/dashboard") ? "bg-white/20 text-white" : "text-white hover:bg-white/20"
          }`}
        >
          <Home className="w-6 h-6 md:mr-3" />
          <span className="hidden md:block text-sm">Statistics</span>
        </Link>

        <Link
          href="/admin/dashboard/participants"
          className={`flex justify-start items-center w-full px-2 md:px-4 py-2 rounded-r-full ${
            isActive("/admin/dashboard/participants") ? "bg-white/20 text-white" : "text-white hover:bg-white/20"
          }`}
        >
          <Users className="w-6 h-6 md:mr-3" />
          <span className="hidden md:block text-sm">Participants</span>
        </Link>

        <Link
          href="/admin/dashboard/events"
          className={`flex justify-start items-center w-full px-2 md:px-4 py-2 rounded-r-full ${
            isActive("/admin/dashboard/events") ? "bg-white/20 text-white" : "text-white hover:bg-white/20"
          }`}
        >
          <Edit className="w-6 h-6 md:mr-3" />
          <span className="hidden md:block text-sm">Activities</span>
        </Link>

        <Link
          href="/admin/dashboard/confederations"
          className={`flex justify-start items-center w-full px-2 md:px-4 py-2 rounded-r-full ${
            isActive("/admin/dashboard/confederations") ? "bg-white/20 text-white" : "text-white hover:bg-white/20"
          }`}
        >
          <FileText className="w-6 h-6 md:mr-3" />
          <span className="hidden md:block text-sm">Confederations</span>
        </Link>

        <Link
          href="/admin/dashboard/rooms"
          className={`flex justify-start items-center w-full px-2 md:px-4 py-2 rounded-r-full ${
            isActive("/admin/dashboard/rooms") ? "bg-white/20 text-white" : "text-white hover:bg-white/20"
          }`}
        >
          <Eye className="w-6 h-6 md:mr-3" />
          <span className="hidden md:block text-sm">Rooms</span>
        </Link>

        <Link
          href="/admin/dashboard/zones"
          className={`flex justify-start items-center w-full px-2 md:px-4 py-2 rounded-r-full ${
            isActive("/admin/dashboard/zones") ? "bg-white/20 text-white" : "text-white hover:bg-white/20"
          }`}
        >
          <Smartphone className="w-6 h-6 md:mr-3" />
          <span className="hidden md:block text-sm">Zones</span>
        </Link>
      </nav>

      {/* Logout Button */}
      <div className="mt-auto">
        <Link
          href="/admin"
          className={`flex justify-start items-center w-full px-2 md:px-4 py-2 rounded-r-full ${
            isActive("/admin") ? "bg-white/20 text-white" : "text-white hover:bg-white/20"
          }`}
        >
          <LogOut className="w-6 h-6 md:mr-3" />
          <span className="hidden md:block text-sm">Log Out</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;