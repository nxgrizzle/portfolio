import React from "react";
import "./about.css";
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
      <p className="about-container">
        I'm a Georgia State University graduate interested in transforming vague
        ideas into interest websites.
        <br />
        <br />
        Currently, I volunteer for{" "}
        <a href="https://www.democracylab.org/projects/803">Pipeline</a>, an
        organization dedicated to streamlining the job search process.
        <br />
        <br />
        I'm currently <span className="highlight">looking for a job</span>, so
        please{" "}
        <a href="/#contact" className="highlight">
          contact me
        </a>{" "}
        if interested!
      </p>
    </div>
  );
}
