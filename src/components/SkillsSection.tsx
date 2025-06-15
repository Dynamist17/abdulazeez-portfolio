
const skills = [
  "Cost Estimation",
  "Cost Monitoring & Control",
  "Contract Administration",
  "Project Management",
  "Budgeting",
  "Stakeholder Management",
  "Team Leadership",
  "Tender Evaluation",
  "Business Development",
  "Analytical Reasoning",
  "Report Writing",
  "Effective Communication",
  "Value Engineering",
  "Risk Management",
  "Research & Market Survey",
];

const softwareSkills = [
  "MS Office Suite",
  "MS Project",
  "AutoCAD",
  "Planswift",
  "Primavera",
  "BlueBeam Revu",
  "Google Workspace"
];

const SkillsSection = () => (
  <section className="w-full bg-slate-50 py-8 font-sans">
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-2xl font-semibold mb-4 text-slate-900">Skills & Competencies</h2>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <h3 className="font-semibold mb-2 text-slate-800 text-lg">Core Skills</h3>
          <div className="flex flex-wrap gap-2 mb-2">
            {skills.map(skill => (
              <span key={skill} className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-medium">
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="flex-1">
          <h3 className="font-semibold mb-2 text-slate-800 text-lg">Software</h3>
          <div className="flex flex-wrap gap-2">
            {softwareSkills.map(software => (
              <span key={software} className="inline-block px-3 py-1 rounded-full bg-yellow-50 text-yellow-800 text-xs font-medium border border-yellow-100">
                {software}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
export default SkillsSection;
