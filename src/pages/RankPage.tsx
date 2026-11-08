import { useEffect, useState } from "react";
import Header from "../components/layout/Header";
import { DropdownRank } from "../components/rankPage/DropdownRank";
import { fetchCekPanganData, type AppData } from "../lib/data";
import { OutputRank } from "../components/rankPage/OutputRank";
import type { RankItem } from "../components/ui/RankList";

export const RankPage = () => {
  const [appData, setAppData] = useState<AppData | null>(null);

  // State Draft (Dropdown)
  const [wilayah, setWilayah] = useState<string>("");
  const [komoditas, setKomoditas] = useState<string>("");

  // State Terapan (Output)
  const [appliedWilayah, setAppliedWilayah] = useState<string>("");
  const [appliedKomoditas, setAppliedKomoditas] = useState<string>("");

  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadInitialData = async () => {
      try {
        setIsLoading(true);
        const data = await fetchCekPanganData();
        setAppData(data);

        // 1. Ambil array provinsi (string[])
        const rawProvinces: any[] = data.meta.provinces || [];
        const daftarProvinsi: string[] = rawProvinces.map((p) =>
          typeof p === "object" && p !== null && "label" in p ? p.label : String(p)
        );

        // 2. Ambil array komoditas dan ekstrak .label nya agar menjadi string[]
        const rawCommodities: any[] = (data.meta.commodities as any) || [];
        const daftarKomoditas: string[] = Array.isArray(rawCommodities)
          ? rawCommodities.map((c) =>
              typeof c === "object" && c !== null && "label" in c ? c.label : String(c)
            )
          : Object.values(rawCommodities);

        const initialWilayah = daftarProvinsi.length > 0 ? daftarProvinsi[0] : "ACEH";
        const initialKomoditas = daftarKomoditas.length > 0 ? daftarKomoditas[0] : "";

        // Inisialisasi State
        setWilayah(initialWilayah);
        setKomoditas(initialKomoditas);

        setAppliedWilayah(initialWilayah);
        setAppliedKomoditas(initialKomoditas);
      } catch (error) {
        console.error("Gagal memuat data: ", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadInitialData();
  }, []);

  const handleCekHarga = () => {
    setIsLoading(true);

    setAppliedWilayah(wilayah);
    setAppliedKomoditas(komoditas);

    setTimeout(() => {
      setIsLoading(false);
    }, 400);
  };

  // Helper untuk mengekstraksi & mengurutkan data dari Termurah ke Termahal
  const getSortedRankData = (): RankItem[] => {
    if (!appData || !appliedKomoditas) return [];

    const rawCommodities: any[] = (appData.meta.commodities as any) || [];
    
    // Cari objek komoditas yang cocok dengan label yang dipilih
    let commodityKey = appliedKomoditas;
    let commodityId = appliedKomoditas;

    if (Array.isArray(rawCommodities)) {
      const found = rawCommodities.find(
        (c) => (typeof c === "object" && c !== null ? c.label : c) === appliedKomoditas
      );
      if (found && typeof found === "object") {
        commodityKey = found.label;
        commodityId = found.id || found.csvName || found.label;
      }
    }

    // Ambil data harga dari appData.latest berdasarkan id atau label
    const latestPricesObj =
      appData.latest?.[commodityId] ||
      appData.latest?.[commodityKey] ||
      appData.latest?.[appliedKomoditas] ||
      {};

    const list: RankItem[] = Object.entries(latestPricesObj).map(
      ([provName, priceInfo]: [string, any]) => ({
        provinsi: provName,
        harga: priceInfo?.price || 0,
        perubahan: priceInfo?.mom || 0,
      })
    );

    // Urutkan dari harga TERMURAH ke TERMAHAL
    return list.sort((a, b) => a.harga - b.harga);
  };

  const rankData = getSortedRankData();

  // Ekstrak opsi komoditas sebagai string[] murni untuk Dropdown
  const getKomoditasOptions = (): string[] => {
    if (!appData) return [];
    const raw: any = appData.meta.commodities;
    if (Array.isArray(raw)) {
      return raw.map((c) => (typeof c === "object" && c !== null && "label" in c ? c.label : String(c)));
    }
    return Object.values(raw);
  };

  // Ekstrak opsi wilayah sebagai string[] murni untuk Dropdown
  const getWilayahOptions = (): string[] => {
    if (!appData) return [];
    const raw: any = appData.meta.provinces;
    if (Array.isArray(raw)) {
      return raw.map((p) => (typeof p === "object" && p !== null && "label" in p ? p.label : String(p)));
    }
    return Object.values(raw);
  };

  return (
    <section className="min-h-screen bg-slate-50 pb-20">
      <Header />
      <div className="bg-white flex flex-col justify-center items-center gap-5 p-4 max-w-4xl mx-auto">
        <DropdownRank
          wilayah={wilayah}
          setWilayah={setWilayah}
          komoditas={komoditas}
          setKomoditas={setKomoditas}
          onCekHarga={handleCekHarga}
          wilayahOptions={getWilayahOptions()}
          komoditasOptions={getKomoditasOptions()}
        />

        {isLoading ? (
          <div className="py-8 text-brand-gray text-sm font-semibold animate-pulse">
            Memuat data peringkat...
          </div>
        ) : (
          <OutputRank rankData={rankData} selectedWilayah={appliedWilayah} />
        )}
      </div>
    </section>
  );
};