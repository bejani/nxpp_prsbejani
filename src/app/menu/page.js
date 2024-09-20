// components/Navbar.js
"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-amber-400 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white font-bold text-xl">
          <Link href="/">
            <img src="/images/home.png" width="50" height="50" />
          </Link>
        </div>

        {/* Hamburger Button for mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>

        {/* Links for desktop and mobile */}
        <div className={`md:flex ${isOpen ? "block" : "hidden"} space-x-4`}>
          <Link href="/" className="text-black hover:text-gray-300">
            Home
          </Link>
          <Link href="/about" className="text-black hover:text-gray-300">
            About
          </Link>
          <Link href="/projects" className="text-black hover:text-gray-300">
            Projects
          </Link>{" "}
          <Link href="/res" className="text-black hover:text-gray-300">
            Resources
          </Link>
        </div>
      </div>
    </nav>
  );
}
