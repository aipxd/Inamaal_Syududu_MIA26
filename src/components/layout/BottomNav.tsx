import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";

interface NavItem {
  path: string;
  label: string;
  icon: string;
}

const navItems: NavItem[] = [
  { path: "/dashboard", label: "Cek Harga", icon: "bi:cash-stack" },
  { path: "/rank", label: "Peringkat Provinsi", icon: "akar-icons:map" },
  { path: "/guide", label: "Panduan", icon: "carbon:book" },
];

export const BottomNav = () => {
  return (
    <nav
      className="
        fixed bottom-4 left-1/2 -translate-x-1/2 w-[95%] max-w-lg z-50
        lg:bottom-auto lg:top-4 lg:max-w-2xl
      "
    >
      <div
        className="
          bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full shadow-xl
          py-1 flex justify-around items-center border border-white/30
          lg:py-2 lg:justify-center lg:gap-6
        "
      >
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }: { isActive: boolean }) =>
              `flex flex-col items-center justify-center gap-0.5 px-3 py-1.5 rounded-full transition-all duration-200 select-none
              lg:flex-row lg:gap-2 lg:px-5 lg:py-2 ${
                isActive
                  ? "text-white font-bold scale-105 underline underline-offset-4 decoration-2"
                  : "text-white/75 font-medium hover:text-white lg:hover:bg-white/10"
              }`
            }
          >
            <Icon icon={item.icon} className="text-2xl lg:text-3xl shrink-0" />
            <span className="text-xs tracking-tight lg:text-lg">{item.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;