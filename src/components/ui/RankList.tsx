import { Icon } from "@iconify/react";

export interface RankItem {
  provinsi: string;
  harga: number;
  perubahan: number;
}

interface RankListProps {
  data: RankItem[];
  satuan?: string;
}

export const RankList = ({ data, satuan = "kg" }: RankListProps) => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between text-xs my-5 text-brand-gray">
        <p className="font-semibold">URUTAN: TERMURAH KE TERMAHAL</p>
        <label>Total {data.length} Provinsi</label>
      </div>

      <div className="space-y-3">
        {data.map((item, index) => {
          const rank = index + 1;
          const isFirst = rank === 1;
          const isLast = rank === data.length;

          return (
            <div
              key={item.provinsi}
              className={`rounded-2xl p-3 flex items-center justify-between shadow-xs transition-all ${
                isFirst
                  ? "border-3 border-[#10B981] bg-[#10B981]/20"
                  : isLast
                  ? "border-3 border-brand-negative bg-brand-negative/20"
                  : "border-1 border-black/10"
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`text-black py-1 px-2 min-w-14 rounded-2xl flex flex-col items-center justify-center font-bold text-sm ${
                    isFirst
                      ? "bg-[#10B981] text-white"
                      : isLast
                      ? "bg-brand-negative text-white"
                      : "bg-[#F3F4F6] text-gray-700"
                  }`}
                >
                  <span>#{rank}</span>
                  {isFirst && <span className="text-[7px] leading-none uppercase">Termurah</span>}
                  {isLast && <span className="text-[7px] leading-none uppercase">Termahal</span>}
                </div>
                <div>
                  <h4 className="font-bold text-sm text-gray-800 max-w-35">{item.provinsi}</h4>
                </div>
              </div>

              <div className="text-right">
                <p className={`font-bold text-sm ${
                  isFirst
                    ? "text-[#065F46]"
                    : isLast
                    ? "text-[#991B1B]"
                    : "text-gray-700"
                  }`}>
                  Rp {item.harga ? item.harga.toLocaleString("id-ID") : 0}
                  <span className="font-extralight text-xs">/{satuan}</span>
                </p>

                {/* Badge Perubahan dengan Ikon */}
                <span
                  className={`text-xs font-semibold px-2 py-0.5 rounded-lg flex items-center justify-center gap-1 min-w-20 text-center text-white ${
                    item.perubahan < 0
                      ? "bg-[#10B981]"
                      : item.perubahan > 0
                      ? "bg-brand-negative"
                      : "bg-gray-400/70"
                  }`}
                >
                  {item.perubahan < 0 ? (
                    <>
                      <Icon icon="akar-icons:triangle-down-fill" className="text-sm" />
                      <span>Turun {Math.abs(item.perubahan)}%</span>
                    </>
                  ) : item.perubahan > 0 ? (
                    <>
                      <Icon icon="akar-icons:triangle-up-fill" className="text-sm" />
                      <span>Naik {item.perubahan}%</span>
                    </>
                  ) : (
                    <>
                      <Icon icon="tabler:minus" className="text-sm" />
                      <span>Stabil (0%)</span>
                    </>
                  )}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};