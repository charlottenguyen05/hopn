"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Close on ESC key
  useEffect(() => {
    if (!open) return;
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [open]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/experiences", label: "Experiences" },
    { href: "/about", label: "About" },
  ];

  return (
    <header className="sticky top-0 z-20 backdrop-blur-md bg-white/70 shadow-sm">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-2xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-300 to-indigo-400"
        >
          HOPn
        </Link>

        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center space-x-6 text-sm font-medium text-gray-700">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-gray-900">
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="sm:hidden p-2 rounded-md hover:bg-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-400"
          aria-label="Toggle navigation"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="sm:hidden bg-white/90 backdrop-blur-md border-t border-purple-100">
          <ul className="flex flex-col py-4 px-6 space-y-4 text-gray-700">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block font-medium"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}