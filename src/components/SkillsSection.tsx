
import { Code, Database, PieChart, Settings } from "lucide-react";

const skills = [
  "Cost Estimation", "Cost Monitoring & Control", "Contract Administration", "Project Management",
  "Budgeting", "Stakeholder Management", "Team Leadership", "Tender Evaluation",
  "Business Development", "Analytical Reasoning", "Report Writing", "Effective Communication",
  "Value Engineering", "Risk Management", "Research & Market Survey"
];

const softwareSkills = [
  { name: "MS Office Suite", level: 95 },
  { name: "MS Project", level: 90 },
  { name: "AutoCAD", level: 85 },
  { name: "Planswift", level: 88 },
  { name: "Primavera", level: 80 },
  { name: "BlueBeam Revu", level: 85 },
  { name: "Google Workspace", level: 92 }
];

const SkillsSection = () => (
  <section className="w-full py-20 bg-gradient-to-br from-slate-50 to-blue-50/30">
    <div className="max-w-6xl mx-auto px-6">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
          Skills & Expertise
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Core Skills */}
        <div className="space-y-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
              <Settings className="text-white" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Core Competencies</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {skills.map((skill, index) => (
              <div 
                key={skill} 
                className="group bg-white p-4 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full group-hover:scale-125 transition-transform"></div>
                  <span className="text-slate-700 font-medium">{skill}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Software Skills */}
        <div className="space-y-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center">
              <Code className="text-white" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Software Proficiency</h3>
          </div>
          
          <div className="space-y-6">
            {softwareSkills.map((software, index) => (
              <div 
                key={software.name} 
                className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-lg transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="font-semibold text-slate-800">{software.name}</span>
                  <span className="text-sm text-slate-500">{software.level}%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${software.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SkillsSection;
