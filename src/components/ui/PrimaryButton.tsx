import { Icon } from "@iconify/react";

interface PrimaryButtonProps {
  onClick?: () => void;
  label: string;
}

export const PrimaryButton = ({ onClick, label }: PrimaryButtonProps) => {
  return (
    <div>
      <button 
        onClick={onClick}
        className="bg-brand-yellow w-full mt-5 p-3 rounded-xl font-semibold flex justify-center items-center gap-2 shadow-sm cursor-pointer hover:bg-yellow-400 transition-all duration-200 ease-out hover:scale-[1.01] lg:text-xl"
      >
        <Icon icon="akar-icons:search" fontSize={20} />
        <label className="cursor-pointe">{label}</label>
      </button>
    </div>
  );
};