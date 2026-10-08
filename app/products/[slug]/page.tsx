import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { products } from "../../data/products";
import ProductGalleryViewer from "./ProductGalleryViewer";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export const instant = false;

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};

  return {
    title: `${product.name} - wellyfishy Portfolio`,
    description: product.summary,
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const currentIndex = products.findIndex((p) => p.slug === slug);
  const nextProduct = products[(currentIndex + 1) % products.length];

  return (
    <div className="section-py">
      <div className="container">
        {/* Back Link */}
        <div style={{ marginBottom: "28px" }}>
          <Link
            href="/products"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "13px",
              fontWeight: 500,
              color: "var(--text-secondary)",
            }}
          >
            <ArrowLeft size={14} />
            <span>Back to Projects</span>
          </Link>
        </div>

        {/* Hero Header */}
        <div style={{ maxWidth: "780px", marginBottom: "32px" }}>
          <h1 style={{ fontSize: "clamp(30px, 4.5vw, 44px)", fontWeight: 800, marginBottom: "12px", color: "var(--text-primary)", letterSpacing: "-0.03em", lineHeight: 1.15 }}>
            {product.name}
          </h1>

          <p style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: 1.65, marginBottom: "20px" }}>
            {product.tagline}
          </p>

          {product.liveUrl && (
            <div style={{ marginBottom: "12px" }}>
              <a
                href={product.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ios btn-ios-solid"
                style={{ fontSize: "13px", padding: "8px 18px" }}
              >
                <span>Visit Site ({product.liveUrl.replace("https://", "")})</span>
                <ExternalLink size={13} />
              </a>
            </div>
          )}
        </div>

        {/* Screenshot Gallery Viewer */}
        <div style={{ marginBottom: "44px" }}>
          <ProductGalleryViewer items={product.gallery} />
        </div>

        {/* Overview & Description */}
        <div className="ios-card" style={{ padding: "32px", marginBottom: "32px" }}>
          <h2 style={{ fontSize: "20px", fontWeight: 700, letterSpacing: "-0.02em", color: "var(--text-primary)", marginBottom: "14px" }}>
            About
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "15px", color: "var(--text-secondary)", lineHeight: 1.7 }}>
            {product.overview.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>

        {/* Features */}
        <div style={{ marginBottom: "36px" }}>
          <h2 style={{ fontSize: "20px", fontWeight: 700, letterSpacing: "-0.02em", color: "var(--text-primary)", marginBottom: "18px" }}>
            Key Features
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "18px" }}>
            {product.features.map((feat) => (
              <div key={feat.title} className="ios-card" style={{ padding: "22px" }}>
                <h3 style={{ fontSize: "15.5px", fontWeight: 650, color: "var(--text-primary)", marginBottom: "6px" }}>
                  {feat.title}
                </h3>
                <p style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: 1.65 }}>
                  {feat.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="ios-card" style={{ padding: "26px", marginBottom: "40px" }}>
          <h3 style={{ fontSize: "16px", fontWeight: 700, color: "var(--text-primary)", marginBottom: "14px" }}>
            Tech Stack
          </h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {product.techStack.map((tech) => (
              <span
                key={tech}
                className="ios-badge"
                style={{ fontSize: "11.5px", padding: "4px 12px" }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Next Product Navigation */}
        {nextProduct && (
          <div
            className="ios-card"
            style={{
              padding: "26px 30px",
              marginTop: "40px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "16px",
            }}
          >
            <div>
              <div style={{ fontSize: "11.5px", color: "var(--text-muted)", fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase" }}>
                Next Project
              </div>
              <div style={{ fontSize: "20px", fontWeight: 700, letterSpacing: "-0.02em", color: "var(--text-primary)", marginTop: "3px" }}>
                {nextProduct.name}
              </div>
            </div>

            <Link
              href={`/products/${nextProduct.slug}`}
              className="btn-ios btn-ios-solid"
              style={{ fontSize: "13px", padding: "8px 20px" }}
            >
              <span>View {nextProduct.name}</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
