import React from "react";
import "./intro.css";
import { useState, useEffect } from "react";
import useIsScrollWithinElement from "../../hooks/useIsScrollWithinElement";
import { ScrollLocation } from "../App.tsx";

export default function Intro(props) {
  const [introRef, setIntroRef] = useState<HTMLDivElement | null>();
  const isScrollWithinElement = useIsScrollWithinElement(
    props.scrollPosition,
    introRef
  );
  useEffect(() => {
    if (isScrollWithinElement) {
      props.setScrollLocation(ScrollLocation.Intro);
    }
  }, [isScrollWithinElement]);
  return (
    <div id="intro" ref={setIntroRef} className="intro-container">
      <h1>
        Hi, I'm Nicole.
        <br />
        I'm a <span className="highlight">front-end developer</span>
        <br /> based in Santa Barbara, California.{" "}
        <span className="wave">👋</span>
      </h1>
    </div>
  );
}
