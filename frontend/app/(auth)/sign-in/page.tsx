'use client';

// import React, {useState} from 'react';
import GoogleButton from '@/app/components/auth/GoogleButton';
import Link from 'next/link';
// import Stepper from "../components/(auth)/Stepper"

const Page = () => {

    // const steps = ["Account Info", "Personal Info", "Professional Details", "Skills & Availability"];
    // const [currentStep, setCurrentStep] = useState(0);
    return (
        <div className=" flex items-center justify-center bg-[#F6F0FF] px-4">
            <div className=" rounded-2xl p-8 max-w-md w-full text-center">
                <h1 className="text-2xl font-semibold text-gray-800 mb-10">
                    Welcome to <span className="text-[#4C0D1A] font-bold">JEWC</span>
                </h1>

                <GoogleButton text="Sign in "  />

                {/*<div className="py-5">*/}
                {/*    <Stepper steps={steps} currentStep={currentStep} />*/}
                {/*</div>*/}


                <p className="mt-6 text-sm text-gray-600 mt-10">
                    don&#39;t have an account?{' '}
                    <Link href="/sign-up" className="text-[#4C0D1A] hover:underline font-medium">
                        sign-up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Page;
