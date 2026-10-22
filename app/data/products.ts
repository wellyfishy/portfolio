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
    tagline: "Digital scoring and karate tournament management",
    category: "Tournament Engine",
    role: "Software Developer",
    timeline: "2024 - Present",
    badge: "Local / LAN",
    summary:
      "On-site tournament management system. Powers live TV scoreboards, referee scoring consoles, pool seeding, and automatic bracket drawing over a local network.",
    overview: [
      "Built for on-site karate tournaments to run matches and scoring offline without relying on venue internet connection.",
      "Controls multiple tatami simultaneously, syncing referee scoring tablets to live arena display screens in real time.",
      "Includes automated tournament brackets, category scheduling, and persistent sync to the public web server."
    ],
    features: [
      {
        title: "Digital TV Scoreboard",
        description: "Real-time match display for arena screens with timers, penalties, and points."
      },
      {
        title: "Tatami & Referee Control",
        description: "Operator dashboard for managing match queues and referee jury accounts."
      },
      {
        title: "Automated Bracket Generation",
        description: "Generates fair tournament brackets with automatic pool distribution."
      },
      {
        title: "Live Results Sync",
        description: "Periodically pushes match results and brackets to the public cloud server."
      }
    ],
    gallery: [
      {
        src: "/images/products/ambrilindo-scoring.png",
        caption: "Digital scoreboard displayed on arena screens",
        tag: "TV Scoreboard"
      },
      {
        src: "/images/products/ambrilindo-tatami.png",
        caption: "Tatami management panel and device credentials",
        tag: "Tatami Control"
      },
      {
        src: "/images/products/ambrilindo-dashboard.png",
        caption: "Bracket management and match status center",
        tag: "Tournament Brackets"
      }
    ],
    techStack: ["Python", "Django", "WebSockets", "SQLite", "JavaScript", "HTML / CSS"],
    status: "Active in Production"
  },
  {
    slug: "ambrilindo-vr",
    name: "Ambrilindo VR",
    tagline: "High-performance multi-camera video review & instant replay for WKF karate officiating",
    category: "Video Review & Desktop Engine",
    role: "Systems & Software Developer",
    timeline: "2026 - Present",
    badge: "Desktop / Rust",
    summary:
      "High-performance, low-latency multi-camera video review and instant replay desktop application designed for World Karate Federation (WKF) Kumite and Kata tournament officiating. Built entirely in Rust using egui and native Windows Media Foundation.",
    overview: [
      "Engineered in Rust using egui / eframe to deliver real-time 60 FPS multi-camera monitoring, sub-frame master epoch synchronization, and instantaneous multi-angle replay on referee laptops with zero external dependencies.",
      "Implements an in-memory circular RAM ring buffer with strict memory caps, enabling instant O(1) random-access scrubbing across the last 60–90 seconds of match action without SSD wear or disk bottlenecks.",
      "Features dual-display officiating with an independent second-monitor referee window (F2), side-by-side compare mode (C), and vector drawing telestration for analyzing disputed scoring calls.",
      "Compiled into a standalone AmbrilindoVR.exe binary utilizing native Windows Media Foundation OS APIs, hotplug detection, and watchdog supervision."
    ],
    features: [
      {
        title: "Multi-Camera Synchronized Monitoring",
        description: "Flexible layout presets (1x1, 1x2, 2x2, 3x2, 2x4) monitoring up to 8 cameras concurrently with USB auto-assignment, hotplug detection, and watchdog supervision."
      },
      {
        title: "Instant Multi-Angle Replay",
        description: "Synchronized multi-camera playback tied to master capture epochs with sub-frame timecode, precision stepping (-10F, -1F, +1F, +10F), variable speed presets, and looping review."
      },
      {
        title: "Tournament Session Recording",
        description: "Bundles all active camera angles into cohesive review sessions with lock protection, inline session renaming, and compact MJPEG containerization."
      },
      {
        title: "Dual-Display & Vector Telestration",
        description: "Independent second-monitor referee window (F2) with clean distraction-free video output, compare mode (C), and on-screen drawing overlays for line, arrow, and angle analysis."
      },
      {
        title: "Dynamic Bandwidth & Quality Ladder",
        description: "Automated bandwidth budgeting and quality downshifting (720p30 to 480p30) to eliminate USB host controller saturation on venue laptops."
      },
      {
        title: "Standalone Portable Architecture",
        description: "Compiles into a single standalone AmbrilindoVR.exe with zero external runtime DLLs using native Windows Media Foundation APIs."
      }
    ],
    gallery: [
      {
        src: "/images/products/ambrilindo-vr-console.png",
        caption: "Ambrilindo VR multi-camera monitoring console with diagnostics HUD, timeline controls, and session review",
        tag: "Console & HUD"
      },
      {
        src: "/images/products/ambrilindo-vr-session.png",
        caption: "Tournament session review card with multi-angle bundling and lock protection",
        tag: "Session Manager"
      },
      {
        src: "/images/products/ambrilindo-vr-stream.png",
        caption: "High-precision sub-frame timecode and real-time camera stream monitoring",
        tag: "Frame Monitor"
      }
    ],
    techStack: [
      "Rust",
      "egui / eframe",
      "Windows Media Foundation",
      "Win32 API",
      "Rayon",
      "SIMD / zune-jpeg",
      "Multithreading",
      "MJPEG"
    ],
    status: "Active in Production"
  },
  {
    slug: "ambrilindo-web",
    name: "Ambrilindo Web Portal",
    tagline: "Public portal for tournament registration & live brackets",
    category: "Web Platform",
    role: "Software Developer",
    timeline: "2024 - Present",
    badge: "Cloud Platform",
    summary:
      "Public web platform for online tournament registration, contingent team management, and live match bracket tracking.",
    overview: [
      "Enables contingents across regions to register athletes online with age class validation and document verification.",
      "Provides live tournament brackets and match progress accessible to spectators and team officials on mobile devices.",
      "Automates team notifications via WhatsApp and email for registrations and schedule updates."
    ],
    features: [
      {
        title: "Athlete Registration",
        description: "Self-service registration forms with category rules, age validation, and document upload."
      },
      {
        title: "Real-Time Live Brackets",
        description: "Public bracket tracking with live match status and winner updates."
      },
      {
        title: "Automated Notifications",
        description: "Automated confirmation and alerts via WhatsApp and email."
      },
      {
        title: "Results & Medal Tally",
        description: "Public tournament archives, contingent standings, and medal recaps."
      }
    ],
    gallery: [
      {
        src: "/images/products/ambrilindo-web-landing.png",
        caption: "Ambrilindo.com public portal homepage",
        tag: "Landing Page"
      },
      {
        src: "/images/products/ambrilindo-web-events.png",
        caption: "Tournament schedule and online registration listing",
        tag: "Events Schedule"
      }
    ],
    techStack: ["Python", "Django", "Fly.io", "SQLite WAL", "WhatsApp API", "Email Service"],
    liveUrl: "https://www.ambrilindo.com",
    status: "Live (ambrilindo.com)"
  },
  {
    slug: "ajs",
    name: "Atika Shipping Agency (AJS)",
    tagline: "Maritime operations platform with automated Textract OCR & TF-IDF document classification",
    category: "Operations & Document AI",
    role: "Fullstack Developer",
    timeline: "2025",
    badge: "Operations & Document AI",
    summary:
      "Enterprise operations platform built for PT Atika Jaya Samudera. Streamlines port agency workflows with vessel service tracking, field crew task delegation, attendance logs, and an asynchronous document processing pipeline powered by AWS Textract and scikit-learn TF-IDF classification.",
    overview: [
      "Custom-built for PT Atika Jaya Samudera to digitize port logistics, shipping agency workflows, and vessel service requests.",
      "Features an automated document intelligence pipeline: uploads maritime files to AWS S3, extracts text asynchronously using AWS Textract, and automatically classifies documents (port clearances, manifests, bills of lading) using TF-IDF vectorization and cosine similarity.",
      "Provides operational control boards for dispatching field crew tasks linked to shipments, tracking vessel milestones (IMO), and logging photo-verified field attendance.",
      "Built on an asynchronous worker architecture using Celery and Redis to handle heavy OCR extraction jobs and chunked S3 uploads without blocking user interactions."
    ],
    features: [
      {
        title: "Vessel Shipment & Service Tracking",
        description: "End-to-end tracking of port clearance, bunkering, crew changes, and ship supply requests with status logs."
      },
      {
        title: "AWS Textract Document OCR",
        description: "Asynchronous text extraction pipeline for single-page and multi-page maritime PDFs and scanned documents."
      },
      {
        title: "TF-IDF Machine Learning Classification",
        description: "Automated document categorization using scikit-learn TF-IDF vectorization and cosine similarity scoring against document categories."
      },
      {
        title: "Field Crew Tasks & Attendance",
        description: "Daily task delegation linked to active shipments, paired with photo-verified field crew attendance records."
      },
      {
        title: "Asynchronous Celery & Redis Pipeline",
        description: "Background processing queue for chunked S3 uploads, progress callbacks, and live task logging."
      }
    ],
    gallery: [
      {
        src: "/images/products/ajs-dashboard.png",
        caption: "Operational monitoring dashboard with shipment status and field task list",
        tag: "Operations Dashboard"
      },
      {
        src: "/images/products/ajs-dokumen.png",
        caption: "Digital document warehouse with AWS Textract OCR and automated categorization",
        tag: "Document AI"
      },
      {
        src: "/images/products/ajs-shipment.png",
        caption: "Vessel shipment management and active service tracking",
        tag: "Shipments"
      },
      {
        src: "/images/products/ajs-landing.png",
        caption: "Public company landing page with vessel services overview",
        tag: "Landing Page"
      }
    ],
    techStack: [
      "Python",
      "Django",
      "Celery",
      "Redis",
      "AWS S3",
      "AWS Textract",
      "scikit-learn",
      "NumPy",
      "PostgreSQL",
      "Bootstrap",
      "JavaScript"
    ],
    status: "Completed"
  },
  {
    slug: "piggypoggo",
    name: "PiggyPoggo Farm & POS System",
    tagline: "Livestock management, herd monitoring & integrated POS",
    category: "Agri-Tech & POS",
    role: "Fullstack Developer",
    timeline: "2025",
    badge: "Web & POS",
    summary:
      "Farm operations platform combining livestock lifecycle tracking with an integrated point-of-sale system for on-site sales and delivery invoicing.",
    overview: [
      "Combines animal lifecycle tracking with point-of-sale checkout for on-site livestock sales and invoicing.",
      "Calculates dynamic animal age from birth dates, tracks periodic weight gain, and monitors pen capacity limits.",
      "Integrates an AI-assisted symptom checker to suggest preliminary first-aid steps based on observed symptoms."
    ],
    features: [
      {
        title: "Herd & Pen Monitoring",
        description: "Monitors animal count and total weight per pen against maximum capacity thresholds."
      },
      {
        title: "Livestock Profiles & Age Tracking",
        description: "Dynamic age calculation, periodic weight tracking, and medical history logs."
      },
      {
        title: "AI Symptom Assistant",
        description: "AI integration for rapid preliminary checks based on reported physical symptoms."
      },
      {
        title: "POS & Invoice Generation",
        description: "Handles sales transactions, discounts, shipping addresses, and receipt printing."
      }
    ],
    gallery: [
      {
        src: "/images/products/piggypoggo-dashboard.png",
        caption: "Farm dashboard with herd stats, revenue, and daily tasks",
        tag: "Dashboard"
      },
      {
        src: "/images/products/piggypoggo-kandang.png",
        caption: "Pen capacity management and livestock distribution",
        tag: "Pens"
      },
      {
        src: "/images/products/piggypoggo-babi.png",
        caption: "Livestock records and AI symptom assistant",
        tag: "Herd Tracking"
      },
      {
        src: "/images/products/piggypoggo-transaksi.png",
        caption: "POS checkout and transaction receipt logs",
        tag: "POS & Receipts"
      },
      {
        src: "/images/products/piggypoggo-login.png",
        caption: "Authentication screen with custom mascot",
        tag: "Login"
      }
    ],
    techStack: ["Python", "Django", "Llama 3 / Groq", "SQLite", "Chart.js", "Bootstrap", "HTML / CSS"],
    status: "Completed"
  }
];
