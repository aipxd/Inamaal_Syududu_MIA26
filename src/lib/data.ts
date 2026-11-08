export interface Commodity {
  id: string;
  label: string;
  unit: string;
  csvName: string;
}

export interface MetaData {
  source: string;
  dataset: string;
  license: string;
  unit: Record<string, string>;
  months: string[];
  provinces: string[];
  commodities: Commodity[];
  latestMonth: string;
  seasonalYears: string;
  limitedProvinces: string[];
}

export interface LatestPrice {
  price: number;
  mom: number;
  yoy: number;
}

export type LatestData = Record<string, Record<string, LatestPrice>>;
export type MonthlyData = Record<string, Record<string, number[]>>;
export type NationalData = Record<string, number[]>;
export type SeasonalData = Record<string, Record<string, number[]>>;

export interface AppData {
  meta: MetaData;
  latest: LatestData;
  monthly: MonthlyData;
  national: NationalData;
  seasonal: SeasonalData;
}

export async function fetchCekPanganData(): Promise<AppData> {
  const [metaRes, latestRes, monthlyRes, nationalRes, seasonalRes] = await Promise.all([
    fetch('/data/meta.json'),
    fetch('/data/latest.json'),
    fetch('/data/monthly.json'),
    fetch('/data/national.json'),
    fetch('/data/seasonal.json')
  ]);

  const [meta, latest, monthly, national, seasonal] = await Promise.all([
    metaRes.json(),
    latestRes.json(),
    monthlyRes.json(),
    nationalRes.json(),
    seasonalRes.json()
  ]);

  return { meta, latest, monthly, national, seasonal };
}

// Utility untuk format rupiah
export function formatRupiah(amount: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0
  }).format(amount);
}

// Nama bulan untuk indeks musiman (0-11)
export const MONTH_NAMES_ID = [
  'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
  'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
];

// Generator narasi otomatis yang ramah lansia
export function generateInsightMessage(
  seasonalIndices: number[] | undefined,
  commodityName: string,
  provinceName: string
    ): string {
  if (!seasonalIndices || seasonalIndices.length !== 12) {
    return `Informasi tren pola musiman untuk ${commodityName} di ${provinceName} belum tersedia.`;
  }

  let minIdx = 0;
  let maxIdx = 0;

  seasonalIndices.forEach((val, idx) => {
    if (val < seasonalIndices[minIdx]) minIdx = idx;
    if (val > seasonalIndices[maxIdx]) maxIdx = idx;
  });

  const diffPercent = ((seasonalIndices[maxIdx] - seasonalIndices[minIdx]) / seasonalIndices[minIdx]) * 100;

  if (diffPercent < 5) {
    return `Harga ${commodityName} di ${provinceName} cenderung relatif stabil sepanjang tahun.`;
  }
  return `Berdasarkan pola historis, harga ${commodityName} di ${provinceName} paling murah biasanya ada di bulan ${MONTH_NAMES_ID[minIdx]} dan paling mahal di bulan ${MONTH_NAMES_ID[maxIdx]}.`;
}