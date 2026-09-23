// A generative, abstract field of dots — not a trace of any real
// image — evoking the nuclei distribution the lab studies under a
// microscope. Deterministic (seeded LCG) so server and client render
// identically.

function seededPoints(count: number, seed: number) {
  let s = seed;
  const rand = () => {
    s = (s * 1103515245 + 12345) % 2147483648;
    return s / 2147483648;
  };
  const colors = ["var(--violet)", "var(--rose)", "var(--ochre)", "var(--slate)"];
  const pts = [];
  for (let i = 0; i < count; i++) {
    pts.push({
      cx: rand() * 320,
      cy: rand() * 220,
      r: 2 + rand() * rand() * 16,
      fill: colors[Math.floor(rand() * colors.length)],
      opacity: 0.18 + rand() * 0.55,
    });
  }
  return pts;
}

const points = seededPoints(90, 42);

export default function SpecimenPattern() {
  return (
    <svg
      className="hero__pattern"
      viewBox="0 0 320 220"
      role="img"
      aria-label="Abstract field of dots suggesting cells under a microscope"
    >
      <rect width="320" height="220" fill="var(--paper-deep)" />
      {points.map((p, i) => (
        <circle
          key={i}
          cx={p.cx}
          cy={p.cy}
          r={p.r}
          fill={p.fill}
          opacity={p.opacity}
        />
      ))}
    </svg>
  );
}
