
import { ArrowRight, MapPin, Mail, Phone } from "lucide-react";

const HeroSection = () => (
  <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40 overflow-hidden">
    {/* Background Pattern */}
    <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/5 via-transparent to-indigo-600/5 -z-10"></div>
    
    <div className="max-w-6xl w-full mx-auto px-6 py-20">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        {/* Profile Image */}
        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
          <img
            src="/lovable-uploads/fda98c86-6eeb-4099-8656-ec8fa572bbdd.png"
            alt="AbdulAzeez Ahmad Portrait"
            className="relative w-48 h-48 md:w-56 md:h-56 rounded-full object-cover shadow-2xl border-4 border-white ring-2 ring-blue-100 transition-transform duration-300 group-hover:scale-105"
            style={{ objectPosition: "center top" }}
          />
          <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
            <span className="text-white text-xs font-bold">QS</span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 text-center lg:text-left">
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-4 shadow-sm">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              Available for Projects
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent leading-tight mb-6">
            AbdulAzeez Ahmad
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-light text-slate-600 mb-8">
            Senior Quantity Surveyor
          </h2>
          
          <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl">
            Experienced Quantity Surveyor specializing in cost estimation, budgeting, and contract administration. 
            Delivering efficient, cost-effective solutions for large-scale projects across Nigeria with proven 
            expertise in reducing costs by up to 30% through strategic planning.
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap gap-4 items-center justify-center lg:justify-start mb-8 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>Lagos, Nigeria</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span>ahmadabdulazeez122@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>+234 901 1967 239</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 items-center justify-center lg:justify-start">
            <a 
              href="mailto:ahmadabdulazeez122@gmail.com" 
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold flex items-center gap-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <Mail size={20} />
              Get In Touch
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a 
              href="https://www.linkedin.com/in/ahmad-abdulazeez-530a311a5" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-8 py-4 border-2 border-slate-300 text-slate-700 rounded-xl font-semibold hover:border-blue-300 hover:text-blue-600 transition-all duration-300 hover:shadow-lg"
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
