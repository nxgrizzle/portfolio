import React from "react";
import { useState } from "react";
import useElementDimensions from "../../hooks/useElementDimensions";
export default function Link(props) {
  const [linkRef, setLinkRef] = useState();
  const dimensions = useElementDimensions(linkRef);
  const width = dimensions ? dimensions[0] : undefined;
  const getId = (name) => {
    return name.split(" ")[0].toLowerCase();
  };

  return (
    <li
      ref={setLinkRef}
      className={`link ${!props.hidden ? "full" : ""} ${
        props.hidden || props.active ? "active" : "inactive"
      }`}
      style={{ ...props.style, width: width }}
    >
      <a className="full" href={`/#${getId(props.name)}`}>
        {props.name}
      </a>
    </li>
  );
}
