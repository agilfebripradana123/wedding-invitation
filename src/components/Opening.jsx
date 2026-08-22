import { ChevronDown } from "lucide-react";
import { weddingData } from "../data/weddingData";
import { useGuestName } from "../hooks/useGuestName";
import weddingBackground from "../assets/images/background/wedding-bg1.webp";

export function Opening({ onOpen }) {
  const { bride, groom, akad } = weddingData;
  const guestName = useGuestName();

  return (
    <div
      className="
        fixed
        inset-0
        z-[100]
        flex
        justify-center
        overflow-hidden
        bg-[#080C0F]
      "
    >
      {/* =========================================
          DESKTOP BACKGROUND
      ========================================= */}
      <div
        className="
          absolute
          inset-0
          bg-cover
          bg-center
          bg-no-repeat
          brightness-[0.75]
        "
        style={{
          backgroundImage: `url(${weddingBackground})`,
        }}
      />

      {/* Desktop Blur */}
      <div
        className="
          absolute
          inset-0
          backdrop-blur-[6px]
        "
      />

      {/* Desktop Overlay */}
      <div
        className="
          absolute
          inset-0
          bg-[#080C0F]/40
        "
      />

      {/* =========================================
          MOBILE FRAME
      ========================================= */}
      <div
        className="
          relative
          h-full
          w-full
          max-w-[430px]
          overflow-hidden
          shadow-[0_0_60px_rgba(8,12,15,0.45)]
        "
      >
        {/* Background */}
        <div
          className="
            absolute
            inset-0
            bg-cover
            bg-center
            bg-no-repeat
            brightness-[1.1]
          "
          style={{
            backgroundImage: `url(${weddingBackground})`,
          }}
        />

        {/* Overlay */}
        <div
          className="
            absolute
            inset-0
            bg-[#080C0F]/25
          "
        />

        {/* =========================================
    CONTENT
========================================= */}
        <div
          className="
    relative
    z-10
    flex
    h-full
    w-full
    flex-col
    items-center
    px-6
    text-center
  "
        >
          {/* =========================================
      TOP CONTENT
  ========================================= */}
          <div className="mt-[20%] flex flex-col items-center">
            {/* The Wedding Of */}
            <p
              className="
        text-[9px]
        font-medium
        uppercase
        tracking-[0.4em]
        text-[#EAEAE5]
      "
            >
              The Wedding Of
            </p>

            {/* Couple */}
            <h1
              className="
        mt-3
        flex
        items-center
        justify-center
        gap-4
        font-['Cormorant_Garamond']
        text-4xl
        font-medium
        leading-none
        tracking-wide
        text-[#EAEAE5]
      "
            >
              {/* Bride */}
              <span>
                <span className="font-['Great_Vibes'] text-5xl">
                  {bride.nickname.charAt(0)}
                </span>
                {bride.nickname.slice(1)}
              </span>

              {/* And */}
              <span
                className="
          font-['Great_Vibes']
          text-3xl
          font-normal
        "
              >
                &
              </span>

              {/* Groom */}
              <span>
                <span className="font-['Great_Vibes'] text-5xl">
                  {groom.nickname.charAt(0)}
                </span>
                {groom.nickname.slice(1)}
              </span>
            </h1>

            {/* Date With Lines */}
            <div
              className="
        mt-5
        flex
        w-full
        items-center
        justify-center
        gap-3
      "
            >
              <span className="h-px w-12 bg-[#EAEAE5]/60" />

              <p
                className="
          whitespace-nowrap
          text-[9px]
          font-medium
          uppercase
          tracking-[0.25em]
          text-[#EAEAE5]
        "
              >
                24 SEP 2026
              </p>

              <span className="h-px w-12 bg-[#EAEAE5]/60" />
            </div>
          </div>

          {/* =========================================
      LARGE EMPTY SPACE
      FOTO PASANGAN TERLIHAT DI SINI
  ========================================= */}
          <div className="flex-1" />

          {/* =========================================
      GUEST CONTENT
  ========================================= */}
          <div className="mb-[12%] flex flex-col items-center">
            {/* Kepada Yth */}
            <p
              className="
        text-[9px]
        uppercase
        tracking-[0.25em]
        text-[#EAEAE5]/80
      "
            >
              Kepada Yth.
            </p>

            {/* Guest Name */}
            <p
              className="
        mt-2
        font-['Cormorant_Garamond']
        text-xl
        font-medium
        tracking-wide
        text-[#EAEAE5]
      "
            >
              {guestName}
            </p>

            {/* Open Invitation */}
            <button
              type="button"
              onClick={onOpen}
              className="
        mt-7
        flex
        items-center
        gap-2
        rounded-full
        border
        border-[#EAEAE5]/50
        bg-[#1C2A32]/50
        px-7
        py-3
        text-[10px]
        font-medium
        uppercase
        tracking-[0.25em]
        text-[#EAEAE5]
        backdrop-blur-sm
        transition-all
        duration-300
        hover:border-[#EAEAE5]/80
        hover:bg-[#324C5D]/70
        active:scale-95
      "
            >
              Open Invitation
              <ChevronDown size={14} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
