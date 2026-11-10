import { useEffect, useState } from "react";
import Header from "../components/layout/Header";
import { DropdownRank } from "../components/rankPage/DropdownRank";
import { fetchCekPanganData, type AppData } from "../lib/data";
import { OutputRank } from "../components/rankPage/OutputRank";
import type { RankItem } from "../components/ui/RankList";
import Loader from "../components/ui/Loader-4";
import { RankSkeleton } from "../components/ui/RankSkeleton";

export const RankPage = () => {
  const [appData, setAppData] = useState<AppData | null>(null);

  // State Draft (Dropdown)
  const [wilayah, setWilayah] = useState<string>("");
  const [komoditas, setKomoditas] = useState<string>("");

  // State Terapan (Output)
  const [appliedWilayah, setAppliedWilayah] = useState<string>("");
  const [appliedKomoditas, setAppliedKomoditas] = useState<string>("");

  // 🔴 2 State Loading Terpisah
  const [isInitialLoading, setIsInitialLoading] = useState<boolean>(true); // Full-screen loader saat pertama masuk
  const [isCekLoading, setIsCekLoading] = useState<boolean>(false);        // Skeleton loader saat klik Cek Harga

  useEffect(() => {
    const loadInitialData = async () => {
      try {
        setIsInitialLoading(true);
        const data = await fetchCekPanganData();
        setAppData(data);

        const rawProvinces: any[] = data.meta.provinces || [];
        const daftarProvinsi: string[] = rawProvinces.map((p) =>
          typeof p === "object" && p !== null && "label" in p ? p.label : String(p)
        );

        const rawCommodities: any[] = (data.meta.commodities as any) || [];
        const daftarKomoditas: string[] = Array.isArray(rawCommodities)
          ? rawCommodities.map((c) =>
              typeof c === "object" && c !== null && "label" in c ? c.label : String(c)
            )
          : Object.values(rawCommodities);

        const initialWilayah = daftarProvinsi.length > 0 ? daftarProvinsi[0] : "ACEH";
        const initialKomoditas = daftarKomoditas.length > 0 ? daftarKomoditas[0] : "";

        setWilayah(initialWilayah);
        setKomoditas(initialKomoditas);

        setAppliedWilayah(initialWilayah);
        setAppliedKomoditas(initialKomoditas);
      } catch (error) {
        console.error("Gagal memuat data: ", error);
      } finally {
        setTimeout(() => {
          setIsInitialLoading(false);
        }, 800);
      }
    };

    loadInitialData();
  }, []);

  const handleCekHarga = () => {
    setIsCekLoading(true);

    setAppliedWilayah(wilayah);
    setAppliedKomoditas(komoditas);

    setTimeout(() => {
      setIsCekLoading(false);
    }, 700);
  };

  const getSortedRankData = (): RankItem[] => {
    if (!appData || !appliedKomoditas) return [];

    const rawCommodities: any[] = (appData.meta.commodities as any) || [];
    
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

    return list.sort((a, b) => a.harga - b.harga);
  };

  const rankData = getSortedRankData();

  const getKomoditasOptions = (): string[] => {
    if (!appData) return [];
    const raw: any = appData.meta.commodities;
    if (Array.isArray(raw)) {
      return raw.map((c) => (typeof c === "object" && c !== null && "label" in c ? c.label : String(c)));
    }
    return Object.values(raw);
  };

  const getWilayahOptions = (): string[] => {
    if (!appData) return [];
    const raw: any = appData.meta.provinces;
    if (Array.isArray(raw)) {
      return raw.map((p) => (typeof p === "object" && p !== null && "label" in p ? p.label : String(p)));
    }
    return Object.values(raw);
  };

  if (isInitialLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  return (
    <section className="min-h-screen">
      <Header />
      <div className="bg-white flex flex-col justify-center items-center gap-5 p-4 lg:px-20 lg:pt-15 rounded-xl max-w-5xl mx-auto shadow-2xl">
        <DropdownRank
          wilayah={wilayah}
          setWilayah={setWilayah}
          komoditas={komoditas}
          setKomoditas={setKomoditas}
          onCekHarga={handleCekHarga}
          wilayahOptions={getWilayahOptions()}
          komoditasOptions={getKomoditasOptions()}
        />

        {isCekLoading ? (
          <RankSkeleton />
        ) : (
          <OutputRank 
            rankData={rankData} 
            selectedWilayah={appliedWilayah} 
            selectedKomoditas={appliedKomoditas}
          />
        )}
      </div>
    </section>
  );
};