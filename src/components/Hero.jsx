import { ChevronDown } from "lucide-react";
import { weddingData } from "../data/weddingData";

export function Hero() {
  const { bride, groom, akad } = weddingData;

  return (
    <section
      id="home"
      className="
        flex min-h-screen
        items-center justify-center
        px-6
        pb-24
        text-center
      "
    >
      <div className="flex flex-col items-center">
        {/* Small Heading */}
        <p
          className="
            mb-7
            text-[10px]
            font-medium
            uppercase
            tracking-[0.4em]
            text-[#EAEAE5]
          "
        >
          The Wedding Of
        </p>

        {/* Bride */}
        <h1
          className="
            font-['Cormorant_Garamond']
            text-6xl
            font-medium
            leading-none
            tracking-wide
            text-[#EAEAE5]
          "
        >
          <span
            className="
              font-['Great_Vibes']
              text-7xl
              text-[#EAEAE5]
            "
          >
            {bride.nickname.charAt(0)}
          </span>
          {bride.nickname.slice(1)}
        </h1>

        {/* And */}
        <span
          className="
            my-5
            font-serif
            text-3xl
            italic
            text-[#EAEAE5]
          "
        >
          &
        </span>

        {/* Groom */}
        <h1
          className="
            font-['Cormorant_Garamond']
            text-6xl
            font-medium
            leading-none
            tracking-wide
            text-[#EAEAE5]
          "
        >
          <span
            className="
              font-['Great_Vibes']
              text-7xl
              text-[#EAEAE5]
            "
          >
            {groom.nickname.charAt(0)}
          </span>
          {groom.nickname.slice(1)}
        </h1>

        {/* Divider */}
        <div className="my-9 flex items-center gap-4">
          <span className="h-px w-12 bg-[#EAEAE5]" />

          <span className="text-sm text-[#EAEAE5]">✦</span>

          <span className="h-px w-12 bg-[#EAEAE5]" />
        </div>

        {/* Wedding Date */}
        <p
          className="
            text-xs
            font-medium
            uppercase
            tracking-[0.25em]
            text-[#EAEAE5]
          "
        >
          {akad.date}
        </p>

        {/* Invitation Message */}
        <p
          className="
            mt-5
            max-w-xs
            text-sm
            leading-relaxed
            text-[#EAEAE5]
          "
        >
          Together with our families,
          <br />
          we invite you to celebrate
          <br />
          our wedding day.
        </p>

        {/* Scroll Indicator */}
        <a
          href="#wedding"
          className="
            mt-12
            flex
            flex-col
            items-center
            gap-2
            text-[#EAEAE5]
            transition-opacity
            duration-200
            hover:opacity-70
          "
        >
          <span
            className="
              text-[9px]
              uppercase
              tracking-[0.3em]
              text-[#EAEAE5]
            "
          >
            Scroll
          </span>

          <ChevronDown
            size={18}
            strokeWidth={1.5}
            className="animate-bounce text-[#EAEAE5]"
          />
        </a>
      </div>
    </section>
  );
}
