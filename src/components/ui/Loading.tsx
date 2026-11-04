export const Loading = () => {
  return (
    <div className="bg-brand-bg rounded-t-2xl p-4 min-h-screen flex flex-col items-start gap-5 pt-10 pb-25 w-full lg:px-40 lg:pt-10 lg:flex-row lg:flex-wrap lg:gap-10">
      <div className="bg-slate-200 animate-pulse w-full h-45 rounded-2xl lg:h-100 lg:w-[calc(42%-10px)]"></div>
      <div className="bg-slate-200 animate-pulse w-full h-45 rounded-2xl lg:h-100 lg:flex-1"></div>
      <div className="bg-slate-200 animate-pulse w-full h-45 rounded-2xl lg:h-100"></div>
    </div>
  )
}