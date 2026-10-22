import { site, emailHref } from "@/lib/site";
import Link from "next/link";

export default function Footer({ variant = "dark", caseItem }) {
  const light = variant === "light";

  return (
    <footer className={light ? "footer footer--case" : "footer"}>
      <div className="wrap">
        <div className="footer-left">
          <span className="footer-mark">FP</span>
          <p>
            © 2026 Fernando Peccatiello
            {light && caseItem
              ? ` · Case study ${String(caseItem.order).padStart(2, "0")} / ${String(caseItem.total).padStart(2, "0")}`
              : " · Built with curiosity and a bias toward useful things."}
          </p>
        </div>
        <div className="footer-links">
          {light ? (
            <>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a href={site.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href={emailHref}>Email</a>
            </>
          ) : (
            <>
              <Link href="/#work">Work</Link>
              <Link href="/#about">About</Link>
              <a href={emailHref}>Email</a>
            </>
          )}
        </div>
      </div>
    </footer>
  );
}
