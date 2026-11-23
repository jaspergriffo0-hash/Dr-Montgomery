import { Link } from 'react-router-dom';
import { ArrowRight, CalendarCheck } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { PageTransition } from '../components/PageTransition';
import { HospitalImage } from '../components/HospitalImage';
import { SpecializationIcon } from '../components/MedicalIcons';
import { PRACTICE_IMAGES, SPECIALIZATIONS } from '../data/practiceData';

export function SpecializationsPage() {
  return (
    <PageTransition>
      <PageHeader
        kicker="Orthopaedic Clinical Focus"
        title="Areas of Expertise"
        description="Focused surgical and non-surgical expertise spanning upper and lower extremity orthopaedics, fracture management, joint replacement, arthroscopy, and rehabilitation."
        currentPage="Specializations"
      />

      <section className="py-14 md:py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 8 Specialization Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SPECIALIZATIONS.map((spec, index) => (
              <article
                key={spec.id}
                className="group rounded-2xl bg-white border border-[#D9E2EC] p-6 shadow-[0_4px_18px_rgba(16,42,67,0.04)] hover:shadow-[0_14px_32px_rgba(16,42,67,0.09)] hover:-translate-y-1 transition-all duration-200 flex flex-col"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#0E7C7B]/10 text-[#0E7C7B] group-hover:bg-[#0E7C7B] group-hover:text-white transition-colors flex items-center justify-center">
                    <SpecializationIcon iconKey={spec.iconKey} className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-semibold text-[#627D98] tabular-nums">
                    0{index + 1}
                  </span>
                </div>

                <h2 className="font-serif text-xl font-semibold text-[#102A43] leading-snug">
                  {spec.title}
                </h2>
                <p className="mt-3 text-sm text-[#334E68] leading-relaxed flex-1">
                  {spec.summary}
                </p>

                <div className="mt-5 pt-4 border-t border-[#EEF2F7]">
                  <p className="text-xs text-[#486581] leading-relaxed">{spec.clinicalFocus}</p>
                </div>
              </article>
            ))}
          </div>

          {/* Clinical Environment Showcase */}
          <div className="mt-14 rounded-2xl overflow-hidden bg-white border border-[#D9E2EC] shadow-[0_12px_36px_rgba(16,42,67,0.07)] grid grid-cols-1 lg:grid-cols-12 items-stretch">
            <div className="lg:col-span-6 min-h-[260px]">
              <HospitalImage
                src={PRACTICE_IMAGES.surgicalSuite}
                alt="Modern London orthopaedic surgical theatre environment"
                className="w-full h-full object-cover"
                fallbackTitle="Orthopaedic Surgical Environment"
              />
            </div>
            <div className="lg:col-span-6 p-8 sm:p-10 flex flex-col justify-center">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#0E7C7B]">
                Surgical Precision &amp; Conservative Care
              </p>
              <h2 className="mt-2 font-serif text-2xl sm:text-3xl font-semibold text-[#102A43]">
                Individualized Care for Every Patient
              </h2>
              <p className="mt-3 text-sm sm:text-base text-[#334E68] leading-relaxed">
                Not every orthopaedic condition requires surgery. Dr. Montgomery evaluates each
                patient thoroughly—exploring conservative physiotherapy, targeted pain relief, and
                rehabilitation alongside operative options when surgical intervention offers the
                most reliable path back to mobility.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Link
                  to="/appointment"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0E7C7B] hover:bg-[#0A5F5E] text-white text-sm font-semibold transition-colors"
                >
                  <CalendarCheck className="w-4 h-4" aria-hidden="true" />
                  <span>Schedule Assessment</span>
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#102A43] hover:text-[#0E7C7B] transition-colors"
                >
                  <span>View Medical Services</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
