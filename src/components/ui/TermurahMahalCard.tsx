import { Icon } from "@iconify/react";

interface TermurahMahalCardProps {
  type: "termurah" | "termahal";
  harga: string;
  satuan: string;
}

export const TermurahMahalCard = ({
  type,
  harga,
  satuan,
}: TermurahMahalCardProps) => {
  const isTermahal = type === "termahal";

  return (
    <div
      className={`flex-1 p-3 rounded-2xl flex justify-center items-center gap-3 text-white ${
        isTermahal
          ? "bg-linear-to-r from-[#FF5900] to-brand-negative"
          : "bg-linear-to-r from-[#41B573] to-[#68CC4F]"
      }`}
    >
      {isTermahal ? (
        <Icon
          icon="andrsrxn:trend-up"
          fontWeight={100}
          className="bg-white p-1 rounded-md text-brand-negative text-3xl shrink-0"
        />
      ) : (
        <Icon
          icon="andrsrxn:trend-down"
          fontWeight={100}
          className="bg-white p-1 rounded-md text-brand-primary text-3xl shrink-0"
        />
      )}

      <div>
        <p className="text-xs">
          {isTermahal ? "Harga Termahal" : "Harga Termurah"}
        </p>
        <p className="text-sm font-bold">
          {harga}
          <span className="text-xs font-normal opacity-80">/{satuan}</span>
        </p>
      </div>
    </div>
  );
};