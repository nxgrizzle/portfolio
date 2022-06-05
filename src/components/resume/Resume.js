import React from "react";
import { useState, useEffect } from "react";
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
      <p>Coming soon.</p>
    </div>
  );
}
