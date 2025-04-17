// hooks/useOutsideMultiple.ts
import { RefObject, useEffect } from "react";

export function useOutsideMultiple(
  insideRefs: Array<RefObject<HTMLElement | null>>, // allow null
  callback: () => void,
  isActive: boolean
) {
  useEffect(() => {
    if (!isActive) return;

    const handler = (e: MouseEvent) => {
      const tgt = e.target as Node;
      // if click inside *any* of our refs, bail out
      for (const r of insideRefs) {
        if (r.current?.contains(tgt)) {
          return;
        }
      }
      callback();
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [insideRefs, callback, isActive]);
}
