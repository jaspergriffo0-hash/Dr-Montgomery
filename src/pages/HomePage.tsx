import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  Compass,
  HeartHandshake,
  Phone,
  ShieldCheck,
  Stethoscope,
} from 'lucide-react';
import { PageTransition } from '../components/PageTransition';
import { HospitalImage } from '../components/HospitalImage';
import { ServiceIcon } from '../components/MedicalIcons';
import {
  BIOGRAPHY,
  CONTACT_INFO,
  MEDICAL_SERVICES,
  PATIENT_CARE_PILLARS,
  PRACTICE_IMAGES,
  SPECIALIZATIONS,
} from '../data/practiceData';

export function HomePage() {
  const featuredServices = MEDICAL_SERVICES.slice(0, 4);
  const featuredSpecializations = SPECIALIZATIONS.slice(0, 4);

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#F8FAFC] border-b border-[#D9E2EC]">
        {/* Subtle Hospital Architectural Background Shapes */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 right-0 w-[520px] h-[520px] rounded-full bg-[#64B5F6]/12 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 -left-24 w-[420px] h-[420px] rounded-full bg-[#0E7C7B]/8 blur-3xl"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            {/* Left Column: Surgeon Identity, Headline & Actions */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="space-y-1.5">
                <p className="text-sm font-semibold text-[#0E7C7B] tracking-wide uppercase">
                  {CONTACT_INFO.title}
                </p>
                <p className="text-base font-medium text-[#102A43]">
                  {CONTACT_INFO.name}
                </p>
                <p className="text-sm text-[#486581]">
                  {CONTACT_INFO.subtitle}
                </p>
              </div>

              <h1 className="mt-6 font-serif text-4xl sm:text-5xl lg:text-[3.5rem] font-semibold text-[#102A43] leading-[1.12] tracking-tight max-w-2xl">
                Restoring Mobility. Rebuilding Lives.
              </h1>

              <p className="mt-6 text-base sm:text-lg text-[#334E68] leading-relaxed max-w-xl">
                Dedicated to the diagnosis, treatment, and management of orthopaedic conditions,
                with a commitment to restoring mobility, relieving pain, and improving the quality
                of life of patients.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to="/appointment"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#0E7C7B] hover:bg-[#0A5F5E] text-white text-sm sm:text-base font-semibold shadow-[0_6px_20px_rgba(14,124,123,0.22)] transition-all whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0E7C7B]"
                >
                  <CalendarCheck className="w-4 h-4" aria-hidden="true" />
                  <span>Book an Appointment</span>
                </Link>

                <Link
                  to="/specializations"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-[#EEF2F7] text-[#102A43] border border-[#BCCCDC] text-sm sm:text-base font-semibold transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#102A43]"
                >
                  <span>Explore My Expertise</span>
                  <ArrowRight className="w-4 h-4 text-[#0E7C7B]" aria-hidden="true" />
                </Link>
              </div>

              <div className="mt-8 pt-6 border-t border-[#D9E2EC] flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[#486581]">
                <a
                  href={CONTACT_INFO.phoneHref}
                  className="inline-flex items-center gap-2 font-semibold text-[#102A43] hover:text-[#0E7C7B] transition-colors tabular-nums"
                >
                  <Phone className="w-4 h-4 text-[#0E7C7B]" aria-hidden="true" />
                  <span>Direct Desk: {CONTACT_INFO.phoneDisplay}</span>
                </a>
                <span aria-hidden="true" className="hidden sm:inline text-[#BCCCDC]">
                  |
                </span>
                <span>London · Private &amp; Specialist Orthopaedics</span>
              </div>
            </div>

            {/* Right Column: Surgeon Portrait */}
            <div className="lg:col-span-5 flex items-stretch">
              <div className="relative w-full rounded-2xl overflow-hidden bg-[#EEF2F7] border border-[#D9E2EC] shadow-[0_20px_50px_rgba(16,42,67,0.10)] min-h-[380px] lg:min-h-[480px]">
                <HospitalImage
                  src={PRACTICE_IMAGES.doctorPortrait}
                  alt="Dr. Percival George Montgomery, Consultant Orthopaedic Surgeon"
                  className="w-full h-full object-cover object-top"
                  fallbackTitle="Dr. Percival George Montgomery"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#102A43]/90 via-[#102A43]/45 to-transparent p-6 text-white">
                  <p className="font-serif text-lg font-semibold leading-snug">
                    {CONTACT_INFO.name}
                  </p>
                  <p className="text-xs sm:text-sm text-[#DCEEFB] mt-0.5">
                    {CONTACT_INFO.title} · {CONTACT_INFO.subtitle}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Hospital Trust Bar Below Hero */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="rounded-xl bg-white border border-[#D9E2EC] px-6 py-5 shadow-[0_4px_16px_rgba(16,42,67,0.04)] flex items-start gap-3.5">
              <CheckCircle2 className="w-5 h-5 text-[#0E7C7B] shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <h2 className="font-sans text-base font-semibold text-[#102A43]">
                  Years of Experience
                </h2>
                <p className="text-sm text-[#486581] mt-1">
                  Senior consultant surgical judgment across bone, joint, leg, and trauma care.
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-white border border-[#D9E2EC] px-6 py-5 shadow-[0_4px_16px_rgba(16,42,67,0.04)] flex items-start gap-3.5">
              <CheckCircle2 className="w-5 h-5 text-[#0E7C7B] shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <h2 className="font-sans text-base font-semibold text-[#102A43]">
                  Patient-Centred Care
                </h2>
                <p className="text-sm text-[#486581] mt-1">
                  Unhurried consultations, clear explanations, and tailored non-surgical or surgical plans.
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-white border border-[#D9E2EC] px-6 py-5 shadow-[0_4px_16px_rgba(16,42,67,0.04)] flex items-start gap-3.5">
              <CheckCircle2 className="w-5 h-5 text-[#0E7C7B] shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <h2 className="font-sans text-base font-semibold text-[#102A43]">
                  Clinical Excellence
                </h2>
                <p className="text-sm text-[#486581] mt-1">
                  Evidence-based diagnostic standards, surgical precision, and structured long-term recovery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Short About Section */}
      <section className="py-16 md:py-20 bg-[#EEF2F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-[#D9E2EC] shadow-[0_12px_32px_rgba(16,42,67,0.08)] aspect-[4/3] bg-white">
                <HospitalImage
                  src={PRACTICE_IMAGES.consultation}
                  alt="Orthopaedic consultation between Dr. Montgomery and patient"
                  className="w-full h-full object-cover"
                  fallbackTitle="Orthopaedic Consultation"
                />
              </div>
            </div>

            <div className="lg:col-span-7">
              <p className="text-xs font-semibold tracking-wider text-[#0E7C7B] uppercase">
                About Dr. Montgomery
              </p>
              <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-semibold text-[#102A43]">
                Compassionate Orthopaedic Leadership Rooted in Precision
              </h2>
              <p className="mt-4 text-base text-[#334E68] leading-relaxed">
                {BIOGRAPHY.paragraphs[0]}
              </p>
              <p className="mt-4 text-base text-[#334E68] leading-relaxed">
                {BIOGRAPHY.paragraphs[2]}
              </p>

              <div className="mt-6 rounded-xl bg-white border border-[#D9E2EC] p-5">
                <p className="font-serif italic text-lg text-[#102A43]">
                  “{BIOGRAPHY.highlightedStatement}”
                </p>
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#102A43] hover:bg-[#243B53] text-white text-sm font-semibold transition-colors"
                >
                  <span>Read Full Biography</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
                <Link
                  to="/education"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0E7C7B] hover:text-[#0A5F5E] transition-colors"
                >
                  <span>Education &amp; Training Pathway</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Short Services & Areas of Expertise Section */}
      <section className="py-16 md:py-20 bg-[#F8FAFC] border-y border-[#D9E2EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <p className="text-xs font-semibold tracking-wider text-[#0E7C7B] uppercase">
                Clinical Practice Overview
              </p>
              <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-semibold text-[#102A43]">
                Core Medical Services
              </h2>
              <p className="mt-3 text-base text-[#486581] max-w-2xl">
                Comprehensive orthopaedic care tailored to upper and lower extremities, with
                particular focus on the legs, hips, knees, ankles, and feet.
              </p>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#BCCCDC] bg-white hover:bg-[#EEF2F7] text-[#102A43] text-sm font-semibold transition-colors shrink-0 self-start md:self-auto"
            >
              <span>View All Medical Services</span>
              <ArrowRight className="w-4 h-4 text-[#0E7C7B]" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((service) => (
              <div
                key={service.id}
                className="group rounded-2xl bg-white border border-[#D9E2EC] p-6 shadow-[0_4px_18px_rgba(16,42,67,0.04)] hover:shadow-[0_12px_28px_rgba(16,42,67,0.08)] hover:-translate-y-0.5 transition-all flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0E7C7B]/10 text-[#0E7C7B] flex items-center justify-center mb-5">
                  <ServiceIcon iconKey={service.iconKey} className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-[#102A43]">
                  {service.title}
                </h3>
                <p className="mt-2.5 text-sm text-[#486581] leading-relaxed flex-1">
                  {service.shortDescription}
                </p>
                <Link
                  to="/services"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#0E7C7B] hover:text-[#0A5F5E] transition-colors"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            ))}
          </div>

          {/* Areas of Expertise Snapshot */}
          <div className="mt-12 rounded-2xl bg-[#EEF2F7] border border-[#D9E2EC] p-6 sm:p-8">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div>
                <h3 className="font-serif text-2xl font-semibold text-[#102A43]">
                  Specialist Areas of Expertise
                </h3>
                <p className="text-sm text-[#486581] mt-1.5 max-w-2xl">
                  From arthroscopic procedures and fracture stabilization to joint replacement and
                  rehabilitation planning.
                </p>
              </div>
              <Link
                to="/specializations"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#0E7C7B] hover:text-[#0A5F5E] transition-colors shrink-0"
              >
                <span>Explore All 8 Specializations</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {featuredSpecializations.map((spec) => (
                <Link
                  key={spec.id}
                  to="/specializations"
                  className="rounded-xl bg-white border border-[#D9E2EC] px-4 py-3.5 hover:border-[#0E7C7B] transition-colors"
                >
                  <p className="text-sm font-semibold text-[#102A43]">{spec.title}</p>
                  <p className="text-xs text-[#627D98] mt-1 line-clamp-2">{spec.summary}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Dr. Montgomery */}
      <section className="py-16 md:py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-semibold tracking-wider text-[#0E7C7B] uppercase">
              Why Choose Our Practice
            </p>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-semibold text-[#102A43]">
              A Standard of Care Built Around Patients
            </h2>
            <p className="mt-3 text-base text-[#486581]">
              Every stage of care—from initial diagnostic consultation to long-term physical
              therapy—is guided by clinical integrity and human respect.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PATIENT_CARE_PILLARS.map((pillar, idx) => {
              const icons = [HeartHandshake, Stethoscope, ShieldCheck, Compass];
              const Icon = icons[idx] || ShieldCheck;
              return (
                <div
                  key={pillar.title}
                  className="rounded-2xl bg-white border border-[#D9E2EC] p-6 shadow-[0_4px_18px_rgba(16,42,67,0.04)]"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#EEF2F7] text-[#0E7C7B] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-[#102A43]">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#486581] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Appointment Callout Banner */}
          <div className="mt-14 rounded-2xl bg-[#102A43] text-white p-8 sm:p-10 lg:p-12 flex flex-col lg:flex-row lg:items-center justify-between gap-8 shadow-[0_20px_50px_rgba(16,42,67,0.16)]">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-wider text-[#64B5F6] uppercase">
                Appointments &amp; Referrals
              </p>
              <h2 className="mt-2 font-serif text-2xl sm:text-3xl font-semibold text-white">
                Request an Orthopaedic Consultation
              </h2>
              <p className="mt-3 text-sm sm:text-base text-[#BCCCDC] leading-relaxed">
                Arrange an in-person, video, or telephone consultation with Dr. Percival George
                Montgomery, or contact the practice desk directly on{' '}
                <span className="text-white font-semibold tabular-nums">
                  {CONTACT_INFO.phoneDisplay}
                </span>
                .
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link
                to="/appointment"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#0E7C7B] hover:bg-[#0A5F5E] text-white text-sm font-semibold transition-colors whitespace-nowrap"
              >
                <CalendarCheck className="w-4 h-4" aria-hidden="true" />
                <span>Book Appointment</span>
              </Link>
              <Link
                to="/patient-care"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-sm font-semibold transition-colors whitespace-nowrap"
              >
                <span>Our Care Philosophy</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
