import "./App.css";
import useScrollPosition from "../hooks/useScrollPosition";
import useWidth from "../hooks/useWidth";
import { useState } from "react";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
import Resume from "./resume/Resume";
import Skills from "./skills/Skills";
import Intro from "./intro/Intro";
import About from "./about/About";
import Contact from "./contact/Contact";
import Projects from "./projects/Projects";
import Background from "./background/Background";
function App() {
  const windowWidth = useWidth();
  const [scrollLocation, setScrollLocation] = useState({
    contact: false,
    intro: true,
    projects: false,
    resume: false,
    title: false,
    about: false,
  });
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
