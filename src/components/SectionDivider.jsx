import divider from "../assets/images/divider/divider.webp";

export function SectionDivider() {
  return (
    <div
      className="
        relative
        z-30
        flex
        w-full
        max-w-full
        items-center
        justify-center
        -my-20
        overflow-hidden
        py-3
      "
    >
      {/* =========================================
          GARIS PUTIH MENYILANG
      ========================================= */}

      {/* Garis utama 1 */}
      <div
        className="
          pointer-events-none
          absolute
          left-[-30px]
          right-[-30px]
          top-1/2
          h-[1.5px]
          rotate-[8deg]
          bg-[#EAEAE5]/80
          shadow-[0_0_10px_rgba(234,234,229,0.35)]
        "
      />

      {/* Garis utama 2 */}
      <div
        className="
          pointer-events-none
          absolute
          left-[-30px]
          right-[-30px]
          top-1/2
          h-[1.5px]
          -rotate-[8deg]
          bg-[#EAEAE5]/80
          shadow-[0_0_10px_rgba(234,234,229,0.35)]
        "
      />

      {/* Garis tipis 1 */}
      <div
        className="
          pointer-events-none
          absolute
          left-[-30px]
          right-[-30px]
          top-1/2
          h-px
          rotate-[4deg]
          bg-[#EAEAE5]/30
        "
      />

      {/* Garis tipis 2 */}
      <div
        className="
          pointer-events-none
          absolute
          left-[-30px]
          right-[-30px]
          top-1/2
          h-px
          -rotate-[4deg]
          bg-[#EAEAE5]/30
        "
      />

      {/* =========================================
          ORNAMENT KIRI
      ========================================= */}

      <span
        className="
          pointer-events-none
          absolute
          left-1
          z-40
          text-[11px]
          text-[#EAEAE5]
        "
      >
        ✦
      </span>

      <span
        className="
          pointer-events-none
          absolute
          left-5
          z-40
          text-[8px]
          text-[#EAEAE5]/70
        "
      >
        ◇
      </span>

      <span
        className="
          pointer-events-none
          absolute
          left-10
          z-40
          text-[7px]
          text-[#EAEAE5]/60
        "
      >
        •
      </span>

      {/* =========================================
          ORNAMENT KANAN
      ========================================= */}

      <span
        className="
          pointer-events-none
          absolute
          right-1
          z-40
          text-[11px]
          text-[#EAEAE5]
        "
      >
        ✦
      </span>

      <span
        className="
          pointer-events-none
          absolute
          right-5
          z-40
          text-[8px]
          text-[#EAEAE5]/70
        "
      >
        ◇
      </span>

      <span
        className="
          pointer-events-none
          absolute
          right-10
          z-40
          text-[7px]
          text-[#EAEAE5]/60
        "
      >
        •
      </span>

      {/* =========================================
          ORNAMENT TENGAH
      ========================================= */}

      <div
        className="
          relative
          z-50
          flex
          items-center
          justify-center
        "
      >
        {/* Glow belakang */}
        <div
          className="
            absolute
            h-20
            w-20
            rounded-full
            bg-[#EAEAE5]/5
            blur-xl
          "
        />

        {/* Divider */}
        <img
          src={divider}
          alt=""
          className="
            relative
            block
            w-[430px]
            max-w-[105%]
            object-contain
            drop-shadow-[0_0_8px_rgba(234,234,229,0.3)]
          "
        />
      </div>
    </div>
  );
}
