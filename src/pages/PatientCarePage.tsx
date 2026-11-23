import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CalendarCheck,
  Compass,
  HeartHandshake,
  ShieldCheck,
  Stethoscope,
} from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { PageTransition } from '../components/PageTransition';
import { HospitalImage } from '../components/HospitalImage';
import {
  PATIENT_CARE_PILLARS,
  PATIENT_CARE_QUOTE,
  PHILOSOPHY,
  PRACTICE_IMAGES,
} from '../data/practiceData';

const PILLAR_ICONS = [HeartHandshake, Stethoscope, ShieldCheck, Compass];

export function PatientCarePage() {
  return (
    <PageTransition>
      <PageHeader
        kicker="Clinical Ethos & Philosophy"
        title="Patient-Centred Approach & Professional Philosophy"
        description="Compassionate, evidence-based orthopaedic medicine focused on accurate diagnosis, thoughtful treatment, and long-term restoration of movement and independence."
        currentPage="Patient Care"
      />

      {/* Patient-Centred Approach */}
      <section className="py-14 md:py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-14">
            <div className="lg:col-span-6 space-y-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#0E7C7B]">
                Patient-Centred Approach
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#102A43]">
                Care Designed Around Mobility, Respect, and Lasting Recovery
              </h2>
              <blockquote className="rounded-2xl bg-[#EEF2F7] border border-[#D9E2EC] p-6 sm:p-7">
                <p className="font-serif italic text-lg sm:text-xl text-[#102A43] leading-relaxed">
                  “{PATIENT_CARE_QUOTE}”
                </p>
              </blockquote>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden border border-[#D9E2EC] shadow-[0_14px_36px_rgba(16,42,67,0.08)] aspect-[4/3] bg-white">
                <HospitalImage
                  src={PRACTICE_IMAGES.rehabCare}
                  alt="Orthopaedic physiotherapy and patient mobility recovery"
                  className="w-full h-full object-cover"
                  fallbackTitle="Orthopaedic Rehabilitation"
                />
              </div>
            </div>
          </div>

          {/* Four Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PATIENT_CARE_PILLARS.map((pillar, idx) => {
              const Icon = PILLAR_ICONS[idx] || ShieldCheck;
              return (
                <article
                  key={pillar.title}
                  className="rounded-2xl bg-white border border-[#D9E2EC] p-7 shadow-[0_4px_18px_rgba(16,42,67,0.04)] flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#0E7C7B]/10 text-[#0E7C7B] flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-semibold text-[#102A43]">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-base font-medium text-[#102A43]">
                      {pillar.description}
                    </p>
                    <p className="mt-2 text-sm text-[#486581] leading-relaxed">{pillar.detail}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Visually Distinctive Professional Philosophy Section with Hospital Backdrop */}
      <section className="relative overflow-hidden bg-[#102A43] text-white">
        <div className="absolute inset-0">
          <HospitalImage
            src={PRACTICE_IMAGES.hospitalAtrium}
            alt="Modern London private hospital atrium"
            className="w-full h-full object-cover opacity-35"
            fallbackTitle="London Hospital Environment"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-[#102A43]/95 via-[#102A43]/85 to-[#102A43]/75"
          />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#64B5F6]">
              Professional Philosophy
            </p>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-white leading-tight">
              {PHILOSOPHY.headline}
            </h2>
            <p className="mt-6 text-base sm:text-lg text-[#DCEEFB] leading-relaxed">
              {PHILOSOPHY.mission}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/appointment"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#0E7C7B] hover:bg-[#0A5F5E] text-white text-sm font-semibold transition-colors"
              >
                <CalendarCheck className="w-4 h-4" aria-hidden="true" />
                <span>Book an Appointment</span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-sm font-semibold transition-colors"
              >
                <span>Contact the Practice</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
