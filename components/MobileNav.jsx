"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function MobileNav() {
  const ref = useRef(null);

  useEffect(() => {
    const closeOutside = (event) => {
      if (ref.current?.open && !ref.current.contains(event.target)) ref.current.open = false;
    };
    const viewport = window.matchMedia("(max-width: 760px)");
    const closeOnDesktop = () => { if (!viewport.matches && ref.current) ref.current.open = false; };
    document.addEventListener("pointerdown", closeOutside);
    viewport.addEventListener("change", closeOnDesktop);
    return () => {
      document.removeEventListener("pointerdown", closeOutside);
      viewport.removeEventListener("change", closeOnDesktop);
    };
  }, []);

  const close = () => { if (ref.current) ref.current.open = false; };

  return (
    <details className="mobile-nav" ref={ref} onKeyDown={(event) => {
      if (event.key === "Escape" && ref.current.open) {
        close();
        ref.current.querySelector("summary").focus();
        event.stopPropagation();
      }
    }} onBlur={(event) => {
      if (event.relatedTarget && !event.currentTarget.contains(event.relatedTarget)) close();
    }}>
      <summary>Menu <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true"><path d="M3 5H13M3 11H13" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg></summary>
      <nav aria-label="Mobile navigation">
        <Link href="/#work" onClick={close}>Work</Link>
        <Link href="/#approach" onClick={close}>Approach</Link>
        <Link href="/#about" onClick={close}>About</Link>
        <Link href="/#contact" onClick={close}>Contact</Link>
      </nav>
    </details>
  );
}
