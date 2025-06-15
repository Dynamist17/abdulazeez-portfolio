
import { ArrowRight } from "lucide-react";

const HeroSection = () => (
  <section className="w-full py-12 md:py-20 flex flex-col items-center bg-gradient-to-b from-[#f6f9fc] via-[#ecf2f8] to-[#fff] border-b border-gray-200 font-sans">
    <div className="max-w-4xl w-full flex flex-col items-center px-4">
      <img
        src="/lovable-uploads/fda98c86-6eeb-4099-8656-ec8fa572bbdd.png"
        alt="AbdulAzeez Ahmad Portrait"
        className="w-32 h-32 md:w-40 md:h-40 rounded-full shadow-lg object-cover border-4 border-white mb-4"
        style={{ objectPosition: "center top" }}
      />
      <div className="mb-4">
        <span className="inline-block rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-xs font-semibold mb-2 tracking-wide shadow">
          Quantity Surveyor
        </span>
      </div>
      <h1 className="text-4xl md:text-5xl font-bold text-slate-900 text-center leading-tight mb-2">
        AbdulAzeez Ahmad
      </h1>
      <p className="text-lg md:text-xl text-slate-600 text-center mb-5 max-w-xl">
        Experienced Quantity Surveyor skilled in cost estimation, budgeting, contract administration, and project planning. Delivering efficient, cost-effective, and sustainable results for large-scale projects across Nigeria.
      </p>
      <div className="flex flex-wrap gap-3 items-center justify-center">
        <a href="mailto:ahmadabdulazeez122@gmail.com" className="px-5 py-2 rounded font-medium text-white bg-blue-700 hover:bg-blue-800 flex items-center gap-2 shadow transition">
          Email Me <ArrowRight size={18} />
        </a>
        <a href="https://www.linkedin.com/in/ahmad-abdulazeez-530a311a5" target="_blank" rel="noopener noreferrer" className="px-5 py-2 rounded font-medium text-blue-700 border border-blue-700 hover:bg-blue-50 flex items-center gap-2 transition">
          LinkedIn <ArrowRight size={18} />
        </a>
        <a href="tel:+2349011967239" className="px-5 py-2 rounded font-medium text-blue-700 border border-blue-700 hover:bg-blue-50 flex items-center gap-2 transition">
          Call: +234 901 1967 239
        </a>
      </div>
      <div className="mt-2 text-xs text-slate-400">
        Lagos, Nigeria · Nigerian
      </div>
    </div>
  </section>
);
export default HeroSection;

