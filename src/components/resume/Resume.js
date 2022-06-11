import React from "react";
import "./resume.css";
import { useState, useEffect } from "react";
import resume from "../../assets/NicoleGrizzle-Resume.pdf";
import useIsScrollWithinElement from "../../hooks/useIsScrollWithinElement";
export default function Resume(props) {
  const [resumeRef, setResumeRef] = useState();
  const isScrollWithinElement = useIsScrollWithinElement(
    props.scrollPosition,
    resumeRef
  );
  useEffect(() => {
    if (isScrollWithinElement) {
      props.setScrollLocation((prev) => ({ ...prev, resume: true }));
    } else {
      props.setScrollLocation((prev) => ({ ...prev, resume: false }));
    }
  }, [isScrollWithinElement]);
  return (
    <div id="resume" ref={setResumeRef}>
      <h2 className="subtitle">Resume</h2>
      <p>
        Click{" "}
        <a
          className="external-link"
          href={resume}
          download="Nicole Grizzle - Resume.pdf"
        >
          here
        </a>{" "}
        for an up-to-date version of my resume.
      </p>
    </div>
  );
}
