export const PRACTICE_IMAGES = {
  doctorPortrait: '/assets/aistudio/WhatsApp_Image_2026-11-12_at_10.08.18_PM_ff720b07.jpeg',
  consultation: '/src/assets/images/about_surgeon_consultation_1795448978188.jpg',
  hospitalAtrium: '/src/assets/images/hospital_atrium_london_1795448978457.jpg',
  rehabCare: '/src/assets/images/orthopaedic_rehab_care_1795448979076.jpg',
  surgicalSuite: '/src/assets/images/surgical_excellence_suite_1795448979158.jpg',
} as const;

export const CONTACT_INFO = {
  name: 'Dr. Percival George Montgomery',
  shortName: 'Dr. P. G. Montgomery',
  title: 'Consultant Orthopaedic Surgeon',
  subtitle: 'Bone, Joint, Leg and Musculoskeletal Specialist',
  phoneDisplay: '+44 7784 689878',
  phoneHref: 'tel:+447784689878',
  whatsappHref: 'https://wa.me/447784689878',
  email: 'dr.percivalgeorgemontgomery@gmail.com',
  emailHref: 'mailto:dr.percivalgeorgemontgomery@gmail.com',
  clinicAddressPlaceholder: 'London Consulting Rooms — Verified clinic address to be confirmed upon scheduling.',
  hospitalAffiliationPlaceholder: 'Hospital Affiliation — Official NHS and private hospital privileges pending verification.',
  workingHoursPlaceholder: 'Consultation Hours — By prior appointment; clinic schedule confirmed by the practice secretary.',
} as const;

export const BIOGRAPHY = {
  paragraphs: [
    'Dr. Percival George Montgomery is a Consultant Orthopaedic Surgeon dedicated to the diagnosis, treatment, management, and rehabilitation of conditions affecting the bones, joints, muscles, ligaments, tendons, and supporting structures of the human body.',
    'Born on June 29, 1964, in London, England, United Kingdom, Dr. Montgomery has built his professional identity around a commitment to medical excellence, compassionate patient care, and improving the quality of life of individuals living with orthopaedic conditions.',
    'With a particular interest in restoring mobility, relieving pain, and helping patients regain independence, his approach to orthopaedic medicine places equal importance on accurate diagnosis, effective treatment, surgical precision, and long-term recovery.',
    'His professional interests encompass conditions affecting the upper and lower extremities, with particular attention to the legs, hips, knees, ankles, and feet.',
  ],
  highlightedStatement:
    'Helping people move better, recover stronger, and live with greater confidence.',
  anatomicalFocus: [
    { region: 'Hips & Pelvis', detail: 'Degenerative joint wear, mobility limitation, and joint preservation or replacement planning.' },
    { region: 'Knees', detail: 'Ligamentous instability, meniscal injuries, osteoarthritis, and reconstructive knee procedures.' },
    { region: 'Legs & Lower Limbs', detail: 'Complex lower-extremity fractures, alignment concerns, and functional weight-bearing restoration.' },
    { region: 'Ankles & Feet', detail: 'Post-traumatic injuries, tendon pathology, structural disorders, and gait recovery.' },
    { region: 'Upper Extremities', detail: 'Musculoskeletal injuries, fractures, and joint conditions affecting the shoulder, arm, and hand.' },
    { region: 'Tendons & Ligaments', detail: 'Comprehensive assessment of acute tears, chronic overload syndromes, and soft-tissue repair.' },
  ],
} as const;

