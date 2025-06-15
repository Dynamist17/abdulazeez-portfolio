
import { ArrowRight, MapPin, Mail, Phone } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const HeroSection = () => (
  <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40 dark:from-slate-900 dark:via-slate-800/30 dark:to-indigo-950/40 overflow-hidden">
    {/* Theme Toggle */}
    <ThemeToggle />
    
    {/* Background Pattern */}
    <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,rgb(15,23,42),rgba(15,23,42,0.6))] -z-10"></div>
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/5 via-transparent to-indigo-600/5 dark:from-blue-400/10 dark:via-transparent dark:to-indigo-400/10 -z-10"></div>
    
    <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 py-20">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Profile Image */}
        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 rounded-full blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
          <img
            src="/lovable-uploads/fda98c86-6eeb-4099-8656-ec8fa572bbdd.png"
            alt="AbdulAzeez Ahmad Portrait"
            className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full object-cover shadow-2xl border-4 border-white dark:border-slate-700 ring-2 ring-blue-100 dark:ring-blue-800/50 transition-all duration-300 group-hover:scale-105"
            style={{ objectPosition: "center top" }}
          />
          <div className="absolute -bottom-2 -right-2 w-12 h-12 sm:w-16 sm:h-16 bg-green-500 dark:bg-green-400 rounded-full flex items-center justify-center shadow-lg border-4 border-white dark:border-slate-700">
            <span className="text-white text-xs sm:text-sm font-bold">QS</span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 text-center lg:text-left">
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 text-xs sm:text-sm font-semibold mb-4 shadow-sm border border-blue-200 dark:border-blue-800">
              <div className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full animate-pulse"></div>
              Available for Projects
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 dark:from-slate-100 dark:via-blue-100 dark:to-indigo-100 bg-clip-text text-transparent leading-tight mb-6">
            AbdulAzeez Ahmad
          </h1>
          
          <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-slate-600 dark:text-slate-300 mb-6 sm:mb-8">
            Senior Quantity Surveyor
          </h2>
          
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0">
            Experienced Quantity Surveyor specializing in cost estimation, budgeting, and contract administration. 
            Delivering efficient, cost-effective solutions for large-scale projects across Nigeria with proven 
            expertise in reducing costs by up to 30% through strategic planning.
          </p>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 items-center justify-center lg:justify-start mb-6 sm:mb-8 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-2">
              <MapPin size={14} />
              <span>Lagos, Nigeria</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={14} />
              <span className="break-all">ahmadabdulazeez122@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={14} />
              <span>+234 901 1967 239</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center lg:justify-start">
            <a 
              href="mailto:ahmadabdulazeez122@gmail.com" 
              className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 text-white rounded-xl font-semibold flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 active:scale-95"
            >
              <Mail size={18} />
              Get In Touch
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a 
              href="https://www.linkedin.com/in/ahmad-abdulazeez-530a311a5" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-xl font-semibold hover:border-blue-300 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:shadow-lg text-center"
            >
              View LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
