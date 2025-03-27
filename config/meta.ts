export const siteConfig = {
  name: "Izunwaonu Hospital",
  shortName: "IH",
  title: "Izunwaonu Hospital| Expert Care, Compassionate Healing",
  url: "https://portfolio.izunwaonu.com.ng/",
  ogImage:
    "http://localhost:3000/logo.png",
  description:
    "Providing exceptional healthcare services with compassion and expertise since 2008. Our commitment to excellence has made us a trusted healthcare provider in the region.",

  // Contact Information
  contact: {
    phone: {
      primary: "+2348138390681",
      emergency: "+2348138390681",
      whatsapp: "+2348138390681",
    },
    email: {
      primary: "admin@izunwaonu.com.ng",
      support: "info@izunwaonu.com.ng",
      appointments: "info@izunwaonu.com.ng",
    },
    address: {
      street: "P.O.Box 401",
      city: "Enugu Ezike",
      country: "Nigeria",
      coordinates: {
        latitude: "6.9907",
        longitude: "7.4730",
      },
    },
  },

  // Social Media Links
  social: {
    facebook: "https://facebook.com/izujustus.jamesonu",
    twitter: "https://twitter.com/izunwaonu",
    instagram: "https://instagram.com/kasesehospital",
    linkedin: "#",
    youtube: "https://youtube.com/",
  },

  // Working Hours
  workingHours: {
    status: "24/7 All Week Days",
    emergency: "24/7 Emergency Services",
    outpatient: "Monday - Saturday: 8:00 AM - 5:00 PM",
    pharmacy: "24/7 Pharmacy Services",
    laboratory: "24/7 Laboratory Services",
  },

  // Company Meta Information
  meta: {
    foundedYear: 1992,
    license: "Licensed by American Medical and Dental Practitioners Council",
    accreditation: "Internationally Accredited Healthcare Facility",
    values: [
      {
        title: "Medical Excellence",
        description: "Dedicated to delivering the highest quality healthcare services.",
      },
      {
        title: "Compassionate Healing",
        description: "Providing care with empathy, kindness, and respect for every patient.",
      },
      {
        title: "Innovative Healthcare",
        description: "Integrating modern medical advancements to enhance patient outcomes.",
      },
    ],
  },

  // Service Categories
  services: {
    emergency: [
      "24/7 Emergency Care",
      "Ambulance Services",
      "Trauma Care",
      "Critical Care",
    ],
    specialties: [
      "Obstetrics & Gynecology",
      "Surgery Department",
      "Medical Department",
      "Laboratory Department",
      "Imaging Department",
      "Pediatrics Department",
      "Outpatient Department",
    ],
    supportServices: [
      "Pharmacy",
      "Laboratory",
      "Radiology",
      "Physical Therapy",
      "Nutritional Counseling",
    ],
  },

  // SEO and Metadata
  seo: {
    title: "Izunwaonu Hospital - Excellence in Healthcare",
    description:
      "Leading healthcare provider in Nigeria offering comprehensive medical services, emergency care, and specialized treatments.",
    keywords: [
      "hospital",
      "healthcare",
      "medical services",
      "emergency care",
      "USA",
      "Nigeria",
      "doctors",
      "specialists",
    ],
    ogImage: "http://localhost:3000/logo.png",
  },

  // Legal Information
  legal: {
    name: "Izunwaonu Hospital",
    registration: "izunwaonu567",
    privacyPolicy: "/privacy-policy",
    terms: "/terms-and-conditions",
    accessibility: "/accessibility",
  },

  // Appointment Types
  appointmentTypes: [
    {
      id: "general",
      name: "General Consultation",
      duration: "30 minutes",
    },
    {
      id: "specialist",
      name: "Specialist Consultation",
      duration: "45 minutes",
    },
    {
      id: "followup",
      name: "Follow-up Visit",
      duration: "20 minutes",
    },
  ],

  // Insurance and Payment
  insurance: {
    accepted: [
      "National Health Insurance",
      "Private Insurance Companies",
      "Corporate Medical Schemes",
    ],
    paymentMethods: ["Cash", "Credit Card", "Mobile Money", "Insurance"],
  },
};

// Helper function to get formatted contact info
export const getContactInfo = () => {
  const { contact } = siteConfig;
  return {
    mainPhone: contact.phone.primary,
    emergency: contact.phone.emergency,
    email: contact.email.primary,
    fullAddress: `${contact.address.street}, ${contact.address.city}, ${contact.address.country}`,
  };
};

// Helper function to get social media links
export const getSocialLinks = () => {
  return siteConfig.social;
};

// Helper function to get working hours
export const getWorkingHours = () => {
  return siteConfig.workingHours;
};

// Helper function to get SEO metadata
export const getSEOData = (pageName?: string) => {
  return {
    title: pageName ? `${pageName} - ${siteConfig.name}` : siteConfig.seo.title,
    description: siteConfig.seo.description,
    keywords: siteConfig.seo.keywords.join(", "),
    ogImage: siteConfig.seo.ogImage,
  };
};
