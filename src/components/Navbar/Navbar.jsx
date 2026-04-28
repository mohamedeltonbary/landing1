
import React, { useState, useEffect } from "react";

const Navbar = ({ openForm }) => {
  const [scrolled, setScrolled] = useState(false);

  // لما تعمل scroll النافبار يتغير
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-[#020617]/90 backdrop-blur-md border-b border-white/10 shadow-lg"
        : "bg-transparent"
        }`}
    >
      <div className="flex justify-between items-center px-6 md:px-8 py-4 max-w-7xl mx-auto">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center font-bold text-white shadow-lg shadow-purple-500/20">
            F
          </div>
          <span className="text-xl md:text-xl font-bold tracking-tight text-white">
            FocusFlow
          </span>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-6 text-gray-400 font-medium text-base">
          <a
            href="#features"
            className="hover:text-white transition-all duration-300"
          >
            Features
          </a>
          <a
            href="#how"
            className="hover:text-white transition-all duration-300"
          >
            How it works
          </a>
          <a
            href="#pricing"
            className="hover:text-white transition-all duration-300"
          >
            Pricing
          </a>
        </div>

        {/* Button */}
        <div>
          <button
            onClick={openForm}
            aria-label="تواصل معنا"
            className="bg-gradient-to-r from-white/90 to-gray-100 text-[#020617] px-5 md:px-6 py-2 rounded-full text-base font-bold transition-all duration-300 hover:from-white hover:to-gray-200 active:scale-95 shadow-md cursor-pointer"
          >
            Contact us
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;