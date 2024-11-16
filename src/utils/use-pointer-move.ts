import { frame, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";


export function usePointerMove() {
  const xPoint = useMotionValue(0);
  const yPoint = useMotionValue(0);

  useEffect(() => {
    const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
      frame.read(() => {        
        xPoint.set(clientX);
        yPoint.set(clientY);
      });
    };

    globalThis.window.addEventListener("pointermove", handlePointerMove);
    return () => {
      globalThis.window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return { x: xPoint, y: yPoint };
}
