import React from "react";

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
        <div className="card-container container main">
          <a
            href="https://safe-eyrie-62856.herokuapp.com/"
            className="card my-3"
            style={styles.linkStyles}
          >
            {" "}
            <div id="item1">
              <h4 className="card-header">Video Game Reviewer</h4>
              <p className="card-body">▪️ html css</p>
            </div>
          </a>
          <a
            href="https://cmcclay77.github.io/super-team-project/"
            className="card mb-3"
            style={styles.linkStyles}
          >
            {" "}
            <div>
              <h4 className="card-header">Word Search</h4>
              <p className="card-body">▪️ JavaScript Bulma</p>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}
