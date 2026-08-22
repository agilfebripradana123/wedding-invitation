import { weddingData } from "../data/weddingData";

export function WeddingSection() {
  const { bride, groom } = weddingData;

  return (
    <section
      id="wedding"
      className="
        flex min-h-screen
        items-center justify-center
        px-6
        py-24
        text-center
      "
    >
      <div className="w-full">
        {/* Section Intro */}
        <div className="mb-12">
          <span className="text-sm text-[#EAEAE5]">✦</span>

          <p
            className="
              mt-4
              text-[10px]
              font-medium
              uppercase
              tracking-[0.35em]
              text-[#EAEAE5]
            "
          >
            The Wedding
          </p>
        </div>

        {/* Bride */}
        <div className="flex flex-col items-center">
          <p
            className="
              text-[9px]
              font-medium
              uppercase
              tracking-[0.35em]
              text-[#EAEAE5]
            "
          >
            The Bride
          </p>

          <h2
            className="
              mt-4
              font-['Great_Vibes']
              text-5xl
              leading-none
              text-[#EAEAE5]
            "
          >
            {bride.nickname}
          </h2>

          <p
            className="
              mt-2
              font-['Cormorant_Garamond']
              text-lg
              tracking-wide
              text-[#EAEAE5]
            "
          >
            {bride.fullName.slice(bride.nickname.length)}
          </p>

          <p
            className="
              mt-5
              text-[10px]
              uppercase
              tracking-[0.2em]
              text-[#EAEAE5]/80
            "
          >
            Daughter of
          </p>

          <p
            className="
              mt-2
              max-w-[260px]
              text-sm
              leading-relaxed
              text-[#EAEAE5]
            "
          >
            {bride.parents}
          </p>
        </div>

        {/* & */}
        <div
          className="
            my-12
            font-['Great_Vibes']
            text-4xl
            text-[#EAEAE5]
          "
        >
          &
        </div>

        {/* Groom */}
        <div className="flex flex-col items-center">
          <p
            className="
              text-[9px]
              font-medium
              uppercase
              tracking-[0.35em]
              text-[#EAEAE5]
            "
          >
            The Groom
          </p>

          <h2
            className="
              mt-4
              font-['Great_Vibes']
              text-5xl
              leading-none
              text-[#EAEAE5]
            "
          >
            {groom.nickname}
          </h2>

          <p
            className="
              mt-2
              font-['Cormorant_Garamond']
              text-lg
              tracking-wide
              text-[#EAEAE5]
            "
          >
            {groom.fullName.slice(groom.nickname.length)}
          </p>

          <p
            className="
              mt-5
              text-[10px]
              uppercase
              tracking-[0.2em]
              text-[#EAEAE5]/80
            "
          >
            Son of
          </p>

          <p
            className="
              mt-2
              max-w-[260px]
              text-sm
              leading-relaxed
              text-[#EAEAE5]
            "
          >
            {groom.parents}
          </p>
        </div>

        {/* Bottom Ornament */}
        <div className="mt-14">
          <span className="text-sm text-[#EAEAE5]">✦</span>
        </div>
      </div>
    </section>
  );
}
