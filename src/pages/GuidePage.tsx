import React from "react";
import Header from "../components/layout/Header";
import { GuideBanner } from "../components/guidePage/GuideBanner";
import { GuideGlossaryCard, GLOSSARY_ITEMS } from "../components/guidePage/GuideGlossaryCard";
import { GuideDataSource } from "../components/guidePage/GuideDataSource";
import { Icon } from "@iconify/react";

export const GuidePage: React.FC = () => {
  return (
    <section className="min-h-screen">
      <Header />
      <div className="w-full lg:p-7 lg:px-20 py-5 pb-30 px-5 lg:pb-20 space-y-5 lg:max-w-2xl bg-brand-bg min-w-full">
        <GuideBanner />

        {/* Section: Kamus Istilah Pangan */}
        <div className="space-y-3.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon icon="lucide:book-open" className="text-emerald-800 text-lg md:text-xl" />
              <h2 className="text-xs md:text-sm font-extrabold text-emerald-950 uppercase tracking-wider">
                Kamus Istilah Pangan
              </h2>
            </div>
            <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100/90 px-2.5 py-0.5 rounded-full border border-emerald-200/80">
              4 Istilah Utama
            </span>
          </div>

          {/* List 4 Kartu Istilah */}
          <div className="space-y-3">
            {GLOSSARY_ITEMS.map((item) => (
              <GuideGlossaryCard key={item.id} item={item} />
            ))}
          </div>
        </div>
        {/* Section: Transparansi Sumber Data Resmi */}
        <GuideDataSource />
      </div>
    </section>
  );
};
