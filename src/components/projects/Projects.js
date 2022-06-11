import React from "react";
import "./projects.css";
import breathr from "../../assets/breathr.png";
import movie from "../../assets/movie.PNG";
import game from "../../assets/wordgame.png";
import pipeline from "../../assets/pipeline.png";
import { useState, useEffect } from "react";
import useIsScrollWithinElement from "../../hooks/useIsScrollWithinElement";
export default function Projects(props) {
  const [projectsRef, setProjectsRef] = useState();
  const isScrollWithinElement = useIsScrollWithinElement(
    props.scrollPosition,
    projectsRef
  );
  useEffect(() => {
    if (isScrollWithinElement) {
      props.setScrollLocation((prev) => ({ ...prev, projects: true }));
    } else {
      props.setScrollLocation((prev) => ({ ...prev, projects: false }));
    }
  }, [isScrollWithinElement]);
  return (
    <div id="projects" ref={setProjectsRef}>
      <h2 className="subtitle">Projects</h2>
      <div className="projects-container">
        <div className="project-col">
          <div className="project-card">
            <div
              style={{
                backgroundImage: `url(${movie})`,
                height: "300px",
                width: "100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "top center",
                backgroundColor: "#52c7db",
              }}
            ></div>
            <div className="details">
              <h3>Mock Movie Nomination Website</h3>
              <div className="tags">
                <div className="technologies">
                  <p>ReactJS</p>
                  <p>NodeJS</p>
                  <p>PostgreSQL</p>
                </div>
                <div className="sources">
                  <p>
                    <a
                      className="sources-link"
                      href="https://movie-award-nomination.herokuapp.com/"
                    >
                      demo
                    </a>
                  </p>
                  <p>
                    <a
                      className="sources-link"
                      href="https://github.com/nxgrizzle/movie-nomination-app"
                    >
                      source
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="project-card">
            <div
              style={{
                backgroundImage: `url(${breathr})`,
                height: "300px",
                width: "100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "top center",
              }}
            ></div>
            <div className="details">
              <h3>Website for Guided Breathing Exercises</h3>
              <div className="tags">
                <div className="technologies">
                  <p>ReactJS</p>
                  <p>NodeJS</p>
                </div>
                <div className="sources">
                  <p>
                    <a
                      className="sources-link"
                      href="https://breathr-app.herokuapp.com/"
                    >
                      demo
                    </a>
                  </p>
                  <p>
                    <a
                      className="sources-link"
                      href="https://github.com/nxgrizzle/breathr"
                    >
                      source
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="project-col">
          <div className="project-card">
            <div
              style={{
                backgroundImage: `url(${game})`,
                height: "300px",
                width: "100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "top center",
                backgroundColor: "white",
              }}
            ></div>
            <div className="details">
              <h3>New York Time's Spelling Bee Clone</h3>
              <div className="tags">
                <div className="technologies">
                  <p>ReactJS</p>
                  <p>NodeJS</p>
                </div>
                <div className="sources">
                  <p>
                    <a
                      className="sources-link"
                      href="https://generic-word-game.herokuapp.com/"
                    >
                      demo
                    </a>
                  </p>
                  <p>
                    <a
                      className="sources-link"
                      href="https://github.com/nxgrizzle/Most-Generic-Word-Game"
                    >
                      source
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="project-card">
            <div
              style={{
                backgroundImage: `url(${pipeline})`,
                height: "300px",
                width: "100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                backgroundColor: "white",
              }}
            ></div>
            <div className="details">
              <h3>Pipeline</h3>
              <div className="tags">
                <div className="technologies">
                  <p>ReactJS</p>
                  <p>Firebase</p>
                </div>
                <div className="sources">
                  <p>
                    <a
                      className="sources-link"
                      href="https://github.com/rise-summer/team1-jobtracking"
                    >
                      source
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
