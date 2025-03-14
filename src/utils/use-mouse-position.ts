import { useEffect, useState } from "react";

interface MousePosition {
  x: number;
  y: number;
}

export function useMousePosition(): MousePosition {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    globalThis.window.addEventListener("mousemove", handleMouseMove);
    return () => {
      globalThis.window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return mousePosition;
}
