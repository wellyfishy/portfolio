import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink, Sparkles } from "lucide-react";
import { products } from "../data/products";

export default function ProductsPage() {
  return (
    <div className="section-py" style={{ minHeight: "80vh" }}>
      <div className="container">
        {/* Header - Styled consistently with Ringkasan showcase */}
        <div className="showcase-header-card" style={{ display: "block", marginBottom: "36px" }}>
          <div className="ios-badge ios-badge-silver" style={{ marginBottom: "12px" }}>
            <Sparkles size={11} />
            <span>Katalog Produk &bull; Sistem Digital</span>
          </div>
          <h1 className="section-title" style={{ fontSize: "28px", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: "8px" }}>
            Semua Produk
          </h1>
          <p style={{ fontSize: "14.5px", color: "var(--text-secondary)", lineHeight: 1.65, margin: 0, maxWidth: "680px" }}>
            Daftar aplikasi dan sistem yang telah dibangun dan diimplementasikan untuk kebutuhan nyata.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "28px" }}>
          {products.map((product) => (
            <div
              key={product.slug}
              className="ios-card"
              style={{ display: "flex", flexDirection: "column", height: "100%" }}
            >
              {/* Product Thumbnail (Clean without top badges) */}
              <div style={{ position: "relative", height: "230px", overflow: "hidden", borderBottom: "1px solid var(--border-subtle)", background: "#0a0a0d" }}>
                <Image
                  src={product.gallery[0].src}
                  alt={product.name}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>

              {/* Product Body */}
              <div style={{ padding: "26px", display: "flex", flexDirection: "column", flex: 1 }}>
                <h2 style={{ fontSize: "21px", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: "10px", color: "var(--text-primary)" }}>
                  {product.name}
                </h2>

                <p style={{ fontSize: "14.5px", color: "var(--text-secondary)", lineHeight: 1.65, marginBottom: "20px", flex: 1 }}>
                  {product.summary}
                </p>

                {/* Tech Badges */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "22px" }}>
                  {product.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="ios-badge"
                      style={{ fontSize: "11px", padding: "3px 10px" }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "14px", borderTop: "1px solid var(--border-subtle)" }}>
                  <Link
                    href={`/products/${product.slug}`}
                    className="btn-ios btn-ios-solid"
                    style={{ fontSize: "13px", padding: "8px 18px" }}
                  >
                    <span>Detail Produk</span>
                    <ArrowRight size={13} />
                  </Link>

                  {product.liveUrl && (
                    <a
                      href={product.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ios btn-ios-glass"
                      style={{ fontSize: "12px", padding: "8px 14px" }}
                      title="Buka website"
                    >
                      <span>Website</span>
                      <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
