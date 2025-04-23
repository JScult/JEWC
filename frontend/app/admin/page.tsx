import { LoginForm } from "@/components/login-form";
import Image from "next/image";

export default function Page() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium">
            <Image
              src="/Assets/logo.png"
              alt="Logo"
              width={100}
              height={100}
              className="h-6 md:h-12 w-auto"
            />
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-purple-500 to-red-500 opacity-50 z-10"></div>
        <Image
          width={500}
          height={500}
          src="/Assets/jewcauth.png"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover z-0"
        />
      </div>
    </div>
  );
}
