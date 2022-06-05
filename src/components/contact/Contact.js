import React from "react";
import { useState, useEffect } from "react";
import useIsScrollWithinElement from "../../hooks/useIsScrollWithinElement";
export default function Contact(props) {
  const [contactRef, setContactRef] = useState();
  const isScrollWithinElement = useIsScrollWithinElement(
    props.scrollPosition,
    contactRef
  );
  useEffect(() => {
    if (isScrollWithinElement) {
      props.setScrollLocation((prev) => ({ ...prev, contact: true }));
    } else {
      props.setScrollLocation((prev) => ({ ...prev, contact: false }));
    }
  }, [isScrollWithinElement]);
  return (
    <div id="contact" ref={setContactRef} style={{ height: "200vh" }}>
      <h2 className="subtitle">Contact</h2>
      <p>Coming soon</p>
    </div>
  );
}
