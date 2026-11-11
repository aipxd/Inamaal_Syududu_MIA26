import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

export const ScrollToTopButton = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 100;
      setShow(nearBottom);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-24 inset-x-0 z-40 flex justify-center pointer-events-none transition-all duration-300 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <button
        type="button"
        aria-label="Kembali ke atas"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`w-11 h-11 rounded-full bg-brand-primary text-white shadow-lg flex items-center justify-center cursor-pointer ${
          show ? "pointer-events-auto animate-hop-soft" : ""
        }`}
      >
        <Icon icon="lucide:arrow-up" className="text-xl" />
      </button>
    </div>
  );
};