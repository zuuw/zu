"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Me", href: "#aboutme" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="absolute flex justify-center items-center mt-[10vh]">
      {/* Desktop Nav */}
      <ul className="hidden md:flex gap-10">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              className="text-lg font-medium relative group"
            >
              {link.name}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      {/* <div className="md:hidden mt-6">
        <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {menuOpen && (
        <div className=" relative top-16 left-0 w-full bg-white shadow-md md:hidden z-50">
          <ul className="flex flex-col items-center gap-4 py-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-lg font-medium relative group"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )} */}
    </nav>
  );
}
