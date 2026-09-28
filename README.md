# Personal Portfolio Website

Website portofolio pribadi yang interaktif dan responsif, dibangun menggunakan teknologi web modern untuk menampilkan proyek, keahlian, dan pengalaman.

## ✨ Fitur Utama

- **Desain Modern & Responsif**: Tampilan yang menyesuaikan dengan berbagai ukuran layar (mobile, tablet, desktop) menggunakan Tailwind CSS.
- **Animasi Halus**: Transisi dan animasi elemen yang memukau ditenagai oleh Framer Motion.
- **Dukungan Multi-bahasa (i18n)**: Konten tersedia dalam dua bahasa (Bahasa Indonesia dan Bahasa Inggris) untuk menjangkau audiens yang lebih luas.
- **Manajemen Konten Berbasis Markdown**: Proyek dan portofolio ditulis dalam format Markdown (`.md`), di-parsing dengan `gray-matter` dan di-render menggunakan `react-markdown`.
- **Performa Tinggi**: Menggunakan Next.js App Router untuk rendering yang optimal dan cepat.

## 🛠️ Teknologi yang Digunakan

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Library UI**: [React 19](https://reactjs.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) & `clsx` + `tailwind-merge`
- **Animasi**: [Framer Motion](https://www.framer.com/motion/)
- **Ikon**: [React Icons](https://react-icons.github.io/react-icons/)
- **Bahasa Pemrograman**: [TypeScript](https://www.typescriptlang.org/)
- **Markdown**: `react-markdown` & `gray-matter`

## 🚀 Memulai Proyek (Getting Started)

### Prasyarat

Pastikan Anda telah menginstal Node.js di sistem Anda.
- [Node.js](https://nodejs.org/) (versi 18.x atau lebih baru disarankan)

### Instalasi

1. **Clone repositori ini**:
   ```bash
   git clone <url-repositori-anda>
   cd portfolio
   ```

2. **Instal dependensi**:
   ```bash
   npm install
   # atau
   yarn install
   # atau
   pnpm install
   ```

3. **Jalankan server pengembangan (development server)**:
   ```bash
   npm run dev
   # atau
   yarn dev
   # atau
   pnpm dev
   ```

4. Buka browser dan akses [http://localhost:3000](http://localhost:3000) untuk melihat hasilnya.

## 📁 Struktur Direktori Utama

Berikut adalah gambaran umum struktur dalam proyek ini:

```text
├── src/
│   ├── app/              # Konfigurasi routing utama Next.js (App Router)
│   ├── components/       # Komponen UI yang dapat digunakan ulang (Contact, Hero, dll)
│   ├── content/          # Direktori konten statis
│   │   └── projects/     # File-file .md untuk portofolio proyek (contoh: project-4-realation.md)
│   └── lib/              # Fungsi utilitas dan konfigurasi (seperti i18n.ts)
├── public/               # Aset statis seperti gambar dan logo
├── package.json          # Daftar dependensi dan script npm
└── README.md             # Dokumentasi proyek (file ini)
```

## 📝 Mengelola Konten Proyek

Data proyek portofolio dikelola menggunakan file Markdown. Anda dapat menambahkan atau mengubah proyek di dalam direktori `src/content/projects/`. 

Gunakan format _frontmatter_ di bagian atas file `.md` untuk mendefinisikan metadata, lalu tulis deskripsi proyek di bawahnya. Proyek akan secara otomatis dibaca dan ditampilkan di website.

## 🌐 Lokalisasi (i18n)

Aplikasi ini mendukung multibahasa. Logika dan translasi diatur di dalam `src/lib/i18n.ts`. Anda dapat menambahkan atau mengedit teks terjemahan di sana agar website dapat diakses dengan mudah oleh pengunjung lokal maupun internasional.

## 🚢 Deployment

Cara termudah untuk mendeploy aplikasi Next.js ini adalah menggunakan [Vercel](https://vercel.com/new).

1. Push kode Anda ke GitHub, GitLab, atau Bitbucket.
2. Buat proyek baru di Vercel dan hubungkan repositori Anda.
3. Vercel akan secara otomatis melakukan build dan deploy website Anda.

Untuk opsi deployment lainnya, silakan baca [Dokumentasi Deployment Next.js](https://nextjs.org/docs/app/building-your-application/deploying).
