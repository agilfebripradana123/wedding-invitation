import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { BottomBar } from "./components/BottomBar";
import { Hero } from "./components/Hero";
import { WeddingSection } from "./components/WeddingSection";
import { LoveStorySection } from "./components/LoveStorySection";
import { SectionDivider } from "./components/SectionDivider";
import { EventSection } from "./components/EventSection";
import { GallerySection } from "./components/GallerySection";
import { LocationSection } from "./components/LocationSection";
import { RSVPSection } from "./components/RSVPSection";
import { Opening } from "./components/Opening";
import { MusicPlayer } from "./components/MusicPlayer";

import weddingBackground from "./assets/images/background/wedding-bg.webp";
import music from "./assets/music/wals-akhir-zaman.mp3";

function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef(null);

  useEffect(() => {
    // Hapus hash dari URL ketika refresh
    if (window.location.hash) {
      window.history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search,
      );
    }

    // Kembali ke paling atas
    window.scrollTo(0, 0);
  }, []);

  // Init AOS saat undangan dibuka supaya animasi Hero terlihat,
  // bukan tersembunyi di balik overlay Opening
  useEffect(() => {
    if (!isOpened) return;

    const t = setTimeout(() => {
      AOS.init({ once: true, duration: 800, offset: 80 });
      AOS.refresh();
    }, 50);

    return () => clearTimeout(t);
  }, [isOpened]);

  const handleOpenInvitation = async () => {
    const audio = audioRef.current;

    try {
      if (audio) {
        audio.loop = true;
        audio.volume = 0.45;

        await audio.play();

        setIsPlaying(true);
      }
    } catch (error) {
      console.error("Music playback failed:", error);
    }

    setIsOpened(true);

    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* =========================================
          AUDIO
      ========================================= */}
      <audio ref={audioRef} src={music} preload="auto" loop />

      {/* =========================================
          OPENING
      ========================================= */}
      {!isOpened && <Opening onOpen={handleOpenInvitation} />}

      {/* =========================================
          DESKTOP BACKGROUND
      ========================================= */}
      <div
        className="
          pointer-events-none
          fixed
          inset-0
          z-0
          bg-cover
          bg-center
          bg-no-repeat
        "
        style={{
          backgroundImage: `url(${weddingBackground})`,
        }}
      />

      {/* Desktop Blur */}
      <div
        className="
          pointer-events-none
          fixed
          inset-0
          z-10
          backdrop-blur-[5px]
        "
      />

      {/* Desktop Overlay */}
      <div
        className="
          pointer-events-none
          fixed
          inset-0
          z-10
          bg-[#080C0F]/55
        "
      />

      {/* =========================================
          MOBILE FRAME
      ========================================= */}
      <div
        className="
          relative
          z-20
          mx-auto
          w-full
          max-w-[430px]
        "
      >
        {/* Mobile Background */}
        <div
          className="
            pointer-events-none
            fixed
            top-0
            left-1/2
            z-0
            h-screen
            w-full
            max-w-[430px]
            -translate-x-1/2
            bg-cover
            bg-center
            bg-no-repeat
            brightness-[1.15]
          "
          style={{
            backgroundImage: `url(${weddingBackground})`,
          }}
        />

        {/* Soft Blur */}
        <div
          className="
            pointer-events-none
            fixed
            top-0
            left-1/2
            z-10
            h-screen
            w-full
            max-w-[430px]
            -translate-x-1/2
            backdrop-blur-[1.5px]
          "
        />

        {/* Navy Tint */}
        <div
          className="
            pointer-events-none
            fixed
            top-0
            left-1/2
            z-10
            h-screen
            w-full
            max-w-[430px]
            -translate-x-1/2
            bg-[#1C2A32]/[0.06]
          "
        />

        {/* Sage Tint */}
        <div
          className="
            pointer-events-none
            fixed
            top-0
            left-1/2
            z-10
            h-screen
            w-full
            max-w-[430px]
            -translate-x-1/2
            bg-[#9BA8A1]/[0.025]
          "
        />

        {/* Mobile Overlay */}
        <div
          className="
            pointer-events-none
            fixed
            top-0
            left-1/2
            z-10
            h-screen
            w-full
            max-w-[430px]
            -translate-x-1/2
            bg-[#080C0F]/35
          "
        />

        {/* =========================================
            CONTENT
        ========================================= */}
        <div
          className="
            relative
            z-20
            w-full
            text-[#EAEAE5]
          "
        >
          <Hero />

          <SectionDivider />

          <WeddingSection />

          <SectionDivider />

          <EventSection />

          <SectionDivider />

          <LoveStorySection />

          <SectionDivider />

          <GallerySection />

          <SectionDivider />

          <LocationSection />

          <SectionDivider />

          <RSVPSection />
        </div>
      </div>

      {/* =========================================
          MUSIC PLAYER
      ========================================= */}
      <MusicPlayer
        audioRef={audioRef}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />

      {/* =========================================
          BOTTOM NAV
      ========================================= */}
      <BottomBar />
    </main>
  );
}

export default App;
