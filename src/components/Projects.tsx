"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { FiImage, FiVideo, FiX, FiChevronLeft, FiChevronRight, FiTag } from "react-icons/fi";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { dict } from "@/lib/i18n";
import { projectTranslations } from "@/lib/projectTranslations";

const tagIcons: Record<string, string> = {
  "ChatGPT": "/icon/chatgpt.png",
  "Gemini": "/icon/gemini.png",
  "Claude": "/icon/claude.png",
  "Higgsfield": "/icon/Higgsfield.png",
  "CapCut": "/icon/capcut.png",
  "Canva": "/icon/canva.png",
  "Adobe Illustrator": "/icon/Adobe Illustrator.png",
  "Illustrator": "/icon/Adobe Illustrator.png",
  "After Effects": "/icon/After Effects.png",
  "Adobe Photoshop": "/icon/Adobe Photoshop.png",
  "Photoshop": "/icon/Adobe Photoshop.png",
  "Adobe Premiere": "/icon/Adobe Premiere.png",
  "Premiere": "/icon/Adobe Premiere.png",
  "Premiere Pro": "/icon/Adobe Premiere.png",
  "Figma": "/icon/Figma.png",
  "Heygen": "/icon/Heygen.png",
  "Midjourney": "/icon/Midjourney.png",
  "ElevenLabs": "/icon/ElevenLabs.png",
};

interface ProjectMedia {
  type: 'image' | 'video';
  url: string;
}

interface Project {
  slug: string;
  title: string;
  category: string;
  company: string;
  tags: string[];
  coverImage: string;
  media: ProjectMedia[];
  content: string;
}

const categories = ["Semua", "Desain Grafis", "AI Content", "Content Creation", "Desain Grafis & Social Media"];

