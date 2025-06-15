
type Project = {
  name: string;
  year: string;
  client: string;
  location: string;
  role: string;
  description: string;
  highlights: string[];
};
const projects: Project[] = [
  {
    name: "Lagos State Food Security Systems & Logistics Hub – Rhema Project BCEGI",
    year: "2024 – Present",
    client: "Lagos State Government",
    location: "Epe, Lagos, Nigeria",
    role: "Project Quantity Surveyor",
    description: "The largest food logistics hub in sub-Saharan Africa, supporting over 10 million Lagosians through improved food supply and logistics.",
    highlights: [
      "Managed cost, procurement, and contract admin for Dealing Areas 1-6, ensuring 20%+ cost savings.",
      "Oversaw construction of cold/dry stores, silos, infrastructure, and key facilities.",
      "Developed Material Tracker Dashboard, resulting in major cost control improvements.",
      "Led design/value engineering, stakeholder engagement, and financial reporting.",
    ]
  },
  {
    name: "Niger Gold Buying Centre (GBC)",
    year: "2022 – Present",
    client: "SMDF – PAGMI",
    location: "Minna, Niger State",
    role: "Project Analyst",
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
    description: "Major MEP installations for yard buildings supporting highway construction.",
    highlights: [
      "Prepared bills, cost analysis, and saved ₦25M through cost control.",
      "Supervised technical teams and contract communication."
    ]
  }
];
const ProjectsSection = () => (
  <section className="w-full bg-slate-50 py-12 font-sans border-b border-gray-100">
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-2xl font-semibold mb-6 text-slate-900">Key Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <div key={i} className="bg-white shadow-md rounded-lg p-6 border border-slate-100 hover:shadow-lg transition">
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold text-blue-700">{p.name}</span>
              <span className="text-xs text-slate-400">{p.year}</span>
            </div>
            <div className="text-sm text-slate-700 mb-1">{p.role} <span className="text-xs text-slate-400">/ {p.client}</span></div>
            <div className="text-xs text-slate-500 mb-2">{p.location}</div>
            <div className="mb-2 text-slate-800">{p.description}</div>
            <ul className="list-disc ml-5 text-slate-700 text-sm space-y-1">
              {p.highlights.map((h, j) => (
                <li key={j}>{h}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
)
export default ProjectsSection;
