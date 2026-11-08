import { Icon } from "@iconify/react";

interface SaranPangiProps {
  komoditas: string;
  bulanTermurah: string;
  bulanTermahal: string;
  selectedBulan?: string;
  status?: "Naik" | "Turun" | "Stabil";
}

export const SaranPangi = ({
  komoditas,
  bulanTermurah,
  bulanTermahal,
  selectedBulan = "",
  status = "Stabil",
}: SaranPangiProps) => {
  // Generator Logika Saran Dinamis
  const getSaranText = () => {
    if (!komoditas) return "Pilih komoditas untuk melihat saran belanja dari Pangi.";

    const currentBulanLower = selectedBulan.toLowerCase();
    const termurahLower = bulanTermurah.toLowerCase();
    const termahalLower = bulanTermahal.toLowerCase();

    if (currentBulanLower === termahalLower) {
      return `Bulan ${selectedBulan} merupakan puncak harga termahal ${komoditas}. Beli secukupnya saja dan tunda belanja banyak hingga bulan ${bulanTermurah}.`;
    }

    if (currentBulanLower === termurahLower) {
      return `Bulan ${selectedBulan} adalah waktu paling hemat untuk membeli ${komoditas}. Manfaatkan momen ini untuk menyetok kebutuhan rumah tangga!`;
    }

    if (status === "Naik") {
      return `Harga ${komoditas} sedang cenderung naik di bulan ${selectedBulan}. Atur anggaran belanja sebelum mendekati puncaknya di bulan ${bulanTermahal}.`;
    }

    return `Untuk belanja ${komoditas} lebih hemat, utamakan membeli pada bulan ${bulanTermurah} dan hindari menyetok berlebihan di bulan ${bulanTermahal}!`;
  };

  return (
    <div className="text-sm px-5 pb-7">
      <div className="bg-yellow-200/30 p-2 rounded-xl border border-brand-yellow flex items-start justify-center gap-3">
        <Icon icon="hugeicons:idea" fontSize={50} />
        <p>
          <b>Saran Pangi:</b> {getSaranText()}
        </p>
      </div>
    </div>
  );
};