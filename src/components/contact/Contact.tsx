import React from "react";
import { useState, useEffect } from "react";
import useIsScrollWithinElement from "../../hooks/useIsScrollWithinElement";
import { ScrollLocation } from "../App.tsx";

export default function Contact(props) {
  const [contactRef, setContactRef] = useState<HTMLDivElement | null>();
  const isScrollWithinElement = useIsScrollWithinElement(
    props.scrollPosition,
    contactRef
  );
  useEffect(() => {
    if (isScrollWithinElement) {
      props.setScrollLocation(ScrollLocation.Contact);
    }
  }, [isScrollWithinElement]);
  return (
    <div id="contact" ref={setContactRef} style={{ height: "101vh" }}>
      <h2 className="subtitle">Contact</h2>
      <p>
        You can reach me at{" "}
        <a className="external-link" href="mailto:nxgrizzle@gmail.com">
          nxgrizzle@gmail.com.
        </a>
      </p>
    </div>
  );
}
