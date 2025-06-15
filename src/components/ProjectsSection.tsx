
import { Calendar, MapPin, User, Building2, TrendingUp } from "lucide-react";

type Project = {
  name: string;
  year: string;
  client: string;
  location: string;
  role: string;
  description: string;
  highlights: string[];
  value?: string;
  status: string;
};

const projects: Project[] = [
  {
    name: "Lagos State Food Security Systems & Logistics Hub – Rhema Project BCEGI",
    year: "2024 – Present",
    client: "Lagos State Government",
    location: "Epe, Lagos, Nigeria",
    role: "Project Quantity Surveyor",
    value: "₦10B+",
    status: "Ongoing",
    description: "The largest food logistics hub in sub-Saharan Africa, supporting over 10 million Lagosians through improved food supply and logistics.",
    highlights: [
      "Managed cost, procurement, and contract admin for Dealing Areas 1-6, ensuring 20%+ cost savings.",
      "Oversaw construction of cold/dry stores, silos, infrastructure, and key facilities.",
      "Developed Material Tracker Dashboard, resulting in major cost control improvements.",
      "Led design/value engineering, stakeholder engagement, and financial reporting."
    ]
  },
  {
    name: "Niger Gold Buying Centre (GBC)",
    year: "2022 – Present",
    client: "SMDF – PAGMI",
    location: "Minna, Niger State",
    role: "Project Analyst",
    value: "₦800M+",
    status: "Active",
    description: "State-of-the-art gold buying, processing, and trading centre integrating secure storage and gold processing.",
    highlights: [
      "Led project conceptualization and documentation.",
      "Managed tender, design, and cost estimation.",
      "Oversaw contract management and site reporting."
    ]
  },
  {
    name: "Kaduna Gold Buying Centre (GBC)",
    year: "2022 – 2024",
    client: "SMDF – PAGMI",
    location: "Kaduna, Nigeria",
    role: "Project Analyst",
    value: "₦600M+",
    status: "Completed",
    description: "Modernization and upgrade of gold buying facilities, infrastructure, and security.",
    highlights: [
      "Managed contractor selection, tender reports, and milestone reporting.",
      "Prepared BOQs, technical specs, and contract documentation."
    ]
  },
  {
    name: "Abuja Kano Road MEP Installations",
    year: "2021 – 2022",
    client: "Federal Government of Nigeria",
    location: "Abuja-Kano, Nigeria",
    role: "Assistant Quantity Surveyor",
    value: "₦300M+",
    status: "Completed",
    description: "Major MEP installations for yard buildings supporting highway construction.",
    highlights: [
      "Prepared bills, cost analysis, and saved ₦25M through cost control.",
      "Supervised technical teams and contract communication."
    ]
  }
];

const ProjectsSection = () => (
  <section className="w-full py-20 bg-gradient-to-br from-slate-50 to-blue-50/30">
    <div className="max-w-6xl mx-auto px-6">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
          Featured Projects
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-4"></div>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Showcasing major infrastructure and construction projects with proven cost savings and successful delivery
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Building2 size={24} />
                  </div>
                  <div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      project.status === 'Ongoing' ? 'bg-green-400/20 text-green-100' :
                      project.status === 'Active' ? 'bg-yellow-400/20 text-yellow-100' :
                      'bg-blue-400/20 text-blue-100'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                {project.value && (
                  <div className="text-right">
                    <div className="text-2xl font-bold">{project.value}</div>
                    <div className="text-xs opacity-80">Project Value</div>
                  </div>
                )}
              </div>
              
              <h3 className="text-xl font-bold mb-2 leading-tight">{project.name}</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm opacity-90">
                <div className="flex items-center gap-2">
                  <User size={16} />
                  <span>{project.role}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{project.year}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building2 size={16} />
                  <span className="truncate">{project.client}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>{project.location}</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <p className="text-slate-700 leading-relaxed mb-6">{project.description}</p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp size={18} className="text-blue-600" />
                  <span className="font-semibold text-slate-900">Key Achievements</span>
                </div>
                {project.highlights.map((highlight, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-700 text-sm leading-relaxed">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
