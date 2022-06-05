import React from "react";
import "./projects.css";
import { useState, useEffect } from "react";
import useIsScrollWithinElement from "../../hooks/useIsScrollWithinElement";
export default function Projects(props) {
  const [projectsRef, setProjectsRef] = useState();
  const isScrollWithinElement = useIsScrollWithinElement(
    props.scrollPosition,
    projectsRef
  );
  useEffect(() => {
    if (isScrollWithinElement) {
      props.setScrollLocation((prev) => ({ ...prev, projects: true }));
    } else {
      props.setScrollLocation((prev) => ({ ...prev, projects: false }));
    }
  }, [isScrollWithinElement]);
  return (
    <div id="projects" ref={setProjectsRef} className="projects-container">
      <h2 className="subtitle">Projects</h2>
      <p>Coming soon.</p>
    </div>
  );
}
