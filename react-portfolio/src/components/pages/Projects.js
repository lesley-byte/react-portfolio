import React from "react";
import Hero from "../assets/images/hero.png";

const styles = {
  linkStyles: {
    maxWidth: "18rem",
    backgroundColor: "#e5989b",
  },
};
export default function Projects() {
  return (
    <div>
      <section>
        <h2 id="myProjects">Projects</h2>
        <div className="card-container container main d-flex">
          <a
            href="https://lesley-byte.github.io/css-html-refactor-horiseon/"
            className="card m-3"
            style={styles.linkStyles}
          >
            {" "}
            <img src={Hero} class="card-img" alt="..."></img>
            <div class="card-img-overlay">
              <div>
                <h4 className="card-header">Horiseon Refactor</h4>
                <p className="card-body">▪️ html css</p>
              </div>
            </div>
          </a>
          <a
            href="https://lesley-byte.github.io/css-html-refactor-horiseon/"
            className="card m-3"
            style={styles.linkStyles}
          >
            {" "}
            <img src={Hero} class="card-img" alt="..."></img>
            <div class="card-img-overlay">
              <div>
                <h4 className="card-header">Horiseon Refactor</h4>
                <p className="card-body">▪️ JavaScript Bulma</p>
              </div>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}
