import { useMemo } from "react";

export function useGuestName() {
  return useMemo(() => {
    const path = window.location.pathname;

    const basePath = "/wedding-invitation/";

    if (!path.startsWith(basePath)) {
      return "Tamu Undangan";
    }

    let guestName = path.slice(basePath.length);

    guestName = guestName
      .replace(/^\/+|\/+$/g, "")
      .replace(/[-_]+/g, " ")
      .trim();

    if (!guestName) {
      return "Tamu Undangan";
    }

    return guestName
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  }, []);
}
