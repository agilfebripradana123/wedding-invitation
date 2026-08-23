import { ExternalLink, MapPin } from "lucide-react";
import { weddingData } from "../data/weddingData";

export function LocationSection() {
  const { location } = weddingData;

  return (
    <section
      id="location"
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
        {/* Header */}
        <div className="mb-12 flex flex-col items-center" data-aos="fade-up">
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
            Location
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
            Where We Celebrate
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
            We would be delighted to welcome you to our special day.
          </p>
        </div>

        {/* Map */}
        <div
          data-aos="zoom-in"
          className="
            relative
            h-[250px]
            w-full
            overflow-hidden
            rounded-[24px]
            border
            border-[#EAEAE5]/15
          "
        >
          <iframe
            title="Wedding Location"
            src={`https://www.google.com/maps?q=${encodeURIComponent(
              location.address,
            )}&output=embed`}
            className="
              h-full
              w-full
              border-0
              grayscale-[20%]
            "
            loading="lazy"
          />

          {/* Soft Overlay */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-[#1C2A32]/5
            "
          />
        </div>

        {/* Location Information */}
        <div className="mt-8 flex flex-col items-center" data-aos="fade-up">
          <MapPin size={25} strokeWidth={1.3} className="text-[#9BA8A1]" />

          <h3
            className="
              mt-4
              font-['Cormorant_Garamond']
              text-3xl
              font-medium
              text-[#EAEAE5]
            "
          >
            Lokasi Acara
          </h3>

          <p
            className="
              mt-3
              max-w-[290px]
              text-xs
              leading-relaxed
              text-[#C2C8BF]
            "
          >
            {location.address}
          </p>

          {/* Google Maps Button */}
          <a
            href={location.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="
              mt-6
              flex
              items-center
              gap-2
              rounded-full
              border
              border-[#9BA8A1]/40
              bg-[#324C5D]/60
              px-5
              py-2.5
              text-[10px]
              font-medium
              uppercase
              tracking-[0.2em]
              text-[#EAEAE5]
              backdrop-blur-sm
              transition-all
              duration-300
              hover:border-[#9BA8A1]/70
              hover:bg-[#455E6A]/80
              active:scale-[0.97]
            "
          >
            <span>Buka Google Maps</span>

            <ExternalLink size={13} strokeWidth={1.5} />
          </a>
        </div>

        {/* Bottom Ornament */}
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
