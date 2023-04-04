import React from "react";
import screenshot from "../assets/images/screenshot.jpeg";
import wordSearch from "../assets/images/wordSearch.png";
import checklistle from "../assets/images/checklistle.png";
import Fade from "react-reveal/Fade";

const styles = {
  linkStyles: {
    minWidth: "25rem",
    maxWidth: "25rem",
    minHeight: "fit-content",
    maxHeight: "fit-content",
    backgroundColor: "#e5989b",
  },
  imageStyles: {},
};
export default function GroupProjects() {
  return (
    <div>
      <section>
        <Fade left>
          <h2 id="myProjects" className="p-1">
            Group Projects
          </h2>
        </Fade>
        <div className="card-container container main d-flex flex-wrap">
        <a
            href="https://fierce-oasis-40648.herokuapp.com/"
            className="card m-3"
            style={styles.linkStyles}
          >
            <div class="card text-bg-dark">
              <img
                src={checklistle}
                className="card-img"
                alt="..."
                style={styles.imageStyles}
              ></img>
              <div class="card-img-overlay"></div>
            </div>
          </a>
          <a
            href="https://safe-eyrie-62856.herokuapp.com/"
            className="card m-3"
            style={styles.linkStyles}
          >
            <div class="card text-bg-dark">
              <img
                src={screenshot}
                className="card-img"
                alt="..."
                style={styles.imageStyles}
              ></img>
              <div class="card-img-overlay"></div>
            </div>
          </a>
          <a
            href="https://cmcclay77.github.io/super-team-project/"
            className="card m-3"
            style={styles.linkStyles}
          >
            <div class="card text-bg-dark">
              <img
                src={wordSearch}
                className="card-img"
                alt="..."
                style={styles.imageStyles}
              ></img>
              <div class="card-img-overlay"></div>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}
