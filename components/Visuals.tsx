
import React from 'react';

export const SplashScreen: React.FC<{ isFading: boolean }> = ({ isFading }) => {
  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-white transition-opacity duration-700 ease-in-out ${isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
    >
      <div className="relative w-32 md:w-48 aspect-square flex items-center justify-center">
        <div className="absolute inset-0 bg-[#eb5e9d] rounded-full opacity-20 animate-ping"></div>
        <div className="relative z-10 w-24 h-24 md:w-32 md:h-32 bg-pink-50 rounded-3xl flex items-center justify-center shadow-lg transform rotate-3 transition-transform animate-draw">
          <span className="text-4xl md:text-5xl font-black text-[#eb5e9d] tracking-tighter">B.</span>
        </div>
      </div>
    </div>
  );
};

export const BackgroundEffects: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-white">
      <div className="absolute inset-0 z-0">
        {/* Orb 1: Primary Pink - Top Left moving */}
        <div
          className="absolute top-[-10%] left-[-10%] w-[80vw] h-[80vw] bg-[#ffc0d9] rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-blob"
          style={{ animationDelay: '0s' }}
        ></div>

        {/* Orb 2: Soft Pink - Top Right moving */}
        <div
          className="absolute top-[-10%] right-[-10%] w-[80vw] h-[80vw] bg-[#ffe4f0] rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-blob"
          style={{ animationDelay: '2s' }}
        ></div>

        {/* Orb 3: Brand Pink - Bottom Left moving */}
        <div
          className="absolute bottom-[-20%] left-[20%] w-[70vw] h-[70vw] bg-[#eb5e9d] rounded-full mix-blend-multiply filter blur-[120px] opacity-20 animate-blob"
          style={{ animationDelay: '4s' }}
        ></div>

        {/* Orb 4: Soft White/Pink - Moving Center */}
        <div
          className="absolute top-[20%] left-[20%] w-[60vw] h-[60vw] bg-[#ffe4f0] rounded-full mix-blend-multiply filter blur-[80px] opacity-60 animate-blob"
          style={{ animationDelay: '6s' }}
        ></div>
      </div>

      {/* Noise Texture for Premium Feel */}
      <div className="absolute inset-0 opacity-[0.03] z-10" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")` }}></div>
    </div>
  );
};

export const GlassCard: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <div className={`glass-light rounded-[2.5rem] ${className}`}>
    {children}
  </div>
);
