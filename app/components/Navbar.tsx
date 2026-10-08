"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="nav-capsule-wrap">
      <header className="nav-capsule">
        {/* Left: Brand + Heartbeat Dot + Open to Work */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Link href="/" className="nav-logo" style={{ textDecoration: "none" }}>
            <span>wellyfishy</span>
          </Link>

          <div className="badge-open-work">
            <span className="live-heartbeat-dot" />
            <span>Open to work</span>
          </div>
        </div>

        {/* Right-Aligned Links */}
        <nav style={{ marginLeft: "auto" }}>
          <ul className="nav-menu" style={{ justifyContent: "flex-end" }}>
            <li className="nav-item-hide-mobile">
              <Link href="/" className={pathname === "/" ? "active" : ""}>
                Ringkasan
              </Link>
            </li>
            <li>
              <Link href="/products" className={pathname.startsWith("/products") ? "active" : ""}>
                Produk
              </Link>
            </li>
            <li>
              <a
                href="https://github.com/wellyfishy"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "3px" }}
              >
                <span>GitHub</span>
                <ArrowUpRight size={13} style={{ opacity: 0.6 }} />
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
