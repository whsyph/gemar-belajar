<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white">
    <img alt="Next.js" src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white">
  </picture>
  <img alt="Three.js" src="https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=three.js&logoColor=white">
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white">
  <img alt="i18n" src="https://img.shields.io/badge/i18n-FF6B6B?style=for-the-badge&logo=translate&logoColor=white">
</p>

# 🪐 Gemar Belajar

**Gemar Belajar** adalah platform visualisasi edukasi interaktif yang dirancang khusus untuk membantu **pelajar Indonesia** (SD, SMP, SMA) memahami konsep sains dan matematika melalui simulasi 3D dan 2D yang menarik.

> _"Belajar jadi lebih seru dengan visualisasi interaktif!"_

---

## ✨ Fitur Simulasi

| Simulasi | Teknologi | Status |
|----------|-----------|--------|
| 🪐 **Tata Surya 3D** — Jelajahi planet-planet, orbit, dan fakta menarik | React Three Fiber | ✅ **LIVE** |
| 🌍 **Gravitasi** — Hukum Newton, benda jatuh, orbit satelit | Three.js / Canvas | ⏳ *Coming Soon* |
| 〰️ **Gelombang Sinusoidal** — Amplitudo, frekuensi, fase | Canvas 2D | ⏳ *Coming Soon* |
| 📐 **Grafik Fungsi Matematika** — Plot interaktif fungsi linear, kuadrat, trigonometri | Canvas 2D | ⏳ *Coming Soon* |

### 🪐 Tata Surya 3D — Yang sudah bisa dicoba sekarang:

- ✅ 8 planet mengorbit matahari dengan animasi halus
- ✅ Klik planet untuk melihat info: nama, jarak, diameter, fakta menarik
- ✅ Slider kecepatan orbit (0–5×)
- ✅ Pause/Play animasi
- ✅ Toggle label nama planet
- ✅ Zoom, rotate, pan dengan mouse/touch
- ✅ Cincin Saturnus
- ✅ Bintang latar 3D
- ✅ Bahasa Indonesia & Inggris

---

## 🚀 Mulai Cepat

```bash
# Clone repositori
git clone https://github.com/whsyph/gemar-belajar.git
cd gemar-belajar

# Install dependencies
npm install

# Jalankan development server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

---

## 🧱 Tech Stack

| Teknologi | Fungsi |
|-----------|--------|
| [Next.js 16](https://nextjs.org) | Framework React dengan App Router & SSG |
| [TypeScript](https://typescriptlang.org) | Type safety & developer experience |
| [Tailwind CSS v4](https://tailwindcss.com) | Utility-first styling |
| [React Three Fiber](https://r3f.docs.pmnd.rs) | Three.js renderer untuk React |
| [@react-three/drei](https://github.com/pmndrs/drei) | Helper utilities 3D |
| [next-intl](https://next-intl.dev) | Internasionalisasi (id/en) |
| [Zustand](https://github.com/pmndrs/zustand) | State management ringan |

---

## 📁 Struktur Proyek

```
gemar-belajar/
├── messages/                  # File terjemahan (id.json, en.json)
├── public/                    # Aset statis
├── src/
│   ├── app/
│   │   ├── [locale]/          # Routing per bahasa (/id/, /en/)
│   │   │   ├── page.tsx       # Halaman utama
│   │   │   └── simulasi/      # Halaman simulasi
│   │   └── globals.css        # Global styles
│   ├── components/
│   │   ├── layout/            # Header, Footer, LanguageSwitcher
│   │   ├── three/             # CanvasWrapper (SSR-safe)
│   │   └── simulasi/          # Komponen spesifik per simulasi
│   ├── i18n/                  # Konfigurasi internasionalisasi
│   ├── lib/constants/         # Data planet, konstanta fisika
│   └── store/                 # Zustand stores
├── middleware.ts               # Locale routing
└── next.config.ts              # next-intl plugin
```

---

## 🌐 Bilingual (Indonesia & Inggris)

Aplikasi mendukung dua bahasa:
- **Indonesia** — `/id/simulasi/tata-surya`
- **English** — `/en/simulasi/tata-surya`

Toggle bahasa tersedia di pojok kanan atas.

---

## 🛠️ Development

```bash
# Development server
npm run dev

# Build production
npm run build

# Preview production build
npm start
```

---

## 📄 Lisensi

[MIT](LICENSE) © 2026 whsyph

---

<p align="center">
  Dibuat dengan ❤️ untuk pendidikan Indonesia
</p>
