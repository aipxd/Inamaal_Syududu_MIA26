import React from 'react';

export const Liquid: React.FC = () => {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-[#158d4d] p-6 text-white shadow-xl min-h-[160px] flex flex-col justify-between">
      
      {/* ========================================================= */}
      {/* BACKGROUND FLUID / MESH WAVE PATTERN (HIJAU THEME SVG)     */}
      {/* ========================================================= */}
      <svg
        className="absolute inset-0 h-full w-full object-cover pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 200"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Gradasi Wave 1 - Hijau Utama (#41B673) ke Hijau Terang (#68CC4F) */}
          <linearGradient id="fluid-green-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#41B673" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#68CC4F" stopOpacity="0.85" />
            <stop offset="90%" stopColor="#10B981" stopOpacity="0.6" />
          </linearGradient>

          {/* Gradasi Wave 2 - Accent Lime / Hijau Terang ke Emerald */}
          <linearGradient id="fluid-green-2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#68CC4F" stopOpacity="0.8" />
            <stop offset="60%" stopColor="#41B673" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#059669" stopOpacity="0.4" />
          </linearGradient>

          {/* Gradasi Wave 3 - Pendaran Cahaya Hijau Bawah */}
          <linearGradient id="fluid-green-3" x1="30%" y1="0%" x2="70%" y2="100%">
            <stop offset="0%" stopColor="#86EFAC" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#064E3B" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Layer Gelombang 1 - Fluid Base Curve */}
        <path
          d="M 0,0 
             L 500,0 
             L 500,120 
             Q 380,200 240,130 
             T 0,180 Z"
          fill="url(#fluid-green-1)"
        />

        {/* Layer Gelombang 2 - Fluid Organic Mesh Intersect */}
        <path
          d="M 120,0 
             C 260,80 320,10 500,110 
             L 500,0 Z"
          fill="url(#fluid-green-2)"
        />

        {/* Layer Gelombang 3 - Fluid Swirl Bottom */}
        <path
          d="M 0,60 
             C 140,160 280,40 500,170 
             L 500,200 
             L 0,200 Z"
          fill="url(#fluid-green-3)"
        />
      </svg>

      {/* Glow highlight di sudut kiri atas */}
      <div 
        className="absolute -top-12 -left-12 w-40 h-40 rounded-full blur-3xl pointer-events-none opacity-40"
        style={{ backgroundColor: '#68CC4F' }}
      />

      {/* ========================================================= */}
      {/* KONTEN UTAMA (Z-INDEX DI ATAS WAVE)                        */}
      {/* ========================================================= */}
      <div className="relative z-10 space-y-1">
        <p className="text-xs font-bold tracking-wider text-emerald-100/90 uppercase">
          CEKPANGAN CASH
        </p>
        <h3 className="text-3xl font-black text-white tracking-tight drop-shadow-sm">
          Rp 10.000.000
        </h3>
      </div>

    </div>
  );
};