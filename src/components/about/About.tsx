import React from "react";
import "./about.css";
import useIsScrollWithinElement from "../../hooks/useIsScrollWithinElement";
import { useState, useEffect } from "react";
import { ScrollLocation } from "../App.tsx";
export default function About(props) {
  const [aboutRef, setAboutRef] = useState<HTMLDivElement | null>();
  const isScrollWithinElement = useIsScrollWithinElement(
    props.scrollPosition,
    aboutRef
  );
  useEffect(() => {
    if (isScrollWithinElement) {
      props.setScrollLocation(ScrollLocation.About);
    }
  }, [isScrollWithinElement]);
  return (
    <div id="about" ref={setAboutRef}>
      <h2 className="subtitle">About Me</h2>
      <p className="about-container">
        I'm a Georgia State University graduate interested in transforming vague
        ideas into interest websites.
        <br />
        <br />
        Currently, I work as a software engineer for{" "}
        <a href="https://www.unwrap.ai/">Unwrap.ai</a>, a startup that uses AI
        to turn customer feedback into actionable insights.
        <br />
        <br />
      </p>
    </div>
  );
}
