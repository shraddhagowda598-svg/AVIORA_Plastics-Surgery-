import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  lightText?: boolean;
}

export const AvioraLogo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
  lightText = false,
}) => {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
    xl: 'text-4xl',
  };

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* AVIORA Gold Emblem Vector SVG */}
      <div className={`${iconSizes[size]} relative flex items-center justify-center shrink-0`}>
        <svg
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_2px_8px_rgba(200,161,101,0.25)]"
        >
          <defs>
            <linearGradient id="avioraGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D9B77B" />
              <stop offset="50%" stopColor="#C8A165" />
              <stop offset="100%" stopColor="#A88045" />
            </linearGradient>
            <linearGradient id="avioraGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF2D6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#C8A165" stopOpacity="0.2" />
            </linearGradient>
          </defs>

          {/* Outer Gold Circular Ring */}
          <circle
            cx="100"
            cy="100"
            r="92"
            stroke="url(#avioraGoldGrad)"
            strokeWidth="7"
            className="transition-all duration-500"
          />

          {/* Top Petal / Floral Flourish */}
          <path
            d="M 100,18 C 112,32 125,48 100,68 C 75,48 88,32 100,18 Z"
            fill="url(#avioraGoldGrad)"
          />

          {/* Left Branch & Leaves */}
          <path
            d="M 52,50 C 70,42 82,56 82,70 C 66,70 54,60 52,50 Z"
            fill="url(#avioraGoldGrad)"
          />
          <path
            d="M 32,88 C 48,82 58,92 56,108 C 42,106 34,96 32,88 Z"
            fill="url(#avioraGoldGrad)"
          />

          {/* Right Branch & Leaves */}
          <path
            d="M 148,50 C 130,42 118,56 118,70 C 134,70 146,60 148,50 Z"
            fill="url(#avioraGoldGrad)"
          />
          <path
            d="M 168,88 C 152,82 142,92 144,108 C 158,106 166,96 168,88 Z"
            fill="url(#avioraGoldGrad)"
          />

          {/* Stylized 'A' Monogram Structure */}
          <path
            d="M 100,38 L 148,168 H 128 L 100,82 L 72,168 H 52 L 100,38 Z"
            fill="url(#avioraGoldGrad)"
          />

          {/* Elegantly Curved Intertwining Ribbon / A-Crossbar */}
          <path
            d="M 60,126 C 90,92 110,138 140,110 C 146,104 150,96 150,96 C 150,96 132,128 100,128 C 76,128 62,118 60,126 Z"
            fill="url(#avioraGoldGrad)"
          />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col leading-none">
          <span
            className={`font-serif tracking-[0.2em] font-semibold ${textSizes[size]} ${
              lightText ? 'text-white' : 'text-[#1E1E1E]'
            }`}
          >
            AVIORA
          </span>
          <span className="text-[10px] uppercase tracking-[0.35em] text-[#C8A165] font-medium mt-1">
            Aesthetic Clinic
          </span>
        </div>
      )}
    </div>
  );
};
