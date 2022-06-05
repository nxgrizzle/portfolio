import React from "react";
import { useState, useEffect } from "react";
import useIsScrollWithinElement from "../../hooks/useIsScrollWithinElement";
export default function Skills(props) {
  const [skillsRef, setSkillsRef] = useState();
  const isScrollWithinElement = useIsScrollWithinElement(
    props.scrollPosition,
    skillsRef
  );
  useEffect(() => {
    if (isScrollWithinElement) {
      props.setScrollLocation((prev) => ({ ...prev, skills: true }));
    } else {
      props.setScrollLocation((prev) => ({ ...prev, skills: false }));
    }
  }, [isScrollWithinElement]);
  return (
    <div id="skills" ref={setSkillsRef}>
      <h2 className="subtitle">Skills</h2>
      <p>Coming soon</p>
    </div>
  );
}
