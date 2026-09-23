import { site } from "@/data/site";
import { pi } from "@/data/team";

export default function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="wrap">
        <div className="site-footer__grid">
          <div>
            <h4>{site.fullName}</h4>
            <address>
              {site.addressLines.map((line, i) => (
                <span key={line}>
                  {line}
                  {i < site.addressLines.length - 1 && <br />}
                </span>
              ))}
            </address>
          </div>
          <div>
            <h4>Reach us</h4>
            <nav>
              {pi.email && <a href={`mailto:${pi.email}`}>{pi.email}</a>}
              {pi.phone && (
                <span style={{ color: "var(--ink-faint)", fontSize: "0.9rem" }}>
                  +{pi.phone}
                </span>
              )}
            </nav>
          </div>
          <div>
            <h4>Elsewhere</h4>
            <nav>
              <a href="#pi">Principal Investigator</a>
              <a href="#roster">Roster</a>
              <a href="#alumni">Alumni</a>
            </nav>
          </div>
        </div>
        <div className="site-footer__base">
          <span>{site.fullName} Lab · IIT Ropar</span>
          <span>{site.footerNote}</span>
        </div>
      </div>
    </footer>
  );
}
