"use client";

import { useEffect, useRef } from "react";

export default function Reveal({ children, className = "", delay = 0, amount = 0.14, ...rest }) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!node || !window.IntersectionObserver || !node.animate) return;

    let animation;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      if (!preference.matches) {
        // Animate position only. HTML is readable before hydration, without JS,
        // and when the visitor changes their motion preference at runtime.
        animation = node.animate(
          [{ transform: "translateY(16px)" }, { transform: "translateY(0)" }],
          { duration: 600, delay: delay * 1000, easing: "cubic-bezier(0.22, 1, 0.36, 1)" },
        );
      }
      observer.disconnect();
    }, { threshold: typeof amount === "number" ? amount : 0 });

    const stopMotion = () => { if (preference.matches) animation?.cancel(); };
    preference.addEventListener("change", stopMotion);
    observer.observe(node);
    return () => {
      observer.disconnect();
      animation?.cancel();
      preference.removeEventListener("change", stopMotion);
    };
  }, [delay, amount]);

  return <div ref={ref} className={className} {...rest}>{children}</div>;
}
