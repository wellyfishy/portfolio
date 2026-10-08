import { ArrowUpRight, Mail } from "lucide-react";

function InstagramIcon({ size = 13 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="footer-wrap">
      <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
        <div>
          <div style={{ fontWeight: 700, fontSize: "14px", color: "var(--text-primary)" }}>
            wellyfishy
          </div>
          <a
            href="mailto:wellysetiarahman2806@gmail.com"
            style={{ fontSize: "13px", color: "var(--text-muted)", marginTop: "2px", display: "inline-block" }}
          >
            wellysetiarahman2806@gmail.com
          </a>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "20px", flexWrap: "wrap" }}>
          <a
            href="mailto:wellysetiarahman2806@gmail.com"
            style={{ fontSize: "13px", color: "var(--text-secondary)", display: "inline-flex", alignItems: "center", gap: "5px" }}
          >
            <Mail size={13} style={{ opacity: 0.7 }} />
            <span>Email</span>
          </a>
          <a
            href="https://instagram.com/wellyfishy"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: "13px", color: "var(--text-secondary)", display: "inline-flex", alignItems: "center", gap: "4px" }}
          >
            <InstagramIcon size={13} />
            <span>Instagram</span>
            <ArrowUpRight size={11} style={{ opacity: 0.6 }} />
          </a>
          <a
            href="https://github.com/wellyfishy"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: "13px", color: "var(--text-secondary)", display: "inline-flex", alignItems: "center", gap: "4px" }}
          >
            <span>GitHub</span>
            <ArrowUpRight size={11} style={{ opacity: 0.6 }} />
          </a>
        </div>
      </div>
    </footer>
  );
}
