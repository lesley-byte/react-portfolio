import React from "react";
import Hero from "../assets/images/hero.png";
import screenshot from "../assets/images/screenshot.jpeg";
import wordSearch from "../assets/images/wordSearch.png";

const styles = {
  linkStyles: {
    maxWidth: "18rem",
    backgroundColor: "#e5989b",
  },
};
export default function GroupProjects() {
  return (
    <div>
      <section>
        <h2 id="myProjects">Group Projects</h2>
        <div className="card-container container main d-flex">
          <a
            href="https://safe-eyrie-62856.herokuapp.com/"
            className="card m-3"
            style={styles.linkStyles}
          >
            {" "}
            <img src={screenshot} class="card-img" alt="..."></img>
            <div class="card-img-overlay">
              <div id="item1">
                <h4 className="card-header">Video Game Reviewer</h4>
                <p className="card-body">▪️ html css</p>
              </div>
            </div>
          </a>
          <a
            href="https://cmcclay77.github.io/super-team-project/"
            className="card m-3"
            style={styles.linkStyles}
          >
            {" "}
            <img src={wordSearch} class="card-img" alt="..."></img>
            <div class="card-img-overlay">
              <div>
                <h4 className="card-header">Word Search</h4>
                <p className="card-body">▪️ JavaScript Bulma</p>
              </div>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}
