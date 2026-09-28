import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { getAllProjects } from "@/lib/projects";

export default async function Home() {
  const projects = getAllProjects();
  
  return (
    <>
      <Navbar />
      <main className="flex-1 overflow-x-hidden pt-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects initialProjects={projects} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
