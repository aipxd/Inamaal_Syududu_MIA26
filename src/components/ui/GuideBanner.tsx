import React from "react";
import { Icon } from "@iconify/react";

export const GuideBanner: React.FC = () => {
  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 md:p-5 shadow-sm border border-emerald-100 flex items-center justify-between gap-3 transition-all hover:shadow-md">
      <div className="flex-1">
        {/* Badge Asisten Panduan */}
        <div className="inline-flex items-center gap-1.5 bg-emerald-100/80 text-emerald-800 text-[11px] font-semibold px-2.5 py-1 rounded-full mb-2">
          <Icon icon="solar:user-hand-up-bold" className="text-sm text-emerald-600" />
          <span>Asisten Panduan</span>
        </div>

        {/* Headline */}
        <h2 className="text-base md:text-lg font-bold text-gray-800 leading-tight mb-1.5">
          Hai, kenalan yuk sama data harga pangan kita!
        </h2>

        {/* Subtitle */}
        <p className="text-xs md:text-sm text-gray-600 leading-relaxed max-w-md">
          Pangi bantu jelaskan istilah pasar, bagaimana angka dihitung, dan transparansi sumber resmi pemerintah.
        </p>
      </div>

      {/* Maskot Pangi */}
      <div className="flex flex-col items-center justify-center shrink-0">
        <div className="w-18 h-18 md:w-20 md:h-20 bg-emerald-50 rounded-2xl border border-emerald-200/60 p-1.5 flex items-center justify-center shadow-inner">
          <img
            src="src/assets/pangi.webp"
            alt="Maskot Pangi"
            className="w-full h-full object-contain drop-shadow"
          />
        </div>
        <span className="text-[11px] font-bold text-emerald-700 mt-1">Pangi</span>
      </div>
    </div>
  );
};
