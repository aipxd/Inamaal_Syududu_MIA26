import { RankList, type RankItem } from "../ui/RankList";
import { SelectedProvince } from "../ui/SelectedProvince";

interface OutputRankProps {
  rankData: RankItem[];
  selectedWilayah: string;
}

export const OutputRank = ({ rankData, selectedWilayah }: OutputRankProps) => {
  // Cari index lokasi wilayah terpilih dalam rankData yang sudah terurut
  const userRankIndex = rankData.findIndex(
    (item) => item.provinsi.toUpperCase() === selectedWilayah.toUpperCase()
  );

  const selectedItem = userRankIndex !== -1 ? rankData[userRankIndex] : null;
  const rankNumber = userRankIndex !== -1 ? userRankIndex + 1 : 0;

  return (
    <section className="w-full space-y-4">
      <SelectedProvince
        provinsi={selectedItem ? selectedItem.provinsi : selectedWilayah}
        harga={selectedItem ? selectedItem.harga : 0}
        perubahan={selectedItem ? selectedItem.perubahan : 0}
        rankNumber={rankNumber}
      />
      <RankList data={rankData} />
    </section>
  );
};