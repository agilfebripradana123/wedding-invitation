import { useEffect, useState } from "react";
import {
  House,
  Landmark,
  Heart,
  Images,
  MapPin,
  CalendarDays,
} from "lucide-react";

import { navItems } from "../data/navData";

const icons = {
  House,
  Landmark,
  Heart,
  Images,
  MapPin,
  CalendarDays,
};

export function BottomBar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const viewportCenter = window.innerHeight * 0.45;

      let currentSection = "home";
      let closestDistance = Infinity;

      navItems.forEach((item) => {
        const section = document.getElementById(item.id);

        if (!section) return;

        const rect = section.getBoundingClientRect();

        // Titik tengah section
        const sectionCenter = rect.top + rect.height / 2;

        // Jarak section dengan titik fokus layar
        const distance = Math.abs(sectionCenter - viewportCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          currentSection = item.id;
        }
      });

      setActiveSection(currentSection);
    };

    // Jalankan saat pertama kali
    handleScroll();

    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const handleNavigation = (id) => {
    const section = document.getElementById(id);

    if (!section) return;

    // Langsung aktifkan menu
    setActiveSection(id);

    // Scroll smooth
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <nav
      className="
        fixed
        bottom-3
        left-1/2
        z-50
        w-[calc(100%-24px)]
        max-w-[406px]
        -translate-x-1/2
        rounded-2xl
        border border-[#5D6E74]/30
        bg-[#1C2A32]/95
        backdrop-blur-md
        shadow-[0_-4px_20px_rgba(8,12,15,0.25)]
      "
    >
      <div
        className="
          flex w-full
          items-center
          justify-center
          gap-1
          px-1.5
          py-2
        "
      >
        {navItems.map((item) => {
          const Icon = icons[item.icon];

          const isActive = activeSection === item.id;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => handleNavigation(item.id)}
              className={`
                flex min-w-0 flex-1
                flex-col items-center justify-center
                gap-1
                rounded-xl
                px-1 py-1.5
                cursor-pointer
                transition-all duration-200

                ${
                  isActive
                    ? "bg-[#324C5D] text-[#9BA8A1]"
                    : "text-[#C2C8BF]/70 hover:bg-[#324C5D]/60 hover:text-[#EAEAE5]"
                }
              `}
            >
              <Icon size={19} strokeWidth={isActive ? 2.2 : 1.8} />

              <span
                className="
                  text-center
                  text-[8px]
                  font-medium
                  leading-tight
                  whitespace-nowrap
                "
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
