"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function MobileFormWrapper({ children }) {
  const [showForm, setShowForm] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) return;

    const flag = localStorage.getItem("showMobileForm");

    if (flag === "true") {
      setShowForm(false);
    } else {
      setShowForm(true);
    }

    localStorage.removeItem("showMobileForm");
  }, [isMobile, pathname]);

  if (!isMobile) return <>{children}</>;
  return (
    <div
      className={`fixed top-30 rounded-tl-4xl sm:rounded-0 right-0 left-[105%] w-full h-70 bg-white z-40 transition-transform duration-500 ease-in-out transform ${
        showForm ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {children}
    </div>
  );
}
