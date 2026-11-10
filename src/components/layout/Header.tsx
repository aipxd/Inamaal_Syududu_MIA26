import { Icon } from '@iconify/react';
import { Link } from "react-router-dom";

interface HeaderProps {
  onOpenGuide?: () => void;
}

const Header = ({ onOpenGuide: _onOpenGuide }: HeaderProps) => {
  return (
    <header className="flex justify-between px-5 py-3">
      <div>
        <div className="flex gap-1 items-center">
          <h1 className="text-xl font-bold text-white lg:text-3xl">
            Cek
            <span className="text-brand-yellow">Pangan</span>
          </h1>
          <Icon icon="codicon:verified" className="text-2xl text-white lg:text-4xl" />
        </div>
        <p className="text-xs text-white mt-1 lg:text-sm">Sumber: Data resmi Bapanas</p>
      </div>

      <div className="flex items-center">
        <div className="relative group flex items-center">
          <div className="absolute right-full top-1/2 -translate-y-1/2 mr-2 flex items-center pointer-events-none z-30 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out">
            <span className="bg-white text-gray-800 text-xs font-medium px-3 py-1.5 rounded-xl shadow-md whitespace-nowrap">
              Sumber Bapanas
            </span>
          </div>

          {/* Icon Link */}
          <a
            href="https://panelharga.badanpangan.go.id/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center"
          >
            <Icon 
              icon="carbon:information" 
              className="text-3xl text-white lg:text-4xl hover:opacity-80 transition-opacity" 
            />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;