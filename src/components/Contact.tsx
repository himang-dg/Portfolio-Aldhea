"use client";

import { motion } from "framer-motion";
import { FiMail, FiInstagram, FiLinkedin, FiPhone, FiArrowUpRight } from "react-icons/fi";
import { useLanguage } from "@/context/LanguageContext";
import { dict } from "@/lib/i18n";

export default function Contact() {
  const { lang } = useLanguage();
  const text = dict[lang].contact;

  return (
    <section id="contact" className="py-20 px-6 md:px-12 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-gradient-to-t from-purple-900/30 to-transparent blur-[100px] z-0"></div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-[2rem] p-8 md:p-16 text-center border-t border-white/20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            {text.title1} <span className="text-gradient">{text.title2}</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-12 text-lg">
            {text.desc}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <a 
              href="mailto:aldheaaaprita@gmail.com" 
              className="flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform w-full sm:w-auto justify-center"
            >
              <FiMail className="text-xl" /> {text.btnEmail}
            </a>
            <a 
              href="https://www.linkedin.com/in/aldheapritaamara/" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-3 glass px-8 py-4 rounded-full font-bold hover:bg-white/10 hover:scale-105 transition-all w-full sm:w-auto justify-center"
            >
              <FiLinkedin className="text-xl text-[#0A66C2]" /> LinkedIn <FiArrowUpRight className="text-gray-400" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-white/10 text-sm">
            <a href="mailto:aldheaaaprita@gmail.com" className="flex flex-col items-center gap-2 text-gray-400 hover:text-white transition-colors">
              <span className="w-10 h-10 rounded-full glass flex items-center justify-center text-white mb-2">
                <FiMail />
              </span>
              aldheaaaprita@gmail.com
            </a>
            <a href="https://instagram.com/detongg_" target="_blank" rel="noreferrer" className="flex flex-col items-center gap-2 text-gray-400 hover:text-pink-500 transition-colors">
              <span className="w-10 h-10 rounded-full glass flex items-center justify-center text-white mb-2">
                <FiInstagram />
              </span>
              @detongg_
            </a>
            <a href="https://www.linkedin.com/in/aldheapritaamara/" target="_blank" rel="noreferrer" className="flex flex-col items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors">
              <span className="w-10 h-10 rounded-full glass flex items-center justify-center text-white mb-2">
                <FiLinkedin />
              </span>
              LinkedIn
            </a>
            <a href="tel:08152349098" className="flex flex-col items-center gap-2 text-gray-400 hover:text-white transition-colors">
              <span className="w-10 h-10 rounded-full glass flex items-center justify-center text-white mb-2">
                <FiPhone />
              </span>
              0815 2349 098
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
