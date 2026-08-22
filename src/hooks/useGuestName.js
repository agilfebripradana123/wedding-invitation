import { useMemo } from "react";

export function useGuestName() {
  const guestName = useMemo(() => {
    const pathname = window.location.pathname;

    // Ambil bagian terakhir dari URL
    const segments = pathname.split("/").filter(Boolean);
    const slug = segments.at(-1);

    // Jika tidak ada nama tamu
    if (!slug || slug === "wedding-invitation") {
      return "Tamu Undangan";
    }

    // Ubah slug menjadi nama
    return slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }, []);

  return guestName;
}
