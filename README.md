# Amrina & Fatah — Undangan Pernikahan Digital

Undangan pernikahan digital untuk Amrina & Fatah. Aplikasi SPA statis tanpa backend, dibangun dengan React 19 + Vite 8 + Tailwind CSS v4. Tampilan mobile-first dengan lebar maksimal 430px, dioptimalkan untuk pengalaman seperti aplikasi native di perangkat seluler.

Seluruh data bersifat statis dan dikelola melalui file JavaScript di `src/data/`. Tidak memerlukan database, API, atau variabel lingkungan. Siap deploy langsung ke Vercel sebagai situs statis.

## Fitur

- **Opening Gate** — layar pembuka dengan nama tamu dari URL path (`useGuestName`), tombol buka undangan memicu musik
- **Music Player** — pemutar musik latar (Wals Akhir Zaman - Roni Parulian), toggle play/pause, auto-play saat opening dibuka
- **Hero Section** — tampilan nama mempelai dengan tipografi dekoratif, tanggal pernikahan, scroll indicator
- **Wedding Section** — profil lengkap mempelai wanita & pria beserta nama orang tua
- **Event Section** — detail acara Resepsi dan Akad Nikah (hari, tanggal, waktu, alamat)
- **Love Story** — timeline perjalanan cinta dengan layout zigzag kiri-kanan
- **Gallery** — galeri foto grid responsif dengan efek hover zoom
- **Location** — peta Google Maps embed + tombol buka lokasi di Google Maps
- **RSVP** — form konfirmasi kehadiran (nama, hadir/tidak, ucapan) terkirim via WhatsApp + info wedding gift BRI dengan tombol salin nomor rekening
- **Bottom Navigation Bar** — navigasi bawah fixed dengan highlight otomatis berdasarkan posisi scroll
- **AOS Animation** — animasi fade-up, zoom-in saat scroll menggunakan AOS library
- **Guest Name via URL** — nama tamu dibaca dari segment terakhir URL path (contoh: `/budi-santoso` → "Budi Santoso")
- **Section Divider** — pemisah visual antar section
- **Footer** — credit brand Gilfp Digital Invitation + link WhatsApp & Instagram

## Cara Menjalankan

Prasyarat: Node.js dan npm terinstal.

```bash
# Install dependencies
npm install

# Jalankan dev server
npm run dev

# Build production
npm run build

# Preview hasil build
npm run preview

# Lint kode
npm run lint
```

Tidak ada file `.env` yang diperlukan. Semua data konfigurasi pernikahan tersimpan di `src/data/weddingData.js`, `src/data/navData.js`, dan `src/data/dataGallery.js`.

## Struktur Project

```
wedding-invitation/
├── index.html              # Entry HTML + meta OG tags
├── package.json            # Dependencies & scripts
├── vite.config.js          # Vite + React + Tailwind plugin config
├── vercel.json             # Rewrite rule untuk SPA routing
├── public/                 # Static assets (favicon)
└── src/
    ├── main.jsx            # React entry point
    ├── App.jsx             # Root component, state management, layout
    ├── index.css           # Global styles + Tailwind imports
    ├── components/         # UI components per section
    │   ├── Opening.jsx     # Layar pembuka + guest name
    │   ├── Hero.jsx        # Hero section mempelai
    │   ├── WeddingSection.jsx  # Profil mempelai
    │   ├── EventSection.jsx    # Detail akad & resepsi
    │   ├── LoveStorySection.jsx # Timeline love story
    │   ├── GallerySection.jsx  # Galeri foto
    │   ├── LocationSection.jsx # Peta & lokasi
    │   ├── RSVPSection.jsx     # Form RSVP + gift info
    │   ├── MusicPlayer.jsx     # Toggle musik
    │   ├── BottomBar.jsx       # Navigasi bawah
    │   ├── Footer.jsx          # Footer + social links
    │   └── SectionDivider.jsx  # Pemisah section
    ├── data/               # Data statis
    │   ├── weddingData.js  # Data mempelai, acara, lokasi, RSVP, gift
    │   ├── navData.js      # Konfigurasi navigasi bottom bar
    │   └── dataGallery.js  # Daftar foto galeri
    ├── hooks/              # Custom hooks
    │   └── useGuestName.js # Parse nama tamu dari URL path
    └── assets/             # Gambar, musik, background
        ├── images/background/  # Background wedding
        ├── images/gallery/     # Foto-foto galeri (6 file .webp)
        ├── images/divider/     # Ornamen divider
        └── music/              # File MP3 musik latar
```

## Kontribusi

1. Fork repository
2. Buat branch fitur: `git checkout -b fitur/nama-fitur`
3. Commit perubahan: `git commit -m "deskripsi singkat"`
4. Push branch: `git push origin fitur/nama-fitur`
5. Buka Pull Request

Gaya kode: JavaScript (JSX), Tailwind CSS utility classes, Lucide React icons. Pastikan `npm run lint` lulus sebelum submit PR.

</content>