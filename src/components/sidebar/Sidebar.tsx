import React from "react";
import Link from "./Link.tsx";
import "./sidebar.css";
import { ReactComponent as GithubLogo } from "../../assets/github_logo.svg";
import { ReactComponent as LinkedInLogo } from "../../assets/linkedin_logo.svg";

export default function Sidebar(props) {
  const showIntroTab = props.scrollLocation === "intro";
  return (
    <aside>
      <ul>
        <Link
          style={{ backgroundColor: "#28b7c6" }}
          name="Intro"
          hidden={props.hidden}
          active={showIntroTab}
        />
        <Link
          style={{ backgroundColor: "#49e1b0" }}
          name="About Me"
          hidden={props.hidden}
          active={props.scrollLocation === "about"}
        />

        <Link
          style={{ backgroundColor: "#82ddf6" }}
          name="Projects"
          hidden={props.hidden}
          active={props.scrollLocation === "projects"}
        />
        <Link
          style={{ backgroundColor: "#e797a2" }}
          name="Resume"
          hidden={props.hidden}
          active={props.scrollLocation === "resume"}
        />
        <Link
          style={{ backgroundColor: "#ceb7d4" }}
          name="Contact"
          hidden={props.hidden}
          active={props.scrollLocation === "contact"}
        />
        <div
          style={{
            flex: "flex-row",
            display: "flex",
            width: "100%",
            justifyContent: "end",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <div className={`info ${props.hidden ? "hidden" : ""} linkedin`}>
            <a href="https://www.linkedin.com/in/nicolegrizzle/">
              <LinkedInLogo width={30} height={27} fill="#ffffff" />
            </a>
          </div>
          <div className={`info ${props.hidden ? "hidden" : ""} git`}>
            <a href="https://github.com/nxgrizzle">
              <GithubLogo width={30} height={29} fill="#ffffff" />
            </a>
          </div>
        </div>
      </ul>
    </aside>
  );
}
