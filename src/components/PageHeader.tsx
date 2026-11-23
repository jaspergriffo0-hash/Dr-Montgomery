import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface PageHeaderProps {
  kicker: string;
  title: string;
  description: string;
  currentPage: string;
  notice?: string;
}

export function PageHeader({
  kicker,
  title,
  description,
  currentPage,
  notice,
}: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-[#EEF2F7] border-b border-[#D9E2EC]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#64B5F6]/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 left-12 w-72 h-72 rounded-full bg-[#0E7C7B]/10 blur-3xl"
      />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs font-medium text-[#627D98] mb-4">
          <Link to="/" className="hover:text-[#102A43] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
          <span className="text-[#0E7C7B]">{currentPage}</span>
        </nav>

        <p className="text-xs font-semibold tracking-wider text-[#0E7C7B] uppercase mb-2">
          {kicker}
        </p>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-[#102A43] leading-tight max-w-3xl">
          {title}
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[#334E68] leading-relaxed max-w-2xl">
          {description}
        </p>

        {notice && (
          <div className="mt-6 max-w-3xl rounded-xl bg-[#F8FAFC] border border-[#D9E2EC] px-4 py-3 text-sm text-[#334E68]">
            <span className="font-semibold text-[#102A43]">Verification Notice: </span>
            {notice}
          </div>
        )}
      </div>
    </section>
  );
}
