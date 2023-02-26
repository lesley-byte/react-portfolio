import React from "react";
const styles = {
  linkStyles: {
    textDecoration: "none",
    color: "#6d6875",
  },
};

export default function Contact() {
  return (
    <div>
      <section>
        <h2 id="contactMe">Contact Me</h2>
        <nav className="navbar">
          <div className="container-fluid">
            <ul className="nav" style={styles.linkStyles}>
              <li className="nav-item m-3">
                <a
                  href="mailto:phosphorescence3@hotmail.com"
                  style={styles.linkStyles}
                >
                  Send Email 💖
                </a>
              </li>
              <li className="nav-item m-3">
                <a
                  href="https://github.com/lesley-byte"
                  style={styles.linkStyles}
                >
                  Github
                </a>
              </li>
              <li className="nav-item m-3">
                <a
                  href="https://twitter.com/lesley_vaden"
                  style={styles.linkStyles}
                >
                  Twitter
                </a>
              </li>
              <li className="nav-item m-3">
                <a
                  href="https://www.linkedin.com/in/lesley-vaden-93536bb8/"
                  style={styles.linkStyles}
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </section>
    </div>
  );
}
