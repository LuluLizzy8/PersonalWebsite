const petals = [
  { emoji: "🌸", left: "4%",  fontSize: "13px", animationDuration: "7s",   animationDelay: "0s" },
  { emoji: "🌿", left: "13%", fontSize: "9px",  animationDuration: "9.5s", animationDelay: "1.5s" },
  { emoji: "🌸", left: "24%", fontSize: "15px", animationDuration: "8s",   animationDelay: "0.3s" },
  { emoji: "🌷", left: "36%", fontSize: "10px", animationDuration: "11s",  animationDelay: "3s" },
  { emoji: "🌸", left: "47%", fontSize: "17px", animationDuration: "7.5s", animationDelay: "0.7s" },
  { emoji: "🍃", left: "58%", fontSize: "11px", animationDuration: "10s",  animationDelay: "4s" },
  { emoji: "🌸", left: "68%", fontSize: "9px",  animationDuration: "6.5s", animationDelay: "1.2s" },
  { emoji: "🌺", left: "77%", fontSize: "14px", animationDuration: "9.5s", animationDelay: "3.3s" },
  { emoji: "🌷", left: "87%", fontSize: "12px", animationDuration: "8.5s", animationDelay: "0.9s" },
  { emoji: "🌸", left: "94%", fontSize: "10px", animationDuration: "7.2s", animationDelay: "5s" },
];

const rippleLines = [
  { top: "18%", height: "2px", animationDuration: "14s", animationDelay: "0s" },
  { top: "36%", height: "2px", animationDuration: "19s", animationDelay: "-3s" },
  { top: "54%", height: "2px", animationDuration: "12s", animationDelay: "-7s" },
  { top: "72%", height: "2px", animationDuration: "17s", animationDelay: "-5s" },
  { top: "88%", height: "2px", animationDuration: "21s", animationDelay: "-9s" },
];

export default function SilkBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Silk gradient base */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(150deg, #fce8ee 0%, #e8f4ec 40%, #f4e8f0 70%, #ddeedd 100%)",
        }}
      />

      {/* Animated sheen */}
      <div className="silk-sheen absolute inset-0" />

      {/* Ripple lines */}
      <div className="absolute inset-0 overflow-hidden">
        {rippleLines.map((line, i) => (
          <div
            key={i}
            className="silk-ripple-line"
            style={{
              top: line.top,
              height: line.height,
              animationDuration: line.animationDuration,
              animationDelay: line.animationDelay,
            }}
          />
        ))}
      </div>

      {/* Falling petals */}
      {petals.map((petal, i) => (
        <div
          key={i}
          className="falling-petal"
          style={{
            left: petal.left,
            fontSize: petal.fontSize,
            animationDuration: petal.animationDuration,
            animationDelay: petal.animationDelay,
          }}
        >
          {petal.emoji}
        </div>
      ))}

      {/* Lace corner ornaments */}
      <div className="lace-corner" style={{ top: 10, left: 10 }}>❧</div>
      <div className="lace-corner" style={{ top: 10, right: 10, transform: "scaleX(-1)" }}>❧</div>
      <div className="lace-corner" style={{ bottom: 10, left: 10, transform: "scaleY(-1)" }}>❧</div>
      <div className="lace-corner" style={{ bottom: 10, right: 10, transform: "scale(-1,-1)" }}>❧</div>
    </div>
  );
}
