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
          <h1 className="text-xl font-bold text-white">
            Cek
            <span className="text-brand-yellow">Pangan</span>
          </h1>
          <Icon icon="codicon:verified" className="text-2xl text-white" />
        </div>
        <p className="text-xs text-white mt-1">Sumber: Data resmi Bapanas</p>
      </div>
      <div className="flex items-center">
        <Link to="/g"></Link>
        <Icon icon="akar-icons:question" className="text-3xl text-white"/>
      </div>
    </header>
  )
}

export default Header
