import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title") || "miMesa";
  const subtitle =
    searchParams.get("subtitle") ||
    "Commission-free restaurant reservations";
  const type = searchParams.get("type") || "default";

  const accent =
    type === "blog"
      ? "#EA580C"
      : type === "compare"
        ? "#D97706"
        : "#F59E0B";

  const badge =
    type === "solution"
      ? "SOLUTIONS"
      : type === "blog"
        ? "BLOG"
        : type === "compare"
          ? "COMPARISON"
          : "MIMESA";

  const titleSize = title.length > 60 ? 38 : title.length > 40 ? 44 : 52;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px",
          background: "linear-gradient(135deg, #2F2519 0%, #4a3828 50%, #2F2519 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative blobs */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: `radial-gradient(circle, ${accent}22 0%, transparent 70%)`,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-80px",
            left: "-80px",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: `radial-gradient(circle, ${accent}15 0%, transparent 70%)`,
          }}
        />

        {/* Top section */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {/* Badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <div
              style={{
                padding: "6px 16px",
                borderRadius: "999px",
                backgroundColor: `${accent}30`,
                border: `1px solid ${accent}50`,
                color: accent,
                fontSize: "14px",
                fontWeight: 700,
                letterSpacing: "2px",
              }}
            >
              {badge}
            </div>
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: `${titleSize}px`,
              fontWeight: 800,
              color: "white",
              lineHeight: 1.2,
              maxWidth: "900px",
            }}
          >
            {title}
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: "22px",
              color: "rgba(255,255,255,0.6)",
              maxWidth: "700px",
              lineHeight: 1.5,
            }}
          >
            {subtitle}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(255,255,255,0.1)",
            paddingTop: "24px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              style={{
                fontSize: "28px",
                fontWeight: 800,
                color: "white",
                display: "flex",
                alignItems: "center",
              }}
            >
              <span style={{ color: "#F59E0B" }}>mi</span>
              <span style={{ color: "#FBBF24" }}>Mesa</span>
            </div>
          </div>
          <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "16px" }}>
            mimesa.ch
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
