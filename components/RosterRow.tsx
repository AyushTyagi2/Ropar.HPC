import Image from "next/image";
import type { Member } from "@/data/team";

export default function RosterRow({
  member,
  accent,
}: {
  member: Member;
  accent: "violet" | "rose" | "ochre";
}) {
  return (
    <div className="roster-row" data-accent={accent}>
      <div className="roster-row__code">{member.code ?? ""}</div>
      {member.photo ? (
        <Image
          className="roster-row__photo"
          src={member.photo}
          alt={member.name}
          width={560}
          height={560}
          sizes="(max-width: 760px) 10rem, 14rem"
        />
      ) : (
        <div className="roster-row__photo roster-row__photo--empty" aria-hidden="true" />
      )}
      <details className="roster-row__body">
        <summary>
          <span className="roster-row__name">{member.name}</span>
          <span className="roster-row__role">{member.role}</span>
          <span className="roster-row__toggle">details</span>
        </summary>
        {member.bio && <p className="roster-row__bio">{member.bio}</p>}
        <div className="roster-row__links">
          {member.email && <a href={`mailto:${member.email}`}>{member.email}</a>}
          {member.linkedin && (
            <a href={member.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          )}
        </div>
      </details>
    </div>
  );
}
