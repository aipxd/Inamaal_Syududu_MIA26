import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";

interface NavItem {
  path: string;
  label: string;
  icon: any;
}

const navItems: NavItem[] = [
  {
    path: "/",
    label: "Cek Harga",
    icon: <Icon icon="bi:cash-stack" fontSize={25}/>,
  },
  {
    path: "/rank",
    label: "Peringkat Provinsi",
    icon: <Icon icon="akar-icons:map" fontSize={25}/>,
  },
  {
    path: "/guide",
    label: "Panduan",
    icon: <Icon icon="carbon:book" fontSize={25}/>,
  },
];

export const BottomNav = () => {
  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] max-w-md z-50">
      <div className="bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full shadow-xl py-1 flex justify-around items-center border border-white/30">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center gap-0.5 px-3 py-1.5 rounded-full transition-all duration-200 select-none ${
                isActive
                  ? "text-white font-bold scale-105 underline underline-offset-4 decoration-2"
                  : "text-white/75 font-medium hover:text-white"
              }`
            }
          >
            {/* Icon Emoji */}
            <span className="text-xl leading-none">{item.icon}</span>

            {/* Label Navigasi */}
            <span className="text-xs tracking-tight">{item.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;