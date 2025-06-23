"use client";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-8 px-4 md:px-10 text-gray-400">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 max-w-6xl mx-auto">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Logo" className="h-10 w-10" />
          <div>
            <div className="font-bold text-lg text-orange-400">
              KHANQATULLAH
            </div>
            <div className="text-xs mt-1">
              A platform for authentic Islamic learning and spiritual growth.
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          <div>
            <div className="font-semibold mb-2 text-white">Menu</div>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:text-orange-400">
                  Lectures
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400">
                  Wazaif
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400">
                  Resources
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400">
                  Streaming
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-2 text-white">Contact</div>
            <div>
              Email:{" "}
              <a
                href="mailto:info@khanqatullah.com"
                className="hover:text-orange-400"
              >
                info@khanqatullah.com
              </a>
            </div>
            <div>
              WhatsApp:{" "}
              <a href="#" className="hover:text-orange-400">
                +92-300-0000000
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-gray-600 mt-8">
        &copy; {new Date().getFullYear()} KHANQATULLAH. All rights reserved.
      </div>
    </footer>
  );
}
