import { Link } from 'react-router-dom';
import {
  Award,
  BookOpenCheck,
  FileCheck2,
  HeartHandshake,
  Info,
  ShieldPlus,
  Stethoscope,
  ArrowRight,
} from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { PageTransition } from '../components/PageTransition';
import { ACHIEVEMENT_CATEGORIES } from '../data/practiceData';

const CATEGORY_ICONS = [ShieldPlus, Stethoscope, BookOpenCheck, HeartHandshake, Award];

export function AchievementsPage() {
  return (
    <PageTransition>
      <PageHeader
        kicker="Clinical Contributions & Record Categories"
        title="Clinical Achievements and Contributions"
        description="Structured areas of orthopaedic surgical practice, medical scholarship, and professional contribution prepared for verified institutional documentation."
        currentPage="Achievements"
        notice="In keeping with strict medical accuracy, specific case volumes, research citations, and personal awards are not fabricated or pre-populated. The categories below are prepared for verified records to be added."
      />

      <section className="py-14 md:py-20 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Integrity Statement */}
          <div className="mb-10 rounded-2xl bg-white border border-[#D9E2EC] p-6 shadow-[0_4px_16px_rgba(16,42,67,0.04)] flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#0E7C7B]/10 text-[#0E7C7B] flex items-center justify-center shrink-0">
              <Info className="w-5 h-5" aria-hidden="true" />
            </div>
            <div className="text-sm text-[#334E68] leading-relaxed">
              <h2 className="font-serif text-lg font-semibold text-[#102A43] mb-1">
                Commitment to Verified Clinical Documentation
              </h2>
              <p>
                Every entry in this section represents an established category of consultant
                orthopaedic achievement awaiting formal documentary verification (such as peer-reviewed
                journal DOIs, audited procedural registries, and official society awards). No
                unverified statistics, citations, or accolades are displayed.
              </p>
            </div>
          </div>

          {/* 5 Achievement Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ACHIEVEMENT_CATEGORIES.map((category, idx) => {
              const Icon = CATEGORY_ICONS[idx] || FileCheck2;
              return (
                <article
                  key={category.id}
                  className="rounded-2xl bg-white border border-[#D9E2EC] p-6 sm:p-7 shadow-[0_4px_18px_rgba(16,42,67,0.04)] flex flex-col"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#0E7C7B]/10 text-[#0E7C7B] flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <h2 className="font-serif text-xl font-semibold text-[#102A43]">
                    {category.title}
                  </h2>
                  <p className="mt-3 text-sm text-[#334E68] leading-relaxed flex-1">
                    {category.description}
                  </p>
                  <div className="mt-5 pt-4 border-t border-[#EEF2F7] text-xs font-medium text-[#627D98]">
                    {category.verificationNote}
                  </div>
                </article>
              );
            })}
          </div>

          {/* Link to Patient Care Philosophy */}
          <div className="mt-14 rounded-2xl bg-[#EEF2F7] border border-[#D9E2EC] p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h2 className="font-serif text-2xl font-semibold text-[#102A43]">
                Clinical Philosophy &amp; Patient Care Standards
              </h2>
              <p className="mt-2 text-sm sm:text-base text-[#486581] max-w-2xl">
                Learn how Dr. Montgomery translates evidence-based orthopaedic practice into
                compassionate, individualized care for every patient.
              </p>
            </div>
            <Link
              to="/patient-care"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#102A43] hover:bg-[#243B53] text-white text-sm font-semibold transition-colors whitespace-nowrap shrink-0"
            >
              <span>Explore Patient Care</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
