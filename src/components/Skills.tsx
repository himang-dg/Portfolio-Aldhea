"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { dict } from "@/lib/i18n";

const hardSkills = [
  { name: "Adobe Illustrator", image: "/icon/Adobe Illustrator.png" },
  { name: "Adobe Photoshop", image: "/icon/Adobe Photoshop.png" },
  { name: "Adobe Premiere", image: "/icon/Adobe Premiere.png" },
  { name: "After Effects", image: "/icon/After Effects.png" },
  { name: "Figma", image: "/icon/Figma.png" },
  { name: "Canva", image: "/icon/canva.png" },
  { name: "CapCut", image: "/icon/capcut.png" },
  { name: "ChatGPT", image: "/icon/chatgpt.png" },
  { name: "Gemini", image: "/icon/gemini.png" },
  { name: "Claude", image: "/icon/claude.png" },
  { name: "Higgsfield", image: "/icon/Higgsfield.png" },
  { name: "Heygen", image: "/icon/Heygen.png" },
  { name: "Midjourney", image: "/icon/Midjourney.png" },
  { name: "ElevenLabs", image: "/icon/ElevenLabs.png" },
];

export default function Skills() {
  const { lang } = useLanguage();
  const text = dict[lang].skills;

  const softSkills = lang === 'en' 
    ? ["Teamwork", "Creative Thinking", "High Curiosity", "Honest", "Responsible"]
    : ["Kerja Sama Tim", "Berpikir Kreatif", "Rasa Ingin Tahu yang Tinggi", "Jujur", "Bertanggung Jawab"];

  const personalSkills = lang === 'en'
    ? ["Graphic Design", "Social Media Specialist", "Content Creator", "Copywriting", "Video Editing", "Generative AI", "Prompting"]
    : ["Desain Grafis", "Social Media Specialist", "Content Creator", "Copywriting", "Video Editing", "Generative AI", "Prompting"];

  return (
    <section id="skills" className="py-20 px-6 md:px-12">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{text.title1} <span className="text-gradient">{text.title2}</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">{text.desc}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Tools & Hard Skills */}
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <span className="w-8 h-px bg-purple-500"></span> {text.hardSkills}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {hardSkills.map((skill, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="glass-card p-4 rounded-xl flex flex-col items-center justify-center gap-3 hover:bg-white/10 transition-colors group"
                >
                  <div className="relative w-10 h-10 group-hover:scale-110 transition-transform">
                    <Image src={skill.image} alt={skill.name} fill sizes="40px" className="object-contain" unoptimized />
                  </div>
                  <span className="text-xs text-center font-medium text-gray-300">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Personal & Soft Skills */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <span className="w-8 h-px bg-pink-500"></span> {text.personalSkills}
              </h3>
              <div className="flex flex-wrap gap-3">
                {personalSkills.map((skill, i) => (
                  <span key={i} className="px-4 py-2 rounded-full border border-pink-500/30 bg-pink-500/10 text-pink-200 text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <span className="w-8 h-px bg-blue-500"></span> {text.softSkills}
              </h3>
              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill, i) => (
                  <span key={i} className="px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-200 text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
