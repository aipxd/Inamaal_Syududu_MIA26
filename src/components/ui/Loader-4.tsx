export const Loader = () => {
  return (
    <div className="flex items-center justify-center py-16 w-full">
      <div className="grid grid-cols-3 gap-1.5 w-16 h-16">
        {[...Array(9)].map((_, i) => (
          <div
            key={i}
            className="w-full h-full rounded-md bg-emerald-500 animate-pulse"
            style={{
              animationDelay: `${(i * 0.12).toFixed(2)}s`,
              animationDuration: "1s",
              opacity: 0.35 + ((i % 5) * 0.15),
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Loader;