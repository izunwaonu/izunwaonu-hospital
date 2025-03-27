import React from "react";
import { Linkedin, Twitter, MessageCircle } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";
import { FaCalendarAlt } from "react-icons/fa";
const FloatingSocials = () => {
  const socialLinks = [
    {
      name: "WhatsApp",
      icon: BsWhatsapp,
      href: "https://wa.me/2348138390681",
      color: "bg-green-500 hover:bg-green-600",
      glowColor: "shadow-green-500/50",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "#",
      color: "bg-blue-500 hover:bg-blue-600",
      glowColor: "shadow-blue-500/50",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "#",
      color: "bg-blue-700 hover:bg-blue-800",
      glowColor: "shadow-blue-700/50",
    },
    {
      name: "Book Appointment",
      icon: FaCalendarAlt,
      href: "/book-appointment",
      color: "bg-violet-500 hover:bg-violet-600",
      glowColor: "shadow-violet-500/50",
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {socialLinks.map((social, index) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`
            relative group flex items-center justify-center w-12 h-12 rounded-full
            ${social.color}
            shadow-lg ${social.glowColor}
            transition-all duration-300 ease-in-out
            hover:shadow-xl hover:scale-110
            hover:-translate-y-1
          `}
          aria-label={social.name}
        >
          {/* Pulse Effect */}
          <span
            className={`
            absolute inset-0 rounded-full
            animate-ping 
            ${social.color}
            opacity-20
          `}
          ></span>

          {/* Glow Effect on Hover */}
          <span
            className={`
            absolute inset-0 rounded-full
            opacity-0 group-hover:opacity-50
            blur-md transition-opacity duration-300
            ${social.color}
          `}
          ></span>

          <social.icon className="w-5 h-5 text-white relative z-10" />

          {/* Tooltip */}
          <span
            className="
            absolute right-full mr-3 px-2 py-1 min-w-max
            bg-gray-900 text-white text-sm rounded-md
            opacity-0 group-hover:opacity-100
            -translate-x-2 group-hover:translate-x-0
            pointer-events-none
            transition-all duration-300
          "
          >
            {social.name}
          </span>
        </a>
      ))}
    </div>
  );
};

export default FloatingSocials;
