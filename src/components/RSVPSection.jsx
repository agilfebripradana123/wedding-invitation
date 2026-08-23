import { Check, Copy, Gift, MessageCircle, Send } from "lucide-react";
import { useState } from "react";
import { weddingData } from "../data/weddingData";

export function RSVPSection() {
  const { rsvp, gift } = weddingData;

  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState("Hadir");
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(gift.accountNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.open(
        `https://wa.me/${rsvp.whatsapp}?text=${encodeURIComponent(gift.accountNumber)}`,
        "_blank",
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = `
Halo Amrina & Fatah,

Nama: ${name}
Konfirmasi Kehadiran: ${attendance}

Ucapan:
${message || "-"}
    `.trim();

    const whatsappUrl = `https://wa.me/${rsvp.whatsapp}?text=${encodeURIComponent(
      text,
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section
      id="rsvp"
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
            RSVP
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
            Konfirmasi Kehadiran
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
            Kehadiran dan doa restu Anda merupakan kebahagiaan bagi kami.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="w-full" data-aos="fade-up">
          {/* Nama */}
          <div className="text-left">
            <label
              className="
                text-[10px]
                font-medium
                uppercase
                tracking-[0.25em]
                text-[#C2C8BF]
              "
            >
              Nama
            </label>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Masukkan nama Anda"
              required
              className="
                mt-3
                w-full
                rounded-xl
                border
                border-[#EAEAE5]/20
                bg-[#1C2A32]/25
                px-4
                py-3
                text-sm
                text-[#EAEAE5]
                outline-none
                backdrop-blur-[2px]
                placeholder:text-[#C2C8BF]/45
                transition-all
                duration-300
                focus:border-[#9BA8A1]/60
                focus:bg-[#1C2A32]/35
              "
            />
          </div>

          {/* Kehadiran */}
          <div className="mt-6 text-left">
            <label
              className="
                text-[10px]
                font-medium
                uppercase
                tracking-[0.25em]
                text-[#C2C8BF]
              "
            >
              Kehadiran
            </label>

            <div className="mt-3 grid grid-cols-2 gap-3">
              {["Hadir", "Tidak Hadir"].map((option) => {
                const active = attendance === option;

                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setAttendance(option)}
                    className={`
                      flex
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      border
                      px-3
                      py-3
                      text-xs
                      transition-all
                      duration-300
                      ${
                        active
                          ? "border-[#9BA8A1]/60 bg-[#324C5D]/70 text-[#EAEAE5]"
                          : "border-[#EAEAE5]/15 bg-[#1C2A32]/20 text-[#C2C8BF]"
                      }
                    `}
                  >
                    {active && <Check size={14} strokeWidth={2} />}

                    {option}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Ucapan */}
          <div className="mt-6 text-left">
            <label
              className="
                text-[10px]
                font-medium
                uppercase
                tracking-[0.25em]
                text-[#C2C8BF]
              "
            >
              Ucapan & Doa
            </label>

            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tuliskan ucapan dan doa..."
              rows={4}
              className="
                mt-3
                w-full
                resize-none
                rounded-xl
                border
                border-[#EAEAE5]/20
                bg-[#1C2A32]/25
                px-4
                py-3
                text-sm
                text-[#EAEAE5]
                outline-none
                backdrop-blur-[2px]
                placeholder:text-[#C2C8BF]/45
                transition-all
                duration-300
                focus:border-[#9BA8A1]/60
                focus:bg-[#1C2A32]/35
              "
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="
              mt-6
              flex
              w-full
              items-center
              justify-center
              gap-2
              rounded-xl
              border
              border-[#9BA8A1]/40
              bg-[#324C5D]/70
              px-5
              py-3.5
              text-xs
              font-medium
              uppercase
              tracking-[0.2em]
              text-[#EAEAE5]
              backdrop-blur-sm
              transition-all
              duration-300
              hover:bg-[#455E6A]/80
              hover:border-[#9BA8A1]/70
              active:scale-[0.98]
            "
          >
            <Send size={15} strokeWidth={1.5} />
            Kirim Konfirmasi
          </button>
        </form>

        {/* WhatsApp Info */}
        <div
          className="
            mt-7
            flex
            items-center
            justify-center
            gap-2
            text-[#C2C8BF]
          "
        >
          <MessageCircle
            size={14}
            strokeWidth={1.5}
            className="text-[#9BA8A1]"
          />

          <span className="text-[10px]">Konfirmasi melalui WhatsApp</span>
        </div>

        {/* Gift */}
        <div
          className="
            mt-10
            flex
            flex-col
            items-center
            rounded-2xl
            border
            border-[#EAEAE5]/15
            bg-[#1C2A32]/25
            px-6
            py-8
            backdrop-blur-[2px]
          "
          data-aos="fade-up"
        >
          <Gift size={22} strokeWidth={1.3} className="text-[#9BA8A1]" />

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
            Wedding Gift
          </p>

          <p
            className="
              mt-3
              max-w-[280px]
              text-xs
              leading-relaxed
              text-[#C2C8BF]
            "
          >
            Doa restu Anda merupakan karunia yang sangat berarti. Namun jika
            memberi merupakan ungkapan tanda kasih, kami menerimanya dengan
            penuh gratitude.
          </p>

          <div className="mt-5 flex flex-col items-center">
            <span
              className="
                font-mono
                text-base
                font-bold
                tracking-[0.12em]
                text-[#EAEAE5]
              "
            >
              {gift.bank} - {gift.accountNumber}
            </span>

            <span className="mt-1 text-xs text-[#C2C8BF]">a.n {gift.holder}</span>

            <button
              type="button"
              onClick={handleCopy}
              className="
                mt-4
                flex
                items-center
                gap-2
                rounded-xl
                border
                border-[#9BA8A1]/40
                bg-[#324C5D]/70
                px-4
                py-2.5
                text-[10px]
                font-medium
                uppercase
                tracking-[0.2em]
                text-[#EAEAE5]
                transition-all
                duration-300
                hover:border-[#9BA8A1]/70
                hover:bg-[#455E6A]/80
                active:scale-[0.98]
              "
            >
              {copied ? (
                <>
                  <Check size={13} strokeWidth={2} />
                  Tersalin
                </>
              ) : (
                <>
                  <Copy size={13} strokeWidth={1.5} />
                  Salin Nomor
                </>
              )}
            </button>
          </div>
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
