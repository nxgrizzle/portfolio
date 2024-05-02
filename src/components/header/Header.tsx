import React from "react";
import "./header.css";
import { ReactComponent as Logo } from "../../assets/logo.svg";
export default function Header(props) {
  return (
    <div id="header" className={`${props.sticky ? "sticky" : "unsticky"}`}>
      <a href="#intro">
        <Logo
          viewBox={"0 0 150 175"}
          height="50"
          width="50"
          fill="#e7eaed"
          stroke="#e7eaed"
          scale={0.75}
        />
      </a>
    </div>
  );
}
