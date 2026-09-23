import Image from "next/image";
import { site } from "@/data/site";

export default function Hero({
  currentCount,
  alumniCount,
}: {
  currentCount: number;
  alumniCount: number;
}) {
  return (
    <section className="hero wrap" id="top">
      <div>
        <p className="hero__eyebrow">{site.eyebrow}</p>
        <h1>
          {site.heroHeadingPre}
          {site.heroHeadingPost}
        </h1>
        <p className="lede">{site.heroLede}</p>
      </div>
      <div className="hero__figure">
        <Image
          className="hero__pattern"
          src="/litepi.png"
          alt="small clustre at HPC Lab"
          width={500}
          height={200}
          priority
        />
        <div className="hero__stats">
          <div className="hero__stat">
            <b>{currentCount}</b>
            <span>current researchers</span>
          </div>
          <div className="hero__stat">
            <b>{alumniCount}</b>
            <span>lab alumni</span>
          </div>
          <div className="hero__stat">
            <b>1</b>
            <span>PI, one lab</span>
          </div>
        </div>
      </div>
    </section>
  );
}
