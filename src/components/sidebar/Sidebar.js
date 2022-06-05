import React from "react";
import Link from "./Link";
import "./sidebar.css";
export default function Sidebar(props) {
  const allItemsAreFalse = Object.values(props.scrollLocation).every(
    (location) => location === false
  );
  const showIntroTab = allItemsAreFalse || props.scrollLocation.intro;
  return (
    <aside>
      <ul>
        <Link
          style={{ backgroundColor: "#32b7bc" }}
          name="Intro"
          hidden={props.hidden}
          active={showIntroTab}
        />
        <Link
          style={{ backgroundColor: "#2D8A60" }}
          name="About Me"
          hidden={props.hidden}
          active={props.scrollLocation.about}
        />
        <Link
          style={{ backgroundColor: "#628CAB" }}
          name="Skills"
          hidden={props.hidden}
          active={props.scrollLocation.skills}
        />
        <Link
          style={{ backgroundColor: "#A2646B" }}
          name="Projects"
          hidden={props.hidden}
          active={props.scrollLocation.projects}
        />
        <Link
          style={{ backgroundColor: "#69526C" }}
          name="Resume"
          hidden={props.hidden}
          active={props.scrollLocation.resume}
        />
        <Link
          style={{ backgroundColor: "#6F7974" }}
          name="Contact"
          hidden={props.hidden}
          active={props.scrollLocation.contact}
        />
        <li className={`info ${props.hidden ? "hidden" : "full"}`}>Github</li>
        <li className={`info ${props.hidden ? "hidden" : "full"}`}>Email</li>
      </ul>
    </aside>
  );
}
