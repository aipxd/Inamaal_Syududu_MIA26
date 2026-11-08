import { useState, useEffect } from "react";
import { DropdownContainer } from "../components/dashboard/DropdownContainer";
import Header from "../components/dashboard/Header";
import { InfoSection } from "../components/dashboard/InfoSection";
import { fetchCekPanganData, MONTH_NAMES_ID, type AppData } from "../lib/data";

export const Dashboard = () => {
  const [appData, setAppData] = useState<AppData | null>(null);

  // 1. State Draft (dioper ke Dropdown, berubah langsung saat diklik tapi belum mengubah UI bawah)
  const [wilayah, setWilayah] = useState("");
  const [komoditas, setKomoditas] = useState("");
  const [bulan, setBulan] = useState("Januari");

  // 2. State Terapan (dioper ke InfoSection, HANYA berubah saat tombol "Cek Harga" diklik)
  const [appliedWilayah, setAppliedWilayah] = useState("");
  const [appliedKomoditas, setAppliedKomoditas] = useState("");
  const [appliedBulan, setAppliedBulan] = useState("Januari");

  const [showData, setShowData] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadInitialData = async () => {
      try {
        setIsLoading(true);
        const data = await fetchCekPanganData();
        setAppData(data);

        // const daftarProvinsi = data.meta.provinces || [];
        const daftarKomoditas = data.meta.commodities
          ? data.meta.commodities.map((item) =>
              typeof item === "object" && item !== null && "label" in item ? item.label : typeof item === "string" ? item : ""
            )
          : [];

        const initialWilayah = "NASIONAL";
        const initialKomoditas = daftarKomoditas.length > 0 ? daftarKomoditas[0] : "";
        let initialBulan = "Januari";

        if (data.meta.latestMonth && data.meta.latestMonth.includes("-")) {
          const monthIndex = parseInt(data.meta.latestMonth.split("-")[1], 10) - 1;
          if (MONTH_NAMES_ID[monthIndex]) {
            initialBulan = MONTH_NAMES_ID[monthIndex];
          }
        }

        // Set nilai default awal ke kedua kelompok state
        setWilayah(initialWilayah);
        setKomoditas(initialKomoditas);
        setBulan(initialBulan);

        setAppliedWilayah(initialWilayah);
        setAppliedKomoditas(initialKomoditas);
        setAppliedBulan(initialBulan);

        setShowData(true);
      } catch (error) {
        console.log("Gagal memuat data: ", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadInitialData();
  }, []);

  const handleCekHarga = () => {
    setIsLoading(true);

    // Terapkan nilai dropdown terbaru ke InfoSection HANYA saat tombol diklik
    setAppliedWilayah(wilayah);
    setAppliedKomoditas(komoditas);
    setAppliedBulan(bulan);

    setTimeout(() => {
      setIsLoading(false);
    }, 700);
  };

  return (
    <section>
      <Header />

      <div className="py-4 pb-8">
        <DropdownContainer
          wilayah={wilayah}
          setWilayah={setWilayah}
          komoditas={komoditas}
          setKomoditas={setKomoditas}
          bulan={bulan}
          setBulan={setBulan}
          onCekHarga={handleCekHarga}
          wilayahOptions={appData ? ["NASIONAL", ...appData.meta.provinces] : []}
          komoditasOptions={
            appData
              ? appData.meta.commodities.map((item) => item.label)
              : []
          }
        />
      </div>

      <div>
        {showData && (
          <InfoSection
            isLoading={isLoading}
            appData={appData}
            selectedWilayah={appliedWilayah}
            selectedKomoditas={appliedKomoditas}
            selectedBulan={appliedBulan}
          />
        )}
      </div>
    </section>
  );
};