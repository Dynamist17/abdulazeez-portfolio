
import { Target, TrendingUp, Users } from "lucide-react";

const SummarySection = () => (
  <section className="w-full py-20 bg-white">
    <div className="max-w-6xl mx-auto px-6">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
          Professional Summary
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
      </div>

      {/* Content Grid */}
      <div className="grid lg:grid-cols-3 gap-8 mb-12">
        {/* Main Summary */}
        <div className="lg:col-span-2">
          <p className="text-lg text-slate-700 leading-relaxed mb-8">
            Results-driven Quantity Surveyor with proven expertise in cost estimation, budgeting, 
            contract administration, and project planning across high-value residential, commercial, 
            and infrastructure projects. Passionate about delivering value through smart cost control 
            and efficient resource management.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            Known for a collaborative approach and effective stakeholder coordination, I excel at 
            identifying cost-saving opportunities, managing risks, and driving successful project 
            outcomes that support operational efficiency and organizational growth.
          </p>
        </div>

        {/* Stats */}
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-100">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                <TrendingUp className="text-white" size={24} />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">30%</div>
                <div className="text-sm text-slate-600">Cost Savings</div>
              </div>
            </div>
            <p className="text-sm text-slate-600">Average cost reduction achieved through strategic planning</p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-100">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                <Target className="text-white" size={24} />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">15+</div>
                <div className="text-sm text-slate-600">Projects</div>
              </div>
            </div>
            <p className="text-sm text-slate-600">Successfully delivered projects worth ₦1B+</p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-6 rounded-2xl border border-purple-100">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center">
                <Users className="text-white" size={24} />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">5+</div>
                <div className="text-sm text-slate-600">Years</div>
              </div>
            </div>
            <p className="text-sm text-slate-600">Professional experience in quantity surveying</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SummarySection;
