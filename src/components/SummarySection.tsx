
import { Target, TrendingUp, Users } from "lucide-react";

const SummarySection = () => (
  <section className="w-full py-16 sm:py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      {/* Header */}
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-4 sm:mb-6">
          Professional Summary
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 mx-auto rounded-full"></div>
      </div>

      {/* Content Grid */}
      <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
        {/* Main Summary */}
        <div className="lg:col-span-2 space-y-6 sm:space-y-8">
          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
            Results-driven Quantity Surveyor with proven expertise in cost estimation, budgeting, 
            contract administration, and project planning across high-value residential, commercial, 
            and infrastructure projects. Passionate about delivering value through smart cost control 
            and efficient resource management.
          </p>
          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
            Known for a collaborative approach and effective stakeholder coordination, I excel at 
            identifying cost-saving opportunities, managing risks, and driving successful project 
            outcomes that support operational efficiency and organizational growth.
          </p>
        </div>

        {/* Stats */}
        <div className="space-y-4 sm:space-y-6">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50 p-4 sm:p-6 rounded-2xl border border-blue-100 dark:border-blue-800/50 backdrop-blur-sm">
            <div className="flex items-center gap-3 sm:gap-4 mb-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 dark:bg-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                <TrendingUp className="text-white" size={20} />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">30%</div>
                <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">Cost Savings</div>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">Average cost reduction achieved through strategic planning</p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/50 dark:to-emerald-950/50 p-4 sm:p-6 rounded-2xl border border-green-100 dark:border-green-800/50 backdrop-blur-sm">
            <div className="flex items-center gap-3 sm:gap-4 mb-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-600 dark:bg-green-500 rounded-xl flex items-center justify-center shadow-lg">
                <Target className="text-white" size={20} />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">15+</div>
                <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">Projects</div>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">Successfully delivered projects worth ₦1B+</p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-950/50 dark:to-violet-950/50 p-4 sm:p-6 rounded-2xl border border-purple-100 dark:border-purple-800/50 backdrop-blur-sm">
            <div className="flex items-center gap-3 sm:gap-4 mb-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-600 dark:bg-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                <Users className="text-white" size={20} />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">5+</div>
                <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">Years</div>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">Professional experience in quantity surveying</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SummarySection;
