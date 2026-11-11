import { InfoSumber } from "../ui/InfoSumber";
import { RankList, type RankItem } from "../ui/RankList";
import { SelectedProvince } from "../ui/SelectedProvince";
import { ScrollToTopButton } from "../ui/ScrollToTopButton";

interface OutputRankProps {
  rankData: RankItem[];
  selectedWilayah: string;
  selectedKomoditas: string;
}

export const OutputRank = ({ rankData, selectedWilayah, selectedKomoditas }: OutputRankProps) => {
  // Cari index lokasi wilayah terpilih dalam rankData yang sudah terurut
  const userRankIndex = rankData.findIndex(
    (item) => item.provinsi.toUpperCase() === selectedWilayah.toUpperCase()
  );

  const selectedItem = userRankIndex !== -1 ? rankData[userRankIndex] : null;
  const rankNumber = userRankIndex !== -1 ? userRankIndex + 1 : 0;
  const satuan = selectedKomoditas?.toLowerCase().includes("minyak goreng kemasan") ? "liter" : "kg"

  return (
    <section className="w-full space-y-4 pb-30">
      <SelectedProvince
        provinsi={selectedItem ? selectedItem.provinsi : selectedWilayah}
        harga={selectedItem ? selectedItem.harga : 0}
        perubahan={selectedItem ? selectedItem.perubahan : 0}
        rankNumber={rankNumber}
        satuan={satuan}
      />
      <RankList 
        data={rankData} 
        satuan={satuan}
        />
      <div className="max-w-80 mx-auto flex justify-center mt-10">
        <InfoSumber />
      </div>
      <ScrollToTopButton />
    </section>
  );
};