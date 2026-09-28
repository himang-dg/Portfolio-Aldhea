"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FiMenu, FiX, FiGlobe } from "react-icons/fi";
import { useLanguage } from "@/context/LanguageContext";
import { dict } from "@/lib/i18n";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang } = useLanguage();

  const navLinks = [
    { name: lang === 'id' ? "Beranda" : "Home", href: "#home" },
    { name: dict[lang].nav.about, href: "#about" },
    { name: dict[lang].nav.skills, href: "#skills" },
    { name: dict[lang].nav.experience, href: "#experience" },
    { name: dict[lang].nav.portfolio, href: "#portfolio" },
    { name: dict[lang].nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#050505]/80 backdrop-blur-md border-b border-white/10 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold tracking-tighter">
          Aldhea<span className="text-gradient">.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={() => setLang(lang === 'id' ? 'en' : 'id')}
            className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full glass hover:bg-white/10 transition-colors"
          >
            <FiGlobe /> {lang === 'id' ? 'EN' : 'ID'}
          </button>
        </nav>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button 
            onClick={() => setLang(lang === 'id' ? 'en' : 'id')}
            className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full glass hover:bg-white/10 transition-colors"
          >
            <FiGlobe /> {lang === 'id' ? 'EN' : 'ID'}
          </button>
          <button
            className="text-2xl text-gray-300 hover:text-white transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 right-0 bg-[#0a0a0a] border-b border-white/10 flex flex-col py-4 md:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="px-6 py-3 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </motion.nav>
      )}
    </header>
  );
}
