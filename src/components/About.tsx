"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { dict } from "@/lib/i18n";

export default function About() {
  const { lang } = useLanguage();
  const text = dict[lang].about;

  return (
    <section id="about" className="py-20 px-6 md:px-12 relative">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/10 rounded-full blur-[80px]"></div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{text.title1} <span className="text-gradient">{text.title2}</span></h2>
          
          <div className="text-gray-300 space-y-4 text-lg leading-relaxed">
            <p>{text.p1}</p>
            <p>{text.p2}</p>
            <p>{text.p3}</p>
          </div>
          
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: text.stat1L, value: text.stat1V },
              { label: text.stat2L, value: text.stat2V },
              { label: text.stat3L, value: text.stat3V },
              { label: text.stat4L, value: text.stat4V },
            ].map((stat, i) => (
              <div key={i} className="glass p-4 rounded-xl text-center">
                <h4 className="text-2xl font-bold text-white mb-1">{stat.value}</h4>
                <p className="text-xs text-gray-400 uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
