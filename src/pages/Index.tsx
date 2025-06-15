
import HeroSection from "@/components/HeroSection";
import SummarySection from "@/components/SummarySection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import CertificationsSection from "@/components/CertificationsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-gray-50 to-white font-sans">
      <HeroSection />
      <SummarySection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <CertificationsSection />
      <ContactSection />
      <footer className="w-full py-4 text-center text-xs text-slate-400 bg-transparent mt-0">
        © {new Date().getFullYear()} AbdulAzeez Ahmad · Portfolio
      </footer>
    </main>
  );
};

export default Index;
