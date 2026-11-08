// DropdownContainer.tsx
import { Dropdown } from "../ui/Dropdown";
import { PrimaryButton } from "../ui/PrimaryButton";

interface DropdownContainerProps {
  wilayah: string;
  setWilayah: (val: string) => void;
  komoditas: string;
  setKomoditas: (val: string) => void;
  bulan: string;
  setBulan: (val: string) => void;
  onCekHarga: () => void;
  wilayahOptions: string[];
  komoditasOptions: string[];
}

export const DropdownContainer = ({
  wilayah, setWilayah,
  komoditas, setKomoditas,
  bulan, setBulan,
  onCekHarga,
  wilayahOptions,
  komoditasOptions
}: DropdownContainerProps) => {
  return (
    <div className="bg-brand-bg w-full mx-4 p-5 rounded-xl shadow-lg flex flex-col justify-center lg:mx-40 max-w-[2000px]">
      <Dropdown 
        label="PILIH WILAYAH" 
        icon="akar-icons:location" 
        options={[...wilayahOptions]} 
        value={wilayah} 
        onChange={setWilayah} 
      />
      <div className="grid grid-cols-2 gap-3 mt-4 lg:gap-7">
        <Dropdown 
          label="PILIH KOMODITAS" 
          icon="akar-icons:basket" 
          options={komoditasOptions} 
          value={komoditas} 
          onChange={setKomoditas} 
        />
        <Dropdown 
          label="PILIH BULAN" 
          icon="akar-icons:calendar" 
          options={["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"]} 
          value={bulan} 
          onChange={setBulan} 
        />
      </div>
      <PrimaryButton 
        onClick={onCekHarga} 
        label="Cek Harga"
      />

      <p className="text-xs pt-4 text-brand-gray text-center lg:text-base">
        Data yang ditampilkan merupakan data yang diambil pada periode  Januari 2021 - Januari 2026
      </p>
    </div>
  );
};