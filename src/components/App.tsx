import "./App.css";
import useScrollPosition from "../hooks/useScrollPosition.js";
import useWidth from "../hooks/useWidth.js";
import { useState } from "react";
import Header from "./header/Header.tsx";
import Intro from "./intro/Intro.tsx";
import About from "./about/About.tsx";
import Contact from "./contact/Contact.tsx";
import Projects from "./projects/Projects.tsx";
import Background from "./background/Background.tsx";
import Resume from "./resume/Resume.tsx";
import Sidebar from "./sidebar/Sidebar.tsx";
import React from "react";
export enum ScrollLocation {
  Contact = "contact",
  Intro = "intro",
  Projects = "projects",
  Resume = "resume",
  Title = "title",
  About = "about",
}
function App() {
  const windowWidth = useWidth();
  const [scrollLocation, setScrollLocation] = useState<ScrollLocation>(
    ScrollLocation.Intro
  );
  const position = useScrollPosition();
  const hidden = position === 0;
  const desktop = windowWidth ? windowWidth >= 1024 : window.innerWidth >= 1024;
  return (
    <div className="background">
      <Background />
      <div style={{ height: "25vh" }}>
        <Header sticky={desktop} />
      </div>
      <div className={`App ${desktop ? "grid--two" : "grid--one"}`}>
        {desktop && (
          <div className="grid--left">
            <Sidebar scrollLocation={scrollLocation} hidden={hidden} />
          </div>
        )}
        <div className={`grid--right ${hidden ? "hidden" : ""}`}>
          <Intro
            setScrollLocation={setScrollLocation}
            scrollPosition={position}
          />
          <p className={`directions ${hidden ? "" : "hidden"}`}>
            See more <span className="down-arrow">↓</span>
          </p>
          <About
            setScrollLocation={setScrollLocation}
            scrollPosition={position}
          />
          <Projects
            setScrollLocation={setScrollLocation}
            scrollPosition={position}
          />
          <Resume
            setScrollLocation={setScrollLocation}
            scrollPosition={position}
          />
          <Contact
            setScrollLocation={setScrollLocation}
            scrollPosition={position}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
