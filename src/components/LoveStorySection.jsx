import { Heart } from "lucide-react";
import { weddingData } from "../data/weddingData";

export function LoveStorySection() {
  const { loveStory } = weddingData;

  return (
    <section
      id="love-story"
      className="
        flex min-h-screen
        items-center justify-center
        px-6
        py-24
        text-center
      "
    >
      <div className="w-full">
        {/* Section Header */}
        <div className="mb-16 flex flex-col items-center">
          <Heart size={18} strokeWidth={1.4} className="text-[#EAEAE5]" />

          <p
            className="
              mt-4
              text-[10px]
              font-medium
              uppercase
              tracking-[0.4em]
              text-[#EAEAE5]
            "
          >
            Our Love Story
          </p>

          <p
            className="
              mt-3
              max-w-[280px]
              text-sm
              leading-relaxed
              text-[#EAEAE5]/80
            "
          >
            Every love story is beautiful, but ours is our favorite.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div
            className="
              absolute
              left-1/2
              top-0
              h-full
              w-px
              -translate-x-1/2
              bg-[#EAEAE5]/40
            "
          />

          {/* Timeline Items */}
          <div className="space-y-16">
            {loveStory.map((story, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={story.id}
                  className="
                    relative
                    grid
                    grid-cols-2
                    gap-6
                  "
                >
                  {/* Left */}
                  <div
                    className={`
                      ${isLeft ? "pr-4 text-right" : "opacity-0"}
                    `}
                  >
                    {isLeft && (
                      <>
                        <p
                          className="
                            text-[9px]
                            uppercase
                            tracking-[0.25em]
                            text-[#EAEAE5]/70
                          "
                        >
                          {story.date}
                        </p>

                        <h3
                          className="
                            mt-2
                            font-['Cormorant_Garamond']
                            text-2xl
                            font-medium
                            text-[#EAEAE5]
                          "
                        >
                          {story.title}
                        </h3>

                        <p
                          className="
                            mt-3
                            text-xs
                            leading-relaxed
                            text-[#EAEAE5]/80
                          "
                        >
                          {story.description}
                        </p>
                      </>
                    )}
                  </div>

                  {/* Center */}
                  <div
                    className="
                      absolute
                      left-1/2
                      top-0
                      flex
                      h-7
                      w-7
                      -translate-x-1/2
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#EAEAE5]/60
                      bg-[#1C2A32]/90
                    "
                  >
                    <span className="h-2 w-2 rounded-full bg-[#EAEAE5]" />
                  </div>

                  {/* Right */}
                  <div
                    className={`
                      ${!isLeft ? "col-start-2 pl-4 text-left" : "opacity-0"}
                    `}
                  >
                    {!isLeft && (
                      <>
                        <p
                          className="
                            text-[9px]
                            uppercase
                            tracking-[0.25em]
                            text-[#EAEAE5]/70
                          "
                        >
                          {story.date}
                        </p>

                        <h3
                          className="
                            mt-2
                            font-['Cormorant_Garamond']
                            text-2xl
                            font-medium
                            text-[#EAEAE5]
                          "
                        >
                          {story.title}
                        </h3>

                        <p
                          className="
                            mt-3
                            text-xs
                            leading-relaxed
                            text-[#EAEAE5]/80
                          "
                        >
                          {story.description}
                        </p>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Ornament */}
        <div className="mt-16 flex justify-center">
          <span className="text-sm text-[#EAEAE5]">✦</span>
        </div>
      </div>
    </section>
  );
}
