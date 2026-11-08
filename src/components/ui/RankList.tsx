export interface RankItem {
  provinsi: string;
  harga: number;
  perubahan: number;
}

interface RankListProps {
  data: RankItem[];
}

export const RankList = ({ data }: RankListProps) => {
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

            return(
              <div
                key={item.provinsi}
                className={`bg-white rounded-xl p4 flex items-center justify-between border shadow-xs transition-all ${isFirst
                  ? "border-brand-positive bg-brand-positive/40"
                  : isLast
                  ? "border-brand-negative bg-brand-negative/30"
                  : "border-black-10"
                  }`}
              >

                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-lg flex flex-col items-center justify-center font-bold text xs ${isFirst
                      ? "bg-brand-positive text-white"
                      : isLast
                      ? "bg-brand-negative text-white"
                      : "bg-gray-100 text-gray-700"
                      }`}
                  >
                    <span>#{rank}</span>
                    {isFirst && <span className="text-[7px] leading-none uppercase">Termurah</span>}
                    {isLast && <span className="text-[7px] leading-none uppercase">Termahal</span>}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-gray-800">{item.provinsi}</h4>
                  </div>
                </div>

                <div className="text-right">
                      <p className="font-bold text-sm text-gray-900">
                        Rp {item.harga ? item.harga.toLocaleString("id-ID") : 0}
                      </p>
                      <span
                        className={`text-xs font-semibold px-2 py-0.5 rounded-full inline-block ${
                          item.perubahan < 0
                          ? "bg-brand-positive text-emerald-700"
                          : item.perubahan > 0
                          ? "bg-brand-negative text-red-700"
                          : "bg-gray-100 text-gray-600"
                          }`}
                      >
                        {item.perubahan < 0
                        ? `Turun ${Math.abs(item.perubahan)}%`
                        : item.perubahan > 0
                        ? `Naik ${item.perubahan}%`
                        : "Stabil (0%)"
                        }
                      </span>
                </div>
              </div>
            );
          })}
        </div>
    </div>
  )
}

