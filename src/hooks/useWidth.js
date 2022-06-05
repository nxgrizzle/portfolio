import { useState, useLayoutEffect } from "react";
export default function useWidth() {
  const [width, setWidth] = useState(0);
  useLayoutEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });
  return width;
}
