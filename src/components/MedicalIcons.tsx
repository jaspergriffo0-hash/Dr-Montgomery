import {
  Activity,
  Bone,
  Cross,
  Footprints,
  HeartPulse,
  Microscope,
  ShieldPlus,
  Stethoscope,
  ClipboardCheck,
  Award,
  Accessibility,
  Sparkles,
} from 'lucide-react';
import { SpecializationItem, ServiceItem } from '../data/practiceData';

export function SpecializationIcon({
  iconKey,
  className = 'w-6 h-6',
}: {
  iconKey: SpecializationItem['iconKey'];
  className?: string;
}) {
  switch (iconKey) {
    case 'scalpel':
      return <ShieldPlus className={className} aria-hidden="true" />;
    case 'bone':
      return <Bone className={className} aria-hidden="true" />;
    case 'joint':
      return <Cross className={className} aria-hidden="true" />;
    case 'leg':
      return <Footprints className={className} aria-hidden="true" />;
    case 'fracture':
      return <Activity className={className} aria-hidden="true" />;
    case 'muscle':
      return <HeartPulse className={className} aria-hidden="true" />;
    case 'scope':
      return <Microscope className={className} aria-hidden="true" />;
    case 'rehab':
      return <Accessibility className={className} aria-hidden="true" />;
  }
}

export function ServiceIcon({
  iconKey,
  className = 'w-6 h-6',
}: {
  iconKey: ServiceItem['iconKey'];
  className?: string;
}) {
  switch (iconKey) {
    case 'consultation':
      return <Stethoscope className={className} aria-hidden="true" />;
    case 'fracture':
      return <Activity className={className} aria-hidden="true" />;
    case 'replacement':
      return <ShieldPlus className={className} aria-hidden="true" />;
    case 'kneeHip':
      return <Bone className={className} aria-hidden="true" />;
    case 'lowerLimb':
      return <Footprints className={className} aria-hidden="true" />;
    case 'sports':
      return <HeartPulse className={className} aria-hidden="true" />;
    case 'boneJoint':
      return <ClipboardCheck className={className} aria-hidden="true" />;
    case 'recovery':
      return <Accessibility className={className} aria-hidden="true" />;
  }
}

export { Award, Sparkles };
