import React from "react";
import pangiImg from "../../assets/pangi.webp";

export const GuideBanner: React.FC = () => {
  return (
    <div className="backdrop-blur-sm rounded-2xl p-4 md:p-5 shadow-sm border-2 border-emerald-500 flex items-start justify-between gap-3 transition-all hover:shadow-md">
      <div className="flex justify-start items-start w-full">
        {/* Maskot Pangi */}
        <div className="flex flex-col items-center justify-center">
          <div className="w-15 h-15 lg:w-20 lg:h-20 rounded-2xl flex items-center justify-center">
            <img
              src={pangiImg}
              alt="Maskot Pangi"
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-[11px] font-bold text-emerald-700 mt-1">Pangi</span>
        </div>
        
        <div className="w-full ml-2 lg:ml-7">
          {/* Headline */}
          <h2 className="text-sm md:text-lg font-bold text-gray-800 leading-tight mb-1.5">
            Hai, kenalan yuk sama data harga pangan kita!
          </h2>
          <p className="text-tiny md:text-sm text-gray-600 leading-relaxed mt-2">
            Pangi bantu jelaskan istilah-istilah pasar, cara perhitungan angkanya, hingga transparansi sumber resmi pemerintah yang disajikan berdasarkan data harian Bapanas serta hasil analisis dan hitungan tim CekPangan.
          </p>
        </div>
      </div>
    </div>
  );
};
