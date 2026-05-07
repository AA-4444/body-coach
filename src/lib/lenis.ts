import Lenis from "lenis";
import "lenis/dist/lenis.css";

let lenis: Lenis | null = null;

export const initLenis = () => {
  if (typeof window === "undefined" || lenis) return lenis;
  lenis = new Lenis({
    autoRaf: true,
    smoothWheel: true,
    syncTouch: false,
    wheelMultiplier: 0.9,
    touchMultiplier: 1,
  });
  return lenis;
};

export const getLenis = () => lenis;
