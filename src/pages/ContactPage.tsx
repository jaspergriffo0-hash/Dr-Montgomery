import { FormEvent, useState } from 'react';
import {
  ArrowUpRight,
  Building2,
  CheckCircle2,
  Clock,
  Globe,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { PageTransition } from '../components/PageTransition';
import { CONTACT_INFO } from '../data/practiceData';

export function ContactPage() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [serverError, setServerError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setServerError('');

    const nextErrors: Record<string, string> = {};
    if (fullName.trim().length < 2) nextErrors.fullName = 'Please enter your full name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (subject.trim().length < 3) nextErrors.subject = 'Please provide a subject.';
    if (message.trim().length < 10) {
      nextErrors.message = 'Please enter a message of at least 10 characters.';
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: fullName.trim(),
          email: email.trim(),
          phone: phone.trim(),
          subject: subject.trim(),
          message: message.trim(),
        }),
      });
      const data = await response.json();
      if (!response.ok || !data.ok) {
        if (data?.errors && typeof data.errors === 'object') {
          setErrors(data.errors);
        }
        setServerError(data?.message || 'Unable to send your enquiry right now.');
        return;
      }

      setSubmittedRef(data.enquiry.reference);
      setFullName('');
      setEmail('');
      setPhone('');
      setSubject('');
      setMessage('');
    } catch {
      setServerError(
        `Unable to reach the server. Please telephone ${CONTACT_INFO.phoneDisplay} directly.`
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <PageTransition>
      <PageHeader
        kicker="Direct Practice Communication"
        title="Contact Dr. Percival George Montgomery"
        description="Confirmed telephone, email, and WhatsApp communication channels for patient enquiries, consultation scheduling, and professional correspondence."
        currentPage="Contact"
      />

      <section className="py-14 md:py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Confirmed Contact Details & Placeholders */}
            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-2xl bg-white border border-[#D9E2EC] p-7 shadow-[0_6px_22px_rgba(16,42,67,0.04)]">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#0E7C7B]">
                  Confirmed Contact Details
                </p>
                <h2 className="mt-1.5 font-serif text-2xl font-semibold text-[#102A43]">
                  {CONTACT_INFO.name}
                </h2>
                <p className="text-sm font-medium text-[#486581] mt-0.5">{CONTACT_INFO.title}</p>

                <div className="mt-6 space-y-4">
                  <a
                    href={CONTACT_INFO.phoneHref}
                    className="flex items-center justify-between gap-4 rounded-xl bg-[#EEF2F7] hover:bg-[#E2E8F0] border border-[#D9E2EC] px-4 py-3.5 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-[#0E7C7B] shrink-0" aria-hidden="true" />
                      <div>
                        <p className="text-xs text-[#627D98]">Direct Telephone (Click to Call)</p>
                        <p className="text-base font-semibold text-[#102A43] tabular-nums">
                          {CONTACT_INFO.phoneDisplay}
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#627D98]" aria-hidden="true" />
                  </a>

                  <a
                    href={CONTACT_INFO.emailHref}
                    className="flex items-center justify-between gap-4 rounded-xl bg-[#EEF2F7] hover:bg-[#E2E8F0] border border-[#D9E2EC] px-4 py-3.5 transition-colors"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <Mail className="w-5 h-5 text-[#0E7C7B] shrink-0" aria-hidden="true" />
                      <div className="min-w-0">
                        <p className="text-xs text-[#627D98]">Email (Click to Email)</p>
                        <p className="text-sm font-semibold text-[#102A43] break-all">
                          {CONTACT_INFO.email}
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#627D98] shrink-0" aria-hidden="true" />
                  </a>

                  <a
                    href={CONTACT_INFO.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl bg-[#0E7C7B] hover:bg-[#0A5F5E] text-white text-sm font-semibold transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" aria-hidden="true" />
                    <span>Contact via WhatsApp ({CONTACT_INFO.phoneDisplay})</span>
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </a>
                </div>
              </div>

              {/* Placeholders Pending Official Verification */}
              <div className="rounded-2xl bg-white border border-[#D9E2EC] p-7 shadow-[0_6px_22px_rgba(16,42,67,0.04)] space-y-5">
                <h3 className="font-serif text-xl font-semibold text-[#102A43]">
                  Clinic Location &amp; Practice Information
                </h3>

                <div className="flex items-start gap-3 text-sm">
                  <MapPin className="w-5 h-5 text-[#0E7C7B] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-[#102A43]">Clinic Address (Placeholder)</p>
                    <p className="text-[#486581] mt-0.5">{CONTACT_INFO.clinicAddressPlaceholder}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-sm">
                  <Building2
                    className="w-5 h-5 text-[#0E7C7B] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-semibold text-[#102A43]">
                      Hospital Affiliation (Placeholder)
                    </p>
                    <p className="text-[#486581] mt-0.5">
                      {CONTACT_INFO.hospitalAffiliationPlaceholder}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-sm">
                  <Clock className="w-5 h-5 text-[#0E7C7B] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-[#102A43]">Working Hours (Placeholder)</p>
                    <p className="text-[#486581] mt-0.5">{CONTACT_INFO.workingHoursPlaceholder}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#EEF2F7]">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#627D98] mb-3">
                    Social &amp; Medical Directory Placeholders
                  </p>
                  <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-[#102A43]">
                    <span className="inline-flex items-center gap-2 rounded-lg border border-[#D9E2EC] bg-[#F8FAFC] px-3 py-2">
                      <Linkedin className="w-4 h-4 text-[#0E7C7B]" aria-hidden="true" />
                      <span>LinkedIn Profile (Pending URL)</span>
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-lg border border-[#D9E2EC] bg-[#F8FAFC] px-3 py-2">
                      <Globe className="w-4 h-4 text-[#0E7C7B]" aria-hidden="true" />
                      <span>Medical Registry Link (Pending URL)</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form & Map Placeholder */}
            <div className="lg:col-span-7 space-y-6">
              <div className="rounded-2xl bg-white border border-[#D9E2EC] p-6 sm:p-8 shadow-[0_8px_28px_rgba(16,42,67,0.05)]">
                <h2 className="font-serif text-2xl font-semibold text-[#102A43]">
                  Send a General Enquiry
                </h2>
                <p className="mt-1.5 text-sm text-[#486581]">
                  For administrative questions, referral coordination, or general practice enquiries.
                  Please do not include sensitive clinical records.
                </p>

                {submittedRef && (
                  <div
                    role="status"
                    aria-live="polite"
                    className="mt-5 rounded-xl bg-[#0E7C7B]/10 border border-[#0E7C7B]/30 px-4 py-4 flex items-start gap-3 text-sm text-[#102A43]"
                  >
                    <CheckCircle2
                      className="w-5 h-5 text-[#0E7C7B] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="font-semibold">
                        Enquiry Sent (Reference: <span className="tabular-nums">{submittedRef}</span>)
                      </p>
                      <p className="text-[#334E68] mt-0.5">
                        Thank you for reaching out. Our practice secretary will respond promptly.
                      </p>
                    </div>
                  </div>
                )}

                {serverError && (
                  <div
                    role="alert"
                    className="mt-5 rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-800"
                  >
                    {serverError}
                  </div>
                )}

                <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="contact-fullName"
                        className="block text-sm font-semibold text-[#102A43] mb-1.5"
                      >
                        Full Name <span className="text-[#0E7C7B]">*</span>
                      </label>
                      <input
                        id="contact-fullName"
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Your full name"
                        className="w-full rounded-xl border border-[#BCCCDC] bg-[#F8FAFC] px-4 py-3 text-sm text-[#102A43] focus:border-[#0E7C7B] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0E7C7B]/20"
                      />
                      {errors.fullName && (
                        <p className="mt-1 text-xs text-red-700">{errors.fullName}</p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-sm font-semibold text-[#102A43] mb-1.5"
                      >
                        Email Address <span className="text-[#0E7C7B]">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@example.co.uk"
                        className="w-full rounded-xl border border-[#BCCCDC] bg-[#F8FAFC] px-4 py-3 text-sm text-[#102A43] focus:border-[#0E7C7B] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0E7C7B]/20"
                      />
                      {errors.email && <p className="mt-1 text-xs text-red-700">{errors.email}</p>}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="block text-sm font-semibold text-[#102A43] mb-1.5"
                      >
                        Phone Number (Optional)
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+44 7XXX XXXXXX"
                        className="w-full rounded-xl border border-[#BCCCDC] bg-[#F8FAFC] px-4 py-3 text-sm text-[#102A43] focus:border-[#0E7C7B] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0E7C7B]/20 tabular-nums"
                      />
                      {errors.phone && <p className="mt-1 text-xs text-red-700">{errors.phone}</p>}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-subject"
                        className="block text-sm font-semibold text-[#102A43] mb-1.5"
                      >
                        Subject <span className="text-[#0E7C7B]">*</span>
                      </label>
                      <input
                        id="contact-subject"
                        type="text"
                        required
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        placeholder="e.g. Clinic location enquiry"
                        className="w-full rounded-xl border border-[#BCCCDC] bg-[#F8FAFC] px-4 py-3 text-sm text-[#102A43] focus:border-[#0E7C7B] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0E7C7B]/20"
                      />
                      {errors.subject && (
                        <p className="mt-1 text-xs text-red-700">{errors.subject}</p>
                      )}
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="contact-message"
                        className="block text-sm font-semibold text-[#102A43] mb-1.5"
                      >
                        Message <span className="text-[#0E7C7B]">*</span>
                      </label>
                      <textarea
                        id="contact-message"
                        rows={4}
                        required
                        maxLength={1000}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="How may our practice desk assist you?"
                        className="w-full rounded-xl border border-[#BCCCDC] bg-[#F8FAFC] px-4 py-3 text-sm text-[#102A43] focus:border-[#0E7C7B] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0E7C7B]/20"
                      />
                      {errors.message && (
                        <p className="mt-1 text-xs text-red-700">{errors.message}</p>
                      )}
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#102A43] hover:bg-[#243B53] disabled:opacity-60 text-white text-sm font-semibold transition-colors"
                  >
                    <Send className="w-4 h-4" aria-hidden="true" />
                    <span>{isSubmitting ? 'Sending Message...' : 'Send Enquiry'}</span>
                  </button>
                </form>
              </div>

              {/* Clinic Map Placeholder */}
              <div className="rounded-2xl bg-[#EEF2F7] border border-[#D9E2EC] p-8 text-center">
                <div className="w-12 h-12 rounded-xl bg-white border border-[#D9E2EC] text-[#0E7C7B] flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-[#102A43]">
                  London Consulting Suite Map Placeholder
                </h3>
                <p className="mt-2 text-sm text-[#486581] max-w-lg mx-auto">
                  Verified hospital address and interactive directions will be displayed here once
                  official clinic location details are confirmed. In the meantime, please contact{' '}
                  <span className="font-semibold text-[#102A43] tabular-nums">
                    {CONTACT_INFO.phoneDisplay}
                  </span>{' '}
                  for attendance directions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
