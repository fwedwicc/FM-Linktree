import { useEffect } from 'react';
import { gsap } from 'gsap';

export function Ball() {
  useEffect(() => {
    gsap.set(".ball", { xPercent: -38, yPercent: -38 });

    const xTo = gsap.quickTo(".ball", "x", { duration: 0.6, ease: "power3" });
    const yTo = gsap.quickTo(".ball", "y", { duration: 0.6, ease: "power3" });

    const handleMouseMove = (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return <div className="ball"></div>;
}
