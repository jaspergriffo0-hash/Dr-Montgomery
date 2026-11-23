import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  GraduationCap,
  Info,
  Landmark,
  ShieldCheck,
} from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { PageTransition } from '../components/PageTransition';
import { EDUCATION_TIMELINE } from '../data/practiceData';

export function EducationPage() {
  return (
    <PageTransition>
      <PageHeader
        kicker="Academic Background & Training"
        title="Education and Medical Qualifications"
        description="An overview of Dr. Percival George Montgomery's confirmed early background alongside the recognized United Kingdom medical education and orthopaedic surgical training pathway."
        currentPage="Education"
        notice="Illustrative UK universities, primary degrees, and postgraduate surgical qualifications shown below describe the standard UK medical education pathway and are not presented as Dr. Montgomery's verified personal credentials."
      />

      <section className="py-14 md:py-20 bg-[#F8FAFC]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Distinction Card */}
          <div className="mb-12 rounded-2xl bg-white border border-[#D9E2EC] p-6 shadow-[0_4px_16px_rgba(16,42,67,0.04)] flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#0E7C7B]/10 text-[#0E7C7B] flex items-center justify-center shrink-0">
              <Info className="w-5 h-5" aria-hidden="true" />
            </div>
            <div className="text-sm text-[#334E68] leading-relaxed">
              <h2 className="font-serif text-lg font-semibold text-[#102A43] mb-1">
                Distinguishing Confirmed History from General UK Medical Training
              </h2>
              <p>
                Dr. Montgomery&apos;s confirmed biographical details include his birth on{' '}
                <strong className="text-[#102A43]">June 29, 1964, in London, England, United Kingdom</strong>,
                and his formative years growing up in London during the 1970s. Specific university
                names, graduation years, and personal diplomas are intentionally withheld pending
                formal credential verification; recognized UK institutions and standard orthopaedic
                qualifications are outlined for educational context.
              </p>
            </div>
          </div>

          {/* Vertical Timeline */}
          <div className="relative pl-6 sm:pl-10 border-l border-[#BCCCDC] space-y-10">
            {EDUCATION_TIMELINE.map((section, index) => (
              <article key={section.id} className="relative">
                {/* Timeline Marker */}
                <span
                  aria-hidden="true"
                  className="absolute -left-[33px] sm:-left-[49px] top-1 w-4 h-4 rounded-full bg-[#0E7C7B] ring-4 ring-[#F8FAFC]"
                />

                <div className="rounded-2xl bg-white border border-[#D9E2EC] p-6 sm:p-8 shadow-[0_6px_22px_rgba(16,42,67,0.04)]">
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-medium text-[#627D98] mb-2">
                    <span className="text-[#0E7C7B] font-semibold uppercase tracking-wider">
                      {section.stage}
                    </span>
                    <span>{section.statusLabel}</span>
                  </div>

                  <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#102A43]">
                    {section.title}
                  </h2>

                  <div className="mt-4 space-y-3 text-sm sm:text-base text-[#334E68] leading-relaxed">
                    {section.points.map((point, idx) => (
                      <p key={idx}>{point}</p>
                    ))}
                  </div>

                  {/* University Stage Extra Details */}
                  {'illustrativeInstitutions' in section && section.illustrativeInstitutions && (
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-[#EEF2F7]">
                      <div>
                        <div className="flex items-center gap-2 text-sm font-semibold text-[#102A43] mb-3">
                          <Landmark className="w-4 h-4 text-[#0E7C7B]" aria-hidden="true" />
                          <span>Examples of Recognized UK Medical Institutions</span>
                        </div>
                        <ul className="space-y-2 text-sm text-[#334E68]">
                          {section.illustrativeInstitutions.map((inst) => (
                            <li key={inst} className="flex items-center gap-2">
                              <CheckCircle2
                                className="w-4 h-4 text-[#0E7C7B] shrink-0"
                                aria-hidden="true"
                              />
                              <span>{inst}</span>
                            </li>
                          ))}
                        </ul>
                        <p className="mt-3 text-xs text-[#627D98]">
                          Listed solely as illustrative examples of recognized UK medical schools,
                          not verified personal attendance records.
                        </p>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 text-sm font-semibold text-[#102A43] mb-3">
                          <BookOpen className="w-4 h-4 text-[#0E7C7B]" aria-hidden="true" />
                          <span>Core Curriculum in UK Medical Education</span>
                        </div>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-[#334E68]">
                          {section.coreSubjects.map((subject) => (
                            <li key={subject} className="flex items-center gap-2">
                              <CheckCircle2
                                className="w-4 h-4 text-[#0E7C7B] shrink-0"
                                aria-hidden="true"
                              />
                              <span>{subject}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* Surgical Training Pathway Extra Details */}
                  {'trainingStages' in section && section.trainingStages && (
                    <div className="mt-6 pt-6 border-t border-[#EEF2F7]">
                      <div className="flex items-center gap-2 text-sm font-semibold text-[#102A43] mb-4">
                        <GraduationCap className="w-4 h-4 text-[#0E7C7B]" aria-hidden="true" />
                        <span>UK Orthopaedic Surgical Training Pathway</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {section.trainingStages.map((stageItem, sIdx) => (
                          <div
                            key={stageItem}
                            className="rounded-xl bg-[#EEF2F7] border border-[#D9E2EC] px-4 py-3 flex items-start gap-3"
                          >
                            <span className="text-xs font-semibold text-[#0E7C7B] tabular-nums mt-0.5">
                              0{sIdx + 1}.
                            </span>
                            <span className="text-sm font-medium text-[#102A43]">{stageItem}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {index === EDUCATION_TIMELINE.length - 1 && (
                  <div className="mt-8 rounded-2xl bg-[#102A43] text-white p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                    <div className="flex items-start gap-3.5">
                      <ShieldCheck
                        className="w-6 h-6 text-[#64B5F6] shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <p className="text-sm text-[#DCEEFB] leading-relaxed">
                        Advanced orthopaedic surgical training develops focused clinical mastery in
                        musculoskeletal conditions, fracture management, joint reconstruction, and
                        orthopaedic surgical procedures.
                      </p>
                    </div>
                    <Link
                      to="/experience"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0E7C7B] hover:bg-[#0A5F5E] text-white text-sm font-semibold transition-colors whitespace-nowrap shrink-0"
                    >
                      <span>View Career Timeline</span>
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </Link>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
