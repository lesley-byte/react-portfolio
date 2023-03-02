import React from "react";
import screenshot from "../assets/images/screenshot.jpeg";
import wordSearch from "../assets/images/wordSearch.png";
import Fade from "react-reveal/Fade";

const styles = {
  linkStyles: {
    minWidth: "25rem",
    maxWidth: "25rem",
    minHeight: "fit-content",
    maxHeight: "fit-content",
    backgroundColor: "#e5989b",
  },
  imageStyles: {
    maxHeight: "fit-content",
  },
};
export default function GroupProjects() {
  return (
    <div>
      <section>
        <Fade left>
          <h2 id="myProjects">Group Projects</h2>
        </Fade>
        <div className="card-container container main d-flex flex-wrap">
          <a
            href="https://safe-eyrie-62856.herokuapp.com/"
            className="card m-3"
            style={styles.linkStyles}
          >
            {" "}
            <div id="item1">
              <h4 className="card-header">Video Game Reviewer</h4>
              <p className="card-body">▪️ html css</p>
              <img
                src={screenshot}
                className="card-img"
                alt="..."
                style={styles.imageStyles}
              ></img>
              <div className="card-img-overlay"></div>
            </div>
          </a>
          <a
            href="https://cmcclay77.github.io/super-team-project/"
            className="card m-3"
            style={styles.linkStyles}
          >
            {" "}
            <div>
              <h4 className="card-header">Word Search</h4>
              <p className="card-body">▪️ JavaScript Bulma</p>
              <img
                src={wordSearch}
                className="card-img"
                alt="..."
                style={styles.imageStyles}
              ></img>
              <div className="card-img-overlay"></div>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}
