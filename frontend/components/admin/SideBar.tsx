import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Home,
  Users,
  Edit,
  FileText,
  Eye,
  Smartphone,
  Grid,
  LogOut,
} from "lucide-react";

const Sidebar: React.FC = () => {
  return (
    <div className="fixed left-0 top-0 h-screen w-16 md:w-64 bg-gradient-to-b from-purple-600 to-red-600 text-white flex flex-col items-center py-4 shadow-lg">
      {/* Logo and Title */}
      <div className="flex items-center mb-8">
        <div className="w-12 h-auto rounded-full mr-2 md:mr-3" >
            <Image src="/Assets/jewc.png" width={500} height={500} alt="Logo" className="w-full h-full rounded-full" />
            </div>
        <div className="hidden md:block">
          <h1 className="text-lg font-bold">JEWC25</h1>
          <p className="text-xs">Heritage Meets Innovation</p>
        </div>
        

      </div>
      <hr className="hidden md:block w-52  bg-white mb-6" />

      {/* Navigation Items */}
      <nav className="flex flex-col space-y-4 w-full">
        <Button
          variant="ghost"
          className="flex justify-start items-center w-full px-2 md:px-4 py-2 text-white hover:bg-white/20 rounded-r-full"
        >
          <Home className="w-6 h-6 md:mr-3" />
          <span className="hidden md:block text-sm">Home</span>
        </Button>

        <Button
          variant="ghost"
          className="flex justify-start items-center w-full px-2 md:px-4 py-2 text-white hover:bg-white/20"
        >
          <Users className="w-6 h-6 md:mr-3" />
          <span className="hidden md:block text-sm">Users</span>
        </Button>

        <Button
          variant="ghost"
          className="flex justify-start items-center w-full px-2 md:px-4 py-2 text-white hover:bg-white/20"
        >
          <Edit className="w-6 h-6 md:mr-3" />
          <span className="hidden md:block text-sm">Edit</span>
        </Button>

        <Button
          variant="ghost"
          className="flex justify-start items-center w-full px-2 md:px-4 py-2 text-white hover:bg-white/20"
        >
          <FileText className="w-6 h-6 md:mr-3" />
          <span className="hidden md:block text-sm">Files</span>
        </Button>

        <Button
          variant="ghost"
          className="flex justify-start items-center w-full px-2 md:px-4 py-2 text-white hover:bg-white/20"
        >
          <Eye className="w-6 h-6 md:mr-3" />
          <span className="hidden md:block text-sm">View</span>
        </Button>

        <Button
          variant="ghost"
          className="flex justify-start items-center w-full px-2 md:px-4 py-2 text-white hover:bg-white/20"
        >
          <Smartphone className="w-6 h-6 md:mr-3" />
          <span className="hidden md:block text-sm">Mobile</span>
        </Button>

        <Button
          variant="ghost"
          className="flex justify-start items-center w-full px-2 md:px-4 py-2 text-white hover:bg-white/20"
        >
          <Grid className="w-6 h-6 md:mr-3" />
          <span className="hidden md:block text-sm">Grid</span>
        </Button>
      </nav>

      {/* Logout Button */}
      <div className="mt-auto">
        <Button
          variant="ghost"
          className="flex justify-start items-center w-full px-2 md:px-4 py-2 text-white hover:bg-white/20"
        >
          <LogOut className="w-6 h-6 md:mr-3" />
          <span className="hidden md:block text-sm">Logout</span>
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;