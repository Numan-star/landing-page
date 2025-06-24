"use client";

import Image from "next/image";
import { FaFacebookF, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 px-4 sm:px-8 md:px-16 lg:px-20 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-1/2 gap-4">
          <div className="flex items-center gap-2">
            <span className="text-white font-bold text-lg">KHANQATULLAH</span>
            <span className="text-sm text-white">خانقاهُ الله</span>
          </div>
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
            <Image
              src="/images/logoImage.png"
              alt="Logo"
              width={100}
              height={100}
            />
            <div>
              <p className="text-sm leading-relaxed w-full">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries
              </p>
              <p className="text-xs mt-4">
                Khanqatullah (c) {new Date().getFullYear()}
              </p>
            </div>
          </div>
        </div>

        <div className="text-sm flex flex-col items-center md:items-start gap-2">
          <a href="#" className="hover:text-gray-300 text-white">
            Home
          </a>
          <a href="#" className="hover:text-gray-300 text-white">
            About Us
          </a>
          <a href="#" className="hover:text-gray-300 text-white">
            Lectures
          </a>
          <a href="#" className="hover:text-gray-300 text-white">
            Live Streaming
          </a>
          <a href="#" className="hover:text-gray-300 text-white">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-gray-300 text-white">
            Terms & Conditions
          </a>
        </div>

        <div className="flex flex-col items-center md:items-start justify-between gap-4">
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-white mb-1">Contact Us</h3>
            <p className="text-sm">info@khanqatullah.com</p>
          </div>
          <div className="flex gap-4 mb-5">
            <a href="#" className="bg-[#545454] p-2 rounded-lg text-[#aaaaaa]">
              <FaFacebookF />
            </a>
            <a href="#" className="bg-[#545454] p-2 rounded-lg text-[#aaaaaa]">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
