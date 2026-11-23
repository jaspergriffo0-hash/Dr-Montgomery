import { FormEvent, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import {
  CalendarCheck,
  CheckCircle2,
  Lock,
  Mail,
  MessageCircle,
  Phone,
  ShieldCheck,
} from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { PageTransition } from '../components/PageTransition';
import { CONTACT_INFO, MEDICAL_SERVICES } from '../data/practiceData';

interface BookingConfirmation {
  reference: string;
  fullName: string;
  preferredDate: string;
  consultationMethod: string;
}

const CONSULTATION_METHODS = [
  'In-Person Consultation',
  'Video Consultation',
  'Telephone Consultation',
] as const;

export function AppointmentPage() {
  const [searchParams] = useSearchParams();
  const preselectedReason = searchParams.get('reason') ?? '';

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [consultationMethod, setConsultationMethod] = useState<string>(CONSULTATION_METHODS[0]);
  const [reason, setReason] = useState(
    preselectedReason ? `Consultation request regarding: ${preselectedReason}` : ''
  );

  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [serverError, setServerError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmation, setConfirmation] = useState<BookingConfirmation | null>(null);

  const todayIso = new Date().toISOString().split('T')[0];

  function validateClient(): Record<string, string> {
    const errors: Record<string, string> = {};
    if (fullName.trim().length < 2) {
      errors.fullName = 'Please enter your full name.';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())) {
      errors.email = 'Please enter a valid email address.';
    }
    const digits = phone.replace(/[^0-9]/g, '');
    if (digits.length < 7 || digits.length > 16) {
      errors.phone = 'Please enter a valid telephone number.';
    }
    if (!preferredDate || preferredDate < todayIso) {
      errors.preferredDate = 'Please select today or a future appointment date.';
    }
    if (!CONSULTATION_METHODS.includes(consultationMethod as (typeof CONSULTATION_METHODS)[number])) {
      errors.consultationMethod = 'Please select a preferred consultation method.';
    }
    if (reason.trim().length < 5) {
      errors.reason = 'Please provide a brief general reason for your consultation.';
    }
    return errors;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setServerError('');

    const clientErrors = validateClient();
    if (Object.keys(clientErrors).length > 0) {
      setFieldErrors(clientErrors);
      return;
    }

    setFieldErrors({});
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: fullName.trim(),
          email: email.trim(),
          phone: phone.trim(),
          preferredDate,
          consultationMethod,
          reason: reason.trim(),
        }),
      });

      const data = await response.json();
      if (!response.ok || !data.ok) {
        if (data?.errors && typeof data.errors === 'object') {
          setFieldErrors(data.errors);
        }
        setServerError(
          data?.message || 'Unable to submit your booking request. Please review the form.'
        );
        return;
      }

      setConfirmation(data.booking);
    } catch {
      setServerError(
        `Network error while submitting your request. Please telephone ${CONTACT_INFO.phoneDisplay} directly.`
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleReset() {
    setConfirmation(null);
    setFullName('');
    setEmail('');
    setPhone('');
    setPreferredDate('');
    setConsultationMethod(CONSULTATION_METHODS[0]);
    setReason('');
    setFieldErrors({});
    setServerError('');
  }

  return (
    <PageTransition>
      <PageHeader
        kicker="Patient Scheduling"
        title="Book an Orthopaedic Appointment"
        description="Submit a consultation request with Dr. Percival George Montgomery. Our scheduling desk confirms availability promptly while safeguarding your privacy."
        currentPage="Appointment"
      />

      <section className="py-14 md:py-20 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Form or Confirmation Card */}
            <div className="lg:col-span-7">
              {confirmation ? (
                <div
                  role="status"
                  aria-live="polite"
                  className="rounded-2xl bg-white border border-[#0E7C7B]/30 p-8 sm:p-10 shadow-[0_12px_36px_rgba(16,42,67,0.08)]"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#0E7C7B]/10 text-[#0E7C7B] flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-8 h-8" aria-hidden="true" />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#0E7C7B]">
                    Appointment Request Confirmed
                  </p>
                  <h2 className="mt-2 font-serif text-3xl font-semibold text-[#102A43]">
                    Thank You, {confirmation.fullName}
                  </h2>
                  <p className="mt-3 text-base text-[#334E68] leading-relaxed">
                    Your consultation request has been securely logged with the practice scheduling
                    service. Our secretary will contact you to confirm the exact clinic time and
                    consultation details.
                  </p>

                  <dl className="mt-6 rounded-xl bg-[#EEF2F7] border border-[#D9E2EC] p-5 divide-y divide-[#D9E2EC] text-sm">
                    <div className="py-2.5 flex justify-between gap-4">
                      <dt className="text-[#627D98]">Booking Reference</dt>
                      <dd className="font-semibold text-[#102A43] tabular-nums">
                        {confirmation.reference}
                      </dd>
                    </div>
                    <div className="py-2.5 flex justify-between gap-4">
                      <dt className="text-[#627D98]">Preferred Date</dt>
                      <dd className="font-semibold text-[#102A43] tabular-nums">
                        {confirmation.preferredDate}
                      </dd>
                    </div>
                    <div className="py-2.5 flex justify-between gap-4">
                      <dt className="text-[#627D98]">Consultation Method</dt>
                      <dd className="font-semibold text-[#102A43]">
                        {confirmation.consultationMethod}
                      </dd>
                    </div>
                  </dl>

                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-5 py-3 rounded-xl bg-[#0E7C7B] hover:bg-[#0A5F5E] text-white text-sm font-semibold transition-colors"
                    >
                      Submit Another Request
                    </button>
                    <Link
                      to="/"
                      className="px-5 py-3 rounded-xl border border-[#BCCCDC] bg-white hover:bg-[#EEF2F7] text-[#102A43] text-sm font-semibold transition-colors"
                    >
                      Return to Home
                    </Link>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="rounded-2xl bg-white border border-[#D9E2EC] p-6 sm:p-8 shadow-[0_8px_28px_rgba(16,42,67,0.05)] space-y-6"
                >
                  <div>
                    <h2 className="font-serif text-2xl font-semibold text-[#102A43]">
                      Consultation Request Form
                    </h2>
                    <p className="mt-1.5 text-sm text-[#486581]">
                      Please provide your scheduling preferences below. For your privacy, do not
                      include sensitive medical records, diagnostic images, or NHS/insurance IDs in
                      this form.
                    </p>
                  </div>

                  {serverError && (
                    <div
                      role="alert"
                      className="rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-800"
                    >
                      {serverError}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="appointment-fullName"
                        className="block text-sm font-semibold text-[#102A43] mb-1.5"
                      >
                        Full Name <span className="text-[#0E7C7B]">*</span>
                      </label>
                      <input
                        id="appointment-fullName"
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Margaret Thornton"
                        className="w-full rounded-xl border border-[#BCCCDC] bg-[#F8FAFC] px-4 py-3 text-sm text-[#102A43] placeholder:text-[#829AB1] focus:border-[#0E7C7B] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0E7C7B]/20"
                      />
                      {fieldErrors.fullName && (
                        <p className="mt-1.5 text-xs font-medium text-red-700">
                          {fieldErrors.fullName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="appointment-email"
                        className="block text-sm font-semibold text-[#102A43] mb-1.5"
                      >
                        Email Address <span className="text-[#0E7C7B]">*</span>
                      </label>
                      <input
                        id="appointment-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@example.co.uk"
                        className="w-full rounded-xl border border-[#BCCCDC] bg-[#F8FAFC] px-4 py-3 text-sm text-[#102A43] placeholder:text-[#829AB1] focus:border-[#0E7C7B] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0E7C7B]/20"
                      />
                      {fieldErrors.email && (
                        <p className="mt-1.5 text-xs font-medium text-red-700">
                          {fieldErrors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="appointment-phone"
                        className="block text-sm font-semibold text-[#102A43] mb-1.5"
                      >
                        Phone Number <span className="text-[#0E7C7B]">*</span>
                      </label>
                      <input
                        id="appointment-phone"
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+44 7XXX XXXXXX"
                        className="w-full rounded-xl border border-[#BCCCDC] bg-[#F8FAFC] px-4 py-3 text-sm text-[#102A43] placeholder:text-[#829AB1] focus:border-[#0E7C7B] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0E7C7B]/20 tabular-nums"
                      />
                      {fieldErrors.phone && (
                        <p className="mt-1.5 text-xs font-medium text-red-700">
                          {fieldErrors.phone}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="appointment-date"
                        className="block text-sm font-semibold text-[#102A43] mb-1.5"
                      >
                        Preferred Appointment Date <span className="text-[#0E7C7B]">*</span>
                      </label>
                      <input
                        id="appointment-date"
                        type="date"
                        required
                        min={todayIso}
                        value={preferredDate}
                        onChange={(e) => setPreferredDate(e.target.value)}
                        className="w-full rounded-xl border border-[#BCCCDC] bg-[#F8FAFC] px-4 py-3 text-sm text-[#102A43] focus:border-[#0E7C7B] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0E7C7B]/20 tabular-nums"
                      />
                      {fieldErrors.preferredDate && (
                        <p className="mt-1.5 text-xs font-medium text-red-700">
                          {fieldErrors.preferredDate}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="appointment-method"
                        className="block text-sm font-semibold text-[#102A43] mb-1.5"
                      >
                        Preferred Consultation Method <span className="text-[#0E7C7B]">*</span>
                      </label>
                      <select
                        id="appointment-method"
                        value={consultationMethod}
                        onChange={(e) => setConsultationMethod(e.target.value)}
                        className="w-full rounded-xl border border-[#BCCCDC] bg-[#F8FAFC] px-4 py-3 text-sm text-[#102A43] focus:border-[#0E7C7B] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0E7C7B]/20"
                      >
                        {CONSULTATION_METHODS.map((method) => (
                          <option key={method} value={method}>
                            {method}
                          </option>
                        ))}
                      </select>
                      {fieldErrors.consultationMethod && (
                        <p className="mt-1.5 text-xs font-medium text-red-700">
                          {fieldErrors.consultationMethod}
                        </p>
                      )}
                    </div>

                    <div className="sm:col-span-2">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                        <label
                          htmlFor="appointment-reason"
                          className="block text-sm font-semibold text-[#102A43]"
                        >
                          Reason for Consultation <span className="text-[#0E7C7B]">*</span>
                        </label>
                        <select
                          aria-label="Quick-select consultation topic"
                          onChange={(e) => {
                            if (e.target.value) {
                              setReason(`Consultation request regarding: ${e.target.value}`);
                            }
                          }}
                          defaultValue=""
                          className="text-xs rounded-lg border border-[#D9E2EC] bg-[#EEF2F7] px-2.5 py-1 text-[#102A43]"
                        >
                          <option value="">Quick-select service topic...</option>
                          {MEDICAL_SERVICES.map((s) => (
                            <option key={s.id} value={s.title}>
                              {s.title}
                            </option>
                          ))}
                        </select>
                      </div>
                      <textarea
                        id="appointment-reason"
                        rows={4}
                        required
                        maxLength={500}
                        value={reason}
                        onChange={(e) => setReason(e.target.value)}
                        placeholder="Briefly state the general area of concern (e.g., knee discomfort, hip assessment, post-fracture follow-up). Please avoid sharing detailed medical history."
                        className="w-full rounded-xl border border-[#BCCCDC] bg-[#F8FAFC] px-4 py-3 text-sm text-[#102A43] placeholder:text-[#829AB1] focus:border-[#0E7C7B] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0E7C7B]/20"
                      />
                      {fieldErrors.reason && (
                        <p className="mt-1.5 text-xs font-medium text-red-700">
                          {fieldErrors.reason}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="rounded-xl bg-[#EEF2F7] border border-[#D9E2EC] px-4 py-3 flex items-start gap-3 text-xs text-[#334E68]">
                    <Lock className="w-4 h-4 text-[#0E7C7B] shrink-0 mt-0.5" aria-hidden="true" />
                    <p>
                      <strong>Patient Privacy Notice:</strong> This scheduling form collects only
                      basic contact and appointment preference details. Please reserve detailed
                      clinical history and imaging for your confidential consultation.
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#0E7C7B] hover:bg-[#0A5F5E] disabled:opacity-60 text-white text-base font-semibold shadow-sm transition-colors"
                  >
                    <CalendarCheck className="w-5 h-5" aria-hidden="true" />
                    <span>{isSubmitting ? 'Submitting Request...' : 'Book Appointment'}</span>
                  </button>
                </form>
              )}
            </div>

            {/* Right Column: Direct Scheduling Support */}
            <aside className="lg:col-span-5 space-y-6">
              <div className="rounded-2xl bg-[#102A43] text-white p-7 shadow-[0_12px_32px_rgba(16,42,67,0.12)]">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#64B5F6]">
                  Direct Practice Desk
                </p>
                <h2 className="mt-2 font-serif text-2xl font-semibold text-white">
                  Prefer to Arrange by Telephone or WhatsApp?
                </h2>
                <p className="mt-3 text-sm text-[#BCCCDC] leading-relaxed">
                  For urgent orthopaedic enquiries or assistance choosing an appointment date,
                  please reach the practice directly using the confirmed contact channels below.
                </p>

                <div className="mt-6 space-y-3.5 text-sm">
                  <a
                    href={CONTACT_INFO.phoneHref}
                    className="flex items-center gap-3 rounded-xl bg-white/10 hover:bg-white/15 px-4 py-3 transition-colors font-semibold tabular-nums"
                  >
                    <Phone className="w-4 h-4 text-[#64B5F6] shrink-0" aria-hidden="true" />
                    <span>{CONTACT_INFO.phoneDisplay}</span>
                  </a>

                  <a
                    href={CONTACT_INFO.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-xl bg-[#0E7C7B] hover:bg-[#0A5F5E] px-4 py-3 transition-colors font-semibold"
                  >
                    <MessageCircle className="w-4 h-4 text-white shrink-0" aria-hidden="true" />
                    <span>Message on WhatsApp</span>
                  </a>

                  <a
                    href={CONTACT_INFO.emailHref}
                    className="flex items-center gap-3 rounded-xl bg-white/10 hover:bg-white/15 px-4 py-3 transition-colors break-all"
                  >
                    <Mail className="w-4 h-4 text-[#64B5F6] shrink-0" aria-hidden="true" />
                    <span>{CONTACT_INFO.email}</span>
                  </a>
                </div>
              </div>

              <div className="rounded-2xl bg-white border border-[#D9E2EC] p-6 space-y-3">
                <div className="flex items-center gap-2 text-sm font-semibold text-[#102A43]">
                  <ShieldCheck className="w-5 h-5 text-[#0E7C7B]" aria-hidden="true" />
                  <span>Before Your Appointment</span>
                </div>
                <ul className="space-y-2 text-sm text-[#486581] leading-relaxed">
                  <li>· Bring any recent X-ray, MRI, or GP referral letters to your consultation.</li>
                  <li>· Wear comfortable clothing that allows ease of movement around the affected joint.</li>
                  <li>· For acute emergencies or severe trauma, attend your nearest A&amp;E department.</li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
