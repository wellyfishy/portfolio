import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  Briefcase,
  GraduationCap,
  MapPin,
  Mail,
  ExternalLink,
  Calendar,
  Globe,
  Layers,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Welly Setia Rahman | Software Engineer - Profile",
  description:
    "Professional profile of Welly Setia Rahman (wellyfishy). Software Engineer with 6 years experience in web platforms, tournament engines, and backend systems.",
};

function LinkedInIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GitHubIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export default function ProfilePage() {
  return (
    <div className="section-py">
      <div className="container" style={{ maxWidth: "820px" }}>
        
        {/* 1. Clean Profile Header Card */}
        <div className="ios-card profile-card">
          <div className="profile-header-layout">
            <Image
              src="/images/welly.webp"
              alt="Welly Setia Rahman"
              width={88}
              height={88}
              className="profile-avatar-img"
              priority
            />

            <div style={{ flex: 1, minWidth: 0 }}>
              <div className="profile-name-row">
                <h1 className="profile-name">
                  Welly Setia Rahman
                </h1>
                <span className="profile-handle">
                  @wellyfishy
                </span>
              </div>

              <div className="profile-role-title">
                Software Engineer &bull; Full-Stack Developer
              </div>

              <div className="profile-location">
                <MapPin size={13} />
                <span>Samarinda, East Kalimantan, Indonesia</span>
              </div>

              <p className="profile-bio">
                Co-Founder at <Link href="/products/ambrilindo" style={{ textDecoration: "underline", fontWeight: 500 }}>Ambrilindo</Link> &amp; Tournament Committee (Komisi Pertandingan) at Pengprov FORKI Kalimantan Timur. 6 years of experience building web platforms, offline-first tournament scoring engines, and backend services with Python, TypeScript, and Linux.
              </p>

              {/* Action Buttons */}
              <div className="profile-actions">
                <a
                  href="mailto:wellysetiarahman2806@gmail.com"
                  className="btn-ios btn-ios-solid"
                  style={{ fontSize: "12.5px", padding: "7px 16px" }}
                >
                  <Mail size={13} />
                  <span>Send Email</span>
                </a>
                <a
                  href="https://github.com/wellyfishy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ios btn-ios-glass"
                  style={{ fontSize: "12.5px", padding: "7px 14px" }}
                >
                  <GitHubIcon size={13} />
                  <span>GitHub</span>
                  <ExternalLink size={11} style={{ opacity: 0.5 }} />
                </a>
                <a
                  href="https://linkedin.com/in/welly-rahman-72a789267"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ios btn-ios-glass"
                  style={{ fontSize: "12.5px", padding: "7px 14px" }}
                >
                  <LinkedInIcon size={13} />
                  <span>LinkedIn</span>
                  <ExternalLink size={11} style={{ opacity: 0.5 }} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Experience & Career (Clean Timeline Branching) */}
        <div className="ios-card profile-section-card">
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "22px" }}>
            <Briefcase size={17} style={{ color: "var(--text-primary)" }} />
            <h2 style={{ fontSize: "18px", fontWeight: 700, color: "var(--text-primary)" }}>
              Experience
            </h2>
          </div>

          <div className="timeline-branch">
            
            {/* Role 1: Ambrilindo */}
            <div className="timeline-item">
              <span className="timeline-node timeline-node-accent" />
              <div>
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-role-name">
                      Co-Founder &amp; Lead Software Engineer
                    </h3>
                    <div className="timeline-company">
                      <Link href="/products/ambrilindo" style={{ textDecoration: "underline" }}>
                        Ambrilindo
                      </Link>{" "}
                      (ambrilindo.com)
                    </div>
                  </div>
                  <div className="timeline-date-badge">
                    <Calendar size={12} />
                    <span>2020 – Present</span>
                  </div>
                </div>

                <ul className="timeline-list">
                  <li>Built the tournament engine handling on-site operations for 20+ championships (400–2,000 athletes each).</li>
                  <li>Developed live TV scoreboards, referee scoring consoles, and automated bracket generators over an offline LAN stack.</li>
                  <li>Managed match-day Linux server deployments with zero downtime during live tournament finals.</li>
                </ul>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
                  {["Python", "Django", "WebSockets", "SQLite", "Linux", "Nginx"].map((skill) => (
                    <span key={skill} className="ios-badge" style={{ fontSize: "10.5px", padding: "2px 8px" }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Role 2: Freelance */}
            <div className="timeline-item">
              <span className="timeline-node" />
              <div>
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-role-name">
                      Full-Stack Developer
                    </h3>
                    <div className="timeline-company">
                      Freelance
                    </div>
                  </div>
                  <div className="timeline-date-badge">
                    <Calendar size={12} />
                    <span>2020 – Present</span>
                  </div>
                </div>

                <ul className="timeline-list">
                  <li>Built custom web applications using Python (Django, FastAPI) and PHP (Laravel).</li>
                  <li>Designed REST APIs, optimized SQL queries, and implemented Redis caching for low-latency responses.</li>
                  <li>Handled end-to-end delivery: requirements, Figma UI design, and production Linux deployment with Docker and Nginx.</li>
                </ul>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
                  {["FastAPI", "Laravel", "PostgreSQL", "Redis", "Docker"].map((skill) => (
                    <span key={skill} className="ios-badge" style={{ fontSize: "10.5px", padding: "2px 8px" }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Role 3: UMKT Internship */}
            <div className="timeline-item">
              <span className="timeline-node" />
              <div>
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-role-name">
                      Junior Developer (Intern)
                    </h3>
                    <div className="timeline-company">
                      <a
                        href="https://umkt.ac.id"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "underline" }}
                      >
                        Universitas Muhammadiyah Kalimantan Timur (UMKT)
                      </a>
                    </div>
                  </div>
                  <div className="timeline-date-badge">
                    <Calendar size={12} />
                    <span>2024</span>
                  </div>
                </div>

                <ul className="timeline-list">
                  <li>Developed and maintained university web platforms and academic services using Python and Django.</li>
                  <li>Built backend models, views, and REST API endpoints integrated with responsive web interfaces.</li>
                  <li>Collaborated with the university IT team on database query optimizations, bug fixes, and feature enhancements.</li>
                </ul>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
                  {["Python", "Django", "JavaScript", "REST APIs", "Git"].map((skill) => (
                    <span key={skill} className="ios-badge" style={{ fontSize: "10.5px", padding: "2px 8px" }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Role 4: FORKI */}
            <div className="timeline-item">
              <span className="timeline-node" />
              <div>
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-role-name">
                      Tournament Committee (Komisi Pertandingan)
                    </h3>
                    <div className="timeline-company">
                      Pengprov FORKI Kalimantan Timur
                    </div>
                  </div>
                  <div className="timeline-date-badge">
                    <Calendar size={12} />
                    <span>2025 – Present</span>
                  </div>
                </div>

                <ul className="timeline-list">
                  <li>Appointed to the provincial tournament committee (Pengprov FORKI Kaltim) in recognition of extensive technical and operational contributions to modernizing regional karate championships.</li>
                  <li>Spearheaded digital scoring adoption and real-time match management across regional and provincial tournaments, transitioning venues away from manual paper tallying.</li>
                  <li>Supervised scoring table operations, credential verification, and match scheduling for major official championships across East Kalimantan.</li>
                </ul>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
                  {["Sports Technology", "Tournament Operations", "Match Coordination", "FORKI Kaltim"].map((skill) => (
                    <span key={skill} className="ios-badge" style={{ fontSize: "10.5px", padding: "2px 8px" }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 3. Education & Honors (Combined, High-Density) */}
        <div className="ios-card profile-section-card">
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}>
            <GraduationCap size={17} style={{ color: "var(--text-primary)" }} />
            <h2 style={{ fontSize: "18px", fontWeight: 700, color: "var(--text-primary)" }}>
              Education &amp; Honors
            </h2>
          </div>

          {/* Politeknik Negeri Samarinda */}
          <div className="edu-block">
            <div className="edu-header">
              <div>
                <h3 style={{ fontSize: "16px", fontWeight: 700, color: "var(--text-primary)" }}>
                  Politeknik Negeri Samarinda
                </h3>
                <div style={{ fontSize: "14px", color: "var(--text-secondary)", fontWeight: 500 }}>
                  Associate Degree (D3) in Informatics Engineering
                </div>
              </div>
              <div className="edu-meta">
                <span className="ios-badge ios-badge-silver" style={{ fontWeight: 700, fontSize: "11.5px" }}>
                  GPA 3.87 / 4.00
                </span>
                <div style={{ fontSize: "12px", color: "var(--text-muted)", marginTop: "3px" }}>
                  2023 – 2026
                </div>
              </div>
            </div>

            <p style={{ fontSize: "13.5px", color: "var(--text-secondary)", lineHeight: 1.6, marginTop: "8px", margin: 0 }}>
              Final Project: Built the maritime operations and document AI system for PT Atika Jaya Samudera (AJS) with AWS Textract OCR &amp; TF-IDF classification. (<Link href="/products/ajs" style={{ textDecoration: "underline", fontWeight: 500 }}>View Project</Link>)
            </p>
          </div>

          {/* Achievements Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "12px" }}>
            
            {/* Hackathon */}
            <div className="achievement-card">
              <div className="achievement-icon-box">
                <Award size={18} />
              </div>
              <div>
                <div style={{ fontSize: "14.5px", fontWeight: 700, color: "var(--text-primary)", marginBottom: "2px" }}>
                  3rd Place Winner &mdash; National Hackathon (KMIPN VI, 2024)
                </div>
                <p style={{ fontSize: "13px", color: "var(--text-secondary)", lineHeight: 1.55, margin: 0 }}>
                  Built <em>CampusConnect</em>, a web platform for polytechnic student project portfolios and automated industry internship matchmaking.
                </p>
              </div>
            </div>

            {/* PILMAPRES */}
            <div className="achievement-card">
              <div className="achievement-icon-box">
                <GraduationCap size={18} />
              </div>
              <div>
                <div style={{ fontSize: "14.5px", fontWeight: 700, color: "var(--text-primary)", marginBottom: "2px" }}>
                  Mahasiswa Berprestasi (PILMAPRES) Honoree
                </div>
                <p style={{ fontSize: "13px", color: "var(--text-secondary)", lineHeight: 1.55, margin: 0 }}>
                  Selected as polytechnic-level Outstanding Student based on academic performance (GPA 3.87) and national technology achievements.
                </p>
              </div>
            </div>

            {/* TOEFL */}
            <div className="achievement-card">
              <div className="achievement-icon-box">
                <Globe size={18} />
              </div>
              <div>
                <div style={{ fontSize: "14.5px", fontWeight: 700, color: "var(--text-primary)", marginBottom: "2px" }}>
                  English Proficiency &mdash; TOEFL Prediction: 513
                </div>
                <p style={{ fontSize: "13px", color: "var(--text-secondary)", lineHeight: 1.55, margin: 0 }}>
                  Professional working English proficiency for technical documentation, cross-functional collaboration, and software architecture.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* 4. Compact Technical Stack */}
        <div className="ios-card profile-section-card">
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
            <Layers size={17} style={{ color: "var(--text-primary)" }} />
            <h2 style={{ fontSize: "18px", fontWeight: 700, color: "var(--text-primary)" }}>
              Technical Stack
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "13.5px" }}>
            <div className="tech-stack-row">
              <span className="tech-stack-label">Languages</span>
              <div className="tech-stack-badges">
                {["Python", "JavaScript (ES6+)", "PHP", "SQL", "HTML5 / CSS3"].map((item) => (
                  <span key={item} className="ios-badge" style={{ fontSize: "11px", padding: "2px 8px" }}>
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="tech-stack-row">
              <span className="tech-stack-label">Frameworks</span>
              <div className="tech-stack-badges">
                {["Django", "FastAPI", "Next.js", "React", "Laravel", "Tailwind CSS"].map((item) => (
                  <span key={item} className="ios-badge" style={{ fontSize: "11px", padding: "2px 8px" }}>
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="tech-stack-row">
              <span className="tech-stack-label">Infrastructure</span>
              <div className="tech-stack-badges">
                {["PostgreSQL", "MySQL", "Redis", "Docker", "Linux (Ubuntu)", "Nginx", "Git / GitHub"].map((item) => (
                  <span key={item} className="ios-badge" style={{ fontSize: "11px", padding: "2px 8px" }}>
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="tech-stack-row">
              <span className="tech-stack-label">Tools &amp; Design</span>
              <div className="tech-stack-badges">
                {["Figma", "Canva", "REST APIs"].map((item) => (
                  <span key={item} className="ios-badge" style={{ fontSize: "11px", padding: "2px 8px" }}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
