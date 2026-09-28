"use client";

import { useLanguage } from "@/context/LanguageContext";
import { dict } from "@/lib/i18n";

export default function Footer() {
  const { lang } = useLanguage();
  const text = dict[lang].footer;

  return (
    <footer className="border-t border-white/10 bg-[#020202] py-8">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Aldhea Prita Amara. {text.rights}
        </p>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          {text.designBy} <span className="text-red-500">♥</span> <a href="https://s.id/himang" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors underline">Himang</a>
        </div>
      </div>
    </footer>
  );
}
