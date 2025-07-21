"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

export default function AuthHeader() {
  const router = useRouter();
  const pathname = usePathname();

  const isLogin = pathname === "/login";
  const isSignup = pathname === "/signup";

  const handleNavigation = (path: string) => {
    if (window.innerWidth < 768) {
      localStorage.setItem("showMobileForm", "true");
    }
    router.push(path);
  };

  return (
    <header className="fixed top-0 w-full flex items-start justify-between px-2 md:px-10 py-4 z-50 transition-all duration-300 h-17 md:h-20 bg-black shadow-lg backdrop-blur-md">
      <Link href="/">
        <div className="flex items-start gap-3 z-50">
          <Image
            src="/images/logoImage.png"
            alt="Logo"
            width={100}
            height={100}
            className="md:h-32 md:w-20 h-24 w-14 rounded-full z-50"
          />
          <div className="z-50">
            <div className="text-xs md:text-lg font-arabic">خانقةاللّٰہِ</div>
            <div className="font-bold text-sm md:text-xl tracking-wide text-white">
              KHANQATULLAH
            </div>
          </div>
        </div>
      </Link>

      <div className="flex items-center md:mt-1 space-x-5">
        {isLogin && (
          <span className="text-base text-gray-300 hidden md:inline">
            Toggle to sign up
          </span>
        )}
        {isSignup && (
          <span className="text-base text-gray-300 hidden md:inline">
            Toggle to sign in
          </span>
        )}

        <div className="relative flex rounded-md overflow-hidden transition-all duration-300 ease-in-out">
          <button
            onClick={() => handleNavigation("/signup")}
            className={`px-3 md:px-8 py-2 cursor-pointer text-xs md:text-base font-semibold transition-all duration-300 ease-in-out ${
              isSignup
                ? "bg-[#f27f22] text-black z-20 rounded-md"
                : "bg-[#181818] text-gray-400 z-10 rounded-l-md hover:bg-[#2a2a2a]"
            }`}
          >
            Sign Up
          </button>

          <button
            onClick={() => handleNavigation("/login")}
            className={`px-3 md:px-8 py-2 cursor-pointer text-xs md:text-base font-semibold transition-all duration-300 ease-in-out ${
              isLogin
                ? "bg-[#f27f22] text-black z-20 rounded-md"
                : "bg-[#181818] text-gray-400 z-10 rounded-r-md hover:bg-[#2a2a2a]"
            }`}
          >
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
}