export default function Projects({ initialProjects = [] }: { initialProjects?: Project[] }) {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const { lang } = useLanguage();
  const text = dict[lang].projects;

  const filteredProjects = activeCategory === "Semua" 
    ? initialProjects 
    : initialProjects.filter(p => p.category === activeCategory);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setCurrentMediaIndex(0);
    document.body.style.overflow = "hidden"; // Prevent scrolling behind modal
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  const nextMedia = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (selectedProject && selectedProject.media.length > 0) {
      setCurrentMediaIndex((prev) => (prev + 1) % selectedProject.media.length);
    }
  };

  const prevMedia = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (selectedProject && selectedProject.media.length > 0) {
      setCurrentMediaIndex((prev) => (prev - 1 + selectedProject.media.length) % selectedProject.media.length);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart) return;
    const touchEnd = e.changedTouches[0].clientX;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    
    if (isLeftSwipe) {
      nextMedia();
    }
    if (isRightSwipe) {
      prevMedia();
    }
  };

  return (
    <section id="portfolio" className="py-20 px-6 md:px-12">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{text.title1} <span className="text-gradient">{text.title2}</span></h2>
            <p className="text-gray-400 max-w-lg">{text.desc}</p>
          </div>
          
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => {
              const displayCat = category === "Semua" ? text.catAll : category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === category 
                      ? "bg-white text-black" 
                      : "glass hover:bg-white/10 text-gray-300"
                  }`}
                >
                  {displayCat}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              onClick={() => openModal(project)}
              className="group glass-card rounded-2xl overflow-hidden flex flex-col h-full cursor-pointer hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] transition-shadow"
            >
              {/* Project Image */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={project.coverImage} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-80"></div>
                
                {/* Overlay badge */}
                <div className="absolute top-4 right-4 glass px-3 py-1 rounded-full flex items-center gap-2 text-xs font-bold text-white shadow-lg">
                  {project.media?.some(m => m.type === 'video') ? <FiVideo /> : <FiImage />}
                  {project.category}
                </div>
              </div>
              
              {/* Project Info */}
              <div className="p-6 flex-grow flex flex-col relative z-10 -mt-6 bg-gradient-to-t from-[#0a0a0a] to-transparent">
                <h3 className="text-xl font-bold mb-1 text-white group-hover:text-purple-400 transition-colors">{project.title}</h3>
                <p className="text-xs text-pink-400 mb-4 font-semibold">{project.company}</p>
                <div className="relative mb-6 flex-grow h-[120px] overflow-hidden">
                  <div className="text-gray-400 text-sm leading-relaxed prose-sm prose-invert prose-p:my-1 prose-ul:my-1 prose-li:my-0">
                    <ReactMarkdown>{lang === 'en' && projectTranslations[project.slug] ? projectTranslations[project.slug].en : project.content}</ReactMarkdown>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/10">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs text-gray-300 bg-white/5 px-2.5 py-1.5 rounded flex items-center gap-1.5 border border-white/5">
                      {tagIcons[tag] ? (
                        <Image src={tagIcons[tag]} alt="" width={12} height={12} className="object-contain" unoptimized />
                      ) : (
                        <FiTag className="text-gray-500" />
                      )}
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox / Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
          >
            <button 
              className="absolute top-6 right-6 text-white bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors z-50"
              onClick={closeModal}
            >
              <FiX className="text-2xl" />
            </button>

            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0f0f0f] border border-white/10 rounded-2xl overflow-hidden max-w-6xl w-full max-h-full flex flex-col md:flex-row shadow-2xl"
            >
              {/* Media Viewer */}
              <div 
                className="w-full md:w-2/3 h-[40vh] md:h-[80vh] relative bg-black flex items-center justify-center group"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                {selectedProject.media && selectedProject.media.length > 0 ? (
                  <>
                    {selectedProject.media[currentMediaIndex].type === 'video' ? (
                      <video 
                        src={selectedProject.media[currentMediaIndex].url}
                        controls
                        autoPlay
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <div id="media-image-container" className="w-full h-full relative bg-black">
                        <style>{`
                          #media-image-container:fullscreen .fs-close-btn { display: flex; }
                          .fs-close-btn { display: none; }
                        `}</style>
                        <img 
                          src={selectedProject.media[currentMediaIndex].url} 
                          alt={`${selectedProject.title} media`} 
                          className="w-full h-full object-contain pointer-events-none md:pointer-events-auto"
                        />
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            const container = document.getElementById("media-image-container");
                            if (container) {
                              if (!document.fullscreenElement) {
                                container.requestFullscreen().catch(err => console.error(err));
                              } else {
                                document.exitFullscreen();
                              }
                            }
                          }}
                          className="absolute bottom-4 right-4 glass p-2 rounded-full opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/20 z-10"
                          title="Full Screen"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path></svg>
                        </button>
                        
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            if (document.fullscreenElement) {
                              document.exitFullscreen();
                            }
                          }}
                          className="fs-close-btn absolute top-4 right-4 glass p-2 rounded-full hover:bg-white/20 z-20 items-center justify-center"
                        >
                          <FiX className="text-white text-xl" />
                        </button>
                      </div>
                    )}

                    {/* Navigation Buttons */}
                    {selectedProject.media.length > 1 && (
                      <>
                        <button 
                          onClick={prevMedia}
                          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 glass p-2 md:p-3 rounded-full opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/20"
                        >
                          <FiChevronLeft className="text-white text-xl" />
                        </button>
                        <button 
                          onClick={nextMedia}
                          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 glass p-2 md:p-3 rounded-full opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/20"
                        >
                          <FiChevronRight className="text-white text-xl" />
                        </button>
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 glass px-3 py-1 rounded-full text-xs text-white">
                          {currentMediaIndex + 1} / {selectedProject.media.length}
                        </div>
                      </>
                    )}
                  </>
                ) : (
                  <img 
                    src={selectedProject.coverImage} 
                    alt={selectedProject.title} 
                    className="w-full h-full object-contain"
                  />
                )}
              </div>

              {/* Sidebar Info */}
              <div className="w-full md:w-1/3 p-6 md:p-8 flex flex-col overflow-y-auto">
                <div className="mb-2 text-xs font-semibold px-3 py-1 bg-white/10 text-purple-300 w-fit rounded-full">
                  {selectedProject.category}
                </div>
                <h3 className="text-2xl font-bold mb-1 text-white">{selectedProject.title}</h3>
                <p className="text-pink-400 font-semibold mb-6 text-sm">{selectedProject.company}</p>
                
                <div className="prose prose-invert prose-sm text-gray-300 flex-grow leading-relaxed">
                  <ReactMarkdown>{lang === 'en' && projectTranslations[selectedProject.slug] ? projectTranslations[selectedProject.slug].en : selectedProject.content}</ReactMarkdown>
                </div>

                <div className="mt-8">
                  <h4 className="text-sm font-semibold text-white mb-3">{text.tags}</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map(tag => (
                      <span key={tag} className="text-xs bg-white/5 border border-white/10 px-3 py-1.5 rounded-md text-gray-300 flex items-center gap-1.5">
                        {tagIcons[tag] ? (
                          <Image src={tagIcons[tag]} alt="" width={14} height={14} className="object-contain" unoptimized />
                        ) : (
                          <FiTag className="text-gray-500" />
                        )}
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
