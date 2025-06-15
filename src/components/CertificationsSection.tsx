
import { Award, Calendar, ExternalLink } from "lucide-react";

const certifications = [
  { name: "NIQS Member", status: "in-view (2025)", type: "Professional" },
  { name: "QSRBN Member", status: "in-view (2025)", type: "Professional" },
  { name: "Project Management Professional (PMP)", provider: "Dexter & Heroes Consulting", type: "Management" },
  { name: "Health, Safety, and Environment (HSE)", provider: "Dexter & Heroes Consulting", type: "Safety" },
  { name: "Project Management Skills for Leaders", provider: "LinkedIn", type: "Management" },
  { name: "Smart PM Training: Project Planning and Control", provider: "Smart PM", type: "Management" },
  { name: "Cost Management Specialization", provider: "Coursera", type: "Technical" },
  { name: "Construction Cost Estimating & Cost Control", provider: "Coursera", type: "Technical" },
  { name: "Business Writing", provider: "Coursera", type: "Communication" },
  { name: "Sustainability & Innovation Foundations", provider: "Coursera", type: "Sustainability" },
  { name: "Leadership & Coaching", provider: "Alison", type: "Leadership" },
  { name: "Contract Management", provider: "Udemy", type: "Technical" }
];

const getTypeColor = (type: string) => {
  switch (type) {
    case 'Professional': return 'from-blue-500 to-blue-600';
    case 'Management': return 'from-green-500 to-green-600';
    case 'Technical': return 'from-purple-500 to-purple-600';
    case 'Safety': return 'from-red-500 to-red-600';
    case 'Communication': return 'from-yellow-500 to-yellow-600';
    case 'Sustainability': return 'from-emerald-500 to-emerald-600';
    case 'Leadership': return 'from-indigo-500 to-indigo-600';
    default: return 'from-gray-500 to-gray-600';
  }
};

const CertificationsSection = () => (
  <section className="w-full py-20 bg-white">
    <div className="max-w-6xl mx-auto px-6">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
          Certifications & Training
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-4"></div>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Continuous professional development through industry-recognized certifications and specialized training programs
        </p>
      </div>

      {/* Certifications Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <div 
            key={index} 
            className="group bg-gradient-to-br from-white to-slate-50 rounded-2xl border border-slate-200 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className={`w-12 h-12 bg-gradient-to-r ${getTypeColor(cert.type)} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <Award className="text-white" size={24} />
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${getTypeColor(cert.type)} text-white`}>
                {cert.type}
              </span>
            </div>

            {/* Content */}
            <h3 className="font-bold text-slate-900 mb-2 leading-tight group-hover:text-blue-600 transition-colors">
              {cert.name}
            </h3>
            
            {cert.provider && (
              <p className="text-slate-600 text-sm mb-2">{cert.provider}</p>
            )}
            
            {cert.status && (
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <Calendar size={14} />
                <span>{cert.status}</span>
              </div>
            )}

            {/* Hover Effect */}
            <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex items-center gap-2 text-blue-600 text-sm font-medium">
                <ExternalLink size={14} />
                <span>View Details</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Professional Memberships Highlight */}
      <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white text-center">
        <h3 className="text-2xl font-bold mb-4">Professional Memberships</h3>
        <p className="mb-6 opacity-90">
          Currently pursuing full membership status with Nigeria's leading quantity surveying professional bodies
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="bg-white/20 px-6 py-3 rounded-xl">
            <span className="font-semibold">NIQS</span>
            <div className="text-sm opacity-80">Nigeria Institute of Quantity Surveyors</div>
          </div>
          <div className="bg-white/20 px-6 py-3 rounded-xl">
            <span className="font-semibold">QSRBN</span>
            <div className="text-sm opacity-80">Quantity Surveyor Registration Board</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CertificationsSection;
