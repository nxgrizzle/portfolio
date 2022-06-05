import React from "react";
import useIsScrollWithinElement from "../../hooks/useIsScrollWithinElement";
import { useState, useEffect } from "react";
export default function About(props) {
  const [aboutRef, setAboutRef] = useState();
  const isScrollWithinElement = useIsScrollWithinElement(
    props.scrollPosition,
    aboutRef
  );
  useEffect(() => {
    if (isScrollWithinElement) {
      props.setScrollLocation((prev) => ({ ...prev, about: true }));
    } else {
      props.setScrollLocation((prev) => ({ ...prev, about: false }));
    }
  }, [isScrollWithinElement]);
  return (
    <div id="about" ref={setAboutRef}>
      <h2 className="subtitle">About Me</h2>
      <p>Coming soon.</p>
    </div>
  );
}
