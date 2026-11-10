import { Icon } from "@iconify/react";

interface SelectedProvinceProps {
  provinsi: string;
  harga: number;
  perubahan: number;
  rankNumber: number;
  satuan: string;
}

export const SelectedProvince = ({
  provinsi,
  harga,
  perubahan,
  rankNumber,
  satuan,
}: SelectedProvinceProps) => {
  return (
    <div className="bg-[#FEF9C3] ring-3 ring-[#FDE047] font-semibold p-3 rounded-xl flex flex-col gap-4">
      <div className="flex justify-between items-center font-semibold text-xs">
        <label className="text-[#705D00] text-sm lg:text-lg">WILAYAH PILIHAN</label>
        <h3 className="bg-white min-w-38 border border-brand-yellow text-[#705D00] p-1 text-center rounded-full">
          Peringkat #{rankNumber > 0 ? rankNumber : "-"} Nasional
        </h3>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Icon
            icon="andrsrxn:map-pin-zone"
            className="text-5xl bg-amber-300/70 p-3 rounded-xl text-[#705D00]"
          />
          <label className="uppercase font-bold text-base lg:text-xl">
            {provinsi || "PILIH WILAYAH"}
          </label>
        </div>
        <div className="flex flex-col items-end">
          <p className="font-bold text-xl lg:text-2xl">
            Rp {harga ? harga.toLocaleString("id-ID") : 0}
            <span className="text-xs font-normal text-slate-600">/{satuan}</span>
          </p>
          <label
            className={`text-xs font-semibold py-1 px-3 rounded-full text-center min-w-25 flex items-center justify-center gap-1.5
            ${
              perubahan < 0
                ? "bg-[#10B981] text-white"
                : perubahan > 0
                ? "bg-brand-negative text-white"
                : "bg-white text-black border border-slate-200"
            }`}
            >
            {perubahan < 0 ? (
              <>
                <Icon icon="akar-icons:triangle-down-fill" className="text-base" />
                <span>Turun {Math.abs(perubahan)}%</span>
              </>
            ) : perubahan > 0 ? (
              <>
                <Icon icon="akar-icons:triangle-up-fill" className="text-base" />
                <span>Naik {perubahan}%</span>
              </>
            ) : (
              <>
                <Icon icon="tabler:minus" className="text-base text-slate-500" />
                <span>Stabil (0%)</span>
              </>
            )}
          </label>
        </div>
      </div>
    </div>
  );
};