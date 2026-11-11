import React from "react";
import { Icon } from "@iconify/react";

export const GuideDataSource: React.FC = () => {
  return (
    <div className="space-y-4">
      {/* Header Bagian Transparansi */}
      <div className="flex items-center gap-2">
        <Icon icon="lucide:landmark" className="text-emerald-700 text-lg md:text-xl" />
        <h2 className="text-xs md:text-sm font-extrabold text-emerald-950 uppercase tracking-wider">
          Transparansi Sumber Data Resmi
        </h2>
      </div>

      {/* Kartu Bapanas */}
      <div className="bg-white rounded-2xl p-4 md:p-5 shadow-sm border border-gray-100 flex items-start gap-3.5 transition-all hover:shadow-md">
        <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center shrink-0">
          <Icon icon="lucide:shield-check" className="text-xl" />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between gap-2 mb-1">
            <h3 className="text-sm md:text-base font-bold text-gray-800">
              Badan Pangan Nasional (Bapanas)
            </h3>
            <span className="text-xs min-w-20 font-semibold px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200">
              2021-2026
            </span>
          </div>
          <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
            Menyediakan data panel harga tingkat eceran dan grosir harian dari pasar rakyat utama di 514 kabupaten/kota seluruh Indonesia.
          </p>
        </div>
      </div>

      {/* Kartu Data.go.id */}
      <div className="bg-white rounded-2xl p-4 md:p-5 shadow-sm border border-gray-100 flex items-start gap-3.5 transition-all hover:shadow-md">
        <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center shrink-0">
          <Icon icon="lucide:database" className="text-xl" />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between gap-2 mb-1">
            <h3 className="text-sm md:text-base font-bold text-gray-800">
              Data.go.id
            </h3>
            <span className="text-[10px] md:text-xs font-semibold px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 border border-blue-200">
              Penyalur Data Bapanas
            </span>
          </div>
          <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
            Menyalurkan laporan tahunan data resmi Bapanas agar transparan dan mudah diakses oleh masyarakat dalam berbagai format.
          </p>
        </div>
      </div>

      {/* Tombol Kuning CTA Eksternal */}
      <div className="pt-2">
        <a
          href="https://panelharga.badanpangan.go.id/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-[#FAD24A] hover:bg-[#F6C928] text-gray-900 font-bold text-sm md:text-base py-3 px-4 rounded-full shadow-md flex items-center justify-center gap-2 transition-all duration-200 hover:scale-[1.01] active:scale-[0.99]"
        >
          <span>Cek Harga Hari Ini (Bapanas Resmi)</span>
          <Icon icon="lucide:external-link" className="text-lg" />
        </a>
        <p className="text-center text-[11px] md:text-xs text-white/80 mt-2 font-medium">
          Membuka portal resmi Panel Harga Pangan Nasional Republik Indonesia
        </p>
      </div>

      {/* Disclaimer Platform Edukasi */}
      <div className="bg-white/80 backdrop-blur-xs rounded-2xl p-4 border border-emerald-100/60 shadow-xs flex items-start gap-3">
        <Icon icon="lucide:shield-check" className="text-emerald-700 text-lg shrink-0 mt-0.5" />
        <div className="text-xs text-gray-700 leading-relaxed">
          <p className="font-bold text-emerald-950 mb-1">
            CekPangan beroperasi sebagai platform publik terbuka
          </p>
          <p className="text-[11px] text-gray-600 leading-normal">
            Catatan Data: Informasi yang disajikan menggunakan data dari Badan Pangan Nasional (Bapanas) yang telah melalui proses penyesuaian dan perhitungan statistik oleh tim CekPangan. Data ini bersifat indikatif hasil olahan internal dan bukan merupakan publikasi statistik resmi Bapanas.
          </p>
        </div>
      </div>
    </div>
  );
};
