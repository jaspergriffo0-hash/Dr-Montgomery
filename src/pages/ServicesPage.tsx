import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CalendarCheck, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { PageTransition } from '../components/PageTransition';
import { ServiceIcon } from '../components/MedicalIcons';
import { MEDICAL_SERVICES } from '../data/practiceData';

export function ServicesPage() {
  const [expandedId, setExpandedId] = useState<string | null>(MEDICAL_SERVICES[0].id);

  return (
    <PageTransition>
      <PageHeader
        kicker="Patient Care & Treatments"
        title="Medical Services"
        description="Comprehensive diagnostic, surgical, and rehabilitative orthopaedic services delivered with clarity, clinical rigour, and respect for each patient's long-term recovery."
        currentPage="Services"
      />

      <section className="py-14 md:py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {MEDICAL_SERVICES.map((service) => {
              const isExpanded = expandedId === service.id;
              return (
                <article
                  key={service.id}
                  className="rounded-2xl bg-white border border-[#D9E2EC] p-6 sm:p-8 shadow-[0_4px_18px_rgba(16,42,67,0.04)] hover:shadow-[0_12px_28px_rgba(16,42,67,0.08)] transition-all flex flex-col"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#0E7C7B]/10 text-[#0E7C7B] flex items-center justify-center shrink-0">
                      <ServiceIcon iconKey={service.iconKey} className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h2 className="font-serif text-2xl font-semibold text-[#102A43]">
                        {service.title}
                      </h2>
                      <p className="mt-2 text-sm sm:text-base text-[#334E68] leading-relaxed">
                        {service.shortDescription}
                      </p>
                    </div>
                  </div>

                  {isExpanded && (
                    <div className="mt-5 pt-5 border-t border-[#EEF2F7] space-y-4">
                      <p className="text-sm text-[#334E68] leading-relaxed">
                        {service.detailedOverview}
                      </p>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-[#0E7C7B] mb-2">
                          What Patients Can Expect
                        </p>
                        <ul className="space-y-2">
                          {service.whatToExpect.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2 text-sm text-[#102A43]"
                            >
                              <CheckCircle2
                                className="w-4 h-4 text-[#0E7C7B] shrink-0 mt-0.5"
                                aria-hidden="true"
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  <div className="mt-6 pt-4 border-t border-[#EEF2F7] flex flex-wrap items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => setExpandedId(isExpanded ? null : service.id)}
                      aria-expanded={isExpanded}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#102A43] hover:text-[#0E7C7B] transition-colors py-1"
                    >
                      <span>{isExpanded ? 'Show Less' : 'Learn More'}</span>
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4" aria-hidden="true" />
                      ) : (
                        <ChevronDown className="w-4 h-4" aria-hidden="true" />
                      )}
                    </button>

                    <Link
                      to={`/appointment?reason=${encodeURIComponent(service.title)}`}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0E7C7B] hover:bg-[#0A5F5E] text-white text-xs sm:text-sm font-semibold transition-colors"
                    >
                      <CalendarCheck className="w-4 h-4" aria-hidden="true" />
                      <span>Book Consultation</span>
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-14 rounded-2xl bg-[#EEF2F7] border border-[#D9E2EC] p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h2 className="font-serif text-2xl font-semibold text-[#102A43]">
                Unsure Which Orthopaedic Service Fits Your Symptoms?
              </h2>
              <p className="mt-2 text-sm sm:text-base text-[#486581] max-w-2xl">
                An initial consultation allows Dr. Montgomery to review your symptoms and imaging
                and recommend the most appropriate diagnostic or treatment pathway.
              </p>
            </div>
            <Link
              to="/appointment"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#102A43] hover:bg-[#243B53] text-white text-sm font-semibold transition-colors whitespace-nowrap shrink-0"
            >
              <span>Request Initial Consultation</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
