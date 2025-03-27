import React from "react";
import {
  Phone,
  MessageCircle,
  Mail,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import { getContactInfo } from "@/config/meta";

const TopNav = () => {
  const { email, fullAddress, mainPhone } = getContactInfo();
  return (
    <div className="hidden md:block bg-emerald-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2 text-sm">
          {/* Left side - Contact Information */}
          <div className="flex items-center gap-6">
            <a
              href="tel:+256707234444"
              className="flex items-center gap-2 hover:text-emerald-200 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>{mainPhone}</span>
            </a>

            <a
              href="https://wa.me/2348138390681"
              className="flex items-center gap-2 hover:text-emerald-200 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp: +2348138390681</span>
            </a>

            <a
              href={`mailto:${email}`}
              className="flex items-center gap-2 hover:text-emerald-200 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>{email}</span>
            </a>

            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>24/7 All Week Days</span>
            </div>
          </div>

          {/* Right side - Social Media Icons */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="hover:text-emerald-200 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="hover:text-emerald-200 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="hover:text-emerald-200 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="hover:text-emerald-200 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
