// src/config/footer.ts

export interface SocialLink {
  icon: string;
  href: string;
  name: string;
}

export interface QuickLink {
  label: string;
  href: string;
}

export const footerConfig = {
  companyInfo: {
    name: "ENERWAT Engineering Limited",
    title:
      "ENERWAT | A Sustainable Solution for Water & Energy Engineering in Africa",
    url: "https://www.enerwatengineering.com/",
    ogImage:
      "https://utfs.io/f/HLxTbDBCDLwfYxrlp38lLu9zkwAF6dOo2sqBEVRh37ycjQPD", // Keep existing image or update with Enerwat's logo
    description:
      "ENERWAT Engineering Limited offers high quality expertise in the field of Water supply and Treatment, Irrigation and Energy Services. Call +256 757 312 658 / +256 781 524 493 ",
    missionStatement:
      "We strive to improve people's Quality of life through water and energy services. We are committed to becoming Africa's Leading Water and energy company.",
    contactInfo: {
      email: "enerwat2023@gmail.com",
      phone: "+256 757 312 658 | +256 781 524 493",
      address: "Plot 56/57 Raston House, Luzira",
    },
  },
  socialLinks: [
    {
      icon: "Twitter",
      href: "https://twitter.com/enerwat",
      name: "Twitter",
    },
    {
      icon: "Linkedin",
      href: "https://www.linkedin.com/company/enerwat",
      name: "LinkedIn",
    },
    {
      icon: "Instagram",
      href: "https://www.instagram.com/enerwat",
      name: "Instagram",
    },
  ],
  quickLinks: {
    column1: [
      {
        label: "Engineering Consultancy",
        href: "/services/engineering-consultancy",
      },
      { label: "Water Supply Systems", href: "/services/water-supply-system" },
      { label: "Irrigation Systems", href: "/services/irrigation-systems" },
      { label: "Water Treatment", href: "/services/water-treatment" },
    ],
    column2: [
      { label: "About Us", href: "/about/background-story" },
      { label: "Renewable Energy", href: "/services/renewable-energy-system" },
      { label: "Civil Works", href: "/services/civil-works" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  links: {
    twitter: "https://twitter.com/enerwat",
    instagram: "https://www.instagram.com/enerwat",
    linkedin: "https://www.linkedin.com/company/enerwat",
    phone1: "+256757312658",
    phone2: "+256781524493",
    email: "enerwat2023@gmail.com",
    website: "www.enerwat.com",
    location: "Plot 56/57 Raston House, Luzira",
  },
};
