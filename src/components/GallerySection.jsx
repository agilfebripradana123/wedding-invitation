import { Images } from "lucide-react";
import { galleryData } from "../data/dataGallery";

export function GallerySection() {
  return (
    <section
      id="gallery"
      className="
        flex
        min-h-screen
        items-center
        justify-center
        px-5
        py-24
        text-center
      "
    >
      <div className="w-full">
        {/* =========================================
            HEADER
        ========================================= */}
        <div className="mb-12 flex flex-col items-center">
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
            Our Gallery
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
            Beautiful Moments
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
            A collection of moments we will always cherish.
          </p>
        </div>

        {/* =========================================
            GALLERY
        ========================================= */}
        <div className="space-y-3">
          {/* =========================================
              MAIN PHOTO
          ========================================= */}
          {galleryData[0] && (
            <div
              className="
                group
                relative
                overflow-hidden
                rounded-[28px]
                border
                border-[#EAEAE5]/20
                bg-[#1C2A32]/40
              "
            >
              <img
                src={galleryData[0].image}
                alt={galleryData[0].alt}
                className="
                  block
                  aspect-[4/5]
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  ease-out
                  group-hover:scale-[1.03]
                "
              />

              {/* Soft Overlay */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#080C0F]/25
                  via-transparent
                  to-transparent
                "
              />

              {/* Corner Ornament */}
              <div
                className="
                  pointer-events-none
                  absolute
                  bottom-4
                  left-4
                  h-8
                  w-8
                  border-b
                  border-l
                  border-[#EAEAE5]/50
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  right-4
                  top-4
                  h-8
                  w-8
                  border-r
                  border-t
                  border-[#EAEAE5]/50
                "
              />
            </div>
          )}

          {/* =========================================
              SECONDARY PHOTOS
          ========================================= */}
          <div className="grid grid-cols-2 gap-3">
            {galleryData.slice(1, 3).map((item) => (
              <div
                key={item.id}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[22px]
                  border
                  border-[#EAEAE5]/15
                  bg-[#1C2A32]/40
                "
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="
                    block
                    aspect-[4/5]
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-[1.05]
                  "
                />

                {/* Overlay */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-[#080C0F]/10
                    transition-opacity
                    duration-500
                    group-hover:opacity-0
                  "
                />
              </div>
            ))}
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
          <span className="h-px w-10 bg-[#EAEAE5]/20" />

          <Images size={14} strokeWidth={1.4} className="text-[#EAEAE5]/70" />

          <span className="h-px w-10 bg-[#EAEAE5]/20" />
        </div>
      </div>
    </section>
  );
}