export const EDUCATION_TIMELINE = [
  {
    id: 'early-life',
    stage: 'Stage 01 · Confirmed Background',
    title: 'Early Life and Academic Foundations',
    statusLabel: 'Confirmed Biographical Background',
    points: [
      'Dr. Percival George Montgomery was born on June 29, 1964, in London, England, United Kingdom.',
      'Raised in the United Kingdom, his early years were shaped by the educational traditions, cultural diversity, and academic environment of one of the world\'s leading centres for medical education.',
      'Growing up in London during the 1970s, he experienced an environment in which education, discipline, intellectual curiosity, and personal development played important roles in preparing young people for future professional careers.',
      'During his formative school years, he developed an interest in the sciences and the study of the human body.',
      'His academic interests gradually drew him towards biology, anatomy, and the medical sciences.',
    ],
  },
  {
    id: 'secondary-education',
    stage: 'Stage 02 · UK Academic Pathway',
    title: 'Secondary Education and Academic Development',
    statusLabel: 'General UK Medical Entry Pathway',
    points: [
      'His secondary education would have provided the foundation for the academic preparation required for entry into medical school.',
      'Subjects such as biology, chemistry, physics, and mathematics are particularly important for students pursuing medicine in the United Kingdom.',
      'His subsequent academic progression would involve advanced scientific study and the necessary qualifications for university admission.',
    ],
  },
  {
    id: 'university-education',
    stage: 'Stage 03 · General UK Medical Education',
    title: 'University Education and Medical Qualifications',
    statusLabel: 'Illustrative Institutions & Standard UK Curriculum',
    points: [
      'Primary medical qualifications awarded by UK medical schools generally include MBBS or MBChB, depending on the institution.',
      'UK medical education typically involves extensive study of Human Anatomy, Physiology, Pathology, Pharmacology, Clinical Medicine, and Patient Management.',
    ],
    illustrativeInstitutions: [
      "King's College London",
      'University College London',
      'Imperial College London',
      'University of Edinburgh',
    ],
    coreSubjects: [
      'Human Anatomy',
      'Physiology',
      'Pathology',
      'Pharmacology',
      'Clinical Medicine',
      'Patient Management',
    ],
  },
  {
    id: 'surgical-training',
    stage: 'Stage 04 · Specialist Orthopaedic Pathway',
    title: 'Advanced Surgical Training and Orthopaedic Specialization',
    statusLabel: 'General UK Orthopaedic Pathway',
    points: [
      'The professional pathway towards becoming an orthopaedic surgeon in the United Kingdom encompasses structured postgraduate progression across hospital rotations and rigorous assessment.',
      'Advanced surgical training develops expertise in musculoskeletal conditions, fracture management, joint reconstruction, and orthopaedic surgical procedures.',
    ],
    trainingStages: [
      'Foundation Training',
      'Core Surgical Training',
      'Higher Specialty Training in Trauma and Orthopaedics',
      'Advanced Surgical Examinations',
      'Specialist Orthopaedic Training',
      'FRCS (Tr & Orth) as a relevant specialist qualification',
    ],
  },
] as const;

export const EXPERIENCE_TIMELINE = [
  {
    period: '1989–1991',
    institution: 'UK Teaching Hospital',
    position: 'Foundation / Junior Doctor',
    note: 'Proposed career-history record pending verification',
  },
  {
    period: '1991–1994',
    institution: 'NHS Hospital',
    position: 'Senior House Officer, Surgery',
    note: 'Proposed career-history record pending verification',
  },
  {
    period: '1994–1997',
    institution: 'NHS Teaching Hospital',
    position: 'Specialist Registrar, Trauma & Orthopaedics',
    note: 'Proposed career-history record pending verification',
  },
  {
    period: '1997–2001',
    institution: 'UK Orthopaedic Training Centre',
    position: 'Higher Surgical Training',
    note: 'Proposed career-history record pending verification',
  },
  {
    period: '2001–2005',
    institution: 'NHS Hospital',
    position: 'Consultant Orthopaedic Surgeon',
    note: 'Proposed career-history record pending verification',
  },
  {
    period: '2005–Present',
    institution: 'Hospital / Private Practice',
    position: 'Consultant Trauma & Orthopaedic Surgeon',
    note: 'Proposed career-history record pending verification',
  },
] as const;

export const PROFESSIONAL_RESPONSIBILITIES = [
  'Assessing and treating patients with fractures and musculoskeletal injuries.',
  'Performing appropriate orthopaedic surgical procedures.',
  'Managing knee, hip, ankle, and lower-limb disorders.',
  'Developing surgical and non-surgical treatment plans.',
  'Supervising junior doctors and contributing to surgical training.',
  'Participating in multidisciplinary patient care.',
  'Planning patient rehabilitation.',
  'Maintaining professional standards through continuing medical education.',
] as const;

