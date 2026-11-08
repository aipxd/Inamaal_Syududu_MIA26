import { Icon } from "@iconify/react";

interface CardRata2Props {
    bulan: string,
    harga: string;
    satuan: string,
    persentase: string,
    status: "Turun" | "Naik" | "Stabil",
}

export const CardRata2Harga = ({ 
    bulan, 
    harga, 
    satuan, 
    persentase, 
    status 
}: CardRata2Props) => {
    const isTurun = status === "Turun";

  return (
    <div className="bg-white p-5 rounded-2xl shadow-lg border border-black/15">
        <div className="text-sm flex justify-between items-center">
            <h3 className="font-medium text-brand-gray">Harga rata-rata bulan {bulan}</h3>
            
            {/* Indikator harga */}
            <div 
                className={`text-xs border p-2 rounded-full flex justify-center items-center gap-2 ${
                isTurun
                    ? "bg-brand-icon/20 text-brand-icon border-brand-icon/20" 
                    : status === "Naik"
                    ? "bg-brand-negative/20 text-brand-negative border-brand-negative/20"
                    : "bg-slate-100 text-slate-600 border-slate-300"
                }`}
            >
                {status !== "Stabil" && (
                    <Icon 
                        icon={
                            isTurun
                                ? "akar-icons:triangle-down-fill" 
                                : "akar-icons:triangle-up-fill"
                            } 
                            className="text-xl shrink-0"/>
                )}
                <span>
                    {status} {persentase} dari bulan sebelumnya
                </span>
            </div>
        </div>
        
        {/* Tampilan harga & satuan dinamis */}
        <div className="flex items-center justify-start gap-2 my-3">
            <p className="font-semibold text-3xl">{harga}</p> 
            <p className="text-brand-gray">{satuan}</p>
        </div>

        {/* Footer info bapanas */}
        <div className="flex gap-1 text-xs justify-center items-center text-brand-gray pt-1">
            <Icon icon="ant-design:info-circle-outlined" className="text-lg shrink-0 mt-0.5" />
            <p>
                Data Januari 2021-2026. Data ini bersumber dari Badan Pangan Nasional yang telah diolah oleh tim internal kami.
            </p>
        </div>
    </div>
  )
}