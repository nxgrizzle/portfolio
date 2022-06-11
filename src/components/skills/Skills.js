import React from "react";
import { useState, useEffect } from "react";
import SkillsUI from "./SkillsUI";
import useIsScrollWithinElement from "../../hooks/useIsScrollWithinElement";
export default function Skills(props) {
  const [skillsRef, setSkillsRef] = useState();
  const [skills, setSkills] = useState([
    { language: "React", description: "react coming soon" },
    { language: "NodeJS", description: "node coming soon" },
    { language: "PostgreSQL", description: "postgres coming soon" },
    { language: "Java", description: "java coming soon" },
    { language: "Python", description: "python coming soon" },
  ]);
  const isScrollWithinElement = useIsScrollWithinElement(
    props.scrollPosition,
    skillsRef
  );
  const shiftToFront = (skill) => {
    const skillObject = skills.find((el) => el.language === skill);
    const index = skills.indexOf(skillObject);
    const skillsCopy = [...skills];
    for (let i = 0; i < index + 1; i++) {
      skillsCopy.push(skillsCopy.shift());
    }
    setSkills(skillsCopy);
  };
  useEffect(() => {
    console.log(skills);
  }, [skills]);
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
      <SkillsUI
        windowWidth={props.windowWidth}
        shiftToFront={shiftToFront}
        skills={skills}
      />
      <p>{skills[skills.length - 1].description}</p>
    </div>
  );
}
