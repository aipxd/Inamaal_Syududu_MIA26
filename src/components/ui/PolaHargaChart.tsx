import { Bar, BarChart, CartesianGrid, Cell, LabelList, Tooltip, XAxis } from 'recharts';
import { formatRupiah } from '../../lib/data';

interface ChartDataItem {
  month: string;
  price: number;
}

interface PolaHargaChartProps {
  data?: ChartDataItem[];
}

export default function PolaHargaChart({ data = [] }: PolaHargaChartProps) {
  // Fallback jika data props belum siap
  const chartData = data.length > 0 ? data : [
    { month: 'Jan', price: 0 },
    { month: 'Feb', price: 0 },
    { month: 'Mar', price: 0 },
    { month: 'Apr', price: 0 },
    { month: 'Mei', price: 0 },
    { month: 'Jun', price: 0 },
    { month: 'Jul', price: 0 },
    { month: 'Agu', price: 0 },
    { month: 'Sep', price: 0 },
    { month: 'Okt', price: 0 },
    { month: 'Nov', price: 0 },
    { month: 'Des', price: 0 },
  ];

  // 1. Cari nilai tertinggi dan terendah secara otomatis
  const prices = chartData.map((d) => d.price);
  const maxVal = Math.max(...prices);
  const minVal = Math.min(...prices);

  // Dapatkan nama bulan termahal & termurah untuk tampilan legenda
  const maxMonth = chartData.find((d) => d.price === maxVal)?.month;
  const minMonth = chartData.find((d) => d.price === minVal)?.month;

  return (
    <div className="bg-white p-4 rounded-2xl shadow-lg border border-black/15 w-full">
      {/* Header Judul */}
      <div className="flex items-center gap-2 mb-3">
        <div className="h-4 w-2 bg-[#41B573] rounded-xl"></div>
        <h3 className="font-semibold text-sm text-slate-800">
          Pola Harga 12 Bulan (Rata-Rata 5 Tahun)
        </h3>
      </div>

      {/* 2. Legenda Warna */}
      <div className="flex items-center gap-4 text-xs mb-4 px-2">
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

      {/* 3. Area Chart */}
      <div className="w-full">
        <BarChart
          style={{ width: '100%', maxWidth: 600, maxHeight: '70vh', aspectRatio: 1.7 }}
          responsive
          data={chartData}
          margin={{ top: 25, right: 10, left: 10, bottom: 5 }}
        >
          <CartesianGrid stroke="#e2e8f0" strokeDasharray="3 3" vertical={false} />
          <XAxis 
            dataKey="month" 
            stroke="#64748b" 
            fontSize={11}
            interval={0}
            tickLine={false}
          />
          <Tooltip 
            formatter={(value: any) => [formatRupiah(Number(value) || 0), 'Harga Rata-Rata']}
            cursor={{ fill: '#63636320' }}
          />
          
          <Bar dataKey="price" barSize={26} radius={[4, 4, 0, 0]}>
            {/* 4. Pemetaan 3 warna dinamis pada tiap batang */}
            {chartData.map((entry, index) => {
              let color = '#E2E8F0'; // Default: Abu-abu (Bulan lainnya)
              if (entry.price === maxVal && maxVal > 0) color = '#EF4444'; // Merah (Termahal)
              if (entry.price === minVal && minVal > 0) color = '#41B573'; // Hijau (Termurah)

              return <Cell key={`cell-${index}`} fill={color} />;
            })}

            <LabelList 
              dataKey="price" 
              position="top" 
              fontSize={10} 
              fontWeight="bold"
              fill="#475569"
              formatter={(val: any) => (val ? `${(Number(val) / 1000).toFixed(1)}k` : '')}
            />
          </Bar>
        </BarChart>
      </div>

      {/* Footer Keterangan */}
      <span className="text-xs text-brand-gray mt-2 block italic text-center">
        *Harga rata-rata per kg/liter dalam ribuan rupiah (k)
      </span>
    </div>
  );
}