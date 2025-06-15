
import HeroSection from "@/components/HeroSection";
import SummarySection from "@/components/SummarySection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import CertificationsSection from "@/components/CertificationsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <main className="min-h-screen w-full bg-white dark:bg-slate-900 font-sans overflow-x-hidden transition-colors duration-300">
      <HeroSection />
      <SummarySection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <CertificationsSection />
      <ContactSection />
      <footer className="w-full py-6 text-center text-sm text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-700">
        <div className="max-w-6xl mx-auto px-6">
          <p>© {new Date().getFullYear()} AbdulAzeez Ahmad · Professional Quantity Surveyor</p>
          <p className="mt-1 text-xs">Delivering Excellence in Cost Management & Project Planning</p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
