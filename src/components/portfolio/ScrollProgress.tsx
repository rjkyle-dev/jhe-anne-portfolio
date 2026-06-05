import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [p, setP] = useState(0);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      setP(pct);
      setShow(h.scrollTop > 400);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <div className="fixed top-0 inset-x-0 h-1 z-[60] bg-transparent">
        <div className="h-full bg-gradient-primary transition-[width]" style={{ width: `${p}%` }} />
      </div>
      {show && (
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top"
          className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-gradient-primary text-primary-foreground shadow-glow grid place-items-center hover:scale-110 transition animate-fade-up">
          ↑
        </button>
      )}
    </>
  );
}
