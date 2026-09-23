import type { Member } from "@/data/team";

export default function AlumniWall({ members }: { members: Member[] }) {
  return (
    <section className="block wrap" id="alumni">
      <div className="section-head">
        <h2>Alumni</h2>
        <span className="count">
          {String(members.length).padStart(2, "0")} on record
        </span>
      </div>
      <div className="alumni-wall">
        {members.map((m) => (
          <div className="alumni-entry" key={m.name}>
            {m.linkedin ? (
              <a href={m.linkedin} target="_blank" rel="noreferrer">
                {m.name}
              </a>
            ) : (
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}>
                {m.name}
              </span>
            )}
            <p>{m.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
