import React from "react";
import "./resume.css";
import { useState, useEffect } from "react";
import useIsScrollWithinElement from "../../hooks/useIsScrollWithinElement";
import { ScrollLocation } from "../App.tsx";

export default function Resume(props) {
  const [resumeRef, setResumeRef] = useState<HTMLDivElement | null>();
  const isScrollWithinElement = useIsScrollWithinElement(
    props.scrollPosition,
    resumeRef
  );
  useEffect(() => {
    if (isScrollWithinElement) {
      props.setScrollLocation(ScrollLocation.Resume);
    }
  }, [isScrollWithinElement]);
  return (
    <div id="resume" ref={setResumeRef}>
      <h2 className="subtitle">Resume</h2>
      <p>
        Click{" "}
        <a
          className="external-link"
          href={`${process.env.PUBLIC_URL}/NicoleGrizzle-Resume.pdf`}
          download="Nicole Grizzle - Resume.pdf"
        >
          here
        </a>{" "}
        for an up-to-date version of my resume.
      </p>
    </div>
  );
}
