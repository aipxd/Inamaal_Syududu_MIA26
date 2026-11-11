// DropdownContainer.tsx
import { Dropdown } from "../ui/Dropdown";
import { PrimaryButton } from "../ui/PrimaryButton";

interface DropdownRankProps {
  wilayah: string;
  setWilayah: (val: string) => void;
  komoditas: string;
  setKomoditas: (val: string) => void;
  onCekHarga: () => void;
  wilayahOptions: string[];
  komoditasOptions: string[];
}

export const DropdownRank = ({
  wilayah, setWilayah,
  komoditas, setKomoditas,
  onCekHarga,
  wilayahOptions,
  komoditasOptions
}: DropdownRankProps) => {
  return (
    <div className="bg-brand-bg border border-black/20 w-full mx-4 p-5 rounded-xl shadow-lg flex flex-col justify-center lg:mx-40 max-w-[2000px]">
      <div className="grid grid-cols-2 gap-3 mt-4 lg:gap-7">
        <Dropdown 
          label="PILIH PROVINSI" 
          icon="akar-icons:location" 
          options={wilayahOptions} 
          value={wilayah} 
          onChange={setWilayah} 
        />
        <Dropdown 
          label="PILIH KOMODITAS" 
          icon="akar-icons:basket" 
          options={komoditasOptions} 
          value={komoditas} 
          onChange={setKomoditas} 
        />
      </div>
      <PrimaryButton 
        onClick={onCekHarga} 
        label="Cek Peringkat Terbaru"  
      />

      <p className="text-xs pt-4 text-brand-gray text-center lg:text-base">
        Peringkat mencakup 37 provinsi. Papua Pegunungan belum ada data harga untuk Januari 2026.
      </p>
    </div>
  );
};