export interface SpecializationItem {
  id: string;
  title: string;
  summary: string;
  clinicalFocus: string;
  iconKey: 'scalpel' | 'bone' | 'joint' | 'leg' | 'fracture' | 'muscle' | 'scope' | 'rehab';
}

export const SPECIALIZATIONS: SpecializationItem[] = [
  {
    id: 'orthopaedic-trauma',
    title: 'Orthopaedic and Trauma Surgery',
    summary: 'Comprehensive operative and non-operative management of acute musculoskeletal trauma and complex orthopaedic injuries.',
    clinicalFocus: 'Prioritizes anatomical alignment, biological bone healing, and safe return to daily function.',
    iconKey: 'scalpel',
  },
  {
    id: 'bone-joint-disorders',
    title: 'Bone and Joint Disorders',
    summary: 'Diagnostic evaluation and long-term care for degenerative, inflammatory, and structural bone and joint conditions.',
    clinicalFocus: 'Individualized care balancing conservative therapies with surgical intervention when clinically indicated.',
    iconKey: 'bone',
  },
  {
    id: 'hip-knee-replacement',
    title: 'Hip and Knee Replacement',
    summary: 'Primary and complex joint arthroplasty aimed at relieving debilitating joint pain and restoring smooth articulation.',
    clinicalFocus: 'Pre-operative planning, precise implant positioning, and structured post-operative mobility pathways.',
    iconKey: 'joint',
  },
  {
    id: 'leg-lower-limb',
    title: 'Leg and Lower-Limb Surgery',
    summary: 'Dedicated surgical care for conditions affecting the femur, tibia, knee, ankle, and supporting lower-limb structures.',
    clinicalFocus: 'Focused on mechanical axis restoration, gait stability, and pain-free weight bearing.',
    iconKey: 'leg',
  },
  {
    id: 'fracture-trauma-management',
    title: 'Fracture and Trauma Management',
    summary: 'Prompt assessment, stabilization, and follow-up of simple and complex fractures across the upper and lower extremities.',
    clinicalFocus: 'Monitors union progression carefully to minimize stiffness and long-term functional deficit.',
    iconKey: 'fracture',
  },
  {
    id: 'musculoskeletal-disorders',
    title: 'Musculoskeletal Disorders',
    summary: 'Holistic assessment of disorders involving muscles, ligaments, tendons, cartilage, and supportive skeletal anatomy.',
    clinicalFocus: 'Coordinates targeted physiotherapy, medical management, and specialist surgical review.',
    iconKey: 'muscle',
  },
  {
    id: 'arthroscopic-surgery',
    title: 'Arthroscopic Surgery',
    summary: 'Minimally invasive keyhole joint procedures to diagnose and treat intra-articular cartilage and ligament pathology.',
    clinicalFocus: 'Designed to reduce soft-tissue disruption and support structured recovery timelines.',
    iconKey: 'scope',
  },
  {
    id: 'rehabilitation-mobility',
    title: 'Patient Rehabilitation and Mobility Restoration',
    summary: 'Integrated post-injury and post-surgical recovery planning in partnership with multidisciplinary physiotherapy teams.',
    clinicalFocus: 'Sustains long-term strength, joint range of motion, and confident independent living.',
    iconKey: 'rehab',
  },
];

export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  detailedOverview: string;
  whatToExpect: string[];
  iconKey: 'consultation' | 'fracture' | 'replacement' | 'kneeHip' | 'lowerLimb' | 'sports' | 'boneJoint' | 'recovery';
}

