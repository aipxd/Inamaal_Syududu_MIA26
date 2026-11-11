import React from "react";
import { Icon } from "@iconify/react";

export interface GlossaryItem {
  id: string;
  title: string;
  badge: string;
  badgeColor: {
    bg: string;
    text: string;
    border: string;
  };
  icon: string;
  iconBg: string;
  iconColor: string;
  description: string;
  noteLabel: string;
  noteText: string;
  noteIcon: string;
  noteBg: string;
  noteBorder: string;
  noteTextColor: string;
}

export const GLOSSARY_ITEMS: GlossaryItem[] = [
  {
    id: "rata-rata-nasional",
    title: "Harga Rata-rata Nasional",
    badge: "Indeks Pokok",
    badgeColor: {
      bg: "bg-slate-100",
      text: "text-slate-600",
      border: "border-slate-200"
    },
    icon: "lucide:globe",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    description:
      "Nilai rata-rata tertimbang harga komoditas pangan dari seluruh pasar pantauan di 38 provinsi Indonesia yang diperbarui setiap hari oleh petugas lapangan (catatan: CekPangan hanya menampilkan data berdasarkan laporan terdahulu, bukan terbaru).",
    noteLabel: "Fungsinya:",
    noteText:
      "Menjadi patokan umum konsumen untuk melihat apakah harga di pasar daerah setempat wajar atau di atas rata-rata.",
    noteIcon: "lucide:lightbulb",
    noteBg: "bg-emerald-50/60",
    noteBorder: "border-emerald-100",
    noteTextColor: "text-emerald-950"
  },
  {
    id: "disparitas-wilayah",
    title: "Disparitas Antar-Wilayah",
    badge: "Selisih Biaya",
    badgeColor: {
      bg: "bg-amber-100",
      text: "text-amber-800",
      border: "border-amber-200"
    },
    icon: "lucide:network",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
    description:
      "Selisih atau perbedaan harga satu jenis pangan antara daerah sentra produksi (seperti Jawa/Sulawesi) dengan daerah konsumen atau pulau terluar (seperti Papua/Maluku).",
    noteLabel: "Penyebab Utama:",
    noteText:
      "Ongkos logistik tol laut, jalur distribusi darat, serta ketersediaan pasokan pasca panen di wilayah tersebut.",
    noteIcon: "lucide:truck",
    noteBg: "bg-amber-50/70",
    noteBorder: "border-amber-200/80",
    noteTextColor: "text-amber-950"
  },
  {
    id: "pola-musiman",
    title: "Pola Musiman & Panen Raya",
    badge: "Siklus Tahunan",
    badgeColor: {
      bg: "bg-emerald-100",
      text: "text-emerald-800",
      border: "border-emerald-200"
    },
    icon: "lucide:calendar",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    description:
      "Kecenderungan harga berulang dalam siklus 12 bulan. Harga biasanya turun signifikan saat panen raya (stok melimpah) dan melonjak saat musim paceklik atau momen hari raya besar.",
    noteLabel: "Tips Belanja:",
    noteText:
      "Konsumen dan pelaku UMKM dapat menimbun stok bahan kering tahan lama pada periode bulan termurah.",
    noteIcon: "lucide:clock",
    noteBg: "bg-slate-50",
    noteBorder: "border-slate-200/80",
    noteTextColor: "text-slate-800"
  },
  {
    id: "harga-hap",
    title: "Harga Acuan Pembelian (HAP)",
    badge: "Regulasi",
    badgeColor: {
      bg: "bg-blue-100",
      text: "text-blue-800",
      border: "border-blue-200"
    },
    icon: "lucide:scale",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    description:
      "Batas-batas acuan harga yang ditetapkan resmi oleh Badan Pangan Nasional (Bapanas) di tingkat produsen (petani/peternak) dan tingkat konsumen agar harga tetap adil dan wajar bagi kedua belah pihak.",
    noteLabel: "Pemerintah:",
    noteText:
      "Jika harga melebihi batas toleransi HAP, Bapanas bersama Bulog akan meluncurkan Operasi Pasar Murah (SPHP).",
    noteIcon: "lucide:shield",
    noteBg: "bg-blue-50/60",
    noteBorder: "border-blue-100",
    noteTextColor: "text-blue-950"
  }
];

interface GuideGlossaryCardProps {
  item: GlossaryItem;
}

export const GuideGlossaryCard: React.FC<GuideGlossaryCardProps> = ({ item }) => {
  return (
    <article className="bg-white rounded-2xl p-4 md:p-5 shadow-sm border border-gray-100/90 transition-all duration-200 hover:shadow-md">
      {/* Header baris: Icon, Judul & Badge */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-3">
          <div
            className={`w-10 h-10 rounded-xl ${item.iconBg} ${item.iconColor} flex items-center justify-center shrink-0 border border-black/5`}
          >
            <Icon icon={item.icon} className="text-xl" />
          </div>
          <h3 className="text-sm md:text-base font-bold text-gray-800 leading-snug">
            {item.title}
          </h3>
        </div>

        <span
          className={`text-tiny md:text-xs font-semibold px-2.5 py-1 rounded-full whitespace-nowrap border ${item.badgeColor.bg} ${item.badgeColor.text} ${item.badgeColor.border}`}
        >
          {item.badge}
        </span>
      </div>

      {/* Deskripsi */}
      <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-3">
        {item.description}
      </p>

      {/* Kotak Catatan / Insight Box */}
      <div
        className={`rounded-xl p-3 border flex items-start gap-2.5 ${item.noteBg} ${item.noteBorder} ${item.noteTextColor}`}
      >
        <Icon icon={item.noteIcon} className="text-sm md:text-base shrink-0 mt-0.5 opacity-80" />
        <p className="text-[11px] md:text-xs leading-relaxed">
          <strong className="font-bold mr-1">{item.noteLabel}</strong>
          {item.noteText}
        </p>
      </div>
    </article>
  );
};
