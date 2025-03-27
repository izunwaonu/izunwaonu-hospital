import {
  Baby,
  HeartPulse,
  Syringe,
  Users,
  Stethoscope,
  Calculator,
  Brain,
  Hospital,
  Microscope,
  Scissors,
  BookOpen,
  Activity,
  // FirstAid,
  // Flask,
  // Scanner,
  BadgePlus,
  Construction,
  Bed,
  Ambulance,
  Heart,
  PersonStanding,
  PlusCircle,
  // Knife,
  ClipboardCheck,
  Building2,
  CalendarCheck,
  MessageCircle,
  ScanLine,
  FlaskConical,
  TestTube,
  Scan,
  Backpack,
  ScanIcon,
  Vibrate,
  ChevronFirst,
  UserPlus,
  Grab,
  Truck,
  Eye,
  Tablet,
} from "lucide-react";

export const departments = [
  {
    id: 1,
    name: "Obstetrics & Gynecology",
    slug: "obstetrics-and-gynecology",
    image: "/dep/pregnant.jpg",
    description:
      "Comprehensive women's healthcare services providing expert care throughout all stages of life and pregnancy.",
    specialist: "Gynecologist Specialist",
    services: [
      {
        title: "Normal Delivery",
        description:
          "Expert care for natural childbirth in a comfortable and safe environment.",
        icon: Baby,
      },
      {
        title: "Cesarean Delivery",
        description:
          "Specialized surgical delivery when medically necessary, ensuring mother and baby's safety.",
        icon: Scissors,
      },
      {
        title: "Antenatal Services",
        description:
          "Regular check-ups and care throughout pregnancy to ensure mother and baby's health.",
        icon: HeartPulse,
      },
      {
        title: "Family Planning",
        description:
          "Counseling and services for various family planning options.",
        icon: Users,
      },
      {
        title: "Ectopic Pregnancy",
        description: "Emergency care and treatment for ectopic pregnancies.",
        icon: ScanLine,
      },
      {
        title: "Tubal Ligation",
        description:
          "Permanent birth control option for women who have completed their families.",
        icon: Scissors,
      },
      {
        title: "Ovarian Cystectomy",
        description:
          "Surgical removal of ovarian cysts with minimal invasive techniques when possible.",
        icon: ScanLine,
      },
    ],
    faqs: [
      {
        question: "What prenatal services do you offer?",
        answer:
          "We offer comprehensive prenatal care including regular check-ups, ultrasound scans, genetic testing, and childbirth education classes.",
      },
      {
        question: "How often should I schedule prenatal visits?",
        answer:
          "Typically monthly until 28 weeks, then bi-weekly until 36 weeks, and weekly until delivery. High-risk pregnancies may require more frequent visits.",
      },
      {
        question: "Do you offer natural birthing options?",
        answer:
          "Yes, we support natural birthing plans while ensuring medical safety. Our facilities include birthing balls, squatting bars, and other natural birth aids.",
      },
      {
        question: "What should I bring to the hospital when in labor?",
        answer:
          "Bring your medical documents, comfortable clothing, personal care items, and any specific items from your birth plan.",
      },
      {
        question: "How long is the typical hospital stay after delivery?",
        answer:
          "For normal delivery, 24-48 hours. For cesarean delivery, 3-4 days, depending on recovery progress.",
      },
      {
        question: "What post-partum support services are available?",
        answer:
          "We offer lactation consulting, post-partum care, mental health support, and regular check-ups for both mother and baby.",
      },
    ],
  },
  {
    id: 2,
    name: "Surgery Department",
    slug: "surgery",
    image: "/dep/surgery.webp",
    description:
      "State-of-the-art surgical facilities providing a wide range of surgical procedures with expert care.",
    specialist: "Abdominal Surgeon Specialist",
    services: [
      {
        title: "Prostatectomy",
        description:
          "Surgical treatment for prostate conditions using modern techniques.",
        icon: ScanLine,
      },
      {
        title: "Hernia Repair",
        description:
          "Advanced surgical procedures for various types of hernias.",
        icon: Construction,
      },
      {
        title: "Exploratory Laparotomy",
        description:
          "Diagnostic surgical procedure to examine abdominal organs.",
        icon: ScanLine,
      },
      {
        title: "Burns Treatment",
        description:
          "Specialized care for burn victims with advanced wound care.",
        icon: ScanLine,
      },
      {
        title: "Emergency Trauma Care",
        description: "24/7 emergency surgical intervention for trauma cases.",
        icon: Ambulance,
      },
      {
        title: "Orthopedics",
        description: "Surgical treatment of bone and joint conditions.",
        icon: PersonStanding,
      },
    ],
    faqs: [
      {
        question: "What types of surgeries do you perform?",
        answer:
          "We perform a wide range of surgeries including general, orthopedic, and emergency procedures.",
      },
      {
        question: "How long is the typical recovery period?",
        answer:
          "Recovery time varies by procedure. We provide detailed recovery plans for each patient.",
      },
      {
        question: "What anesthesia options are available?",
        answer:
          "We offer local, regional, and general anesthesia based on the procedure and patient needs.",
      },
      {
        question: "How should I prepare for surgery?",
        answer:
          "Specific preparations will be provided, but generally include fasting, medication adjustments, and pre-operative tests.",
      },
      {
        question: "What post-operative care is provided?",
        answer:
          "We provide comprehensive post-operative care including pain management, wound care, and rehabilitation services.",
      },
      {
        question: "Are minimally invasive options available?",
        answer:
          "Yes, we offer minimally invasive options for many procedures when appropriate.",
      },
    ],
  },
  {
    id: 3,
    name: "Medical Department",
    slug: "medical",
    image: "/dep/medical.jpg",
    description:
      "Comprehensive medical care for various conditions with focus on patient-centered treatment approaches.",
    specialist: "Physician and Infectious Diseases Specialist",
    services: [
      {
        title: "Emergency Medicine",
        description:
          "Round-the-clock emergency medical care for acute conditions.",
        icon: Ambulance,
      },
      {
        title: "Diabetic and Hypertension Clinic",
        description:
          "Specialized care for diabetes and blood pressure management.",
        icon: Heart,
      },
      {
        title: "Blood Transfusion",
        description: "Safe and monitored blood transfusion services.",
        icon: Activity,
      },
      {
        title: "High Dependency Unit",
        description: "Intensive care for patients requiring close monitoring.",
        icon: HeartPulse,
      },
      {
        title: "Infectious Diseases",
        description:
          "Treatment and management of various infectious conditions.",
        icon: ScanLine,
      },
    ],
    faqs: [
      {
        question: "What conditions do you treat?",
        answer:
          "We treat a wide range of medical conditions including chronic diseases, infections, and acute illnesses.",
      },
      {
        question: "How do I schedule a check-up?",
        answer:
          "You can schedule appointments through our reception desk or online booking system.",
      },
      {
        question: "Do you offer specialist consultations?",
        answer:
          "Yes, we have specialists available for various medical conditions. Referrals may be required.",
      },
      {
        question: "What emergency services are available?",
        answer:
          "We provide 24/7 emergency care with fully equipped facilities and experienced staff.",
      },
      {
        question: "How can I get my test results?",
        answer:
          "Test results can be collected in person or accessed through our patient portal.",
      },
      {
        question: "Do you offer home care services?",
        answer:
          "Yes, we provide home care services for eligible patients requiring continued care.",
      },
    ],
  },
  {
    id: 4,
    name: "Laboratory Department",
    slug: "laboratory",
    image: "/dep/lab.webp",
    description:
      "Advanced diagnostic laboratory offering comprehensive testing services with quick and accurate results.",
    specialist: "Laboratory Medicine Specialist",
    services: [
      {
        title: "Chemistry",
        description:
          "Comprehensive blood chemistry analysis for various medical conditions and health monitoring.",
        icon: FlaskConical,
      },
      {
        title: "Serology",
        description:
          "Advanced blood serum testing for antibodies and proteins to diagnose various conditions.",
        icon: TestTube,
      },
      {
        title: "Microscopy",
        description:
          "Detailed microscopic examination of specimens for accurate diagnosis.",
        icon: Microscope,
      },
      {
        title: "Microbiology",
        description:
          "Culture and sensitivity testing for infectious disease diagnosis and treatment.",
        icon: Backpack,
      },
    ],
    faqs: [
      {
        question: "How long does it take to get test results?",
        answer:
          "Most routine tests are available within 24-48 hours. Some specialized tests may take longer.",
      },
      {
        question: "Do I need to fast before my blood test?",
        answer:
          "Fasting requirements vary by test. You'll receive specific instructions when scheduling your test.",
      },
      {
        question: "What are your laboratory working hours?",
        answer:
          "Our laboratory operates from 7:00 AM to 7:00 PM Monday through Saturday, with 24/7 emergency services.",
      },
      {
        question: "How should I prepare for a blood test?",
        answer:
          "Stay well hydrated, follow any fasting instructions, and bring your test requisition form and ID.",
      },
      {
        question: "Can I get my results online?",
        answer:
          "Yes, results are available through our secure patient portal once verified by our specialists.",
      },
      {
        question: "Do you accept walk-in patients?",
        answer:
          "Yes, we accept walk-ins for most routine tests, but appointments are recommended for specialized tests.",
      },
    ],
  },
  {
    id: 5,
    name: "Imaging Department",
    slug: "imaging",
    image: "/dep/xray.jpg",
    description:
      "Modern imaging facilities providing clear and accurate diagnostic images for better treatment planning.",
    specialist: "Radiology Specialist",
    services: [
      {
        title: "Digital X-ray",
        description:
          "Advanced digital X-ray imaging with minimal radiation exposure for various diagnostic needs.",
        icon: Scan,
      },
      {
        title: "Ultrasound Scan",
        description:
          "High-resolution ultrasound imaging for detailed examination of internal organs and structures.",
        icon: ScanIcon,
      },
    ],
    faqs: [
      {
        question: "How should I prepare for an imaging exam?",
        answer:
          "Preparation varies by exam type. You'll receive specific instructions when scheduling your appointment.",
      },
      {
        question: "How long do imaging procedures take?",
        answer:
          "Most procedures take 15-30 minutes, though some specialized scans may take longer.",
      },
      {
        question: "Are these procedures safe?",
        answer:
          "Yes, our imaging procedures follow strict safety guidelines with minimal radiation exposure where applicable.",
      },
      {
        question: "When will I get my results?",
        answer:
          "Results are typically available within 24-48 hours and will be sent to your referring physician.",
      },
      {
        question: "Can I get a copy of my images?",
        answer:
          "Yes, you can request a digital copy of your images for personal records or second opinions.",
      },
      {
        question: "Do I need a doctor's referral?",
        answer:
          "Most imaging procedures require a doctor's referral to ensure medical necessity.",
      },
    ],
  },
  {
    id: 6,
    name: "Pediatrics Department",
    slug: "pediatrics",
    image: "/dep/child.jpg",
    description:
      "Specialized healthcare for children from newborns to adolescents in a child-friendly environment.",
    specialist: "Pediatric and Child Health Specialist",
    services: [
      {
        title: "Neonatal ICU",
        description:
          "Specialized intensive care for newborns requiring critical medical attention.",
        icon: Baby,
      },
      {
        title: "Infectious Diseases",
        description:
          "Diagnosis and treatment of various childhood infections and diseases.",
        icon: Vibrate,
      },
      {
        title: "Sickle Cell Clinic",
        description:
          "Specialized care and management for children with sickle cell disease.",
        icon: Activity,
      },
      {
        title: "Immunisation",
        description:
          "Comprehensive vaccination services following recommended schedules.",
        icon: Syringe,
      },
    ],
    faqs: [
      {
        question: "What ages do you treat?",
        answer:
          "We care for children from birth through adolescence (0-18 years).",
      },
      {
        question: "How often should my child have check-ups?",
        answer:
          "Regular check-ups are recommended at 2 weeks, 2, 4, 6, 9, 12, 15, and 18 months, then annually.",
      },
      {
        question: "What vaccinations do you offer?",
        answer:
          "We provide all recommended childhood vaccinations following the national immunization schedule.",
      },
      {
        question: "Do you handle emergencies?",
        answer:
          "Yes, we provide 24/7 emergency pediatric care with specialized staff and equipment.",
      },
      {
        question: "What should I bring to appointments?",
        answer:
          "Bring your child's health record book, immunization records, and any relevant medical documents.",
      },
      {
        question: "How do you handle chronic conditions?",
        answer:
          "We provide comprehensive care plans and regular monitoring for children with chronic conditions.",
      },
    ],
  },
  {
    id: 7,
    name: "Outpatient Department",
    slug: "outpatient",
    image: "/dep/amb.webp",
    description:
      "Efficient outpatient services providing comprehensive care with minimal waiting times and modern facilities.",
    specialist: "General Practice Physician",
    services: [
      {
        title: "Ambulance Services",
        description:
          "24/7 emergency medical transportation with fully equipped modern ambulances and trained medical staff.",
        icon: Ambulance,
      },
      {
        title: "Bedside Nursing",
        description:
          "Professional nursing care with personalized attention and continuous monitoring for admitted patients.",
        icon: Bed,
      },
      {
        title: "Accident & Emergency",
        description:
          "Round-the-clock emergency medical services with rapid response and immediate care protocols.",
        icon: ChevronFirst,
      },
      {
        title: "Counselling",
        description:
          "Professional mental health support and general counseling services in a confidential environment.",
        icon: MessageCircle,
      },
    ],
    faqs: [
      {
        question: "What are your operating hours?",
        answer:
          "Our outpatient department operates from 8:00 AM to 8:00 PM daily, with 24/7 emergency services available.",
      },
      {
        question: "Do I need an appointment?",
        answer:
          "While we accept walk-ins, appointments are recommended to minimize waiting time. Emergency cases are attended to immediately.",
      },
      {
        question: "How quickly can I get an ambulance?",
        answer:
          "Our ambulance service operates 24/7 with typical response times of 10-15 minutes within city limits.",
      },
      {
        question: "What should I bring for my first visit?",
        answer:
          "Please bring your ID, any previous medical records, current medications list, and insurance information if applicable.",
      },
      {
        question: "Are teleconsultations available?",
        answer:
          "Yes, we offer teleconsultations for follow-up appointments and non-emergency consultations.",
      },
      {
        question: "What insurance plans do you accept?",
        answer:
          "We accept most major insurance plans and provide options for self-paying patients.",
      },
    ],
  },
  {
    id: 8,
    name: "Emergency Department",
    slug: "emergency",
    image: "/dep/emergency.jpg",
    description:
      "State-of-the-art emergency care facility providing immediate medical attention 24/7 for all urgent medical conditions.",
    specialist: "Emergency Medicine Specialist",
    services: [
      {
        title: "Trauma Care",
        description:
          "Immediate response and treatment for major and minor trauma cases with specialized equipment.",
        icon: Stethoscope,
      },
      {
        title: "Critical Care",
        description:
          "Advanced life support and monitoring for critically ill patients requiring immediate attention.",
        icon: Activity,
      },
      {
        title: "Emergency Surgery",
        description:
          "Round-the-clock surgical capabilities for emergency procedures and interventions.",
        icon: Scissors,
      },
      {
        title: "Rapid Assessment",
        description:
          "Quick evaluation and triage of emergency cases for optimal care prioritization.",
        icon: ClipboardCheck,
      },
    ],
    faqs: [
      {
        question: "How are emergency cases prioritized?",
        answer:
          "We use a triage system to assess and prioritize patients based on the severity of their condition.",
      },
      {
        question: "What emergency procedures are available?",
        answer:
          "We provide all essential emergency procedures including resuscitation, emergency surgery, and critical care.",
      },
      {
        question: "Is emergency care available 24/7?",
        answer:
          "Yes, our emergency department is staffed and fully operational 24 hours a day, 7 days a week.",
      },
      {
        question: "How long is the typical wait time?",
        answer:
          "Wait times vary based on case severity. Critical cases receive immediate attention.",
      },
      {
        question: "Do you have specialized emergency equipment?",
        answer:
          "Yes, we maintain state-of-the-art emergency equipment and facilities for all types of emergencies.",
      },
      {
        question: "Can family members stay with patients?",
        answer:
          "This depends on the situation and treatment being provided. Our staff will guide family members accordingly.",
      },
    ],
  },
  {
    id: 9,
    name: "Counseling Department",
    slug: "counseling",
    image: "/dep/counsel.jpg",
    description:
      "Professional mental health and counseling services providing compassionate support in a confidential environment.",
    specialist: "Clinical Psychologist",
    services: [
      {
        title: "Mental Health Counseling",
        description:
          "Professional counseling services for various mental health concerns and emotional well-being.",
        icon: Heart,
      },
      {
        title: "Family Therapy",
        description:
          "Therapeutic support for families dealing with relationship issues and conflicts.",
        icon: Users,
      },
      {
        title: "Grief Counseling",
        description:
          "Supportive counseling for individuals coping with loss and bereavement.",
        icon: MessageCircle,
      },
      {
        title: "Support Groups",
        description:
          "Facilitated group sessions for shared experiences and mutual support.",
        icon: UserPlus,
      },
    ],
    faqs: [
      {
        question: "How confidential are the sessions?",
        answer:
          "We maintain strict confidentiality in accordance with professional ethics and privacy laws.",
      },
      {
        question: "How long are counseling sessions?",
        answer:
          "Standard sessions are 50-60 minutes, though duration may vary based on specific needs.",
      },
      {
        question: "How often should I attend sessions?",
        answer:
          "Session frequency is determined based on individual needs, typically ranging from weekly to monthly.",
      },
      {
        question: "Do you offer crisis intervention?",
        answer:
          "Yes, we provide crisis intervention services with 24/7 emergency support when needed.",
      },
      {
        question: "Are virtual sessions available?",
        answer:
          "Yes, we offer teletherapy sessions for clients who prefer or require remote counseling.",
      },
      {
        question: "What age groups do you serve?",
        answer:
          "We provide counseling services for all age groups, from children to adults and seniors.",
      },
    ],
  },
  {
    id: 10,
    name: "Endoscopy Department",
    slug: "endoscopy",
    image: "/dep/endoscopy.jpg",
    description:
      "Advanced endoscopic procedures for diagnostic and therapeutic interventions with minimal invasiveness and quick recovery.",
    specialist: "Gastroenterologist",
    services: [
      {
        title: "Gastroscopy",
        description:
          "Examination of the upper digestive tract using a flexible endoscope to diagnose and treat conditions.",
        icon: Eye,
      },
      {
        title: "Colonoscopy",
        description:
          "Comprehensive examination of the colon for screening, diagnosis, and treatment of various conditions.",
        icon: ScanLine,
      },
      {
        title: "ERCP",
        description:
          "Specialized procedure to diagnose and treat conditions of the bile ducts and pancreas.",
        icon: Scan,
      },
      {
        title: "Bronchoscopy",
        description:
          "Examination of the airways and lungs for diagnosis and treatment of respiratory conditions.",
        icon: Stethoscope,
      },
    ],
    faqs: [
      {
        question: "How should I prepare for an endoscopic procedure?",
        answer:
          "Preparation varies by procedure. You'll receive specific instructions that may include fasting, medication adjustments, and bowel preparation for certain procedures.",
      },
      {
        question: "Are endoscopic procedures painful?",
        answer:
          "Most procedures are performed under sedation to ensure comfort. You may experience mild discomfort afterward but rarely pain.",
      },
      {
        question: "How long do endoscopic procedures take?",
        answer:
          "Most routine procedures take 15-45 minutes, though preparation and recovery time will extend your hospital stay.",
      },
      {
        question: "When will I get my results?",
        answer:
          "Preliminary results are often available immediately. Complete results, including biopsies, typically take 3-7 days.",
      },
      {
        question: "Can I drive myself home after a procedure?",
        answer:
          "No, due to sedation effects, you'll need someone to drive you home after endoscopic procedures.",
      },
      {
        question: "What are the risks of endoscopic procedures?",
        answer:
          "While generally safe, risks may include bleeding, infection, perforation, and sedation-related complications. These risks will be discussed thoroughly before your procedure.",
      },
    ],
  },
  {
    id: 11,
    name: "Dental Department",
    slug: "dental",
    image: "/dep/dental.jpg",
    description:
      "Comprehensive dental care services from preventive to restorative treatments in a modern and comfortable environment.",
    specialist: "Dental Surgeon",
    services: [
      {
        title: "Preventive Dentistry",
        description:
          "Regular check-ups, cleanings, and preventive care to maintain optimal oral health.",
        icon: Grab,
      },
      {
        title: "Restorative Dentistry",
        description:
          "Fillings, crowns, bridges, and other treatments to restore damaged or missing teeth.",
        icon: Construction,
      },
      {
        title: "Oral Surgery",
        description:
          "Extractions, wisdom teeth removal, and other surgical procedures for oral health issues.",
        icon: Scissors,
      },
      {
        title: "Pediatric Dentistry",
        description:
          "Child-friendly dental care focusing on prevention and early intervention.",
        icon: Baby,
      },
    ],
    faqs: [
      {
        question: "How often should I have a dental check-up?",
        answer:
          "We recommend regular check-ups every six months for most patients. Those with specific dental issues may need more frequent visits.",
      },
      {
        question: "What should I do in case of a dental emergency?",
        answer:
          "Contact our emergency dental service immediately. We offer same-day appointments for emergencies such as severe pain, trauma, or broken teeth.",
      },
      {
        question: "Do you treat children?",
        answer:
          "Yes, our pediatric dental specialists provide comprehensive care for children in a child-friendly environment.",
      },
      {
        question: "What payment options are available?",
        answer:
          "We accept most major insurance plans and offer various payment options including installment plans for extensive treatments.",
      },
      {
        question: "How can I manage dental anxiety?",
        answer:
          "We offer various options including conscious sedation and create a calm environment. Please discuss your concerns with us before your appointment.",
      },
      {
        question: "What technologies do you use in your practice?",
        answer:
          "We utilize digital X-rays, intraoral cameras, laser dentistry, and other advanced technologies for accurate diagnosis and comfortable treatment.",
      },
    ],
  },
  {
    id: 12,
    name: "Ambulance Services",
    slug: "ambulance",
    image: "/dep/amb.webp",
    description:
      "Rapid emergency medical transportation with fully equipped ambulances and trained personnel available 24/7.",
    specialist: "Emergency Medical Technician",
    services: [
      {
        title: "Emergency Response",
        description:
          "Rapid response to medical emergencies with fully equipped ambulances and trained personnel.",
        icon: Ambulance,
      },
      {
        title: "Critical Care Transport",
        description:
          "Specialized transportation for critically ill patients requiring continuous medical support.",
        icon: Activity,
      },
      {
        title: "Inter-facility Transfer",
        description:
          "Safe and monitored transportation between healthcare facilities for ongoing care.",
        icon: Truck,
      },
      {
        title: "On-site Medical Support",
        description:
          "Ambulance standby and medical support for events and gatherings.",
        icon: ClipboardCheck,
      },
    ],
    faqs: [
      {
        question: "How quickly can an ambulance respond to an emergency?",
        answer:
          "Our average response time is 10-15 minutes within city limits. Rural areas may have longer response times.",
      },
      {
        question: "What types of ambulances are available?",
        answer:
          "We operate basic life support (BLS) and advanced life support (ALS) ambulances, equipped according to national standards.",
      },
      {
        question: "Who will be in the ambulance?",
        answer:
          "Our ambulances are staffed with at least two trained professionals: an EMT driver and a paramedic or emergency care provider.",
      },
      {
        question: "How do I call for an ambulance?",
        answer:
          "Dial our emergency number or the national emergency line. Clearly state your location and the nature of the emergency.",
      },
      {
        question: "Can family members ride in the ambulance?",
        answer:
          "In most cases, one family member can accompany the patient, space permitting and at the discretion of the ambulance crew.",
      },
      {
        question: "What should I do while waiting for an ambulance?",
        answer:
          "Stay on the line with the dispatcher who will provide first aid instructions. Secure pets, unlock doors, and gather patient medications if possible.",
      },
    ],
  },
  {
    id: 13,
    name: "Outpatient Services",
    slug: "outpatient-services",
    image: "/dep/out-patient.jpg",
    description:
      "Comprehensive outpatient care with various medical specialties, diagnostics, and treatments in one convenient location.",
    specialist: "Primary Care Physician",
    services: [
      {
        title: "Primary Care",
        description:
          "Comprehensive general healthcare services for routine check-ups and ongoing health management.",
        icon: Stethoscope,
      },
      {
        title: "Specialized Clinics",
        description:
          "Focused care for specific conditions like diabetes, hypertension, and asthma with expert specialists.",
        icon: UserPlus,
      },
      {
        title: "Minor Procedures",
        description:
          "Same-day minor surgical procedures not requiring hospital admission.",
        icon: Scissors,
      },
      {
        title: "Medication Management",
        description:
          "Prescription services and medication review for optimal treatment outcomes.",
        icon: Tablet,
      },
    ],
    faqs: [
      {
        question: "What are your operating hours?",
        answer:
          "Our outpatient services operate from 8:00 AM to 6:00 PM Monday through Friday, and 9:00 AM to 2:00 PM on Saturdays.",
      },
      {
        question: "Do I need an appointment?",
        answer:
          "Appointments are recommended to minimize waiting time, though we accommodate walk-ins based on availability.",
      },
      {
        question: "What specialists are available?",
        answer:
          "We offer access to various specialists including cardiologists, orthopedists, dermatologists, and others on specific days of the week.",
      },
      {
        question: "How long is a typical appointment?",
        answer:
          "Initial consultations are typically 30 minutes, while follow-up appointments are usually 15-20 minutes depending on the complexity.",
      },
      {
        question: "Can I get my prescriptions filled at the hospital?",
        answer:
          "Yes, our on-site pharmacy can fill most prescriptions immediately after your appointment.",
      },
      {
        question: "What should I bring to my appointment?",
        answer:
          "Please bring your ID, insurance information, current medication list, and any relevant medical records or test results.",
      },
    ],
  },
];

const services = [
  {
    id: 6,
    title: "Emergency Services",
    description:
      "24/7 accident & emergency care, ambulance services, trauma care, and emergency medical response.",
    image: "/doctor-9.jpg",
    gradientFrom: "from-yellow-600/10", // Bottom color
    gradientVia: "via-yellow-800/80", // Middle color
    gradientTo: "to-yellow-900", // Top color
  },
];

// Additional imports for new department icons