export const MEDICAL_SERVICES: ServiceItem[] = [
  {
    id: 'orthopaedic-consultations',
    title: 'Orthopaedic Consultations',
    shortDescription: 'Thorough specialist evaluation of bone, joint, leg, and musculoskeletal symptoms in a calm clinical setting.',
    detailedOverview:
      'Every consultation includes a careful clinical history, physical examination, review of existing imaging, and clear discussion of both non-surgical and surgical management pathways.',
    whatToExpect: [
      'Detailed symptom and mobility assessment',
      'Review of X-ray, MRI, or CT findings where available',
      'Clear explanation of diagnosis and individualized options',
    ],
    iconKey: 'consultation',
  },
  {
    id: 'fracture-diagnosis',
    title: 'Fracture Diagnosis and Treatment',
    shortDescription: 'Accurate assessment, immobilization, or surgical fixation for acute fractures and complex bone injuries.',
    detailedOverview:
      'Timely management of upper and lower limb fractures to protect bone alignment, relieve pain, and coordinate supervised healing through to full functional recovery.',
    whatToExpect: [
      'Diagnostic evaluation and stability assessment',
      'Conservative casting/bracing or operative stabilization',
      'Structured radiographic and functional follow-up',
    ],
    iconKey: 'fracture',
  },
  {
    id: 'joint-replacement-surgery',
    title: 'Joint Replacement Surgery',
    shortDescription: 'Specialist hip and knee replacement procedures designed to alleviate chronic pain and restore joint mobility.',
    detailedOverview:
      'When conservative measures no longer control severe joint degeneration, joint replacement surgery aims to restore smooth movement, stability, and everyday independence.',
    whatToExpect: [
      'Comprehensive pre-operative surgical planning',
      'Evidence-based arthroplasty techniques',
      'Coordinated inpatient and outpatient physiotherapy guidance',
    ],
    iconKey: 'replacement',
  },
  {
    id: 'knee-and-hip-surgery',
    title: 'Knee and Hip Surgery',
    shortDescription: 'Targeted operative and arthroscopic interventions for structural, mechanical, and degenerative knee and hip conditions.',
    detailedOverview:
      'Addresses meniscal tears, cartilage wear, mechanical locking, and joint deterioration with careful attention to each patient\'s activity goals and overall health.',
    whatToExpect: [
      'Joint-preserving options explored first whenever suitable',
      'Tailored arthroscopic or reconstructive surgical care',
      'Milestone-led recovery and gait monitoring',
    ],
    iconKey: 'kneeHip',
  },
  {
    id: 'leg-lower-limb-surgery',
    title: 'Leg and Lower-Limb Surgery',
    shortDescription: 'Focused surgical and reconstructive management for conditions affecting the legs, ankles, and feet.',
    detailedOverview:
      'Lower-limb conditions directly affect walking, balance, and independence. Care focuses on precise biomechanical restoration and durable weight-bearing comfort.',
    whatToExpect: [
      'Lower-extremity alignment and gait evaluation',
      'Targeted surgical management for leg, ankle, and foot disorders',
      'Step-by-step weight-bearing rehabilitation plan',
    ],
    iconKey: 'lowerLimb',
  },
  {
    id: 'sports-injury-treatment',
    title: 'Sports Injury Treatment',
    shortDescription: 'Diagnosis and structured treatment for ligament sprains, tendon injuries, and activity-related joint trauma.',
    detailedOverview:
      'Supports active patients in safely recovering from musculoskeletal sports injuries through accurate imaging review, targeted therapy, or surgical repair when required.',
    whatToExpect: [
      'Assessment of ligament, tendon, and cartilage integrity',
      'Guided conservative or surgical intervention',
      'Safe return-to-activity progression criteria',
    ],
    iconKey: 'sports',
  },
  {
    id: 'bone-joint-management',
    title: 'Bone and Joint Disorder Management',
    shortDescription: 'Long-term medical and surgical stewardship for osteoarthritis, structural wear, and chronic joint conditions.',
    detailedOverview:
      'Focused on maintaining joint comfort and mobility through evidence-based non-surgical measures, monitoring, and timely surgical escalation only when appropriate.',
    whatToExpect: [
      'Balanced non-operative symptom management strategies',
      'Regular clinical review of mobility and joint function',
      'Collaborative planning tailored to daily lifestyle needs',
    ],
    iconKey: 'boneJoint',
  },
  {
    id: 'post-surgical-rehab',
    title: 'Post-Surgical Rehabilitation and Recovery',
    shortDescription: 'Structured post-operative follow-up and coordinated physical therapy to support lasting surgical outcomes.',
    detailedOverview:
      'Orthopaedic recovery continues well beyond the operating theatre. Post-surgical pathways ensure safe wound healing, progressive strengthening, and confident mobility.',
    whatToExpect: [
      'Scheduled post-operative surgeon review appointments',
      'Liaison with specialist musculoskeletal physiotherapists',
      'Long-term functional recovery monitoring',
    ],
    iconKey: 'recovery',
  },
];

