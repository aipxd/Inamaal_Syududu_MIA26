import { Icon } from "@iconify/react";

interface SelectedProvinceProps {
  provinsi: string;
  harga: number;
  perubahan: number;
  rankNumber: number;
}

export const SelectedProvince = ({
  provinsi,
  harga,
  perubahan,
  rankNumber,
}: SelectedProvinceProps) => {
  return (
    <div className="bg-brand-yellow/20 ring-2 ring-amber-300 font-semibold p-3 rounded-xl flex flex-col gap-4">
      <div className="flex justify-between items-center font-semibold text-xs gap-10">
        <label>WILAYAH PILIHAN ANDA</label>
        <h3 className="bg-white border border-brand-yellow p-1 px-3 rounded-full">
          Peringkat #{rankNumber > 0 ? rankNumber : "-"} Nasional
        </h3>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Icon
            icon="andrsrxn:map-pin-line-area"
            className="text-5xl bg-amber-300/70 p-3 rounded-xl"
          />
          <label className="uppercase font-bold text-base">
            {provinsi || "PILIH WILAYAH"}
          </label>
        </div>
        <div className="flex flex-col items-end">
          <p className="font-bold text-base">
            Rp {harga ? harga.toLocaleString("id-ID") : 0}/kg
          </p>
          <label className="text-sm font-semibold">
            {perubahan < 0
              ? `Turun ${Math.abs(perubahan)}%`
              : perubahan > 0
              ? `Naik ${perubahan}%`
              : "Stabil (0%)"}
          </label>
        </div>
      </div>
    </div>
  );
};