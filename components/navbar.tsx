"use client";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expOpen, setExpOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        event.target instanceof Node &&
        !menuRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
        setExpOpen(false);
      }
    }

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <nav className="sticky top-0 z-50 bg-white/5 backdrop-blur-md border-b border-white/10 text-gray-300">
      <div className="flex items-center justify-between px-6 md:px-10 py-4">
        <div className="hover:text-taupe-50 text-xl md:text-3xl font-semibold tracking-wide">
          <Link href="/">Taylor</Link>
        </div>
        <div className="hidden md:flex items-center gap-8 text-lg">
          <div className="relative group">
            <Link
              className="text-orange-300 hover:text-orange-200 transition-colors duration-200"
              href="/experience"
            >
              Experience
            </Link>
            <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 hidden group-hover:block">
              <div className="flex flex-col bg-slate-900/80 backdrop-blur-md border border-white/10 rounded-lg text-sm min-w-[120px] shadow-lg">
                <Link href="/experience#soc" className="px-4 py-2 hover:text-orange-300 transition">SOC Analyst</Link>
                <Link href="/experience#ssl" className="px-4 py-2 hover:text-orange-300 transition">Cyber Club</Link>
                <Link href="/experience#research" className="px-4 py-2 hover:text-orange-300 transition">Research</Link>
                <Link href="/experience#it" className="px-4 py-2 hover:text-orange-300 transition">IT Intern</Link>
              </div>
            </div>
          </div>
          <Link className="text-red-300 hover:text-red-200 transition-colors duration-200" href="/projects">Projects</Link>
          <Link className="text-amber-300 hover:text-amber-200 transition-colors duration-200" href="/skills">Skills & Tools</Link>
        </div>

        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-2xl">☰</button>
      </div>

      {menuOpen && (
        <div ref={menuRef} className="md:hidden flex flex-col gap-2 px-6 pb-4">
          <Link href="/" className="py-2">Home</Link>
          <button onClick={() => setExpOpen(!expOpen)} className="text-left py-2 text-orange-300">
            Experience
          </button>
          {expOpen && (
            <div className="flex flex-col pl-4 text-sm">
              <Link href="/experience#soc" className="py-1">SOC Analyst</Link>
              <Link href="/experience#research" className="py-1">Research</Link>
              <Link href="/experience#ssl" className="py-1">SSL</Link>
            </div>
          )}
          <Link href="/projects" className="py-2 text-red-300">Projects</Link>
          <Link href="/skills" className="py-2 text-amber-300">Skills</Link>
        </div>
      )}
    </nav>
  );
}