
import { useState } from "react";
import {
  Menu,
  X,
  ArrowUpRight,
  ChevronDown,
} from "lucide-react";

import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services", dropdown: true },
    { name: "Technology Expertise", href: "#technology" },
    { name: "Industries", href: "#industries" },
    { name: "Careers", href: "#careers" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/95 backdrop-blur-lg">

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* COMPANY LOGO */}
        <a href="#home" className="flex items-center">
          <img
            src={logo}
            alt="InnovaRise Technology"
            className="h-18 w-auto max-w-[300px] object-contain"
          />
        </a>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="group flex items-center gap-1 whitespace-nowrap text-[15px] font-semibold text-slate-600 transition hover:text-blue-600"
            >
              {link.name}

              {link.dropdown && (
                <ChevronDown
                  size={14}
                  className="transition group-hover:rotate-180"
                />
              )}
            </a>
          ))}
        </nav>

        {/* CONTACT BUTTON */}
        <a
          href="#contact"
          className="hidden items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-1 hover:bg-blue-700 lg:inline-flex"
        >
          Let's Connect
          <ArrowUpRight size={17} />
        </a>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 text-slate-800 hover:bg-slate-100 lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

      </div>

      {/* MOBILE NAVIGATION */}
      {isOpen && (
        <div className="border-t border-slate-100 bg-white px-6 py-6 lg:hidden">
          <nav className="flex flex-col gap-5">

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between text-sm font-semibold text-slate-700 transition hover:text-blue-600"
              >
                {link.name}

                {link.dropdown && (
                  <ChevronDown size={16} />
                )}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-blue-600 px-5 py-3.5 text-sm font-bold text-white"
            >
              Let's Connect
              <ArrowUpRight size={17} />
            </a>

          </nav>
        </div>
      )}

    </header>
  );
};

export default Navbar;
