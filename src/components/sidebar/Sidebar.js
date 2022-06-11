import React from "react";
import Link from "./Link";
import "./sidebar.css";
import { ReactComponent as GithubLogo } from "../../assets/github_logo.svg";
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
          style={{ backgroundColor: "#49E19C" }}
          name="About Me"
          hidden={props.hidden}
          active={props.scrollLocation.about}
        />

        <Link
          style={{ backgroundColor: "#8CC9F6" }}
          name="Projects"
          hidden={props.hidden}
          active={props.scrollLocation.projects}
        />
        <Link
          style={{ backgroundColor: "#E78D98" }}
          name="Resume"
          hidden={props.hidden}
          active={props.scrollLocation.resume}
        />
        <Link
          style={{ backgroundColor: "#CEA3D4" }}
          name="Contact"
          hidden={props.hidden}
          active={props.scrollLocation.contact}
        />
        <li className={`info ${props.hidden ? "hidden" : "full"} git`}>
          <a href="https://github.com/nxgrizzle">
            <GithubLogo width={30} height={30} fill="#32b7bc" />
          </a>
        </li>
        <li className={`info ${props.hidden ? "hidden" : "full"}`}>
          <a href="mailto:nxgrizzle@gmail.com">nxgrizzle@gmail.com</a>
        </li>
      </ul>
    </aside>
  );
}
