/**
 * CekPangan - Data Provider
 * Data pergerakan harga pangan (Januari 2021 - Januari 2026)
 * Sumber agregasi: Badan Pangan Nasional (Bapanas) via Data.go.id (Diolah internal)
 */

const CEKPANGAN_DATA = {
  // Daftar Komoditas Utama
  commodities: [
    {
      id: "bawang-putih",
      name: "Bawang Putih",
      category: "Bumbu Dapur",
      unit: "kg",
      icon: "🧄",
      avg2025: 36200,
      status: "stabil",
      statusLabel: "Stabil",
      statusChange: "0.0%",
      cheapestMonth: "Oktober",
      cheapestPrice: 32500,
      peakMonth: "April",
      peakPrice: 38900,
      diffPercent: "15%",
      advice: "Hindari menyetok banyak di bulan Maret-April menjelang puncak Lebaran!",
      monthlyAvg: [
        { month: "Jan", price: 35000, valueK: 35 },
        { month: "Feb", price: 34000, valueK: 34 },
        { month: "Mar", price: 36500, valueK: 36 },
        { month: "Apr", price: 38900, valueK: 39, isPeak: true },
        { month: "Mei", price: 37200, valueK: 37 },
        { month: "Jun", price: 35000, valueK: 35 },
        { month: "Jul", price: 34200, valueK: 34 },
        { month: "Ags", price: 33800, valueK: 33 },
        { month: "Sep", price: 33000, valueK: 33 },
        { month: "Okt", price: 32500, valueK: 32, isCheapest: true },
        { month: "Nov", price: 34100, valueK: 34 },
        { month: "Des", price: 36000, valueK: 36 }
      ]
    },
    {
      id: "cabai-merah",
      name: "Cabai Merah Keriting",
      category: "Sayur & Bumbu",
      unit: "kg",
      icon: "🌶️",
      avg2025: 58500,
      status: "turun",
      statusLabel: "Sedang Turun",
      statusChange: "-4.2%",
      cheapestMonth: "Agustus",
      cheapestPrice: 42000,
      peakMonth: "Desember",
      peakPrice: 76000,
      diffPercent: "45%",
      advice: "Waktu terbaik beli untuk dikeringkan atau dibuat pasta cabai adalah saat panen raya bulan Juli-Agustus.",
      monthlyAvg: [
        { month: "Jan", price: 58500, valueK: 58 },
        { month: "Feb", price: 54000, valueK: 54 },
        { month: "Mar", price: 62000, valueK: 62 },
        { month: "Apr", price: 65000, valueK: 65 },
        { month: "Mei", price: 51000, valueK: 51 },
        { month: "Jun", price: 46000, valueK: 46 },
        { month: "Jul", price: 43500, valueK: 43 },
        { month: "Ags", price: 42000, valueK: 42, isCheapest: true },
        { month: "Sep", price: 48000, valueK: 48 },
        { month: "Okt", price: 53000, valueK: 53 },
        { month: "Nov", price: 64000, valueK: 64 },
        { month: "Des", price: 76000, valueK: 76, isPeak: true }
      ]
    },
    {
      id: "minyak-goreng",
      name: "Minyak Goreng",
      category: "Bahan Pokok",
      unit: "Liter",
      icon: "🫗",
      avg2025: 18400,
      status: "naik",
      statusLabel: "Waspada Naik",
      statusChange: "+2.8%",
      cheapestMonth: "Februari",
      cheapestPrice: 17200,
      peakMonth: "Desember",
      peakPrice: 19800,
      diffPercent: "13%",
      advice: "Pantau program Minyakita resmi Bulog untuk harga HAP Rp15.700/liter jika harga kemasan komersial melambung.",
      monthlyAvg: [
        { month: "Jan", price: 18400, valueK: 18 },
        { month: "Feb", price: 17200, valueK: 17, isCheapest: true },
        { month: "Mar", price: 17800, valueK: 18 },
        { month: "Apr", price: 18600, valueK: 19 },
        { month: "Mei", price: 18200, valueK: 18 },
        { month: "Jun", price: 18000, valueK: 18 },
        { month: "Jul", price: 18100, valueK: 18 },
        { month: "Ags", price: 18200, valueK: 18 },
        { month: "Sep", price: 18300, valueK: 18 },
        { month: "Okt", price: 18500, valueK: 18 },
        { month: "Nov", price: 19000, valueK: 19 },
        { month: "Des", price: 19800, valueK: 20, isPeak: true }
      ]
    },
    {
      id: "telur-ayam",
      name: "Telur Ayam Ras",
      category: "Peternakan",
      unit: "kg",
      icon: "🥚",
      avg2025: 29500,
      status: "stabil",
      statusLabel: "Stabil",
      statusChange: "+0.5%",
      cheapestMonth: "Februari",
      cheapestPrice: 26500,
      peakMonth: "Desember",
      peakPrice: 33500,
      diffPercent: "21%",
      advice: "Harga telur melonjak tajam menjelang Hari Raya Idul Fitri dan libur akhir tahun (Desember).",
      monthlyAvg: [
        { month: "Jan", price: 29000, valueK: 29 },
        { month: "Feb", price: 26500, valueK: 26, isCheapest: true },
        { month: "Mar", price: 28500, valueK: 28 },
        { month: "Apr", price: 31800, valueK: 32 },
        { month: "Mei", price: 30000, valueK: 30 },
        { month: "Jun", price: 28800, valueK: 29 },
        { month: "Jul", price: 28200, valueK: 28 },
        { month: "Ags", price: 27900, valueK: 28 },
        { month: "Sep", price: 28400, valueK: 28 },
        { month: "Okt", price: 29200, valueK: 29 },
        { month: "Nov", price: 30500, valueK: 31 },
        { month: "Des", price: 33500, valueK: 34, isPeak: true }
      ]
    },
    {
      id: "beras-medium",
      name: "Beras Medium",
      category: "Bahan Pokok",
      unit: "kg",
      icon: "🌾",
      avg2025: 14200,
      status: "stabil",
      statusLabel: "Stabil",
      statusChange: "-0.8%",
      cheapestMonth: "April",
      cheapestPrice: 13100,
      peakMonth: "Januari",
      peakPrice: 15400,
      diffPercent: "15%",
      advice: "Manfaatkan masa panen raya padi di bulan Maret-Mei untuk menyetok beras kualitas baik dengan harga terjangkau.",
      monthlyAvg: [
        { month: "Jan", price: 15400, valueK: 15, isPeak: true },
        { month: "Feb", price: 14900, valueK: 15 },
        { month: "Mar", price: 13800, valueK: 14 },
        { month: "Apr", price: 13100, valueK: 13, isCheapest: true },
        { month: "Mei", price: 13300, valueK: 13 },
        { month: "Jun", price: 13700, valueK: 14 },
        { month: "Jul", price: 14000, valueK: 14 },
        { month: "Ags", price: 14200, valueK: 14 },
        { month: "Sep", price: 14500, valueK: 15 },
        { month: "Okt", price: 14800, valueK: 15 },
        { month: "Nov", price: 15000, valueK: 15 },
        { month: "Des", price: 15200, valueK: 15 }
      ]
    },
    {
      id: "daging-ayam",
      name: "Daging Ayam Ras",
      category: "Peternakan",
      unit: "kg",
      icon: "🍗",
      avg2025: 37500,
      status: "turun",
      statusLabel: "Sedang Turun",
      statusChange: "-1.5%",
      cheapestMonth: "September",
      cheapestPrice: 34000,
      peakMonth: "April",
      peakPrice: 43000,
      diffPercent: "21%",
      advice: "Momen permintaan daging ayam tertinggi terjadi pada H-7 hingga H+3 Idul Fitri.",
      monthlyAvg: [
        { month: "Jan", price: 37500, valueK: 37 },
        { month: "Feb", price: 36000, valueK: 36 },
        { month: "Mar", price: 39000, valueK: 39 },
        { month: "Apr", price: 43000, valueK: 43, isPeak: true },
        { month: "Mei", price: 38500, valueK: 38 },
        { month: "Jun", price: 36200, valueK: 36 },
        { month: "Jul", price: 35500, valueK: 35 },
        { month: "Ags", price: 34800, valueK: 35 },
        { month: "Sep", price: 34000, valueK: 34, isCheapest: true },
        { month: "Okt", price: 35200, valueK: 35 },
        { month: "Nov", price: 36800, valueK: 37 },
        { month: "Des", price: 41000, valueK: 41 }
      ]
    }
  ],

  // Daftar 38 Provinsi Indonesia
  provinces: [
    { id: "all", name: "Seluruh Indonesia / Nasional (38 Provinsi)", isNational: true },
    { id: "jatim", name: "Jawa Timur", market: "Pasar Wonokromo & Kepanjen", region: "Jawa" },
    { id: "jateng", name: "Jawa Tengah", market: "Pasar Johar & Puri", region: "Jawa" },
    { id: "diy", name: "DIY Yogyakarta", market: "Pasar Beringharjo & Kranggan", region: "Jawa" },
    { id: "jabar", name: "Jawa Barat", market: "Pasar Baru & Kiaracondong", region: "Jawa" },
    { id: "dki", name: "DKI Jakarta", market: "Pasar Induk Kramat Jati", region: "Jawa" },
    { id: "banten", name: "Banten", market: "Pasar Rau Serang", region: "Jawa" },
    { id: "bali", name: "Bali", market: "Pasar Badung & Kreneng", region: "Bali & Nusa" },
    { id: "ntb", name: "Nusa Tenggara Barat", market: "Pasar Mandalika Mataram", region: "Bali & Nusa" },
    { id: "ntt", name: "Nusa Tenggara Timur", market: "Pasar Kasih Naikoten", region: "Bali & Nusa" },
    { id: "sumut", name: "Sumatera Utara", market: "Pasar Petisah Medan", region: "Sumatera" },
    { id: "sumbar", name: "Sumatera Barat", market: "Pasar Raya Padang", region: "Sumatera" },
    { id: "riau", name: "Riau", market: "Pasar Cik Puan Pekanbaru", region: "Sumatera" },
    { id: "sumsel", name: "Sumatera Selatan", market: "Pasar Jakabaring Palembang", region: "Sumatera" },
    { id: "lampung", name: "Lampung", market: "Pasar Tamin Bandar Lampung", region: "Sumatera" },
    { id: "kalbar", name: "Kalimantan Barat", market: "Pasar Flamboyan Pontianak", region: "Kalimantan" },
    { id: "kaltim", name: "Kalimantan Timur", market: "Pasar Segiri Samarinda", region: "Kalimantan" },
    { id: "kalsel", name: "Kalimantan Selatan", market: "Pasar Sentra Antasari", region: "Kalimantan" },
    { id: "sulsel", name: "Sulawesi Selatan", market: "Pasar Terong Makassar", region: "Sulawesi" },
    { id: "sulteng", name: "Sulawesi Tengah", market: "Pasar Masomba Palu", region: "Sulawesi" },
    { id: "sulut", name: "Sulawesi Utara", market: "Pasar Bersehati Manado", region: "Sulawesi" },
    { id: "maluku", name: "Maluku", market: "Pasar Mardika Ambon", region: "Maluku & Papua" },
    { id: "malut", name: "Maluku Utara", market: "Pasar Gamalama Ternate", region: "Maluku & Papua" },
    { id: "papua", name: "Papua", market: "Pasar Youtefa Jayapura", region: "Maluku & Papua" },
    { id: "papuabarat", name: "Papua Barat", market: "Pasar Sanggeng Manokwari", region: "Maluku & Papua" },
    { id: "papuapegunungan", name: "Papua Pegunungan", market: "Pasar Jibama & Sinak", region: "Maluku & Papua" }
  ],

  // Data Peringkat Provinsi per Komoditas (Contoh riil terurut dari termurah ke termahal)
  provinceRankings: {
    "cabai-merah": [
      { rank: 1, id: "jatim", name: "Jawa Timur", market: "Pasar Wonokromo & Kepanjen", price: 30000, trend: "turun", change: "-3.0%", isCheapest: true },
      { rank: 2, id: "jateng", name: "Jawa Tengah", market: "Pasar Johar & Puri", price: 32500, trend: "naik", change: "+1.5%" },
      { rank: 3, id: "diy", name: "DIY Yogyakarta", market: "Pasar Beringharjo & Kranggan", price: 33000, trend: "stabil", change: "~0% Stabil" },
      { rank: 4, id: "jabar", name: "Jawa Barat", market: "Pasar Baru & Kiaracondong", price: 34000, trend: "turun", change: "-1.0%" },
      { rank: 5, id: "dki", name: "DKI Jakarta", market: "Pasar Induk Kramat Jati", price: 36500, trend: "naik", change: "+2.0%" },
      { rank: 6, id: "bali", name: "Bali", market: "Pasar Badung & Kreneng", price: 37200, trend: "naik", change: "+0.8%" },
      { rank: 7, id: "lampung", name: "Lampung", market: "Pasar Tamin", price: 38000, trend: "stabil", change: "0.0%" },
      { rank: 8, id: "sumsel", name: "Sumatera Selatan", market: "Pasar Jakabaring", price: 39500, trend: "turun", change: "-0.5%" },
      { rank: 9, id: "sulsel", name: "Sulawesi Selatan", market: "Pasar Terong", price: 40000, trend: "stabil", change: "0.0%" },
      { rank: 10, id: "kalsel", name: "Kalimantan Selatan", market: "Pasar Antasari", price: 42000, trend: "naik", change: "+1.2%" },
      { rank: 11, id: "sumut", name: "Sumatera Utara", market: "Pasar Petisah", price: 43500, trend: "turun", change: "-1.1%" },
      { rank: 12, id: "kaltim", name: "Kalimantan Timur", market: "Pasar Segiri", price: 46000, trend: "naik", change: "+1.8%" },
      { rank: 13, id: "maluku", name: "Maluku", market: "Pasar Mardika", price: 52000, trend: "naik", change: "+3.2%" },
      { rank: 14, id: "papua", name: "Papua", market: "Pasar Youtefa", price: 55000, trend: "naik", change: "+2.5%" },
      { rank: 38, id: "papuapegunungan", name: "Papua Pegunungan", market: "Pasar Jibama & Sinak", price: 60000, trend: "naik", change: "+5.0%", isPeak: true }
    ],
    "bawang-putih": [
      { rank: 1, id: "jatim", name: "Jawa Timur", market: "Pasar Kepanjen & Wonokromo", price: 31000, trend: "turun", change: "-2.1%", isCheapest: true },
      { rank: 2, id: "jateng", name: "Jawa Tengah", market: "Pasar Johar Semarang", price: 32000, trend: "stabil", change: "0.0%" },
      { rank: 3, id: "diy", name: "DIY Yogyakarta", market: "Pasar Beringharjo", price: 32800, trend: "turun", change: "-0.6%" },
      { rank: 4, id: "jabar", name: "Jawa Barat", market: "Pasar Baru Bandung", price: 33500, trend: "stabil", change: "+0.3%" },
      { rank: 5, id: "dki", name: "DKI Jakarta", market: "Pasar Induk Kramat Jati", price: 35000, trend: "turun", change: "-1.8%" },
      { rank: 6, id: "bali", name: "Bali", market: "Pasar Badung Denpasar", price: 35500, trend: "naik", change: "+1.0%" },
      { rank: 7, id: "sulsel", name: "Sulawesi Selatan", market: "Pasar Terong", price: 36000, trend: "stabil", change: "0.0%" },
      { rank: 8, id: "kaltim", name: "Kalimantan Timur", market: "Pasar Segiri", price: 39000, trend: "naik", change: "+2.0%" },
      { rank: 38, id: "papuapegunungan", name: "Papua Pegunungan", market: "Pasar Jibama", price: 62000, trend: "naik", change: "+4.5%", isPeak: true }
    ],
    "minyak-goreng": [
      { rank: 1, id: "sumut", name: "Sumatera Utara", market: "Pasar Petisah Medan", price: 16500, trend: "stabil", change: "0.0%", isCheapest: true },
      { rank: 2, id: "riau", name: "Riau", market: "Pasar Cik Puan", price: 16800, trend: "turun", change: "-0.5%" },
      { rank: 3, id: "jatim", name: "Jawa Timur", market: "Pasar Wonokromo", price: 17200, trend: "turun", change: "-1.1%" },
      { rank: 4, id: "jateng", name: "Jawa Tengah", market: "Pasar Johar", price: 17500, trend: "stabil", change: "0.0%" },
      { rank: 5, id: "dki", name: "DKI Jakarta", market: "Pasar Kramat Jati", price: 18400, trend: "naik", change: "+2.8%" },
      { rank: 38, id: "papuapegunungan", name: "Papua Pegunungan", market: "Pasar Sinak", price: 29000, trend: "naik", change: "+3.5%", isPeak: true }
    ]
  },

  // Riwayat tren harga komoditas telur (2020 - 2026) untuk grafik Landing Page
  nationalTrendEgg: [
    { year: 2020, price: 24500, label: "2020" },
    { year: 2021, price: 25000, label: "2021" },
    { year: 2022, price: 29800, label: "2022" },
    { year: 2023, price: 31200, label: "2023" },
    { year: 2024, price: 42000, label: "2024: Rp42.000/kg", highlight: true, note: "Puncak Idul Fitri" },
    { year: 2025, price: 29500, label: "2025" },
    { year: 2026, price: 31000, label: "2026 (Estimasi)" }
  ],

  // Kamus Istilah Pangan untuk Halaman Panduan
  glossary: [
    {
      id: "rata-rata-nasional",
      title: "Harga Rata-rata Nasional",
      badge: "Indeks Pokok",
      description: "Nilai rata-rata tertimbang harga komoditas pangan dari seluruh pasar pantauan di 38 provinsi Indonesia yang dikumpulkan oleh enumerator lapangan Badan Pangan Nasional.",
      highlight: "Fungsinya: Menjadi patokan umum konsumen untuk melihat apakah harga di pasar daerah setempat wajar, di bawah rata-rata, atau di atas rata-rata.",
      icon: "⚖️"
    },
    {
      id: "disparitas-wilayah",
      title: "Disparitas Antar-Wilayah",
      badge: "Selisih Biaya",
      description: "Selisih atau perbedaan harga suatu jenis pangan antara daerah sentra produksi (seperti lumbung beras Jawa/Sulawesi) dengan daerah konsumen atau pulau terluar (seperti Papua/Maluku).",
      highlight: "Penyebab Utama: Ongkos logistik tol laut, jalur distribusi darat, serta ketersediaan pasokan pasca panen di wilayah tersebut.",
      icon: "🚚"
    },
    {
      id: "pola-musiman",
      title: "Pola Musiman & Panen Raya",
      badge: "Siklus Tahunan",
      description: "Kecenderungan harga berulang dalam siklus 12 bulan. Harga biasanya turun signifikan saat panen raya (stok melimpah) dan melonjak saat musim paceklik atau momen hari raya besar keagamaan.",
      highlight: "Tips Belanja: Konsumen dan pelaku UMKM dapat menimbun stok bahan kering tahan lama pada periode bulan termurah.",
      icon: "🌾"
    },
    {
      id: "harga-hap",
      title: "Harga Acuan Pembelian (HAP)",
      badge: "Regulasi",
      description: "Batas acuan harga yang ditetapkan resmi oleh Badan Pangan Nasional (Bapanas) di tingkat produsen (petani/peternak) dan tingkat konsumen agar harga tetap adil dan wajar bagi kedua belah pihak.",
      highlight: "Peran Pemerintah: Jika harga melebihi batas toleransi HAP, Bapanas bersama Bulog akan meluncurkan Operasi Pasar Murah (SPHP).",
      icon: "📜"
    }
  ]
};

// Pastikan dataset tersedia di window scope
if (typeof window !== "undefined") {
  window.CEKPANGAN_DATA = CEKPANGAN_DATA;
}
