"use client";

import Image from "next/image";
import { FaFacebookF, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 px-4 sm:px-8 md:px-16 lg:px-20 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        {/* Left: Logo and Description */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-1/2 gap-4">
          <div className="flex items-center gap-2">
            <span className="text-white font-bold text-lg">KHANQATULLAH</span>
            <span className="text-sm text-white">خانقاهُ الله</span>
          </div>
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
            <Image
              src="/images/logo1.jpg"
              alt="Logo"
              width={100}
              height={100}
              className="h-28 w-28 object-cover rounded-full"
            />
            <div>
              <p className="text-sm leading-relaxed max-w-xs">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s...
              </p>
              <p className="text-xs mt-4">
                Khanqatullah (c) {new Date().getFullYear()}
              </p>
            </div>
          </div>
        </div>

        {/* Center: Links */}
        <div className="text-sm flex flex-col items-center md:items-start gap-2">
          <a href="#" className="hover:text-white">
            Home
          </a>
          <a href="#" className="hover:text-white">
            About Us
          </a>
          <a href="#" className="hover:text-white">
            Lectures
          </a>
          <a href="#" className="hover:text-white">
            Live Streaming
          </a>
          <a href="#" className="hover:text-white">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white">
            Terms & Conditions
          </a>
        </div>

        {/* Right: Contact */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-white mb-1">Contact Us</h3>
            <p className="text-sm">info@khanqatullah.com</p>
          </div>
          <div className="flex gap-4">
            <a
              href="#"
              className="bg-gray-700 hover:bg-gray-600 p-2 rounded-lg text-gray-400"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="bg-gray-700 hover:bg-gray-600 p-2 rounded-lg text-gray-400"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
