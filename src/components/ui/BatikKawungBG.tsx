// Komponen Pattern Batik Kawung Vektor Vektor
export const BatikKawungBG = () => (
  <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-10">
    <svg className="w-full h-full">
      <defs>
        {/* Pola Unit Batik Kawung berukuran 40x40px */}
        <pattern
          id="batik-kawung"
          x="0"
          y="0"
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
        >
          {/* Lingkaran Pusat Kawung */}
          <circle
            cx="20"
            cy="20"
            r="18"
            fill="none"
            stroke="#ffffff"
            strokeWidth="3"
          />
          {/* Lingkaran Empat Sudut yang Saling Berpotongan */}
          <circle
            cx="0"
            cy="0"
            r="18"
            fill="none"
            stroke="#ffffff"
            strokeWidth="3"
          />
          <circle
            cx="40"
            cy="0"
            r="18"
            fill="none"
            stroke="#ffffff"
            strokeWidth="3"
          />
          <circle
            cx="0"
            cy="40"
            r="18"
            fill="none"
            stroke="#ffffff"
            strokeWidth="3"
          />
          <circle
            cx="40"
            cy="40"
            r="18"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2"
          />

          {/* Ornamen Bunga/Titik Tengah Motif Batik */}
          <circle cx="20" cy="20" r="2.5" fill="#ffffff" />
          <circle cx="0" cy="0" r="2" fill="#ffffff" />
          <circle cx="40" cy="0" r="2" fill="#ffffff" />
          <circle cx="0" cy="40" r="2" fill="#ffffff" />
          <circle cx="40" cy="40" r="2" fill="#ffffff" />
        </pattern>
      </defs>

      {/* Mengisi seluruh area dengan pola batik */}
      <rect width="100%" height="100%" fill="url(#batik-kawung)" />
    </svg>
  </div>
);