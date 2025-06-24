"use client";
import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  if (typeof window !== "undefined") {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }

  return (
    <>
      <header className="w-full flex items-start justify-between px-4 md:px-10 py-4 bg-transparent">
        <div className="flex items-start gap-3">
          <div>
            <Image
              src="/images/logoImage.png"
              alt="Logo"
              width={100}
              height={100}
              className="md:h-32 md:w-20 h-20 w-14 rounded-full"
            />
          </div>
          <div>
            <div className="text-xs md:text-lg font-arabic"> خانقةاللّٰہِ</div>
            <div className="font-bold text-sm md:text-xl tracking-wide text-white">
              KHANQATULLAH
            </div>
          </div>
        </div>
        <div className="flex items-center gap-10">
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#" className="hover:text-gray-400 transition">
              Lectures
            </a>
            <a href="#" className="hover:text-gray-400 transition">
              Wazaif
            </a>
            <a href="#" className="hover:text-gray-400 transition">
              Resources
            </a>
            <a
              href="#"
              className="hover:text-gray-400 transition flex items-center gap-1"
            >
              <span className="animate-pulse">
                <Image
                  src="/images/liveImage.png"
                  alt="Logo"
                  width={100}
                  height={100}
                  className="h-10 w-10"
                />
              </span>
              <span>Streaming</span>
            </a>
          </nav>
          <div className="hidden md:flex items-center gap-4">
            <Image
              src="/images/user.jpeg"
              alt="User"
              width={100}
              height={100}
              className="h-10 w-10 rounded-full  object-cover"
            />
          </div>
        </div>

        <button
          className="md:hidden flex items-center z-40"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <svg
            width="28"
            height="28"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              d="M4 6h16M4 12h16M4 18h16"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </header>
      <div
        className={`fixed inset-0 w-screen h-screen z-[9999] bg-black/95 flex flex-col items-center transition-all duration-500 ${
          menuOpen
            ? "opacity-100 pointer-events-auto scale-100"
            : "opacity-0 pointer-events-none scale-105"
        }`}
        style={{ transitionProperty: "opacity, transform" }}
      >
        <div className="w-full flex justify-between items-center px-5 py-3">
          <div className="flex items-start gap-3">
            <div>
              <Image
                src="/images/logoImage.png"
                alt="Logo"
                width={100}
                height={100}
                className="md:h-32 md:w-20 h-20 w-14 rounded-full"
              />
            </div>
            <div>
              <div className="text-xs md:text-lg font-arabic">
                {" "}
                خانقةاللّٰہِ
              </div>
              <div className="font-bold text-sm md:text-xl tracking-wide text-white">
                KHANQATULLAH
              </div>
            </div>
          </div>
          <div>
            <button
              className="absolute top-6 right-6 text-white"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg
                width="32"
                height="32"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  d="M6 18L18 6M6 6l12 12"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        <nav
          className={`flex flex-col gap-8 text-xl font-semibold mt-5 transform transition-all duration-500 ${
            menuOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <a
            href="#"
            onClick={() => setMenuOpen(false)}
            className="hover:text-gray-400 transition"
          >
            Lectures
          </a>
          <a
            href="#"
            onClick={() => setMenuOpen(false)}
            className="hover:text-gray-400 transition"
          >
            Wazaif
          </a>
          <a
            href="#"
            onClick={() => setMenuOpen(false)}
            className="hover:text-gray-400 transition"
          >
            Resources
          </a>
          <a
            href="#"
            onClick={() => setMenuOpen(false)}
            className="hover:text-gray-400 transition"
          >
            Streaming
          </a>
        </nav>
        <div
          className={`mt-10 flex justify-center  items-center gap-3 transform transition-all duration-500 ${
            menuOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <span className="animate-pulse">
            <Image
              src="/images/liveImage.png"
              alt="Logo"
              width={100}
              height={100}
              className="h-10 w-10"
            />
          </span>
          <Image
            src="/images/user.jpeg"
            alt="User"
            width={100}
            height={100}
            className="h-10 w-10 rounded-full object-cover"
          />
        </div>
      </div>
    </>
  );
}
