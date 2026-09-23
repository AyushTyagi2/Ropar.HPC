import Image from "next/image";
import type { Member } from "@/data/team";

export default function PISection({ pi }: { pi: Member }) {
  return (
    <section className="block wrap" id="pi">
      <div className="section-head">
        <h2>Principal Investigator</h2>
      </div>
      <div className="pi">
        {pi.photo && (
          <Image
            className="pi__photo"
            src={pi.photo}
            alt={pi.name}
            width={440}
            height={550}
          />
        )}
        <div>
          <h3>{pi.name}</h3>
          <p className="pi__role">{pi.role}</p>
          {pi.bio && <p className="pi__bio">{pi.bio}</p>}
          <div className="pi__meta">
            {pi.email && <a href={`mailto:${pi.email}`}>{pi.email}</a>}
            {pi.phone && <span>Phone {pi.phone}</span>}
            {pi.scholar && (
              <a href={pi.scholar} target="_blank" rel="noreferrer">
                Google Scholar
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
