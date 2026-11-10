// Komponen Skeleton khusus area hasil peringkat
export const RankSkeleton = () => {
  return (
    <div className="w-full space-y-4">
      {/* Skeleton SelectedProvince */}
      <div className="w-full h-28 bg-slate-100 animate-pulse rounded-xl" />

      {/* Skeleton RankList Header */}
      <div className="flex items-center justify-between my-5">
        <div className="h-4 w-44 bg-slate-100 animate-pulse rounded" />
        <div className="h-4 w-24 bg-slate-100 animate-pulse rounded" />
      </div>

      {/* Skeleton 5 Baris Item List */}
      <div className="space-y-3">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="w-full h-14 bg-slate-100 animate-pulse rounded-lg" />
        ))}
      </div>
    </div>
  );
};