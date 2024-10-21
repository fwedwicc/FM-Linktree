import { useEffect } from "react";

export function Cursor() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const cursorDot = document.querySelector('.cursor-dot');
      cursorDot.style.left = `${e.clientX}px`;
      cursorDot.style.top = `${e.clientY}px`;
    };
    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return <div className="cursor-dot fixed w-3 h-3 bg-neutral-300 rounded-full pointer-events-none z-50"></div>;
};
