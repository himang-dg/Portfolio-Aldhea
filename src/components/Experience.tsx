"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { dict } from "@/lib/i18n";

const experiencesId = [
  {
    company: "frullydrart.management",
    period: "2026",
    role: "Tim Kreatif (freelance)",
    description: "Merancang visual content untuk Instagram (pricelist, feed, testimonials). Membantu video editing & videography. Berperan sebagai content creator dalam produksi dan pengembangan konten. Menyusun content plan Instagram & TikTok.",
  },
  {
    company: "PT Dynamo Media Network (Kumparan)",
    period: "2025 - 2026",
    role: "AI & Corporate Strategy (Designer for Internal Communication)",
    description: "Memanfaatkan Generative AI (ChatGPT, Gemini, Claude, Higgsfield). Menyusun prompt, produksi konten AI (Image, Video, Audio, Avatar), evaluasi tools, dan riset tren AI untuk kebutuhan kreatif.",
  },
  {
    company: "Cermin Cerdas",
    period: "2023 - 2025",
    role: "Tim Kreatif",
    description: "Desain Grafis (Feed IG, edukasi produk, banner toko online). Social Media Specialist (content planner, strategi, caption). Konten Kreator (video promosi TikTok & Instagram menggunakan CapCut).",
  },
  {
    company: "Saktah Kopi",
    period: "2023",
    role: "Tim Kreatif (freelance)",
    description: "Desain Grafis (Feed IG, promosi event/minuman). Social Media Specialist (strategi konten, riset tren, analytics). Konten Kreator (video harian TikTok & IG dengan CapCut).",
  },
  {
    company: "Realation",
    period: "2022",
    role: "Desain Grafis (intern)",
    description: "Merancang konten visual edukasi relasi komunikasi sehat. Kolaborasi tim real-time menggunakan Figma, dan pembuatan aset menggunakan Adobe Illustrator.",
  },
  {
    company: "Binals Coffee",
    period: "2021 - 2023",
    role: "Tim Kreatif (freelance)",
    description: "Desain Grafis (Feed IG, poster promosi). Social Media Specialist (content planner mingguan, copywriting, analisis insight). Konten Kreator (video TikTok & Instagram menggunakan CapCut).",
  },
  {
    company: "Dialog Tenang",
    period: "2021",
    role: "Desain Grafis (intern)",
    description: "Merancang layout Instagram edukatif, mengembangkan konsep visual komunikatif, membuat konten QnA dan tips komunikasi menggunakan Adobe Illustrator dan Canva.",
  },
  {
    company: "UPT. Penerbitan dan Percetakan Universitas Trisakti",
    period: "2021",
    role: "Desain Grafis (intern)",
    description: "Merancang cover buku ilmiah dan jurnal dengan konsep modern. Mengombinasikan tipografi, ilustrasi, layouting dengan standar cetak menggunakan InDesign, Photoshop, dan Illustrator.",
  }
];

const experiencesEn = [
  {
    company: "frullydrart.management",
    period: "2026",
    role: "Creative Team (freelance)",
    description: "Designed visual content for Instagram (pricelist, feed, testimonials). Assisted in video editing & videography. Acted as a content creator in production and content development. Created content plans for Instagram & TikTok.",
  },
  {
    company: "PT Dynamo Media Network (Kumparan)",
    period: "2025 - 2026",
    role: "AI & Corporate Strategy (Designer for Internal Communication)",
    description: "Utilized Generative AI (ChatGPT, Gemini, Claude, Higgsfield). Created prompts, AI content production (Image, Video, Audio, Avatar), tool evaluation, and AI trend research for creative needs.",
  },
  {
    company: "Cermin Cerdas",
    period: "2023 - 2025",
    role: "Creative Team",
    description: "Graphic Design (IG Feed, product education, online store banners). Social Media Specialist (content planner, strategy, caption). Content Creator (TikTok & Instagram promo videos using CapCut).",
  },
  {
    company: "Saktah Kopi",
    period: "2023",
    role: "Creative Team (freelance)",
    description: "Graphic Design (IG Feed, event/drink promos). Social Media Specialist (content strategy, trend research, analytics). Content Creator (daily TikTok & IG videos with CapCut).",
  },
  {
    company: "Realation",
    period: "2022",
    role: "Graphic Design (intern)",
    description: "Designed visual content for healthy communication relationship education. Real-time team collaboration using Figma, and asset creation using Adobe Illustrator.",
  },
  {
    company: "Binals Coffee",
    period: "2021 - 2023",
    role: "Creative Team (freelance)",
    description: "Graphic Design (IG Feed, promo posters). Social Media Specialist (weekly content planner, copywriting, insight analysis). Content Creator (TikTok & Instagram videos using CapCut).",
  },
  {
    company: "Dialog Tenang",
    period: "2021",
    role: "Graphic Design (intern)",
    description: "Designed educational Instagram layouts, developed communicative visual concepts, created QnA content and communication tips using Adobe Illustrator and Canva.",
  },
  {
    company: "UPT. Publishing and Printing Trisakti University",
    period: "2021",
    role: "Graphic Design (intern)",
    description: "Designed scientific book and journal covers with a modern concept. Combined typography, illustrations, layouting with printing standards using InDesign, Photoshop, and Illustrator.",
  }
];

export default function Experience() {
  const { lang } = useLanguage();
  const text = dict[lang].experience;
  const experiences = lang === 'id' ? experiencesId : experiencesEn;

  return (
    <section id="experience" className="py-20 px-6 md:px-12 relative">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] z-0 pointer-events-none"></div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{text.title1} <span className="text-gradient">{text.title2}</span></h2>
          <p className="text-gray-400">{text.desc}</p>
        </div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
          {experiences.map((exp, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}
            >
              {/* Timeline dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#050505] bg-purple-500 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_15px_rgba(168,85,247,0.5)] z-10">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              
              {/* Content card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-6 rounded-2xl hover:bg-white/[0.08] transition-colors border-t border-l border-white/10 relative">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <span className="text-xs font-semibold px-3 py-1 bg-white/10 rounded-full text-purple-300 whitespace-nowrap w-fit">
                    {exp.period}
                  </span>
                </div>
                <h4 className="text-sm font-medium text-pink-400 mb-4">{exp.company}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
