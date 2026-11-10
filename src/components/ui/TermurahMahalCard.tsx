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
      className={`flex-1 p-2 rounded-xl flex justify-center items-center gap-3 text-white ${
        isTermahal
          ? "bg-linear-to-r from-[#FF5900] to-brand-negative"
          : "bg-linear-to-r from-[#41B573] to-[#68CC4F]"
      }`}
    >
      {isTermahal ? (
        <Icon
          icon="andrsrxn:trend-up"
          fontWeight={100}
          className="bg-white p-1 rounded-md text-brand-negative text-3xl shrink-0 lg:text-4xl"
        />
      ) : (
        <Icon
          icon="andrsrxn:trend-down"
          fontWeight={100}
          className="bg-white p-1 rounded-md text-brand-primary text-3xl shrink-0 lg:text-4xl"
        />
      )}

      <div>
        <p className="text-tiny lg:text-base">
          {isTermahal ? "Harga Termahal" : "Harga Termurah"}
        </p>
        <p className="text-sm font-bold lg:text-2xl">
          {harga}
          <span className="text-tiny font-normal opacity-80 lg:text-sm">{satuan}</span>
        </p>
      </div>
    </div>
  );
};