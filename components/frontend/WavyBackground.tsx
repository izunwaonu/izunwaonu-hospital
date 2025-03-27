// components/WavyBackground/WavyBackground.tsx
import React from "react";

interface WavyBackgroundProps {
  children: React.ReactNode;
  className?: string;
  waveColor?: string;
  baseColor?: string;
  animate?: boolean;
}

const WavyBackground: React.FC<WavyBackgroundProps> = ({
  children,
  className = "",
  waveColor = "rgba(167, 243, 208, 0.2)", // Default emerald-200 with opacity
  baseColor = "rgb(240, 253, 244)", // Default green-50
  animate = true,
}) => {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ backgroundColor: baseColor }}
    >
      {/* Wave Background Pattern */}
      <div className="absolute inset-0 z-0">
        <svg
          className={`w-full h-full ${animate ? "animate-wave" : ""}`}
          viewBox="0 0 1200 800"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={
            {
              "--wave-color": waveColor,
            } as React.CSSProperties
          }
        >
          <path
            d="M 0 50 Q 300 150 600 50 Q 900 -50 1200 50 L 1200 800 L 0 800 Z"
            fill={waveColor}
            className="wave wave-1"
          />
          <path
            d="M 0 100 Q 300 200 600 100 Q 900 0 1200 100 L 1200 800 L 0 800 Z"
            fill={waveColor}
            style={{ opacity: 0.7 }}
            className="wave wave-2"
          />
          <path
            d="M 0 150 Q 300 250 600 150 Q 900 50 1200 150 L 1200 800 L 0 800 Z"
            fill={waveColor}
            style={{ opacity: 0.5 }}
            className="wave wave-3"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10">{children}</div>

      <style jsx global>{`
        @keyframes wave {
          0% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(-2%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-wave {
          animation: wave 15s ease-in-out infinite;
        }

        .wave-2 {
          animation-delay: -2s;
        }

        .wave-3 {
          animation-delay: -4s;
        }
      `}</style>
    </div>
  );
};

export default WavyBackground;
