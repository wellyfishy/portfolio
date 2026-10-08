"use client";

import { useState } from "react";
import Image from "next/image";
import { ProductGalleryItem } from "../../data/products";

export default function ProductGalleryViewer({ items }: { items: ProductGalleryItem[] }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const currentItem = items[selectedIndex];

  return (
    <div>
      {/* Featured Large View */}
      <div
        className="ios-card"
        style={{
          borderRadius: "20px",
          overflow: "hidden",
          border: "1px solid var(--border-subtle)",
          background: "#08080a",
          marginBottom: "16px",
        }}
      >
        <div style={{ position: "relative", width: "100%", height: "auto" }}>
          <Image
            src={currentItem.src}
            alt={currentItem.caption}
            width={1440}
            height={900}
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              objectFit: "contain",
            }}
            priority
          />

          {/* Caption Bar */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              padding: "16px 20px",
              background: "linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.6) 60%, transparent 100%)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "8px",
            }}
          >
            <div>
              <span className="ios-badge" style={{ marginBottom: "4px" }}>
                {currentItem.tag}
              </span>
              <div style={{ fontSize: "14px", fontWeight: 500, color: "#ffffff", marginTop: "4px" }}>
                {currentItem.caption}
              </div>
            </div>

            <div style={{ fontSize: "12px", color: "var(--text-muted)" }}>
              {selectedIndex + 1} / {items.length}
            </div>
          </div>
        </div>
      </div>

      {/* Thumbnails Row */}
      <div style={{ display: "grid", gridTemplateColumns: `repeat(${items.length}, minmax(80px, 1fr))`, gap: "10px" }}>
        {items.map((item, idx) => {
          const isSelected = idx === selectedIndex;
          return (
            <button
              key={item.src}
              type="button"
              onClick={() => setSelectedIndex(idx)}
              style={{
                padding: "3px",
                borderRadius: "12px",
                border: isSelected ? "2px solid #09090b" : "1px solid var(--border-subtle)",
                background: isSelected ? "rgba(0, 0, 0, 0.05)" : "var(--bg-surface)",
                cursor: "pointer",
                textAlign: "left",
                transition: "all 0.2s ease",
                outline: "none",
                display: "block",
              }}
            >
              <div style={{ position: "relative", width: "100%", height: "60px", borderRadius: "8px", overflow: "hidden", marginBottom: "4px" }}>
                <Image
                  src={item.src}
                  alt={item.caption}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div style={{ fontSize: "11px", fontWeight: isSelected ? 600 : 400, color: isSelected ? "var(--text-primary)" : "var(--text-secondary)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", padding: "0 2px" }}>
                {item.tag}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
