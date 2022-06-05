import React from "react";
import "./intro.css";
import { useState, useEffect } from "react";
import useIsScrollWithinElement from "../../hooks/useIsScrollWithinElement";
export default function Intro(props) {
  const [introRef, setIntroRef] = useState();
  const isScrollWithinElement = useIsScrollWithinElement(
    props.scrollPosition,
    introRef
  );
  useEffect(() => {
    if (isScrollWithinElement) {
      props.setScrollLocation((prev) => ({ ...prev, intro: true }));
    } else {
      props.setScrollLocation((prev) => ({ ...prev, intro: false }));
    }
  }, [isScrollWithinElement]);
  return (
    <div id="intro" ref={setIntroRef} className="intro-container">
      <h1>
        Hi, I'm Nicole.
        <br />
        I'm a <span className="highlight">front-end developer</span>
        <br /> in Atlanta, Georgia. 👋
      </h1>
    </div>
  );
}
