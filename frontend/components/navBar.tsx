"use client";
import { useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Function to handle Google OAuth login
  const handleGoogleSignIn = () => {
    setIsLoading(true); // Show loader
    console.log("Initiating Google OAuth...");
    // Simulate redirecting to /complete-form
    setTimeout(() => {
      window.location.href = '/complete-form'; // Redirect to the desired page
      setIsSignInOpen(false); // Close modal after redirecting
    }, 2000); // Simulate a delay (e.g., waiting for OAuth response)
  };

  return (
    <>
      {/* Main Navbar */}
      <nav className="fixed w-full top-4 z-50 text-">
        <div className="max-w-4xl mx-auto px-4"> {/* Increased width from max-w-2xl to max-w-6xl */}
          <div className={`bg-none rounded-full md:bg-white shadow-md ${isOpen ? 'hidden' : ''}`}>
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
                <button
                  onClick={() => setIsSignInOpen(true)}
                  className="text-gray-700 font-semibold px-3 py-2"
                >
                  Sign In
                </button>
                <a href="/generation-proud" className="text-gray-700 hover:text-gray-900 px-3 py-2">Our Global Network</a>
                <a href="/partners" className="text-gray-700 hover:text-gray-900 px-3 py-2">Our Collaborators</a>
                <a href="/contact-us" className="text-gray-700 hover:text-gray-900 px-3 py-2">Contact Us</a>
                <a href="/about-us" className="text-gray-700 hover:text-gray-900 px-3 py-2">About Us</a>
                <a href="/faq" className="text-gray-700 hover:text-gray-900 px-3 py-2">FAQ</a>
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
            <span><Image src="/Assets/logo.png" alt="Logo 1" height={100} width={100} className="h-10 w-auto" /></span>
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
            <a href="/generation-proud" className="block px-4 py-2 text-gray-700 rounded hover:bg-gray-100">Our Global Network</a>
            <a href="/partners" className="block px-4 py-2 text-gray-700 rounded hover:bg-gray-100">Our Collaborators</a>
            <a href="/contact-us" className="block px-4 py-2 text-gray-700 rounded hover:bg-gray-100">Contact Us</a>
            <a href="/about-us" className="block px-4 py-2 text-gray-700 rounded hover:bg-gray-100">About Us</a>
           
            <a href="/faq" className="block px-4 py-2 text-gray-700 rounded hover:bg-gray-100">FAQ</a> {/* Added FAQ */}
            <button 
             onClick={() => {
              setIsSignInOpen(true);
              setIsOpen(false); // Close sidebar when opening sign-in modal
            }}
            className="w-full px-4 py-2 text-white font-semibold rounded bg-[#BD1829] hover:bg-[#a31624]">
              Enroll Now
            </button>
          </div>
        </aside>
      </div>

      {/* Sign-In Popup Modal */}
      {isSignInOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center  bg-opacity-50 backdrop-blur-sm">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md mx-4">
            <div className="flex justify-between items-center mb-4">
              <button
                onClick={() => setIsSignInOpen(false)}
                className="text-gray-600 hover:text-gray-900 focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <p className="text-gray-600">Continue with your Google account</p>
              <button
                onClick={handleGoogleSignIn}
                className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
              >
                {isLoading ? (
                  <svg
                    className="animate-spin h-5 w-5 text-gray-700 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    ></path>
                  </svg>
                ) : (
                  <Image
                    src="https://www.google.com/favicon.ico"
                    alt="Google Logo"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                )}
                <span className="text-gray-700 font-medium">
                  {isLoading ? "Redirecting..." : "Continue with Google"}
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}