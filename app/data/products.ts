export interface ProductFeature {
  title: string;
  description: string;
}

export interface ProductGalleryItem {
  src: string;
  caption: string;
  tag: string;
}

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  category: string;
  role: string;
  timeline: string;
  badge: string;
  summary: string;
  overview: string[];
  features: ProductFeature[];
  gallery: ProductGalleryItem[];
  techStack: string[];
  liveUrl?: string;
  status: string;
}

export const products: Product[] = [
  {
    slug: "ambrilindo",
    name: "Ambrilindo Tournament Engine",
    tagline: "Aplikasi Scoring Digital & Manajemen Turnamen Karate",
    category: "Aplikasi Turnamen",
    role: "Software Developer",
    timeline: "2024 - Sekarang",
    badge: "Aplikasi Lokal / LAN",
    summary:
      "Aplikasi kendali turnamen yang digunakan langsung di arena pertandingan. Mengatur papan skor digital TV, input wasit & juri, pembagian pool, hingga drawing bagan otomatis.",
    overview: [
      "Ambrilindo dirancang untuk mempermudah panitia turnamen mengoperasikan pertandingan secara terstruktur dan terotomatisasi.",
      "Mendukung sistem pertandingan multi-tatami secara serentak, dari pencatatan poin wasit di lapangan hingga tampilan proyektor / TV skor untuk penonton dan atlet.",
      "Berjalan di jaringan lokal sehingga tetap beroperasi lancar tanpa khawatir kendala koneksi internet di lokasi pertandingan."
    ],
    features: [
      {
        title: "Papan Skor Digital (TV Scoreboard)",
        description: "Tampilan visual skor interaktif untuk layar TV arena dengan timer pertandingan dan penanda pelanggaran."
      },
      {
        title: "Manajemen Arena & Wasit",
        description: "Dashboard kontrol operator untuk mengatur antrean partai tanding dan akun login wasit pertandingan."
      },
      {
        title: "Drawing Bagan Otomatis",
        description: "Pembuatan skema bagan pertandingan secara otomatis dengan pembagian pool yang adil dan rapi."
      },
      {
        title: "Sinkronisasi Hasil Pertandingan",
        description: "Pengiriman data hasil pertandingan langsung ke web publik secara teratur."
      }
    ],
    gallery: [
      {
        src: "/images/products/ambrilindo-scoring.png",
        caption: "Tampilan Papan Skor Digital untuk Layar Arena Pertandingan",
        tag: "Papan Skor TV"
      },
      {
        src: "/images/products/ambrilindo-tatami.png",
        caption: "Panel Kontrol Manajemen Arena & Kredensial Perangkat",
        tag: "Manajemen Arena"
      },
      {
        src: "/images/products/ambrilindo-dashboard.png",
        caption: "Pusat Pengelolaan Bagan & Status Pertandingan",
        tag: "Bagan Turnamen"
      }
    ],
    techStack: ["Python", "Django", "WebSockets", "SQLite", "JavaScript", "HTML / CSS"],
    status: "Aktif Digunakan"
  },
  {
    slug: "ambrilindo-web",
    name: "Ambrilindo Web Portal",
    tagline: "Portal Publik Pendaftaran Turnamen & Bagan Live Online",
    category: "Portal Web Publik",
    role: "Software Developer",
    timeline: "2024 - Sekarang",
    badge: "Cloud Platform",
    summary:
      "Website publik resmi untuk pendaftaran atlet secara online oleh kontingen, informasi turnamen, dan pemantauan bagan pertandingan secara langsung.",
    overview: [
      "Portal online yang memudahkan kontingen dari berbagai daerah untuk mendaftarkan atlet mereka beserta verifikasi data dan dokumen.",
      "Menyediakan halaman bagan langsung (live bracket) yang dapat diakses penonton dan official tim dari smartphone.",
      "Dilengkapi pengiriman notifikasi otomatis terkait informasi pertandingan dan pendaftaran."
    ],
    features: [
      {
        title: "Pendaftaran Peserta Mandiri",
        description: "Formulir pendaftaran atlet online dengan validasi kelas usia dan pengunggahan berkas."
      },
      {
        title: "Bagan Live Real-Time",
        description: "Penonton dan official dapat memantau pergerakan skor dan pemenang pertandingan secara langsung."
      },
      {
        title: "Notifikasi Otomatis",
        description: "Pengiriman informasi pendaftaran dan pengumuman melalui WhatsApp dan email."
      },
      {
        title: "Pusat Hasil & Rekap Juara",
        description: "Arsip perolehan medali dan peringkat kontingen kejuaraan yang rapi dan transparan."
      }
    ],
    gallery: [
      {
        src: "/images/products/ambrilindo-web-landing.png",
        caption: "Halaman Utama Portal Publik Ambrilindo.com",
        tag: "Portal Utama"
      },
      {
        src: "/images/products/ambrilindo-web-events.png",
        caption: "Kalender Agenda Kejuaraan & Pendaftaran Online",
        tag: "Kalender Event"
      }
    ],
    techStack: ["Python", "Django", "Fly.io Cloud", "SQLite WAL", "WhatsApp API", "Email Service"],
    liveUrl: "https://www.ambrilindo.com",
    status: "Online (www.ambrilindo.com)"
  },
  {
    slug: "capstone",
    name: "Atika Shipping Agency (AJS)",
    tagline: "Sistem Manajemen Keagenan Kapal & Operasional Pelayaran",
    category: "Sistem Manajemen Maritim",
    role: "Fullstack Developer",
    timeline: "2025",
    badge: "Web Platform",
    summary:
      "Platform manajemen komprehensif untuk keagenan kapal pelayaran. Mengatur jadwal kedatangan armada, permohonan layanan klien, to-do list operasional kru lapangan, absensi foto bukti kerja, dan klasifikasi berkas maritim.",
    overview: [
      "Sistem yang dirancang khusus untuk PT Atika Jaya Samudera dalam mendigitalkan alur kerja keagenan kapal laut dan layanan logistik pelabuhan.",
      "Memungkinkan tim operasional memantau permohonan jasa kapal (port clearance, bunker, supply), mendelegasikan tugas harian kru, serta mencatat riwayat aktivitas secara terpusat.",
      "Dilengkapi dengan pengarsipan dokumen kapal digital serta absensi kerja berbasis bukti visual foto di lapangan."
    ],
    features: [
      {
        title: "Dasbor Operasional & Monitoring",
        description: "Pusat pantauan status permohonan kapal yang masuk, progress to-do list kru, dan timeline aktivitas keagenan."
      },
      {
        title: "Pengelolaan Permohonan & Klien",
        description: "Pencatatan data kapal (IMO), verifikasi berkas permohonan dari agen/klien, serta tracking status penyelesaian."
      },
      {
        title: "To-Do List Kru Lapangan",
        description: "Delegasi penugasan harian ke staf operasional pelabuhan dengan pencatatan status selesai dan pembatalan."
      },
      {
        title: "Absensi & Bukti Kerja Visual",
        description: "Pencatatan kehadiran karyawan lapangan yang terhubung dengan unggahan foto dokumentasi kerja nyata."
      }
    ],
    gallery: [
      {
        src: "/images/products/capstone-landing.png",
        caption: "Halaman Beranda & Profil Layanan Atika Shipping Agency",
        tag: "Landing Page"
      },
      {
        src: "/images/products/capstone-dashboard.png",
        caption: "Dasbor Monitoring Status Permohonan Kapal & To-Do List Lapangan",
        tag: "Dasbor Operasional"
      }
    ],
    techStack: ["Python", "Django", "PostgreSQL / SQLite", "Bootstrap", "JavaScript", "HTML / CSS"],
    status: "Selesai Dikembangkan"
  },
  {
    slug: "piggypoggo",
    name: "PiggyPoggo Farm & POS System",
    tagline: "Sistem Manajemen Peternakan, Monitoring Ternak, & Kasir Terintegrasi",
    category: "Manajemen Agribisnis & Kasir",
    role: "Fullstack Developer",
    timeline: "2025",
    badge: "Web Application & POS",
    summary:
      "Sistem cerdas pengelolaan operasional peternakan. Memantau kapasitas kandang, pertumbuhan & usia dinamis hewan, catatan medis vaksinasi, to-do list otomatis, serta kasir pencetakan nota penjualan terpadu.",
    overview: [
      "Aplikasi terpadu yang memadukan manajemen peternakan (livestock tracking) dengan sistem kasir point-of-sale untuk penjualan langsung di kandang maupun pengiriman.",
      "Menyediakan kalkulasi usia hewan otomatis berdasarkan tanggal lahir, pencatatan bobot badan berkala, riwayat pemberian obat, dan pembagian kapasitas kandang agar tidak kelebihan muatan.",
      "Dilengkapi fitur konsultasi cerdas berbasis AI untuk menganalisis deskripsi gejala penyakit pada hewan dan memberikan saran pertolongan pertama."
    ],
    features: [
      {
        title: "Monitoring Populasi & Kapasitas Kandang",
        description: "Pengawasan jumlah dan berat total ternak di setiap kandang dengan indikator batas kapasitas maksimum."
      },
      {
        title: "Pencatatan Hewan & Usia Dinamis",
        description: "Katalog profil ternak dengan penghitungan usia dinamis, pelacakan bobot badan berkala, dan status kesehatan."
      },
      {
        title: "Asisten AI Konsultasi Penyakit",
        description: "Integrasi model AI untuk konsultasi cepat berdasarkan input deskripsi gejala fisik ternak yang sakit."
      },
      {
        title: "Kasir POS & Pembuatan Nota",
        description: "Pencatatan transaksi penjualan ternak, potongan harga, alamat pengiriman, dan pencetakan faktur/nota resmi."
      }
    ],
    gallery: [
      {
        src: "/images/products/piggypoggo-dashboard.png",
        caption: "Dasbor Monitoring Populasi Ternak, Omset & To-Do List Harian",
        tag: "Dasbor Utama"
      },
      {
        src: "/images/products/piggypoggo-kandang.png",
        caption: "Manajemen Kapasitas & Distribusi Kandang Ternak",
        tag: "Kandang"
      },
      {
        src: "/images/products/piggypoggo-babi.png",
        caption: "Pencatatan Profil Ternak & Asisten AI Diagnosa Gejala Penyakit",
        tag: "Monitoring Ternak"
      },
      {
        src: "/images/products/piggypoggo-transaksi.png",
        caption: "Sistem Kasir POS & Rekapitulasi Nota Transaksi Penjualan",
        tag: "Kasir & Nota"
      },
      {
        src: "/images/products/piggypoggo-login.png",
        caption: "Antarmuka Masuk Sistem dengan Maskot Karakter Kustom",
        tag: "Otentikasi"
      }
    ],
    techStack: ["Python", "Django", "Llama 3 AI / Groq", "SQLite", "Chart.js", "Bootstrap", "HTML / CSS"],
    status: "Selesai Dikembangkan"
  }
];
