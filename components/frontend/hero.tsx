import React from "react";
import { MoveUpRight } from "lucide-react";
import BlendedHeroImage from "./Blended";
import ThemeButton from "./theme-button";
import Link from "next/link";

interface FloatingLabelProps {
  text: string;
  className: string;
}

const FloatingLabel = ({ text, className }: FloatingLabelProps) => (
  <div
    className={`absolute bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg text-sm font-medium text-emerald-800 border border-emerald-100/50 ${className}`}
  >
    {text}
  </div>
);

const HeroSection = () => {
  return (
    <div className="relative min-h-[600px] w-full bg-gradient-to-br from-emerald-50 via-white to-emerald-50 overflow-hidden">
      {/* Wave Background Pattern */}
      <div className="absolute inset-0 z-0">
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 800"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M 0 50 Q 300 150 600 50 Q 900 -50 1200 50 L 1200 800 L 0 800 Z"
            fill="rgba(167, 243, 208, 0.2)" // Emerald-200 with opacity
          />
          <path
            d="M 0 100 Q 300 200 600 100 Q 900 0 1200 100 L 1200 800 L 0 800 Z"
            fill="rgba(110, 231, 183, 0.1)" // Emerald-300 with opacity
          />
          <path
            d="M 0 150 Q 300 250 600 150 Q 900 50 1200 150 L 1200 800 L 0 800 Z"
            fill="rgba(52, 211, 153, 0.05)" // Emerald-400 with opacity
          />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px] py-8 md:py-16">
          {/* Left Column - Text Content */}
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl  font-bold text-gray-900 mb-6 bold-heading text-balance">
              Empowering Health with{" "}
              <span className="text-emerald-700"> Specialized Care</span>
            </h1>

            <p className="text-sm md:text-xl text-gray-600 mb-8">
              Access expert medical specialists, comprehensive healthcare
              services, and compassionate treatment—all at Kasese Hospital, your
              trusted healthcare partner.
            </p>

            {/* CTA Buttons */}
            <div className="flex gap-4 mb-12 items-center">
              <Link
                href={"/services"}
                className="px-4 text-sm md:text-base md:px-6 py-3  bg-white text-gray-800 rounded-full border border-emerald-100 hover:border-emerald-200 hover:shadow-md transition-all group"
              >
                <span className="bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text group-hover:text-transparent transition-all">
                  Our Services
                </span>
              </Link>

              <ThemeButton href="/book-appointment" title="Book Appointment" />
            </div>

            {/* Trust Indicator */}
            {/* <div className="md:flex items-center gap-4 hidden">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((index) => (
                  <div
                    key={index}
                    className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-emerald-100 to-white overflow-hidden shadow-sm"
                  >
                    <img
                      src={`/images/user-1.jpg`}
                      alt={`Patient ${index}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <p className="text-gray-700 font-semibold">
                <span className="text-emerald-600">50K+</span> Patients Trust Us
              </p>
            </div> */}
          </div>
          <div className="relative lg:h-[500px] rounded-2xl overflow-hidden shadow-xl shadow-emerald-100">
            <img
              src="/images/hero.png"
              alt="Doctor with patient"
              className="w-full h-full object-cover rounded-full"
            />

            <FloatingLabel
              text="Better Health"
              className="top-8 left-8 hover:shadow-lg hover:shadow-emerald-100/50 transition-all"
            />
            <FloatingLabel
              text="Quality Care"
              className="top-8 right-8 hover:shadow-lg hover:shadow-emerald-100/50 transition-all"
            />
            <FloatingLabel
              text="Your Health, Our Priority"
              className="bottom-8 left-1/2 -translate-x-1/2 hover:shadow-lg hover:shadow-emerald-100/50 transition-all"
            />

            {[1, 2, 3].map((index) => (
              <div
                key={index}
                className="absolute w-3 h-3 bg-emerald-50 border border-emerald-200 rounded-full shadow-lg"
                style={{
                  top: `${20 + index * 25}%`,
                  left: `${10 + index * 40}%`,
                }}
              />
            ))}
          </div>
          {/* <div className="relative lg:h-[500px]">
            <BlendedHeroImage
              src="/images/hero.png"
              alt="Healthcare professionals"
              className="w-full h-full"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
