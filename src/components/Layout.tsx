import { useState, useEffect } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import {
  Phone,
  Mail,
  Menu,
  X,
  CalendarCheck,
  ShieldCheck,
  ArrowUpRight,
  MessageCircle,
  Linkedin,
  Globe,
} from 'lucide-react';
import { CONTACT_INFO, MEDICAL_SERVICES } from '../data/practiceData';

const PRIMARY_NAV_ITEMS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Education', to: '/education' },
  { label: 'Experience', to: '/experience' },
  { label: 'Specializations', to: '/specializations' },
  { label: 'Services', to: '/services' },
  { label: 'Achievements', to: '/achievements' },
  { label: 'Contact', to: '/contact' },
];

const ALL_PAGES_NAV = [
  ...PRIMARY_NAV_ITEMS.slice(0, 7),
  { label: 'Patient Care', to: '/patient-care' },
  { label: 'Contact', to: '/contact' },
];

export function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#334E68]">
      {/* Top Hospital Contact Strip */}
      <div className="bg-[#102A43] text-[#F8FAFC] text-xs border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 truncate">
            <span className="hidden sm:inline text-[#BCCCDC]">
              Consultant Orthopaedic Surgeon · London, United Kingdom
            </span>
            <Link
              to="/patient-care"
              className="text-[#64B5F6] hover:text-white transition-colors whitespace-nowrap shrink-0 underline-offset-4 hover:underline"
            >
              Patient-Centred Care Philosophy
            </Link>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <a
              href={CONTACT_INFO.phoneHref}
              className="inline-flex items-center gap-1.5 font-medium text-white hover:text-[#64B5F6] transition-colors tabular-nums whitespace-nowrap shrink-0"
              aria-label={`Call ${CONTACT_INFO.phoneDisplay}`}
            >
              <Phone className="w-3.5 h-3.5 text-[#64B5F6]" aria-hidden="true" />
              <span>{CONTACT_INFO.phoneDisplay}</span>
            </a>
            <a
              href={CONTACT_INFO.emailHref}
              className="hidden md:inline-flex items-center gap-1.5 text-[#BCCCDC] hover:text-white transition-colors whitespace-nowrap shrink-0"
            >
              <Mail className="w-3.5 h-3.5 text-[#64B5F6]" aria-hidden="true" />
              <span>{CONTACT_INFO.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Sticky White Hospital Navigation Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#D9E2EC] shadow-[0_2px_12px_rgba(16,42,67,0.05)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-6">
          {/* Brand Wordmark */}
          <Link
            to="/"
            className="font-serif text-base sm:text-lg font-semibold tracking-tight text-[#102A43] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0E7C7B] rounded"
          >
            Dr. Percival George Montgomery
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Primary Navigation"
            className="hidden xl:flex items-center gap-5 text-sm font-medium text-[#334E68]"
          >
            {PRIMARY_NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `relative py-1 whitespace-nowrap shrink-0 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0E7C7B] rounded ${
                    isActive
                      ? 'text-[#0E7C7B] font-semibold after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-0.5 after:bg-[#0E7C7B]'
                      : 'text-[#334E68] hover:text-[#102A43]'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Right CTA & Mobile Menu Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/appointment"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0E7C7B] hover:bg-[#0A5F5E] text-white text-sm font-semibold shadow-sm transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0E7C7B]"
            >
              <CalendarCheck className="w-4 h-4" aria-hidden="true" />
              <span>Book Appointment</span>
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="xl:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg border border-[#D9E2EC] text-[#102A43] hover:bg-[#EEF2F7] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0E7C7B]"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile & Tablet Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden border-t border-[#D9E2EC] bg-white px-4 py-4 shadow-lg">
            <nav aria-label="Mobile Navigation" className="grid grid-cols-1 sm:grid-cols-2 gap-1">
              {ALL_PAGES_NAV.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-[#EEF2F7] text-[#0E7C7B] font-semibold'
                        : 'text-[#102A43] hover:bg-[#F8FAFC]'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <div className="mt-4 pt-4 border-t border-[#D9E2EC] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <a
                href={CONTACT_INFO.phoneHref}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#102A43] tabular-nums"
              >
                <Phone className="w-4 h-4 text-[#0E7C7B]" aria-hidden="true" />
                <span>{CONTACT_INFO.phoneDisplay}</span>
              </a>
              <Link
                to="/appointment"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#0E7C7B] hover:bg-[#0A5F5E] text-white text-sm font-semibold transition-colors"
              >
                <CalendarCheck className="w-4 h-4" aria-hidden="true" />
                <span>Book Appointment</span>
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Routed Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Sophisticated Navy Hospital Footer */}
      <footer className="bg-[#102A43] text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Column 1: Practice Identity */}
            <div>
              <h2 className="font-serif text-xl font-semibold text-white">
                {CONTACT_INFO.name}
              </h2>
              <p className="text-sm text-[#64B5F6] font-medium mt-1">
                {CONTACT_INFO.title}
              </p>
              <p className="text-sm text-[#BCCCDC] leading-relaxed mt-4">
                Dedicated to the diagnosis, treatment, management, and rehabilitation of bone,
                joint, leg, and musculoskeletal conditions with clinical precision and
                compassionate patient care.
              </p>
              <div className="mt-5 flex items-center gap-2 text-xs text-[#BCCCDC]">
                <ShieldCheck className="w-4 h-4 text-[#64B5F6] shrink-0" aria-hidden="true" />
                <span>Patient-Centred Orthopaedic Care</span>
              </div>
            </div>

            {/* Column 2: Quick Navigation Links */}
            <div>
              <h3 className="font-serif text-base font-semibold text-white mb-4">
                Practice Navigation
              </h3>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm text-[#BCCCDC]">
                <li>
                  <Link to="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/education" className="hover:text-white transition-colors">
                    Education
                  </Link>
                </li>
                <li>
                  <Link to="/experience" className="hover:text-white transition-colors">
                    Experience
                  </Link>
                </li>
                <li>
                  <Link to="/specializations" className="hover:text-white transition-colors">
                    Specializations
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-white transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/achievements" className="hover:text-white transition-colors">
                    Achievements
                  </Link>
                </li>
                <li>
                  <Link to="/patient-care" className="hover:text-white transition-colors">
                    Patient Care
                  </Link>
                </li>
                <li>
                  <Link to="/appointment" className="hover:text-white transition-colors">
                    Book Appointment
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Medical Services */}
            <div>
              <h3 className="font-serif text-base font-semibold text-white mb-4">
                Medical Services
              </h3>
              <ul className="space-y-2.5 text-sm text-[#BCCCDC]">
                {MEDICAL_SERVICES.slice(0, 6).map((service) => (
                  <li key={service.id}>
                    <Link
                      to="/services"
                      className="hover:text-white transition-colors inline-flex items-center gap-1"
                    >
                      <span>{service.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Direct Contact & Social Placeholders */}
            <div>
              <h3 className="font-serif text-base font-semibold text-white mb-4">
                Contact Information
              </h3>
              <div className="space-y-3 text-sm text-[#BCCCDC]">
                <a
                  href={CONTACT_INFO.phoneHref}
                  className="flex items-center gap-2.5 text-white hover:text-[#64B5F6] transition-colors font-medium tabular-nums"
                >
                  <Phone className="w-4 h-4 text-[#64B5F6] shrink-0" aria-hidden="true" />
                  <span>{CONTACT_INFO.phoneDisplay}</span>
                </a>
                <a
                  href={CONTACT_INFO.emailHref}
                  className="flex items-start gap-2.5 hover:text-white transition-colors break-all"
                >
                  <Mail className="w-4 h-4 text-[#64B5F6] shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{CONTACT_INFO.email}</span>
                </a>
                <a
                  href={CONTACT_INFO.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-1 px-3.5 py-2 rounded-lg bg-[#0E7C7B] hover:bg-[#0A5F5E] text-white text-xs font-semibold transition-colors"
                >
                  <MessageCircle className="w-4 h-4" aria-hidden="true" />
                  <span>WhatsApp Practice Desk</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </div>

              <div className="mt-6">
                <p className="text-xs font-medium text-[#9FB3C8] mb-2.5">
                  Professional Profiles (Placeholder Links)
                </p>
                <div className="flex items-center gap-2.5">
                  <Link
                    to="/contact"
                    aria-label="Professional Directory Profile Placeholder"
                    className="w-9 h-9 rounded-lg border border-white/15 flex items-center justify-center text-[#BCCCDC] hover:text-white hover:border-[#64B5F6] transition-colors"
                  >
                    <Linkedin className="w-4 h-4" aria-hidden="true" />
                  </Link>
                  <Link
                    to="/contact"
                    aria-label="Medical Registry Profile Placeholder"
                    className="w-9 h-9 rounded-lg border border-white/15 flex items-center justify-center text-[#BCCCDC] hover:text-white hover:border-[#64B5F6] transition-colors"
                  >
                    <Globe className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Medical Disclaimer & Copyright */}
          <div className="mt-12 pt-8 border-t border-white/10 space-y-3 text-xs text-[#9FB3C8]">
            <p className="leading-relaxed">
              <strong className="text-white font-semibold">Medical Disclaimer:</strong> Information
              provided on this website is intended for general patient education and practice
              scheduling only and does not constitute a formal medical diagnosis or emergency
              clinical advice. In the event of an acute medical emergency or severe injury, please
              attend your nearest Accident &amp; Emergency department or contact emergency services
              immediately. Illustrative UK medical education pathways and proposed career-history
              entries are clearly labelled as pending formal verification.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-2">
              <p>
                © {new Date().getFullYear()} Dr. Percival George Montgomery. All rights reserved.
              </p>
              <p className="tabular-nums">Direct Enquiries: {CONTACT_INFO.phoneDisplay}</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
