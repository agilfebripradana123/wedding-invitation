import { CalendarDays, Clock3, MapPin } from "lucide-react";
import { weddingData } from "../data/weddingData";

export function EventSection() {
  const { akad, reception } = weddingData;

  return (
    <section
      id="event"
      className="
        flex
        min-h-screen
        items-center
        justify-center
        px-6
        py-24
        text-center
      "
    >
      <div className="w-full">
        {/* =========================================
            HEADER
        ========================================= */}
        <div className="mb-14 flex flex-col items-center">
          <span className="text-sm text-[#9BA8A1]">✦</span>

          <p
            className="
              mt-4
              text-[9px]
              font-medium
              uppercase
              tracking-[0.45em]
              text-[#EAEAE5]/80
            "
          >
            Wedding Events
          </p>

          <h2
            className="
              mt-3
              font-['Cormorant_Garamond']
              text-4xl
              font-medium
              leading-none
              text-[#EAEAE5]
            "
          >
            Our Special Day
          </h2>

          <p
            className="
              mt-4
              max-w-[280px]
              text-xs
              leading-relaxed
              text-[#C2C8BF]
            "
          >
            We would be honored to have you celebrate these special moments with
            us.
          </p>
        </div>

        {/* =========================================
            RESEPSI
        ========================================= */}
        <div className="flex flex-col items-center">
          <p
            className="
              text-[9px]
              font-medium
              uppercase
              tracking-[0.4em]
              text-[#9BA8A1]
            "
          >
            Reception
          </p>

          <h3
            className="
              mt-3
              font-['Cormorant_Garamond']
              text-4xl
              font-medium
              text-[#EAEAE5]
            "
          >
            Resepsi
          </h3>

          {/* Date */}
          <div className="mt-7 flex flex-col items-center">
            <CalendarDays
              size={20}
              strokeWidth={1.3}
              className="text-[#EAEAE5]"
            />

            <p
              className="
    mt-3
    text-lg
    font-bold
    text-[#EAEAE5]
  "
            >
              {reception.day}
            </p>

            <p
              className="
    mt-1
    text-base
    font-bold
    text-[#EAEAE5]
  "
            >
              {reception.date}
            </p>
          </div>

          {/* Location */}
          <div
            className="
              mt-6
              flex
              max-w-[280px]
              items-start
              justify-center
              gap-2
            "
          >
            <MapPin
              size={15}
              strokeWidth={1.3}
              className="
                mt-0.5
                shrink-0
                text-[#9BA8A1]
              "
            />

            <p
              className="
    text-sm
    font-bold
    leading-relaxed
    text-[#EAEAE5]
  "
            >
              {reception.address}
            </p>
          </div>
        </div>

        {/* =========================================
            DIVIDER
        ========================================= */}
        <div
          className="
            my-12
            flex
            items-center
            justify-center
            gap-4
          "
        >
          <span className="h-px flex-1 bg-[#EAEAE5]/15" />

          <span
            className="
              text-sm
              text-[#9BA8A1]
            "
          >
            ✦
          </span>

          <span className="h-px flex-1 bg-[#EAEAE5]/15" />
        </div>

        {/* =========================================
            AKAD
        ========================================= */}
        <div className="flex flex-col items-center">
          <p
            className="
              text-[9px]
              font-medium
              uppercase
              tracking-[0.4em]
              text-[#9BA8A1]
            "
          >
            Ceremony
          </p>

          <h3
            className="
              mt-3
              font-['Cormorant_Garamond']
              text-4xl
              font-medium
              text-[#EAEAE5]
            "
          >
            Akad Nikah
          </h3>

          {/* Date */}
          <div className="mt-7 flex flex-col items-center">
            <CalendarDays
              size={20}
              strokeWidth={1.3}
              className="text-[#EAEAE5]"
            />

            <p
              className="
    mt-3
    text-base
    font-bold
    text-[#EAEAE5]
  "
            >
              {akad.day}, {akad.date}
            </p>
          </div>

          {/* Time */}
          <div
            className="
    mt-5
    flex
    items-center
    justify-center
    gap-3
    text-[#EAEAE5]
  "
          >
            <Clock3 size={19} strokeWidth={1.6} />

            <span className="text-base font-bold">{akad.time}</span>
          </div>

          {/* Location */}
          <div
            className="
              mt-5
              flex
              max-w-[280px]
              items-start
              justify-center
              gap-2
            "
          >
            <MapPin
              size={15}
              strokeWidth={1.3}
              className="
                mt-0.5
                shrink-0
                text-[#9BA8A1]
              "
            />

            <p
              className="
    text-sm
    font-bold
    leading-relaxed
    text-[#EAEAE5]
  "
            >
              {akad.address}
            </p>
          </div>
        </div>

        {/* =========================================
            BOTTOM ORNAMENT
        ========================================= */}
        <div
          className="
            mt-14
            flex
            items-center
            justify-center
            gap-3
          "
        >
          <span className="h-px w-10 bg-[#EAEAE5]/15" />

          <span className="text-xs text-[#9BA8A1]">✦</span>

          <span className="h-px w-10 bg-[#EAEAE5]/15" />
        </div>
      </div>
    </section>
  );
}
