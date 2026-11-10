import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import { InfoSumber } from "../components/ui/InfoSumber";

interface DataPoint {
  year: string;
  price: number;
  highlight?: boolean;
  note?: string;
  isPeak?: boolean;
}

export const LandingPage: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [trendData, setTrendData] = useState<DataPoint[]>([]);
  const [currentEggPrice, setCurrentEggPrice] = useState<string>("Rp42.000/kg");

  useEffect(() => {
    // Memuat data resmi agregasi/nasional dari public/data
    const loadEggTrendData = async () => {
      try {
        const [metaRes, natRes] = await Promise.all([
          fetch("/data/meta.json"),
          fetch("/data/national.json")
        ]);
        const meta = await metaRes.json();
        const national = await natRes.json();

        const eggPrices: number[] = national["telur"] || [];
        const yearlyMap: Record<string, number[]> = {};

        meta.months.forEach((m: string, idx: number) => {
          const y = m.split("-")[0];
          if (!yearlyMap[y]) yearlyMap[y] = [];
          if (eggPrices[idx] !== undefined) {
            yearlyMap[y].push(eggPrices[idx]);
          }
        });

        // Hitung rata-rata per tahun & puncak 2024
        const avg2021 = yearlyMap["2021"]
          ? Math.round(yearlyMap["2021"].reduce((a, b) => a + b, 0) / yearlyMap["2021"].length)
          : 24806;
        const avg2023 = yearlyMap["2023"]
          ? Math.round(yearlyMap["2023"].reduce((a, b) => a + b, 0) / yearlyMap["2023"].length)
          : 29000;
        const avg2024 = yearlyMap["2024"]
          ? Math.round(yearlyMap["2024"].reduce((a, b) => a + b, 0) / yearlyMap["2024"].length)
          : 30026;
        const avg2025 = yearlyMap["2025"]
          ? Math.round(yearlyMap["2025"].reduce((a, b) => a + b, 0) / yearlyMap["2025"].length)
          : 29966;
        const est2026 = yearlyMap["2026"] && yearlyMap["2026"].length > 0
          ? Math.round(yearlyMap["2026"][0])
          : 31052;

        const peak2024 = yearlyMap["2024"] ? Math.max(...yearlyMap["2024"]) : 32131;
        setCurrentEggPrice(`2024: Rp${avg2024.toLocaleString("id-ID")}/kg`);

        setTrendData([
          { year: "2020", price: 24500 },
          { year: "2021", price: avg2021 },
          { year: "2022", price: 34000, isPeak: true, note: "Puncak Idul Fitri" },
          { year: "2023", price: avg2023 },
          { year: "2024", price: peak2024 || avg2024, highlight: true },
          { year: "2025", price: avg2025 },
          { year: "2026", price: est2026 }
        ]);
      } catch (err) {
        console.error("Gagal memuat data tren harga telur:", err);
        setTrendData([
          { year: "2020", price: 24500 },
          { year: "2021", price: 26000 },
          { year: "2022", price: 34000, isPeak: true, note: "Puncak Idul Fitri" },
          { year: "2023", price: 25000 },
          { year: "2024", price: 32500, highlight: true },
          { year: "2025", price: 28000 },
          { year: "2026", price: 27000 }
        ]);
      }
    };

    loadEggTrendData();
  }, []);

  const toggleMobileNav = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    const elem = document.querySelector(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen w-full text-gray-800 font-sans antialiased overflow-x-clip">
      {/* ========================================================================
          1. NAVIGATION HEADER (Green Navbar)
          ======================================================================== */}
      <header className="bg-linear-to-r from-[#41B673] to-[#68CC4F] text-white pt-4 pb-2 relative sticky top-0 z-40">
        <div className="w-full max-w-[860px] mx-auto px-5 flex items-center justify-between">
          {/* Brand Logo & Official Badge */}
          <Link to="/" className="" aria-label="CekPangan Beranda">
            <div>
              <div className="flex gap-1 items-center">
                <h1 className="text-xl font-bold text-white lg:text-3xl">
                  Cek
                  <span className="text-brand-yellow">Pangan</span>
                </h1>
                <Icon icon="codicon:verified" className="text-2xl text-white lg:text-4xl" />
              </div>
              <p className="text-xs text-white mt-1 lg:text-sm">Sumber: Data resmi Bapanas</p>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav aria-label="Navigasi Utama" className="hidden md:flex items-center gap-6">
            <a
              href="#hero"
              className="relative cursor-pointer text-white font-semibold text-sm hover:opacity-80 transition-opacity after:content-[''] after:absolute after:-inset-x-3 after:-inset-y-4"
              onClick={(e) => handleSmoothScroll(e, "#hero")}
            >
              Home
            </a>
            <a
              href="#ringkasan"
              className="relative cursor-pointer text-white font-semibold text-sm hover:opacity-80 transition-opacity after:content-[''] after:absolute after:-inset-x-3 after:-inset-y-4"
              onClick={(e) => handleSmoothScroll(e, "#ringkasan")}
            >
              Info Pangan
            </a>
            <a
              href="#tentang"
              className="relative cursor-pointer text-white font-semibold text-sm hover:opacity-80 transition-opacity after:content-[''] after:absolute after:-inset-x-3 after:-inset-y-4"
              onClick={(e) => handleSmoothScroll(e, "#tentang")}
            >
              About
            </a>
          </nav>

          {/* Hamburger / Close Button (Mobile Only) */}
          <button
            type="button"
            className="md:hidden cursor-pointer text-white text-2xl p-1 focus:outline-hidden"
            aria-label="Buka Menu Navigasi"
            onClick={toggleMobileNav}
          >
            {mobileMenuOpen ? (
              <Icon icon="lucide:x" className="text-2xl" />
            ) : (
              <Icon icon="lucide:menu" className="text-2xl" />
            )}
          </button>
        </div>

        {/* Mobile Nav Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 z-50 pt-3 pb-4 px-5 border-t border-white/20 flex flex-col items-center gap-3 shadow-lg bg-linear-to-r from-[#41B673] to-[#68CC4F] animate-fadeIn">
            <a
              href="#hero"
              className="relative w-full text-center cursor-pointer text-white font-bold text-sm hover:text-[#FDE047] transition-colors py-1 after:content-[''] after:absolute after:inset-x-0 after:-inset-y-3"
              onClick={(e) => handleSmoothScroll(e, "#hero")}
            >
              Home
            </a>
            <div className="w-full h-px bg-white/10"></div>
            <a
              href="#ringkasan"
              className="relative w-full text-center cursor-pointer text-white font-semibold text-sm hover:text-[#FDE047] transition-colors py-1 after:content-[''] after:absolute after:inset-x-0 after:-inset-y-3"
              onClick={(e) => handleSmoothScroll(e, "#ringkasan")}
            >
              Info Pangan
            </a>
            <div className="w-full h-px bg-white/10"></div>
            <a
              href="#tentang"
              className="relative w-full text-center cursor-pointer text-white font-semibold text-sm hover:text-[#FDE047] transition-colors py-1 after:content-[''] after:absolute after:inset-x-0 after:-inset-y-3"
              onClick={(e) => handleSmoothScroll(e, "#tentang")}
            >
              About
            </a>
          </div>
        )}
      </header>

      {/* ========================================================================
          2. HERO SECTION
          ======================================================================== */}
      <section className="bg-linear-to-r from-[#41B673] to-[#68CC4F] text-white pt-6 pb-6 relative overflow-hidden" id="hero">
        {/* Maskot Pangi Watermark Background */}
        <div className="absolute -right-3 top-3 w-64 h-64 opacity-35 pointer-events-none z-1">
          <img
            src="./src/assets/pangi.webp"
            alt="pangi"
            className="w-full h-full object-contain filter drop-shadow-md"
          />
        </div>

        <div className="w-full max-w-[860px] mx-auto px-5 relative z-2">
          <div className="max-w-[580px]">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-3">
              Kapan Sebaiknya Beli Bahan Pangan?
            </h1>
            <p className="text-sm md:text-base text-white/95 leading-relaxed mb-6 max-w-[440px]">
              Pantau pola harga pangan dengan mudah dan rencanakan belanjamu dengan pintar.
            </p>

            {/* Tombol CTA Kuning */}
            <Link
              to="/dashboard"
              className="inline-flex items-center justify-center gap-2.5 bg-[#F6C928] hover:bg-[#EAB308] text-gray-900 font-bold text-sm md:text-base py-3.5 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 w-full max-w-[360px] group"
            >
              <Icon icon="lucide:calendar-days" className="text-lg" />
              <span>Cek Rata-rata Harga Bulan ini</span>
              <Icon icon="lucide:arrow-right" className="text-lg transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Gelombang Halus / Wave SVG Divider */}
      <div className="w-full bg-linear-to-r from-[#41B673] to-[#68CC4F] overflow-hidden leading-none -mb-px">
        <svg
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          className="w-full h-8 md:h-12 block fill-white"
        >
          <path d="M0,0 C320,55 580,60 760,35 C940,10 1200,45 1440,20 L1440,60 L0,60 Z"></path>
        </svg>
      </div>

      {/* ========================================================================
          3. WHITE MAIN CONTENT
          ======================================================================== */}
      <main className="bg-white pt-4 pb-12">
        <div className="w-full max-w-[860px] mx-auto px-5">
          {/* Banner: Pola Musiman Dapur */}
          <section className="bg-white border border-emerald-100 rounded-2xl p-4 md:p-5 mb-6 shadow-sm hover:shadow-md transition-shadow flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <Icon icon="lucide:piggy-bank" className="text-2xl" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#41B673]">
                  POLA MUSIMAN DAPUR
                </span>
                <span className="bg-slate-100 text-gray-600 text-[10px] font-semibold px-2 py-0.5 rounded-full">
                  Tips
                </span>
              </div>
              <h2 className="text-sm md:text-base font-bold text-gray-900">
                Hemat belanja dapur hingga 20%
              </h2>
              <p className="text-xs text-brand-gray leading-normal">
                Ketahui waktu panen &amp; titik harga terendah
              </p>
            </div>
          </section>

          {/* Section: Ringkasan Pangan Tahun 2025 */}
          <section id="ringkasan" className="mb-7">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-1.5 h-4.5 bg-[#41B673] rounded-full inline-block"></span>
              <h2 className="text-base md:text-lg font-bold text-gray-900 tracking-tight">
                Ringkasan Pangan Tahun 2025
              </h2>
            </div>

            {/* 3 Kartu Komoditas */}
            <div className="flex flex-col gap-3">
              {/* Card 1: Cabai Merah Keriting */}
              <article className="bg-linear-to-r from-brand-primary to-brand-secondary text-white p-3.5 md:p-4 rounded-2xl shadow-sm hover:shadow-md transition-all flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center shadow-xs shrink-0">
                    <Icon icon="noto:hot-pepper" className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-sm md:text-base font-bold leading-tight">
                      Cabai Merah Keriting
                    </h3>
                    <p className="text-xs text-white/90">Rata-rata Rp38.500/kg</p>
                  </div>
                </div>
                <div className="bg-white text-emerald-700 text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shrink-0 shadow-xs">
                  <Icon icon="lucide:trending-down" className="text-sm" />
                  <span>Sedang Turun</span>
                </div>
              </article>

              {/* Card 2: Bawang Putih */}
              <article className="bg-white border border-gray-200 text-gray-800 p-3.5 md:p-4 rounded-2xl shadow-sm hover:shadow-md transition-all flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-amber-50 flex items-center justify-center shadow-xs shrink-0">
                    <Icon icon="fluent-emoji-flat:garlic" className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-sm md:text-base font-bold leading-tight text-gray-900">
                      Bawang Putih
                    </h3>
                    <p className="text-xs text-gray-500">Rata-rata Rp36.200/kg</p>
                  </div>
                </div>
                <div className="bg-gray-100 text-gray-700 text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shrink-0">
                  <Icon icon="lucide:minus" className="text-sm" />
                  <span>Stabil</span>
                </div>
              </article>

              {/* Card 3: Minyak Goreng */}
              <article className="bg-linear-to-r from-[#EF4444] to-[#F97316] text-white p-3.5 md:p-4 rounded-2xl shadow-sm hover:shadow-md transition-all flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center shadow-xs shrink-0">
                    <Icon icon="iconito:olive-oil" className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-sm md:text-base font-bold leading-tight">
                      Minyak Goreng
                    </h3>
                    <p className="text-xs text-white/90">Rata-rata Rp18.400/L</p>
                  </div>
                </div>
                <div className="bg-white text-red-600 text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shrink-0 shadow-xs">
                  <Icon icon="lucide:trending-up" className="text-sm" />
                  <span>Waspada Naik</span>
                </div>
              </article>
            </div>
          </section>

          {/* ====================================================================
              4. TREN HARGA NASIONAL 2020-2026 (Komoditas Telur)
              ==================================================================== */}
          <section className="mb-7" aria-label="Tren Harga Nasional Telur">
            <div className="flex items-center gap-2.5 mb-1">
              <span className="w-1.5 h-4.5 bg-[#41B673] rounded-full inline-block"></span>
              <h2 className="text-base md:text-lg font-bold text-gray-900 tracking-tight">
                Tren Harga Nasional 2020–2026
              </h2>
            </div>
            <p className="text-xs md:text-sm text-gray-500 mb-3.5">
              Pergerakan riwayat dan estimasi harga komoditas telur
            </p>

            <div className="bg-white border border-gray-200 rounded-2xl p-4 md:p-5 shadow-sm">
              <div className="flex items-center justify-between mb-3 px-1">
                <h3 className="text-sm md:text-base font-bold text-gray-900">Telur</h3>
                <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-2.5 py-1 rounded-md">
                  {currentEggPrice}
                </span>
              </div>

              {/* Recharts Area Kurva */}
              <div className="w-full h-52 relative">
                {/* Badge Puncak Idul Fitri */}
                <div className="absolute top-3 left-[35%] -translate-x-1/2 bg-red-100 text-red-600 font-bold text-[11px] px-2.5 py-0.5 rounded-full z-10 pointer-events-none shadow-xs">
                  Puncak Idul Fitri
                </div>

                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={trendData}
                    margin={{ top: 35, right: 15, left: -25, bottom: 5 }}
                  >
                    <defs>
                      <linearGradient id="curveGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#22C55E" stopOpacity={0.35} />
                        <stop offset="100%" stopColor="#22C55E" stopOpacity={0.02} />
                      </linearGradient>
                    </defs>
                    <XAxis
                      dataKey="year"
                      axisLine={{ stroke: "#E2E8F0" }}
                      tickLine={false}
                      tick={{ fill: "#64748B", fontSize: 11, fontWeight: 600 }}
                    />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "#94A3B8", fontSize: 10 }}
                      tickFormatter={(val) => `${Math.round(val / 1000)}k`}
                    />
                    <Tooltip
                      formatter={(val: any) => [
                        val ? `Rp${val.toLocaleString("id-ID")}/kg` : "",
                        "Harga Telur"
                      ]}
                      labelFormatter={(label) => `Tahun ${label}`}
                      contentStyle={{
                        borderRadius: "10px",
                        border: "1px solid #E2E8F0",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                        fontSize: "0.8rem",
                        fontWeight: 600
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="price"
                      stroke="#22C55E"
                      strokeWidth={3}
                      fill="url(#curveGradient)"
                      dot={(props) => {
                        const { cx, cy, payload } = props;
                        const isRed = payload.isPeak || payload.year === "2024";
                        return (
                          <circle
                            key={`dot-${payload.year}`}
                            cx={cx}
                            cy={cy}
                            r={isRed ? 5 : 4}
                            fill={isRed ? "#EF4444" : "#FFFFFF"}
                            stroke={isRed ? "#FFFFFF" : "#22C55E"}
                            strokeWidth={2}
                          />
                        );
                      }}
                      activeDot={{ r: 6, fill: "#15803D", stroke: "#FFFFFF", strokeWidth: 2 }}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              <div className="mt-3.5 bg-yellow-50 border border-yellow-200 rounded-xl p-3 flex items-start gap-2.5 text-xs text-yellow-900 leading-relaxed">
                <Icon icon="lucide:lightbulb" className="text-base text-yellow-600 shrink-0 mt-0.5" />
                <div>
                  <strong>Catatan:</strong> Harga telur cenderung melonjak tajam setiap bulan Desember dan menjelang Hari Raya Idul Fitri.
                </div>
              </div>
            </div>
          </section>

          {/* ====================================================================
              5. MENGAPA CEKPANGAN?
              ==================================================================== */}
          <section id="tentang" className="mb-7" aria-label="Mengapa CekPangan">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-1.5 h-4.5 bg-[#41B673] rounded-full inline-block"></span>
              <h2 className="text-base md:text-lg font-bold text-gray-900 tracking-tight">
                Mengapa CekPangan?
              </h2>
            </div>

            <div className="flex flex-col gap-3 mb-6">
              <div className="bg-white border border-gray-200 rounded-2xl p-4 flex items-start gap-3.5 shadow-sm">
                <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <Icon icon="lucide:shopping-cart" className="text-xl" />
                </div>
                <div>
                  <h4 className="text-sm md:text-base font-bold text-gray-900 mb-1">
                    Tahu Kapan Borong
                  </h4>
                  <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
                    Dapatkan momen termurah bahan pokok berdasarkan riwayat musiman agar stok dapur selalu hemat.
                  </p>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-4 flex items-start gap-3.5 shadow-sm">
                <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                  <Icon icon="lucide:map" className="text-xl" />
                </div>
                <div>
                  <h4 className="text-sm md:text-base font-bold text-gray-900 mb-1">
                    Bandingkan Antar Daerah
                  </h4>
                  <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
                    Lihat disparitas harga bahan pangan antar provinsi di seluruh Indonesia secara transparan dan objektif.
                  </p>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-4 flex items-start gap-3.5 shadow-sm">
                <div className="w-11 h-11 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                  <Icon icon="lucide:shield-check" className="text-xl" />
                </div>
                <div>
                  <h4 className="text-sm md:text-base font-bold text-gray-900 mb-1">
                    Data Resmi Terpercaya
                  </h4>
                  <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
                    Statistik harga dihitung secara matematis berdasarkan data agregasi langsung Bapanas tanpa perantara spekulatif.
                  </p>
                </div>
              </div>
            </div>

            {/* Lencana Sumber Data */}
            <div className="flex justify-center mb-10">
              <InfoSumber />
            </div>

            <p className="text-center text-xs text-gray-500 leading-relaxed max-w-lg mx-auto">
              Dibuat dengan penuh kepedulian memudahkan transparansi untuk ibu rumah tangga dan pelaku usaha kuliner Indonesia.
            </p>
          </section>
        </div>
      </main>

      {/* ========================================================================
          6. SITE FOOTER
          ======================================================================== */}
      <footer className="bg-linear-to-r from-[#41B673] to-[#68CC4F] text-white pt-7 pb-9">
        <div className="w-full max-w-[860px] mx-auto px-5">
          <div className="text-2xl font-bold tracking-tight text-white mb-3">
            Cek<span className="text-[#FDE047]">Pangan</span>
          </div>

          <p className="text-xs text-white/90 leading-relaxed mb-5">
            Catatan data: rata-rata harga bulanan Bapanas, Januari 2021 sampai Januari 2026. Bukan harga hari ini dan bukan real-time. Pola "biasanya murah atau mahal" hanya kecenderungan berdasarkan data yang ada, bukan ramalan.{" "}
            <a href="https://data.badanpangan.go.id/" className="underline font-bold hover:text-[#FDE047]">
              Cek harga hari ini
            </a>
          </p>

          <div className="mb-6">
            <h4 className="text-sm font-bold mb-2.5">Contact</h4>
            <div className="flex gap-3">
              <a
                href="mailto:info@cekpangan.id"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                aria-label="Kirim Email"
              >
                <Icon icon="lucide:mail" className="text-base" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                aria-label="Instagram CekPangan"
              >
                <Icon icon="lucide:instagram" className="text-base" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                aria-label="Facebook CekPangan"
              >
                <Icon icon="lucide:facebook" className="text-base" />
              </a>
            </div>
          </div>

          <div className="text-xs text-white/80 text-center border-t border-white/20 pt-4">
            &copy; 2026 Inama'al Syududu. All rights reserved
          </div>
        </div>
      </footer>
    </div>
  );
};