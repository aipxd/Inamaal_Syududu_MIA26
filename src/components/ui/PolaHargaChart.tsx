import { Bar, BarChart, CartesianGrid, Cell, LabelList, Tooltip, XAxis } from 'recharts';
import { formatRupiah } from '../../lib/data';
import { useEffect, useState } from 'react';

interface ChartDataItem {
  month: string;
  price: number;
}

interface PolaHargaChartProps {
  data?: ChartDataItem[];
}

const useIsDesktop = (breakpoint = 1024) => {
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== 'undefined' ? window.innerWidth >= breakpoint : false
  );

  useEffect(() => {
    const mq = window.matchMedia(`(min-width: ${breakpoint}px)`);
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    setIsDesktop(mq.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, [breakpoint]);

  return isDesktop;
}

const DEFAULT_DATA: ChartDataItem[] = [
  'Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun',
  'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des',
].map((month) => ({ month, price: 0 }));

export default function PolaHargaChart({ data = [] }: PolaHargaChartProps) {
  const chartData = data.length > 0 ? data : DEFAULT_DATA;
  const isDekstop = useIsDesktop();

  // Nilai tertinggi & terendah (abaikan bulan tanpa data)
  const prices = chartData.map((d) => d.price).filter((p) => p > 0);
  const maxVal = prices.length > 0 ? Math.max(...prices) : 0;
  const minVal = prices.length > 0 ? Math.min(...prices) : 0;

  const maxMonth = chartData.find((d) => d.price === maxVal && maxVal > 0)?.month;
  const minMonth = chartData.find((d) => d.price === minVal && minVal > 0)?.month;

  return (
    <div className="bg-white p-4 lg:p-6 rounded-2xl shadow-lg border border-black/15 w-full max-w-[2000px] lg:max-w-[1600px]">
      {/* Header Judul */}
      <div className="flex items-center gap-2 mb-3">
        <div className="h-4 w-2 bg-[#41B573] rounded-xl"></div>
        <h3 className="font-semibold text-sm lg:text-xl text-slate-800">
          Pola Harga 12 Bulan (Rata-Rata 5 Tahun)
        </h3>
      </div>

      {/* Legenda Warna */}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs lg:text-lg mb-4 px-2">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-[#41B573]"></span>
          <span className="text-slate-600 font-medium">Termurah ({minMonth || '-'})</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-[#EF4444]"></span>
          <span className="text-slate-600 font-medium">Termahal ({maxMonth || '-'})</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-slate-200"></span>
          <span className="text-slate-500">Bulan lainnya</span>
        </div>
      </div>

      {/* Chart */}
      <div className="w-full ">
        <BarChart
          className="w-full aspect-[1.7] max-h-[70vh] lg:aspect-[2.5] lg:max-h-[420px]"
          responsive
          data={chartData}
          margin={{ top: 25, right: 10, left: 10, bottom: 5 }}
        >
          <CartesianGrid stroke="#e2e8f0" strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="month"
            stroke="#64748b"
            fontSize={isDekstop? 15 : 10}
            interval={0}
            tickLine={false}
          />
          <Tooltip
            formatter={(value: any) => [formatRupiah(Number(value) || 0), 'Harga Rata-Rata']}
            cursor={{ fill: '#63636320' }}
          />

          <Bar dataKey="price" maxBarSize={isDekstop? 60 : 48} radius={[4, 4, 0, 0]}>
            {chartData.map((entry, index) => {
              let color = '#E2E8F0'; // Bulan lainnya
              if (entry.price === maxVal && maxVal > 0) color = '#EF4444'; // Termahal
              if (entry.price === minVal && minVal > 0) color = '#41B573'; // Termurah

              return <Cell key={`cell-${index}`} fill={color} />;
            })}

            <LabelList
              className="text-[8px] lg:text-lg"
              dataKey="price"
              position="top"
              fontWeight="bold"
              fill="#475569"
              formatter={(val: any) => (val ? `${(Number(val) / 1000).toFixed(1)}k` : '')}
            />
          </Bar>
        </BarChart>
      </div>

      {/* Footer Keterangan */}
      <span className="text-xs text-brand-gray mt-2 block italic text-center lg:text-lg">
        *Harga rata-rata per kg/liter dalam ribuan rupiah (k)
      </span>
    </div>
  );
}