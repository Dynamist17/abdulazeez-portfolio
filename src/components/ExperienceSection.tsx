
type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  accomplishments: string[];
};

const experienceList: Experience[] = [
  {
    role: "Project Quantity Surveyor",
    company: "Origin Tech Group (Rhema Project BCEGI)",
    period: "2024 – Present",
    location: "Lagos, Nigeria",
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
    period: "2022 – 2024",
    location: "Abuja, Nigeria",
    accomplishments: [
      "Prepared master BOQs and detailed cost estimates for 15+ projects; developed cost control dashboards with 35% reporting improvement.",
      "Led bid submissions, evaluated tenders for high-value projects, and enhanced transparency in contract awards.",
      "Drafted and managed extensive contract documents, implemented structured management frameworks improving delivery by 30%.",
      "Integrated sustainability and value engineering, achieving up to 25% reduction in material waste."
    ]
  },
  {
    role: "Quantity Surveyor",
    company: "Zigurrate Projects and Services Ltd",
    period: "2022 – 2023",
    location: "Lagos, Nigeria (Remote)",
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
    accomplishments: [
      "Applied modern measurement techniques for construction projects.",
      "Prepared BOQs and contract documents, and learned AutoCAD and MS Project for project tasks."
    ]
  },
];

const ExperienceSection = () => (
  <section className="w-full py-12 bg-white font-sans border-b border-gray-100">
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-2xl font-semibold mb-6 text-slate-900">Professional Experience</h2>
      <ol className="relative border-l-4 border-blue-100 ml-2">
        {experienceList.map((exp, i) => (
          <li key={i} className="mb-10 ml-6 group">
            <span className="absolute -left-3 flex h-6 w-6 items-center justify-center bg-blue-600 rounded-full ring-4 ring-white mt-1">
              <span className="block h-3 w-3 rounded-full bg-white"></span>
            </span>
            <div className="">
              <div className="flex flex-col md:flex-row md:items-center md:gap-4">
                <h3 className="text-lg md:text-xl font-semibold text-blue-800">{exp.role}</h3>
                <span className="text-sm text-blue-400">{exp.period}</span>
              </div>
              <div className="text-md text-slate-800 font-medium">{exp.company}</div>
              <div className="text-sm text-slate-500 mb-1">{exp.location}</div>
              <ul className="list-disc ml-5 mb-2 mt-2 text-slate-700 space-y-1">
                {exp.accomplishments.map((a, j) => (
                  <li key={j}>{a}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </div>
  </section>
)
export default ExperienceSection;
