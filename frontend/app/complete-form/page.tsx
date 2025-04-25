"use client";
import Image from "next/image";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";
interface FormData {
  juniorEnterprise: string;
  confederation: string;
  profilePicture: FileList;
  cinOrPassport: string;
}

export default function Page() {
  const [step, setStep] = useState(1);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data); // For debugging; replace with actual submission logic
    setStep(2);
  };

  const steps = [
    { name: "Authenticate with Google", status: "complete" },
    { name: "Complete Profile", status: step >= 1 ? "current" : "upcoming" },
    { name: "Start Your Journey", status: step >= 2 ? "current" : "upcoming" },
  ];

  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <Link href="/" className="flex items-center gap-2 font-medium">
            <Image
              src="/Assets/logo.png"
              alt="Logo"
              width={100}
              height={100}
              className="h-6 md:h-12 w-auto"
            />
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-md">
            <nav className="flex items-center justify-center mb-8">
              <ol className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
                {steps.map((s, index) => (
                  <li key={index} className="flex items-center">
                    <div
                      className={`flex items-center justify-center w-8 h-8 rounded-full ${
                        s.status === "complete"
                          ? "bg-red-500 text-white"
                          : s.status === "current"
                          ? "bg-red-300 text-white"
                          : "bg-gray-200 text-gray-500"
                      }`}
                    >
                      {s.status === "complete" ? "✓" : index + 1}
                    </div>
                    {index < steps.length - 1 && (
                      <div
                        className={`h-1 w-8 sm:w-12 ${
                          s.status === "complete" || steps[index + 1].status === "current"
                            ? "bg-red-500"
                            : "bg-gray-300"
                        }`}
                      ></div>
                    )}
                    <span className="ml-2 text-sm font-medium text-gray-700">{s.name}</span>
                  </li>
                ))}
              </ol>
            </nav>
            {step === 0 && (
              <div className="text-center">
                <p className="text-lg font-semibold">Authenticated with Google</p>
                <button
                  onClick={() => setStep(1)}
                  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Continue
                </button>
              </div>
            )}
            {step === 1 && (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label htmlFor="juniorEnterprise" className="block text-sm font-medium">
                    Junior Enterprise Name
                  </label>
                  <input
                    type="text"
                    id="juniorEnterprise"
                    {...register("juniorEnterprise", { required: "Junior Enterprise Name is required" })}
                    className={`mt-1 w-full p-2 border rounded ${errors.juniorEnterprise ? "border-red-500" : ""}`}
                  />
                  {errors.juniorEnterprise && (
                    <p className="mt-1 text-sm text-red-500">{errors.juniorEnterprise.message}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="confederation" className="block text-sm font-medium">
                    Confederation Name
                  </label>
                  <input
                    type="text"
                    id="confederation"
                    {...register("confederation", { required: "Confederation Name is required" })}
                    className={`mt-1 w-full p-2 border rounded ${errors.confederation ? "border-red-500" : ""}`}
                  />
                  {errors.confederation && (
                    <p className="mt-1 text-sm text-red-500">{errors.confederation.message}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="profilePicture" className="block text-sm font-medium">
                    Profile Picture
                  </label>
                  <input
                    type="file"
                    id="profilePicture"
                    accept="image/*"
                    {...register("profilePicture", { required: "Profile Picture is required" })}
                    className={`mt-1 w-full p-2 border rounded ${errors.profilePicture ? "border-red-500" : ""}`}
                  />
                  {errors.profilePicture && (
                    <p className="mt-1 text-sm text-red-500">{errors.profilePicture.message}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="cinOrPassport" className="block text-sm font-medium">
                    CIN or Passport
                  </label>
                  <input
                    type="text"
                    id="cinOrPassport"
                    {...register("cinOrPassport", { required: "CIN or Passport is required" })}
                    className={`mt-1 w-full p-2 border rounded ${errors.cinOrPassport ? "border-red-500" : ""}`}
                  />
                  {errors.cinOrPassport && (
                    <p className="mt-1 text-sm text-red-500">{errors.cinOrPassport.message}</p>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-red-800 text-white rounded hover:cursor-pointer hover:bg-red-600"
                >
                  Submit Profile
                </button>
              </form>
            )}
            {step === 2 && (
              <div className="text-center">
                <p className="text-lg font-semibold">Ready to Start Your Journey!</p>
                <button
                  onClick={() => alert("Journey Started!")}
                  className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                >
                  Begin
                </button>
              </div>
            )}
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