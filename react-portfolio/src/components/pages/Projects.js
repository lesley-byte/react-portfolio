import React from "react";

const styles = {
  linkStyles: {
    maxWidth: "18rem",
  },
};
export default function Projects() {
  return (
    <div>
      <section>
        <h2 id="myProjects">Projects</h2>
        <div className="card-container container main">
          <a
            href="https://lesley-byte.github.io/css-html-refactor-horiseon/"
            className="card mb-3"
            style={styles.linkStyles}
          >
            {" "}
            <div>
              <h4 className="card-header">Horiseon Refactor</h4>
              <p className="card-body">▪️ html css</p>
            </div>
          </a>
          <a
            href="https://lesley-byte.github.io/css-html-refactor-horiseon/"
            className="card mb-3"
            style={styles.linkStyles}
          >
            {" "}
            <div>
              <h4 className="card-header">Horiseon Refactor</h4>
              <p className="card-body">▪️ JavaScript Bulma</p>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}
