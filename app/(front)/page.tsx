import AppointmentForm from "@/components/frontend/AppointmentForm";
import DepartmentComponent from "@/components/frontend/departments-component";
import FAQ from "@/components/frontend/FAQ";
import GuideComponent from "@/components/frontend/guide-component";
import HeroSection from "@/components/frontend/hero";
import MedicalServices from "@/components/frontend/medical-services";
import InsuranceProviders from "@/components/Insurance";
import Loading from "../loading";

export default function Home() {
  const faqs = [
    {
      question: "What are your visiting hours?",
      answer:
        "General visiting hours are from 10:00 AM to 8:00 PM daily. For ICU and special care units, visiting hours are restricted to 11:00 AM - 1:00 PM and 4:00 PM - 6:00 PM. We kindly request visitors to respect these hours to ensure patient rest and care delivery.",
    },
    {
      question: "How do I schedule an appointment?",
      answer:
        "You can schedule an appointment through multiple channels: call our reception at +256-XXX-XXX-XXX, use our online booking system on our website, or visit our outpatient department in person. For specialist consultations, we recommend booking at least 2-3 days in advance.",
    },
    {
      question: "What insurance plans do you accept?",
      answer:
        "We accept major insurance providers in Uganda including AAR, Jubilee, UAP, and Prudential. We also work with NHIF. Please contact our billing department or check with your insurance provider about specific coverage details. For uninsured patients, we offer flexible payment plans.",
    },
    {
      question: "What emergency services are available?",
      answer:
        "Our Emergency Department is open 24/7 and equipped to handle all types of medical emergencies. We have dedicated emergency response teams, trauma care facilities, and a fully equipped ambulance service. For emergencies, you can reach us at our emergency hotline: +256-XXX-XXX-XXX.",
    },
    {
      question: "What specialized departments do you have?",
      answer:
        "We offer comprehensive medical services including Internal Medicine, Pediatrics, Obstetrics & Gynecology, Surgery, Orthopedics, Dental Care, and Eye Care. We also have specialized clinics for Diabetes, Hypertension, and Maternal Health.",
    },
    {
      question: "Do you provide maternity services?",
      answer:
        "Yes, we offer complete maternity care including antenatal care, delivery services, and postnatal care. Our maternity ward is staffed 24/7 with experienced midwives and obstetricians. We also offer childbirth education classes and breastfeeding support.",
    },
    {
      question: "What should I bring for hospital admission?",
      answer:
        "Please bring valid identification, insurance card (if applicable), current medications, comfortable clothing, basic toiletries, and any relevant medical records or test results. For planned admissions, our admission desk will provide you with a detailed checklist.",
    },
    {
      question: "Are there accommodation facilities for patients' relatives?",
      answer:
        "We understand the importance of family support during hospital stays. While we don't have on-site accommodation for relatives, we can recommend nearby hotels and guesthouses. For critical care patients, we allow one family member to stay overnight in designated areas.",
    },
    {
      question: "How can I access my medical records?",
      answer:
        "You can request your medical records in person at our Medical Records Department with valid identification. For privacy and security reasons, we require written consent for third-party requests. Records can be collected within 2-3 working days after request.",
    },
    {
      question: "Do you offer laboratory and diagnostic services?",
      answer:
        "Yes, we have a fully equipped laboratory and diagnostic center offering a wide range of tests including blood work, imaging services (X-ray, Ultrasound, CT scan), ECG, and other diagnostic procedures. Most routine tests are available 24/7, with results typically available within 24 hours.",
    },
  ];
  return (
    <main className="">
      <HeroSection />
      <MedicalServices />
      <DepartmentComponent />
      <AppointmentForm />
      <InsuranceProviders />
      <FAQ faqs={faqs} />
      {/* <GuideComponent /> */}
    </main>
  );
}
