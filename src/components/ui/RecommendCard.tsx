import { Pangi } from "./Pangi";

interface RecommendCardProps {
  komoditas: string;
  bulanTermurah: string;
  bulanTermahal: string;
  selisihPersen?: string; // Tambahkan prop ini
}

export const RecommendCard = ({
  komoditas,
  bulanTermurah,
  bulanTermahal,
  selisihPersen = "0%", // Default fallback
}: RecommendCardProps) => {
  return (
    <div className="relative overflow-hidden rounded-t-2xl bg-[#158d4d] p-5 text-white min-h-[160px] flex flex-col justify-between">
      {/* SVG & WAVE BACKGROUND TIDAK DIUBAH SAMA SEKALI */}
      <svg
        className="absolute inset-0 h-full w-full object-cover pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 200"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="fluid-green-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#41B673" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#68CC4F" stopOpacity="0.85" />
            <stop offset="90%" stopColor="#10B981" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id="fluid-green-2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#68CC4F" stopOpacity="0.8" />
            <stop offset="60%" stopColor="#41B673" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#059669" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="fluid-green-3" x1="30%" y1="0%" x2="70%" y2="100%">
            <stop offset="0%" stopColor="#86EFAC" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#064E3B" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M 0,0 L 500,0 L 500,120 Q 380,200 240,130 T 0,180 Z" fill="url(#fluid-green-1)" />
        <path d="M 120,0 C 260,80 320,10 500,110 L 500,0 Z" fill="url(#fluid-green-2)" />
        <path d="M 0,60 C 140,160 280,40 500,170 L 500,200 L 0,200 Z" fill="url(#fluid-green-3)" />
      </svg>

      <div 
        className="absolute -top-12 -left-12 w-40 h-40 rounded-full blur-3xl pointer-events-none opacity-40"
        style={{ backgroundColor: '#68CC4F' }}
      />

      {/* KONTEN UTAMA */}
      <div className="relative z-10 space-y-1">
        <div className="flex justify-center gap">
            <div>
                <span className="bg-white text-brand-primary px-4 py-1 rounded-2xl text-xs font-semibold">
                  Rekomendasi Waktu Belanja
                </span>
                <h2 className="text-xl font-bold mt-3 text-shadow-lg/10">
                    {komoditas} biasanya 
                    <span className="underline text-[#b3ff00]"> paling murah </span> 
                    di bulan {bulanTermurah}
                </h2>
                <p className="text-sm font-medium text-shadow-lg/5 max-w-80">Bulan termahal biasanya di bulan {bulanTermahal} (selisih 
                    <span className="text-brand-yellow"> {selisihPersen} </span>).
                </p>
            </div>
            
            <div className="ml-2">
                <Pangi />
            </div>
        </div>
      </div>
    </div>
  );
};