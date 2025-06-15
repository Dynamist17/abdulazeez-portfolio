
const certifications: string[] = [
  "NIQS Member (in-view, 2025)",
  "QSRBN Member (in-view, 2025)",
  "PMP, HSE, Leadership, Business Communication, HRM – Dexter & Heroes Consulting",
  "Project Management Skills for Leaders – LinkedIn",
  "Smart PM Training: Project Planning and Control",
  "Coursera: Cost Management, Construction Cost Estimating & Cost Control",
  "Business Writing – Coursera",
  "Sustainability & Innovation, Foundations – Coursera",
  "Alison: Speak Effectively, Motivation, Emotional Intelligence, Leadership, Coaching",
  "Udemy: Project Management & Contract Management"
];
const CertificationsSection = () => (
  <section className="w-full py-10 bg-white font-sans border-b border-gray-100">
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-2xl font-semibold mb-4 text-slate-900">Certifications & Training</h2>
      <div className="flex flex-wrap gap-3">
        {certifications.map((cert, i) => (
          <span key={i} className="inline-block px-4 py-1 rounded-full bg-green-50 text-green-800 text-xs font-medium border border-green-100 mb-1 shadow">
            {cert}
          </span>
        ))}
      </div>
    </div>
  </section>
)
export default CertificationsSection;
