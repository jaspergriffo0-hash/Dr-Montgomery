import { Link } from 'react-router-dom';
import { ArrowRight, CalendarCheck, CheckCircle2, MapPin, UserCheck } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { PageTransition } from '../components/PageTransition';
import { HospitalImage } from '../components/HospitalImage';
import { BIOGRAPHY, CONTACT_INFO, PRACTICE_IMAGES } from '../data/practiceData';

export function AboutPage() {
  return (
    <PageTransition>
      <PageHeader
        kicker="Consultant Biography"
        title="About Dr. Percival George Montgomery"
        description="Consultant Orthopaedic Surgeon specializing in the diagnosis, surgical and non-surgical management, and long-term rehabilitation of musculoskeletal conditions."
        currentPage="About"
      />

      <section className="py-14 md:py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Portrait & Confirmed Profile Details */}
            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-2xl overflow-hidden border border-[#D9E2EC] bg-white shadow-[0_12px_36px_rgba(16,42,67,0.08)] aspect-[4/5]">
                <HospitalImage
                  src={PRACTICE_IMAGES.doctorPortrait}
                  alt="Dr. Percival George Montgomery, Consultant Orthopaedic Surgeon"
                  className="w-full h-full object-cover object-top"
                  fallbackTitle="Dr. Percival George Montgomery"
                />
              </div>

              <div className="rounded-2xl bg-white border border-[#D9E2EC] p-6 shadow-[0_4px_16px_rgba(16,42,67,0.04)] space-y-4">
                <h2 className="font-serif text-xl font-semibold text-[#102A43]">
                  Confirmed Profile Summary
                </h2>
                <dl className="divide-y divide-[#EEF2F7] text-sm">
                  <div className="py-2.5 flex justify-between gap-4">
                    <dt className="text-[#627D98]">Full Name</dt>
                    <dd className="font-semibold text-[#102A43] text-right">{CONTACT_INFO.name}</dd>
                  </div>
                  <div className="py-2.5 flex justify-between gap-4">
                    <dt className="text-[#627D98]">Designation</dt>
                    <dd className="font-semibold text-[#102A43] text-right">{CONTACT_INFO.title}</dd>
                  </div>
                  <div className="py-2.5 flex justify-between gap-4">
                    <dt className="text-[#627D98]">Date of Birth</dt>
                    <dd className="font-medium text-[#334E68] text-right tabular-nums">
                      June 29, 1964
                    </dd>
                  </div>
                  <div className="py-2.5 flex justify-between gap-4">
                    <dt className="text-[#627D98]">Birthplace</dt>
                    <dd className="font-medium text-[#334E68] text-right">
                      London, England, United Kingdom
                    </dd>
                  </div>
                  <div className="py-2.5 flex justify-between gap-4">
                    <dt className="text-[#627D98]">Primary Focus</dt>
                    <dd className="font-medium text-[#334E68] text-right">
                      Bone, Joint, Leg &amp; Musculoskeletal
                    </dd>
                  </div>
                </dl>
              </div>
            </div>

            {/* Right Full Biography & Highlighted Statement */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0E7C7B] mb-2">
                  <UserCheck className="w-4 h-4" aria-hidden="true" />
                  <span>Professional Biography</span>
                </div>
                <h2 className="font-serif text-3xl font-semibold text-[#102A43]">
                  Dedicated to Restoring Movement, Comfort, and Independence
                </h2>
              </div>

              <div className="space-y-4 text-base text-[#334E68] leading-relaxed">
                {BIOGRAPHY.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* Highlighted Statement */}
              <blockquote className="rounded-2xl bg-[#EEF2F7] border border-[#D9E2EC] p-6 sm:p-8">
                <p className="font-serif italic text-xl sm:text-2xl text-[#102A43] leading-snug">
                  “{BIOGRAPHY.highlightedStatement}”
                </p>
                <footer className="mt-3 text-sm font-medium text-[#0E7C7B]">
                  — Dr. Percival George Montgomery
                </footer>
              </blockquote>

              {/* Anatomical & Clinical Focus */}
              <div className="pt-4">
                <h3 className="font-serif text-2xl font-semibold text-[#102A43] mb-4">
                  Anatomical &amp; Extremity Focus
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {BIOGRAPHY.anatomicalFocus.map((item) => (
                    <div
                      key={item.region}
                      className="rounded-xl bg-white border border-[#D9E2EC] p-4 flex items-start gap-3"
                    >
                      <CheckCircle2
                        className="w-5 h-5 text-[#0E7C7B] shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <div>
                        <h4 className="font-sans text-sm font-semibold text-[#102A43]">
                          {item.region}
                        </h4>
                        <p className="text-xs sm:text-sm text-[#486581] mt-1 leading-relaxed">
                          {item.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Actions */}
              <div className="pt-6 border-t border-[#D9E2EC] flex flex-wrap items-center gap-4">
                <Link
                  to="/appointment"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0E7C7B] hover:bg-[#0A5F5E] text-white text-sm font-semibold transition-colors"
                >
                  <CalendarCheck className="w-4 h-4" aria-hidden="true" />
                  <span>Book a Consultation</span>
                </Link>
                <Link
                  to="/education"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-[#EEF2F7] border border-[#BCCCDC] text-[#102A43] text-sm font-semibold transition-colors"
                >
                  <span>View Education &amp; Qualifications</span>
                  <ArrowRight className="w-4 h-4 text-[#0E7C7B]" aria-hidden="true" />
                </Link>
                <Link
                  to="/patient-care"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0E7C7B] hover:text-[#0A5F5E]"
                >
                  <MapPin className="w-4 h-4" aria-hidden="true" />
                  <span>Patient Care Approach</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
