"use client";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="font-albert text-2xl font-bold logo hover:text-blue-600"
            >
              <span id="logo">SachinsBlog</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                className="px-2 py-2 text-sm font-medium hover:text-blue-600"
                href="/about"
              >
                About
              </Link>
              <Link
                className="px-2 py-2 text-sm font-medium hover:text-blue-600"
                href="/bookshelf"
              >
                Bookshelf
              </Link>
            </div>
          </div>
          <div className="mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700  hover:bg-blue-100 transition duration-150 ease-in-out"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 sm:px-3">
            <Link
              href="/about"
              className=" hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </Link>
            <Link
              href="/bookshelf"
              className="hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium mb-4"
            >
              Bookshelf
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
