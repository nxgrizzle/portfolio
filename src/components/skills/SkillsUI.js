import React from "react";
import { Flipper, Flipped } from "react-flip-toolkit";
import "./skillsui.css";
export default function SkillsUI(props) {
  const stopPropagation = (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
  };
  const handleClick = (e) => {
    stopPropagation(e);
    props.shiftToFront(e.currentTarget.innerHTML);
  };
  const flipKey = props.skills.map((skill) => skill.language).join("");
  return (
    <div className="skills-container">
      <Flipper
        stagger
        flipKey={flipKey}
        className="circle circle--description"
        spring="stiff"
        easing="cubic-bezier(0.53, 1.3, 0.79, 1)"
        duration={500}
      >
        {props.skills.map((skill, index, arr) => {
          const total = arr.length;
          const div = 360 / total;
          const radius = props.windowWidth < 800 ? 100 : 130;
          const parent = document.getElementsByClassName("circle--description");
          if (parent.length === 0) return null;
          const parentOffset = parseInt(parent[0].offsetWidth / 2);
          const childOffset = props.windowWidth < 800 ? 40 : 60;
          const offset = parentOffset - childOffset;
          const y =
            Math.sin(Math.PI / 2 + div * (index + 1) * (Math.PI / 180)) *
            radius *
            -1;
          const x =
            Math.cos(Math.PI / 2 + div * (index + 1) * (Math.PI / 180)) *
            radius *
            -1;
          const fx = `${x + offset}px`;
          const fy = `${y + offset}px`;
          const styles = {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            left: fx,
            top: fy,
          };
          return (
            <Flipped flipId={`${skill.language}`} key={`${skill.language}`}>
              <div
                onClick={(e) => handleClick(e)}
                key={skill.language}
                style={styles}
                className={`circle circle--language ${
                  index === arr.length - 1 ? "active" : ""
                }`}
              >
                {skill.language}
              </div>
            </Flipped>
          );
        })}
        <Flipped
          translate={false}
          scale={false}
          opacity={true}
          flipId={`${props.skills[4].language}--description`}
          key={`${props.skills[4].language}`}
        >
          <div className="circle-description">
            Choose a skill to learn more.
          </div>
        </Flipped>
      </Flipper>
    </div>
  );
}
/*
  
  const elementIn = (el, i) => {
    anime({
      targets: el,
      opacity: 1,
      easing: "easeOutSine",
      duration: 250,
    });
  };
  const elementOut = (el, i, onComplete) => {
    anime({
      targets: el,
      opacity: 0,
      easing: "easeOutSine",
      duration: 500,
      complete: onComplete,
    });
  };


*/
