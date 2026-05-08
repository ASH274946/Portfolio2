import Hero from "@/components/sections/Hero";
import TechStackSection from "@/components/sections/TechStack";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import ExperienceSection from "@/components/sections/Experience";
import ContactSection from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <TechStackSection />
      <FeaturedProjects />
      <ExperienceSection />
      <ContactSection />
    </>
  );
}
