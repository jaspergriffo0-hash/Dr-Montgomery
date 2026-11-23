import { Link } from 'react-router-dom';
import { ArrowRight, BriefcaseMedical, CheckCircle2, ClipboardList, Info } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { PageTransition } from '../components/PageTransition';
import { EXPERIENCE_TIMELINE, PROFESSIONAL_RESPONSIBILITIES } from '../data/practiceData';

export function ExperiencePage() {
  return (
    <PageTransition>
      <PageHeader
        kicker="Clinical Career Structure"
        title="Professional Experience"
        description="Illustrative medical career progression and the core clinical, surgical, educational, and rehabilitative responsibilities of a Consultant Trauma and Orthopaedic Surgeon."
        currentPage="Experience"
        notice="The dates, institutions, and positions listed in the career timeline below are illustrative and represent proposed career-history information pending formal verification. They are not confirmed employment records."
      />

      <section className="py-14 md:py-20 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          {/* Proposed Career Timeline Table & Cards */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0E7C7B] mb-1">
                  <BriefcaseMedical className="w-4 h-4" aria-hidden="true" />
                  <span>Proposed Career Progression (Pending Verification)</span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#102A43]">
                  Medical &amp; Surgical Career Timeline
                </h2>
              </div>
              <p className="text-xs font-medium text-[#627D98] flex items-center gap-1.5">
                <Info className="w-4 h-4 text-[#0E7C7B]" aria-hidden="true" />
                <span>Illustrative career structure awaiting verification</span>
              </p>
            </div>

            {/* Structured Accessible Table for Desktop & Tablet */}
            <div className="hidden md:block rounded-2xl bg-white border border-[#D9E2EC] shadow-[0_6px_22px_rgba(16,42,67,0.04)] overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#EEF2F7] border-b border-[#D9E2EC] text-xs font-semibold uppercase tracking-wider text-[#102A43]">
                    <th className="py-4 px-6">Period</th>
                    <th className="py-4 px-6">Institution</th>
                    <th className="py-4 px-6">Position</th>
                    <th className="py-4 px-6">Record Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EEF2F7] text-sm">
                  {EXPERIENCE_TIMELINE.map((entry) => (
                    <tr key={entry.period} className="hover:bg-[#F8FAFC] transition-colors">
                      <td className="py-4 px-6 font-semibold text-[#0E7C7B] tabular-nums whitespace-nowrap">
                        {entry.period}
                      </td>
                      <td className="py-4 px-6 font-medium text-[#102A43]">{entry.institution}</td>
                      <td className="py-4 px-6 text-[#334E68] font-medium">{entry.position}</td>
                      <td className="py-4 px-6 text-xs text-[#627D98]">{entry.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Vertical Timeline Cards */}
            <div className="md:hidden space-y-4">
              {EXPERIENCE_TIMELINE.map((entry) => (
                <div
                  key={entry.period}
                  className="rounded-xl bg-white border border-[#D9E2EC] p-5 shadow-[0_4px_12px_rgba(16,42,67,0.04)]"
                >
                  <p className="text-xs font-semibold text-[#0E7C7B] tabular-nums">{entry.period}</p>
                  <h3 className="mt-1 font-serif text-lg font-semibold text-[#102A43]">
                    {entry.position}
                  </h3>
                  <p className="text-sm font-medium text-[#334E68] mt-0.5">{entry.institution}</p>
                  <p className="text-xs text-[#627D98] mt-2">{entry.note}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Responsibilities */}
          <div className="rounded-2xl bg-[#EEF2F7] border border-[#D9E2EC] p-6 sm:p-10">
            <div className="max-w-2xl mb-8">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0E7C7B] mb-2">
                <ClipboardList className="w-4 h-4" aria-hidden="true" />
                <span>Scope of Consultant Practice</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#102A43]">
                Professional Responsibilities
              </h2>
              <p className="mt-2 text-sm sm:text-base text-[#486581]">
                Core clinical duties spanning acute trauma assessment, operative surgery,
                multidisciplinary coordination, surgical training, and patient rehabilitation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {PROFESSIONAL_RESPONSIBILITIES.map((responsibility, index) => (
                <div
                  key={index}
                  className="rounded-xl bg-white border border-[#D9E2EC] p-5 flex items-start gap-3.5"
                >
                  <CheckCircle2
                    className="w-5 h-5 text-[#0E7C7B] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <p className="text-sm sm:text-base text-[#102A43] font-medium leading-relaxed">
                    {responsibility}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-[#D9E2EC] flex flex-wrap items-center justify-between gap-4">
              <p className="text-sm text-[#486581]">
                Explore the clinical specialties and procedures covered within this practice.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  to="/specializations"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#102A43] hover:bg-[#243B53] text-white text-sm font-semibold transition-colors"
                >
                  <span>Areas of Expertise</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white hover:bg-[#F8FAFC] border border-[#BCCCDC] text-[#102A43] text-sm font-semibold transition-colors"
                >
                  <span>Medical Services</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