export const ACHIEVEMENT_CATEGORIES = [
  {
    id: 'complex-surgeries',
    title: 'Successful Complex Orthopaedic Surgeries',
    description:
      'Designated record category for verified complex orthopaedic and trauma surgical case milestones once formal institutional records are supplied.',
    verificationNote: 'Category prepared for verified clinical audit entries',
  },
  {
    id: 'joint-replacements',
    title: 'Joint Replacement Procedures',
    description:
      'Designated record category for verified hip and knee arthroplasty outcomes and longitudinal patient mobility follow-up summaries.',
    verificationNote: 'Category prepared for verified procedural data',
  },
  {
    id: 'research-publications',
    title: 'Medical Research and Publications',
    description:
      'Designated archive for peer-reviewed orthopaedic manuscripts, clinical audits, and academic conference presentations upon verification.',
    verificationNote: 'Category prepared for confirmed citations and DOIs',
  },
  {
    id: 'contributions-medicine',
    title: 'Contributions to Orthopaedic Medicine',
    description:
      'Designated summary of postgraduate surgical supervision, multidisciplinary clinical governance, and professional teaching contributions.',
    verificationNote: 'Category prepared for verified institutional acknowledgements',
  },
  {
    id: 'awards-recognitions',
    title: 'Professional Awards and Recognitions',
    description:
      'Designated section for confirmed Royal College fellowships, clinical excellence honours, and medical society distinctions.',
    verificationNote: 'No unverified awards or accolades displayed',
  },
] as const;

export const PATIENT_CARE_PILLARS = [
  {
    title: 'Compassionate Care',
    description: 'Every patient deserves respect, patience, and careful medical attention.',
    detail:
      'Consultations are unhurried and clear, ensuring patients and their families feel heard, respected, and thoroughly informed at every stage.',
  },
  {
    title: 'Accurate Diagnosis',
    description:
      "Understanding each patient's symptoms and medical circumstances is essential to developing appropriate treatment plans.",
    detail:
      'Careful clinical examination is paired with appropriate diagnostic imaging so recommendations address the true root cause of discomfort or instability.',
  },
  {
    title: 'Effective Treatment',
    description:
      "Treatment should be based on clinical judgment, medical evidence, and the patient's individual needs.",
    detail:
      'Non-operative and surgical options are weighed transparently, recommending operative intervention only when clinically justified and aligned with patient goals.',
  },
  {
    title: 'Long-Term Recovery',
    description:
      'Rehabilitation, follow-up assessments, and appropriate physical therapy are important components of orthopaedic recovery.',
    detail:
      'Recovery planning extends from initial consultation through post-treatment rehabilitation to protect joint longevity and lasting independence.',
  },
] as const;

export const PATIENT_CARE_QUOTE =
  'The true purpose of orthopaedic medicine is not simply to treat an injury or repair a damaged joint. It is to help people reclaim the movement and independence that allow them to live fuller lives.';

export const PHILOSOPHY = {
  headline: 'Medical Integrity. Patient-Centred Treatment. Clinical Excellence.',
  mission:
    "Dr. Percival George Montgomery's mission is to provide responsible, high-quality orthopaedic care through accurate diagnosis, evidence-based treatment, appropriate surgical intervention, and comprehensive recovery planning.",
} as const;
