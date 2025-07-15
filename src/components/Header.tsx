"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLecturesDropdown, setShowLecturesDropdown] = useState(false);
  const [showResourcesDropdown, setShowResourcesDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 w-full flex items-start justify-between px-4 md:px-10 py-4 z-50 transition-all duration-300 ${
          scrolled ? "bg-black/70 shadow-lg backdrop-blur-md" : "bg-transparent"
        } h-15 md:h-20`}
      >
        {/* Logo */}
        <div className="flex items-start gap-3 z-50">
          <Image
            src="/images/logoImage.png"
            alt="Logo"
            width={100}
            height={100}
            className="md:h-32 md:w-20 h-20 w-14 rounded-full z-50"
          />
          <div className="z-50">
            <div className="text-xs md:text-lg font-arabic"> خانقةاللّٰہِ</div>
            <div className="font-bold text-sm md:text-xl tracking-wide text-white">
              KHANQATULLAH
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="flex items-center gap-10 z-50">
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium relative">
            {/* Lectures */}
            <div className="relative">
              <button
                onClick={() => {
                  setShowLecturesDropdown(!showLecturesDropdown);
                  setShowResourcesDropdown(false);
                }}
                className="hover:text-gray-400 transition flex gap-2 items-center cursor-pointer"
              >
                <span>Lectures</span>
                <Image
                  src="/images/dropdownImage.png"
                  alt="Dropdown"
                  width={100}
                  height={100}
                  className="h-4 w-4"
                />
              </button>
              {showLecturesDropdown && (
                <div className="absolute top-full mt-2 w-40 bg-white text-black rounded shadow-lg z-50">
                  <ul className="text-sm">
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                        Lecture 1
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                        Lecture 2
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Wazaif */}
            <a href="#" className="hover:text-gray-400 transition">
              Wazaif
            </a>

            {/* Resources */}
            <div className="relative">
              <button
                onClick={() => {
                  setShowResourcesDropdown(!showResourcesDropdown);
                  setShowLecturesDropdown(false);
                }}
                className="hover:text-gray-400 transition flex gap-2 items-center cursor-pointer"
              >
                <span>Resources</span>
                <Image
                  src="/images/dropdownImage.png"
                  alt="Dropdown"
                  width={100}
                  height={100}
                  className="h-4 w-4"
                />
              </button>
              {showResourcesDropdown && (
                <div className="absolute top-full mt-2 w-40 bg-white text-black rounded shadow-lg z-50">
                  <ul className="text-sm">
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                        PDF Resources
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                        Books
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Streaming */}
            <a
              href="#"
              className="hover:text-gray-400 transition flex items-center gap-1"
            >
              <span className="animate-pulse">
                <Image
                  src="/images/liveImage.png"
                  alt="Live"
                  width={100}
                  height={100}
                  className="h-10 w-10"
                />
              </span>
              <span>Streaming</span>
            </a>
          </nav>

          {/* User Avatar */}
          <div className="hidden md:flex items-center gap-4">
            <Image
              src="/images/user.jpeg"
              alt="User"
              width={100}
              height={100}
              className="h-10 w-10 rounded-full object-cover"
            />
          </div>
        </div>

        {/* Mobile Menu Button */}
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

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[9999] bg-black/95 flex flex-col items-center transition-all duration-500 ${
          menuOpen
            ? "opacity-100 pointer-events-auto scale-100"
            : "opacity-0 pointer-events-none scale-105"
        }`}
        style={{ transitionProperty: "opacity, transform" }}
      >
        {/* Mobile Header */}
        <div className="w-full flex justify-between items-center px-5 py-3">
          <div className="flex items-start gap-3">
            <Image
              src="/images/logoImage.png"
              alt="Logo"
              width={100}
              height={100}
              className="md:h-32 md:w-20 h-20 w-14 rounded-full"
            />
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

        {/* Mobile Navigation */}
        <nav className="flex flex-col gap-8 text-xl font-semibold mt-5">
          <details className="group">
            <summary className="hover:text-gray-400 cursor-pointer flex items-center gap-2">
              Lectures
              <Image
                src="/images/dropdownImage.png"
                alt="dropdown"
                width={100}
                height={100}
                className="h-4 w-4"
              />
            </summary>
            <ul className="pl-4 mt-2 space-y-2 text-base">
              <li>
                <a href="#" className="block hover:text-gray-400">
                  Lecture 1
                </a>
              </li>
              <li>
                <a href="#" className="block hover:text-gray-400">
                  Lecture 2
                </a>
              </li>
            </ul>
          </details>

          <a
            href="#"
            onClick={() => setMenuOpen(false)}
            className="hover:text-gray-400"
          >
            Wazaif
          </a>

          <details className="group">
            <summary className="hover:text-gray-400 cursor-pointer flex items-center gap-2">
              Resources
              <Image
                src="/images/dropdownImage.png"
                alt="dropdown"
                width={100}
                height={100}
                className="h-4 w-4"
              />
            </summary>
            <ul className="pl-4 mt-2 space-y-2 text-base">
              <li>
                <a href="#" className="block hover:text-gray-400">
                  Books
                </a>
              </li>
              <li>
                <a href="#" className="block hover:text-gray-400">
                  PDFs
                </a>
              </li>
            </ul>
          </details>

          <a
            href="#"
            onClick={() => setMenuOpen(false)}
            className="hover:text-gray-400"
          >
            Streaming
          </a>
        </nav>

        {/* Mobile Footer Icons */}
        <div className="mt-10 flex justify-center items-center gap-3">
          <span className="animate-pulse">
            <Image
              src="/images/liveImage.png"
              alt="Live"
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
