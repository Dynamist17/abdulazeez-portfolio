
import { Mail, Phone, Linkedin, MapPin, Send, MessageCircle } from "lucide-react";

const ContactSection = () => (
  <section className="w-full py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
    <div className="max-w-6xl mx-auto px-6">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Let's Work Together
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto rounded-full mb-4"></div>
        <p className="text-xl text-blue-100 max-w-2xl mx-auto">
          Ready to discuss your next project? Let's connect and explore how I can help deliver exceptional results within budget and on time.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Contact Info */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
            <p className="text-blue-100 leading-relaxed mb-8">
              Available for new opportunities and project consultations. 
              Feel free to reach out via email, phone, or connect on LinkedIn.
            </p>
          </div>

          <div className="space-y-6">
            {/* Email */}
            <a 
              href="mailto:ahmadabdulazeez122@gmail.com"
              className="group flex items-center gap-4 p-4 bg-white/10 rounded-2xl hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center group-hover:bg-blue-400 transition-colors">
                <Mail size={24} />
              </div>
              <div>
                <div className="font-semibold">Email</div>
                <div className="text-blue-200">ahmadabdulazeez122@gmail.com</div>
              </div>
            </a>

            {/* Phone */}
            <a 
              href="tel:+2349011967239"
              className="group flex items-center gap-4 p-4 bg-white/10 rounded-2xl hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center group-hover:bg-green-400 transition-colors">
                <Phone size={24} />
              </div>
              <div>
                <div className="font-semibold">Phone</div>
                <div className="text-blue-200">+234 901 1967 239</div>
              </div>
            </a>

            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/in/ahmad-abdulazeez-530a311a5"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-4 bg-white/10 rounded-2xl hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                <Linkedin size={24} />
              </div>
              <div>
                <div className="font-semibold">LinkedIn</div>
                <div className="text-blue-200">ahmad-abdulazeez-530a311a5</div>
              </div>
            </a>

            {/* Location */}
            <div className="flex items-center gap-4 p-4 bg-white/10 rounded-2xl">
              <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                <MapPin size={24} />
              </div>
              <div>
                <div className="font-semibold">Location</div>
                <div className="text-blue-200">Lagos, Nigeria</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <MessageCircle size={32} />
            </div>
            
            <h3 className="text-2xl font-bold mb-4">Start a Conversation</h3>
            <p className="text-blue-100 mb-8">
              Whether you're planning a new project or need expert consultation, 
              I'm here to help you achieve your goals efficiently and cost-effectively.
            </p>

            <div className="space-y-4">
              <a 
                href="mailto:ahmadabdulazeez122@gmail.com?subject=Project%20Inquiry&body=Hello%20AbdulAzeez,%0D%0A%0D%0AI'm%20interested%20in%20discussing%20a%20project%20opportunity%20with%20you.%0D%0A%0D%0AProject%20Details:%0D%0A%0D%0ABest%20regards,"
                className="w-full group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white py-4 px-8 rounded-xl font-semibold flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <Send size={20} />
                Send Email
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
              
              <a 
                href="tel:+2349011967239"
                className="w-full border-2 border-white/30 hover:border-white/50 text-white py-4 px-8 rounded-xl font-semibold flex items-center justify-center gap-3 transition-all duration-300 hover:bg-white/10"
              >
                <Phone size={20} />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="text-center mt-16 pt-8 border-t border-white/20">
        <p className="text-blue-200">
          Available for immediate consultation • Lagos, Nigeria • 
          <span className="text-green-400 font-semibold"> Open to new opportunities</span>
        </p>
      </div>
    </div>
  </section>
);

export default ContactSection;
