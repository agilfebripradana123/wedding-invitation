import { Volume2, VolumeX } from "lucide-react";

export function MusicPlayer({ audioRef, isPlaying, setIsPlaying }) {
  const toggleMusic = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    try {
      if (!audio.paused) {
        audio.pause();
        setIsPlaying(false);
      } else {
        await audio.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.error("Music playback failed:", error);
      setIsPlaying(false);
    }
  };

  return (
    <div
      className="
        pointer-events-none
        fixed
        inset-x-0
        bottom-[90px]
        z-50
        mx-auto
        w-full
        max-w-[430px]
        px-4
      "
    >
      <div className="flex justify-end">
        <button
          type="button"
          onClick={toggleMusic}
          aria-label={isPlaying ? "Matikan musik" : "Nyalakan musik"}
          className="
            pointer-events-auto
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            border
            border-[#EAEAE5]/25
            bg-[#1C2A32]/90
            text-[#EAEAE5]
            shadow-[0_4px_20px_rgba(8,12,15,0.3)]
            backdrop-blur-md
            transition-all
            duration-300
            hover:bg-[#2A3F4B]
            active:scale-90
          "
        >
          {isPlaying ? (
            <Volume2 size={18} strokeWidth={1.5} />
          ) : (
            <VolumeX size={18} strokeWidth={1.5} />
          )}
        </button>
      </div>
    </div>
  );
}
