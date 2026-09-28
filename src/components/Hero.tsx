"use client";

import { motion } from "framer-motion";
import { FiArrowRight, FiDownload } from "react-icons/fi";
import { useLanguage } from "@/context/LanguageContext";
import { dict } from "@/lib/i18n";

export default function Hero() {
  const { lang } = useLanguage();
  const text = dict[lang].hero;

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-10 px-6 md:px-12 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[120px] opacity-50 z-0"></div>

      <div className="container mx-auto max-w-5xl z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 rounded-full glass text-sm text-purple-300 font-medium mb-6">
            {text.badge}
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
            {text.greeting} <br />
            <span className="text-gradient">Aldhea Prita Amara.</span>
          </h1>
          <p className="text-lg text-gray-400 mb-8 max-w-lg leading-relaxed">
            {text.desc}
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#portfolio"
              className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors"
            >
              {text.btnWork} <FiArrowRight />
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 glass px-6 py-3 rounded-full font-medium hover:bg-white/10 transition-colors"
            >
              {text.btnContact} <FiDownload className="rotate-[135deg]" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full glass-card flex items-center justify-center p-2">
            <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-white/10">
              {/* Replace src with an actual generated avatar or real photo if provided later */}
              <img
                src="/Aldhea.png"
                alt="Aldhea Prita"
                className="w-full h-full object-cover mix-blend-overlay opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-500"
              />
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 glass-card p-3 rounded-xl shadow-xl flex items-center gap-2"
            >
              <span className="text-2xl">🎨</span>
              <span className="text-xs font-semibold">{text.badgeVisual}</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 -left-4 glass-card p-3 rounded-xl shadow-xl flex items-center gap-2"
            >
              <span className="text-2xl">🤖</span>
              <span className="text-xs font-semibold">{text.badgeAI}</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
