import { useState } from 'react';
import { Stethoscope } from 'lucide-react';

interface HospitalImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
}

export function HospitalImage({
  src,
  alt,
  className = 'w-full h-full object-cover',
  fallbackTitle = 'Consultant Orthopaedic Care',
}: HospitalImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className="w-full h-full min-h-[240px] flex flex-col items-center justify-center bg-gradient-to-br from-[#EEF2F7] via-[#F8FAFC] to-[#E2E8F0] p-6 text-center border border-[#D9E2EC]"
      >
        <div className="w-12 h-12 rounded-xl bg-[#0E7C7B]/10 flex items-center justify-center text-[#0E7C7B] mb-3">
          <Stethoscope className="w-6 h-6" aria-hidden="true" />
        </div>
        <p className="font-serif text-base font-semibold text-[#102A43]">{fallbackTitle}</p>
        <p className="text-xs text-[#627D98] mt-1">Dr. Percival George Montgomery</p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
