import { contactHref } from "@/lib/site";
import Link from "next/link";
import MobileNav from "./MobileNav";

export default function Nav() {
  return (
    <header className="header">
      <div className="wrap">
        <div className="capsule">
          <Link className="brand" href="/" aria-label="Fernando Peccatiello — home">
            <span className="markbox" aria-hidden="true">
              FP
            </span>
            <span className="brand-name">
              Fernando <span>Peccatiello</span>
            </span>
          </Link>
          <nav className="nav" aria-label="Primary">
            <Link href="/#work">Work</Link>
            <Link href="/#approach">Approach</Link>
            <Link href="/#about">About</Link>
          </nav>
          <MobileNav />
          <a className="btn btn--sm" href={contactHref}>
            Let&apos;s talk <span className="arrow">↗</span>
          </a>
        </div>
      </div>
    </header>
  );
}
