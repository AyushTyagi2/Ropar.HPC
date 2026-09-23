import { site } from "@/data/site";
import Image from "next/image";
export default function Header() {
  return (
    <header className="site-header">
      <div className="wrap site-header__row ">
        
        <a className="wordmark" href="#top">
          <Image
            src="/hpc_comm.png"
            alt=""
            width={64}
            height={64}
            priority
          />
          <span className="wordmark__text">
            {site.brandMain}
            <em>{site.brandAccent}</em>
          </span>
          
        </a>
        <ul className="site-nav">
          <li>
            <a href="#pi">Principal Investigator</a>
          </li>
          <li>
            <a href="#roster">Roster</a>
          </li>
          <li>
            <a href="#alumni">Alumni</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </header>
  );
}
