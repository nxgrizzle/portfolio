import { useState, useLayoutEffect } from "react";
export default function useScrollPosition() {
  const [position, setPosition] = useState(0);
  useLayoutEffect(() => {
    const handleScroll = () => {
      const currentPosition =
        document.body.scrollTop || document.documentElement.scrollTop;
      setPosition(currentPosition);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  return position;
}
