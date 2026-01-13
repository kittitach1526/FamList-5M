import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <div className="backdrop-blur-md bg-black/60 text-white 
                      rounded-full px-6 py-3
                      shadow-lg border border-white/10
                      w-[90vw] max-w-5xl">

        <div className="flex items-center justify-between">

          {/* Logo */}
          <div className="text-lg font-bold tracking-wide">
            SPHX
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 text-sm font-medium">
            <li className="hover:text-blue-400 cursor-pointer">Home</li>
            <li className="hover:text-blue-400 cursor-pointer">About</li>
            <li className="hover:text-blue-400 cursor-pointer">Projects</li>
            <li className="hover:text-blue-400 cursor-pointer">Contact</li>
          </ul>

          {/* Mobile Button */}
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
          >
            <div className="space-y-1">
              <span className="block w-6 h-[2px] bg-white"></span>
              <span className="block w-6 h-[2px] bg-white"></span>
              <span className="block w-6 h-[2px] bg-white"></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden mt-4 bg-black/70 rounded-xl p-4">
            <ul className="flex flex-col gap-4 text-sm">
              <li className="hover:text-blue-400">Home</li>
              <li className="hover:text-blue-400">About</li>
              <li className="hover:text-blue-400">Projects</li>
              <li className="hover:text-blue-400">Contact</li>
            </ul>
          </div>
        )}

      </div>
    </nav>
  );
}
