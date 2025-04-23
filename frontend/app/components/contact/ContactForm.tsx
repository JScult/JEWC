import { Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react";

export default function ContactForm() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="flex flex-col lg:flex-row max-w-5xl w-full gap-8">
        {/* Left Section - Contact Info */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl font-bold text-purple-700 mb-4">GET IN TOUCH</h1>
          <p className="text-gray-600 mb-6">
            We&apos;d love to hear from you! Whether you have a question, suggestion, or just want to say hello, feel free to get in touch. Our team is ready to assist you!
          </p>
          <div className="space-y-4">
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <Phone className="text-purple-500" size={20} />
              <div>
                <p className="text-gray-700">+216 25 716 771</p>
                <p className="text-gray-700">+216 90 075 080</p>
                <p className="text-gray-700">+216 90 075 080</p>
              </div>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <Mail className="text-purple-500" size={20} />
              <div>
                <p className="text-gray-700">ayoubtabani@jetunsie.com</p>
                <p className="text-gray-700">rayenbella@jetunsie.com</p>
                <p className="text-gray-700">adem.jaouad@jetunsie.com</p>
              </div>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <p className="text-gray-700 font-semibold">Social Media:</p>
              <div className="flex gap-3">
                <a href="#" aria-label="Facebook">
                  <Facebook className="text-blue-600 hover:text-blue-800 cursor-pointer" size={20} />
                </a>
                <a href="#" aria-label="Instagram">
                  <Instagram className="text-pink-600 hover:text-pink-800 cursor-pointer" size={20} />
                </a>
                <a href="#" aria-label="LinkedIn">
                  <Linkedin className="text-blue-700 hover:text-blue-900 cursor-pointer" size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="flex-1 bg-white rounded-lg shadow-lg p-6">
          <form className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-gray-700 font-medium mb-1" htmlFor="name">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Your Name"
                />
              </div>
              <div className="flex-1">
                <label className="block text-gray-700 font-medium mb-1" htmlFor="email">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Your Email"
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1" htmlFor="phone">
                Phone Number:
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Your Phone Number"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1" htmlFor="message">
                Message:
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                placeholder="Your Message"
              />
            </div>
            <div className="text-right">
              <button
                type="submit"
                className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}