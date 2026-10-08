import Link from "next/link";
import Image from "next/image";
import { ArrowDown, ArrowRight, ExternalLink, Mail } from "lucide-react";
import { products } from "./data/products";

function InstagramIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function Home() {
  return (
    <div>
      {/* 1. Hero Section */}
      <section style={{ padding: "36px 0 24px 0" }}>
        <div className="container">
          <div className="hero-glass-card">
            
            {/* Pill Badge */}
            <div style={{ marginBottom: "16px" }}>
              <span className="ios-badge ios-badge-silver">
                <span>Fullstack Developer</span>
              </span>
            </div>

            {/* Headline */}
            <h1
              style={{
                fontSize: "clamp(34px, 5.2vw, 54px)",
                fontWeight: 800,
                letterSpacing: "-0.04em",
                lineHeight: 1.12,
                marginBottom: "16px",
                color: "var(--text-primary)",
              }}
            >
              Hi, I&apos;m <span className="hero-name-gradient">wellyfishy</span>.
            </h1>

            {/* Concise Bio */}
            <p
              style={{
                fontSize: "clamp(15.5px, 2vw, 17.5px)",
                color: "var(--text-secondary)",
                lineHeight: 1.65,
                maxWidth: "600px",
                margin: "0 auto",
                fontWeight: 450,
              }}
            >
              Fullstack developer focused on building reliable web applications, local-first tournament engines, and clean backend systems.
            </p>

            {/* CTA Buttons */}
            <div style={{ marginTop: "28px", display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap" }}>
              <a
                href="#projects"
                className="btn-ios btn-ios-solid"
              >
                <span>View Projects</span>
                <ArrowDown size={14} style={{ opacity: 0.8 }} />
              </a>

              <a
                href="mailto:wellysetiarahman2806@gmail.com"
                className="btn-ios btn-ios-glass"
              >
                <Mail size={14} />
                <span>Contact</span>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Projects Showcase */}
      <section id="projects" style={{ padding: "24px 0 64px 0" }}>
        <div className="container">
          
          <div className="showcase-header-card">
            <h2 className="section-title" style={{ fontSize: "24px", marginBottom: "6px" }}>
              Featured Projects
            </h2>
            <p style={{ fontSize: "14.5px", color: "var(--text-secondary)", lineHeight: 1.6, margin: 0, maxWidth: "640px" }}>
              Selected systems and web applications built for real-world production environments.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "32px" }}>
            {products.map((product) => (
              <div key={product.slug} className="ios-card" style={{ padding: "32px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "32px", alignItems: "center" }}>
                  <div>
                    <div style={{ display: "flex", gap: "8px", marginBottom: "12px" }}>
                      <span className="ios-badge ios-badge-silver">{product.badge}</span>
                    </div>

                    <h3 style={{ fontSize: "22px", color: "var(--text-primary)", marginBottom: "8px" }}>
                      {product.name}
                    </h3>

                    <p style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: "18px" }}>
                      {product.summary}
                    </p>

                    <div style={{ display: "flex", flexDirection: "column", gap: "7px", marginBottom: "20px" }}>
                      {product.features.slice(0, 3).map((feat) => (
                        <div key={feat.title} style={{ fontSize: "13.5px", color: "var(--text-primary)", display: "flex", alignItems: "center", gap: "8px" }}>
                          <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#64748b", flexShrink: 0 }} />
                          <span>{feat.title}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech */}
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "22px" }}>
                      {product.techStack.map((tech) => (
                        <span key={tech} className="ios-badge" style={{ fontSize: "11px", padding: "3px 10px" }}>
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                      <Link href={`/products/${product.slug}`} className="btn-ios btn-ios-solid">
                        <span>Details</span>
                        <ArrowRight size={14} />
                      </Link>
                      {product.liveUrl && (
                        <a href={product.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-ios btn-ios-glass">
                          <span>Live Site</span>
                          <ExternalLink size={13} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Screenshot */}
                  <div style={{ position: "relative", borderRadius: "16px", overflow: "hidden", border: "1px solid var(--border-subtle)", background: "#0a0a0d", boxShadow: "0 8px 24px rgba(0, 0, 0, 0.06)" }}>
                    <Image
                      src={product.gallery[0].src}
                      alt={product.name}
                      width={700}
                      height={440}
                      style={{ width: "100%", height: "auto", display: "block" }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Contact Section */}
      <section style={{ padding: "36px 0 64px 0" }}>
        <div className="container">
          <div className="ios-card" style={{ padding: "36px 24px", textAlign: "center", maxWidth: "620px", margin: "0 auto" }}>
            <h3 style={{ fontSize: "22px", color: "var(--text-primary)", marginBottom: "8px" }}>
              Get in Touch
            </h3>
            <p style={{ fontSize: "14px", color: "var(--text-secondary)", marginBottom: "22px", maxWidth: "440px", margin: "0 auto 22px auto" }}>
              Open for freelance work, projects, and collaboration.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap" }}>
              <a href="mailto:wellysetiarahman2806@gmail.com" className="btn-ios btn-ios-solid">
                <Mail size={15} />
                <span>Email</span>
              </a>
              <a href="https://github.com/wellyfishy" target="_blank" rel="noopener noreferrer" className="btn-ios btn-ios-glass">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
                <span>GitHub</span>
              </a>
              <a href="https://instagram.com/wellyfishy" target="_blank" rel="noopener noreferrer" className="btn-ios btn-ios-glass">
                <InstagramIcon size={15} />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
