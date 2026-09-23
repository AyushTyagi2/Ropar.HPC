import type { Member } from "@/data/team";
import RosterRow from "./RosterRow";

export default function RosterSection({
  id,
  title,
  members,
  accent,
}: {
  id?: string;
  title: string;
  members: Member[];
  accent: "violet" | "rose" | "ochre";
}) {
  return (
    <section className="block wrap" id={id}>
      <div className="section-head">
        <h2>{title}</h2>
        <span className="count">
          {String(members.length).padStart(2, "0")} researchers
        </span>
      </div>
      <div className="roster">
        {members.map((m) => (
          <RosterRow key={m.name} member={m} accent={accent} />
        ))}
      </div>
    </section>
  );
}
