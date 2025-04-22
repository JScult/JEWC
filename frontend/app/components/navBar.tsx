"use client";
import { useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Main Navbar */}
      <nav className="fixed w-full top-4 z-50 text-">
        <div className="max-w-2xl mx-auto px-4">
          <div className={`bg-none rounded-full  md:bg-white shadow-md ${isOpen ? 'hidden' : ''}`}>
            <div className="flex justify-between h-16 items-center px-6">
              
              {/* Mobile menu button */}
              <div className={`md:hidden flex items-center ${isOpen ? 'hidden' : ''}`}>
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-gray-700 hover:text-gray-900 focus:outline-none"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
                <div className="flex justify-center items-center absolute ml-8">
                  <Image src="/Assets/jewc.png" alt="Logo 1" height={100} width={100} className="h-18 ml-32 w-auto" />
                </div>
              </div>
             
              {/* Desktop Navigation - Centered */}
              <div className="hidden md:flex flex-1 justify-center space-x-6">
                <a href="#" className="text-gray-700 font-semibold px-3 py-2">Sign In</a>
                <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2">Our Global Network</a>
                <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2">Our Collaborators</a>
                <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Side Menu */}
      <div className={`fixed inset-0 z-40 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
        <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setIsOpen(false)}></div>
        <aside className="fixed left-0 top-0 h-full w-64 bg-white shadow-lg">
          <div className="flex items-center justify-between h-16 px-6 border-b">
            <span ><Image src="/Assets/logo.png" alt="Logo 1" height={100} width={100} className="h-10  w-auto" /></span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="p-4 space-y-4">
            <a href="#" className="block px-4 py-2 text-gray-700 font-semibold rounded hover:bg-gray-100">Sign In</a>
            <a href="#" className="block px-4 py-2 text-gray-700 rounded hover:bg-gray-100">Our Global Network</a>
            <a href="#" className="block px-4 py-2 text-gray-700 rounded hover:bg-gray-100">Our Collaborators</a>
            <a href="#" className="block px-4 py-2 text-gray-700 rounded hover:bg-gray-100">Contact Us</a>
            <button className="w-full px-4 py-2 text-white font-semibold rounded bg-[#BD1829] hover:bg-[#a31624]">
              Enroll Now
            </button>
          </div>
        </aside>
      </div>
    </>
  );
}