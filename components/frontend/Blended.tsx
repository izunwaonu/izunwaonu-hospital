import React from "react";

interface FloatingLabelProps {
  text: string;
  className?: string;
}

const FloatingLabel = ({ text, className = "" }: FloatingLabelProps) => (
  <div
    className={`absolute px-6 py-2 bg-white rounded-full shadow-xl text-emerald-700 font-medium 
    backdrop-blur-sm border border-emerald-50/20 ${className}`}
  >
    {text}
  </div>
);

interface BlendedHeroImageProps {
  src: string;
  alt: string;
  className?: string;
}

const BlendedHeroImage: React.FC<BlendedHeroImageProps> = ({
  src,
  alt,
  className = "",
}) => {
  return (
    <div className={`relative w-full  ${className}`}>
      {/* <div className=" absolute inset-0 bg-gradient-to-br from-[#D5F9EA] via-white/40 to-[#D5F9EA] rounded-3xl" /> */}

      <div className="absolute inset-0 ">
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#D5F9EA] to-transparent z-10 rounded-full" />

        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#D5F9EA] to-transparent z-10" />

        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#D5F9EA] to-transparent z-10" />

        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#D5F9EA] to-transparent z-10" />

        {/* Main image with base blend */}
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover rounded-full"
          style={{
            maskImage:
              "radial-gradient(circle at center, black 60%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(circle at center, black 60%, transparent 100%)",
          }}
        />
      </div>

      <FloatingLabel
        text="Better Health"
        className="top-6 left-6 animate-fade-in"
      />
      <FloatingLabel
        text="Better Care"
        className="top-6 right-6 animate-fade-in"
      />
      <FloatingLabel
        text="Your Health, Our Priority"
        className="bottom-6 left-1/2 -translate-x-1/2 animate-fade-in"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-200/5 to-emerald-50/5 mix-blend-overlay rounded-3xl" />

      {[1, 2, 3].map((index) => (
        <div
          key={index}
          className="absolute w-2 h-2 bg-white rounded-full shadow-lg"
          style={{
            top: `${20 + index * 20}%`,
            left: `${15 + index * 30}%`,
          }}
        />
      ))}
    </div>
  );
};

// Usage example with required CSS
const style = `
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fade-in {
    animation: fadeIn 0.6s ease-out forwards;
  }
`;

export default BlendedHeroImage;
