
import { ArrowRight } from "lucide-react";
const ContactSection = () => (
  <section className="w-full py-12 bg-slate-50 font-sans">
    <div className="max-w-2xl mx-auto px-4 text-center">
      <h2 className="text-2xl font-semibold mb-3 text-slate-900">Let’s Connect</h2>
      <p className="text-md text-slate-700 mb-6">Want to discuss project collaboration or learn more? Reach out directly!</p>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <a
          href="mailto:ahmadabdulazeez122@gmail.com"
          className="px-5 py-2 rounded font-medium text-white bg-blue-700 hover:bg-blue-800 flex items-center gap-2 shadow transition"
        >
          Email Me <ArrowRight size={18} />
        </a>
        <a
          href="tel:+2349011967239"
          className="px-5 py-2 rounded font-medium text-blue-700 border border-blue-700 hover:bg-blue-50 flex items-center gap-2 transition"
        >
          Call: +234 901 1967 239
        </a>
        <a
          href="https://www.linkedin.com/in/ahmad-abdulazeez-530a311a5"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 rounded font-medium text-blue-700 border border-blue-700 hover:bg-blue-50 flex items-center gap-2 transition"
        >
          LinkedIn <ArrowRight size={18} />
        </a>
      </div>
      <div className="mt-5 text-xs text-slate-400">
        Lagos, Nigeria · ahmadabdulazeez122@gmail.com
      </div>
    </div>
  </section>
)
export default ContactSection;
