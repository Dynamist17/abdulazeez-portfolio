import { Building, Calendar, MapPin } from "lucide-react";

type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  accomplishments: string[];
  type: string;
};

const experienceList: Experience[] = [
  {
    role: "Project Quantity Surveyor",
    company: "Origin Tech Group (Rhema Project BCEGI)",
    period: "2024 – Present",
    location: "Lagos, Nigeria",
    type: "Current Role",
    accomplishments: [
      "Oversee cost management, budgeting, and material tracking, saving 30%+ through smart cost control strategies.",
      "Administer contracts, negotiate with vendors, and handle payments, valuations, and compliance reporting.",
      "Supervise major construction works, quality control, and infrastructure development with 20% cost reduction through value engineering.",
      "Develop financial and commercial reports, provide progress updates, and prepare technical documentation."
    ]
  },
  {
    role: "Senior Analyst (Quantity Surveyor)",
    company: "Murty International Limited",
    period: "Jan. 2024 – Sep. 2024",
    location: "Plot 14, Suite 308, Midel Center, Off Oladipo Diya St, Gudu, Abuja",
    type: "Senior Position",
    accomplishments: [
      "Contribute to project success through meticulous planning, preparation of detailed work plans, schedules, and optimized resource allocation, ensuring timely and efficient project delivery.",
      "Led and prepared project proposals for bidding ranging from consulting and contracting projects which has resulted to the competition.",
      "Prepare comprehensive contract documentation, correspondence, cost reports, valuations, variations, and claims, enhancing financial accuracy, and accountability.",
      "Managed stakeholders effectively by maintaining strong communication channels, ensuring alignment with project goals, and preparing comprehensive contract management framework documents for project management and contract closures."
    ]
  },
  {
    role: "Analyst (Quantity Surveyor)",
    company: "Murty International Limited",
    period: "Sep. 2022 – Dec. 2023",
    location: "Plot 14, Suite 308, Midel Center, Off Oladipo Diya St, Gudu, Abuja",
    type: "Analyst Role",
    accomplishments: [
      "Developed master bills of quantities for building and commercial projects, implemented project management dashboards using Microsoft Excel for real-time cost monitoring and control, and prepared detailed cost reports, valuations, variations, claims, and progress reports.",
      "Conducted thorough tender evaluations and reporting for over 8 engineering, project management, and consultancy services contracts exceeding ₦200 million, demonstrating expertise in tender analysis, contract management, and securing new business opportunities through effective proposal development and submission.",
      "Prepared comprehensive contract documentation and correspondence, contributing to the company's revenue growth by securing new business opportunities. Also participated in EOI and proposal development."
    ]
  },
  {
    role: "Quantity Surveyor",
    company: "Zigurrate Projects and Services Ltd",
    period: "2022 – 2023",
    location: "Lagos, Nigeria (Remote)",
    type: "Contract",
    accomplishments: [
      "Produced 20+ detailed project cost estimates (₦300m–1bn), optimizing budgeting and viability.",
      "Developed schedules for resources, improving efficiency.",
      "Fostered strong stakeholder relationships, resolving project concerns proactively."
    ]
  },
  {
    role: "Assistant Quantity Surveyor",
    company: "Lambert Electromec Limited",
    period: "2021 – 2022",
    location: "Abuja, Nigeria",
    type: "Assistant Role",
    accomplishments: [
      "Prepared contract documentation, supervised site inspections and inventories.",
      "Identified cost-saving opportunities saving ₦25m for the company through optimized costs and reduced wastage."
    ]
  },
  {
    role: "Quantity Surveyor (Intern)",
    company: "Yusab Cost Consultant Limited",
    period: "2019",
    location: "Kwara, Nigeria",
    type: "Internship",
    accomplishments: [
      "Applied modern measurement techniques for construction projects.",
      "Prepared BOQs and contract documents, and learned AutoCAD and MS Project for project tasks."
    ]
  }
];

const ExperienceSection = () => (
  <section className="w-full py-20 bg-white">
    <div className="max-w-6xl mx-auto px-6">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
          Professional Journey
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-blue-400 to-blue-200"></div>
        
        <div className="space-y-12">
          {experienceList.map((exp, index) => (
            <div key={index} className="relative flex items-start gap-8 group">
              {/* Timeline Dot */}
              <div className="relative z-10 flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Building className="text-white" size={24} />
                </div>
              </div>
              
              {/* Content Card */}
              <div className="flex-1 bg-gradient-to-br from-white to-slate-50 rounded-2xl p-8 border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                        {exp.type}
                      </span>
                      <div className="flex items-center gap-2 text-slate-500 text-sm">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{exp.role}</h3>
                    <h4 className="text-lg text-blue-600 font-semibold mb-2">{exp.company}</h4>
                    <div className="flex items-center gap-2 text-slate-500">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {exp.accomplishments.map((accomplishment, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-slate-700 leading-relaxed">{accomplishment}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ExperienceSection;
