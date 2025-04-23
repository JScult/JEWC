"use client";
import Image from "next/image";
import ContactForm from "../components/contact/ContactForm";
import Map from "../components/contact/Maps";
export default function ContactUs() {
    return (
        <div>
            {/*header*/ }
            <div
      className=" pt-20 lg:pt-0 bg-cover bg-center bg-fixed px-6 py-8 flex flex-col justify-between pb-5"
      style={{
        backgroundImage: `linear-gradient(95deg, rgba(189, 24, 41, 0.4) 10%, rgba(109, 82, 149, 0.5) 40%), url('/Assets/handshake.jpg')`,
      }}
    >    
    <div className="hidden lg:flex items-center justify-between">
    <Image src="/Assets/jewc.png" alt="Logo 1" height={100} width={100} className="h-26 ml-6 w-auto" />
          </div>
          <div className="flex-grow flex flex-col items-center justify-center text-center space-y-6">
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl  leading-tight lg:text-left">
            CONTACT US
          </h1>
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl  leading-tight lg:text-left">
          Have a question or need assistance? 
            </h2>
            <p className="text-white text-sm sm:text-base pb-6 space-y-1 ">
            We're here to help! Reach out to us anytime and our team will get back to<br/> you as soon as possible. Your feedback and inquiries are always welcome.
            </p>
          </div>
     </div>
     <ContactForm/>
     <Map/>
            </div>
    )
}