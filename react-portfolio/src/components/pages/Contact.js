import React from "react";
import Fade from 'react-reveal/Fade';
const styles = {
  linkStyles: {
    fontSize: "1.25rem",
    backgroundColor: "#6d6875",
    borderColor: "#b5838d",
  },
};

export default function Contact() {
  return (
    <div>
      <section>
        <Fade left>
        <h2 id="contactMe">Contact Me</h2>
        </Fade>
        <nav className="navbar">
          <div className="container-fluid">
            <ul className="nav" style={styles.linkStyles}>
              <li className="nav-item m-3">
                <a
                  href="mailto:phosphorescence3@hotmail.com"
                  style={styles.linkStyles}
                  className="badge rounded-pill"
                >
                  Send Email 💖
                </a>
              </li>
              <li className="nav-item m-3">
                <a
                  href="https://github.com/lesley-byte"
                  style={styles.linkStyles}
                  className="badge rounded-pill"
                >
                  Github
                </a>
              </li>
              <li className="nav-item m-3">
                <a
                  href="https://twitter.com/lesley_vaden"
                  style={styles.linkStyles}
                  className="badge rounded-pill"
                >
                  Twitter
                </a>
              </li>
              <li className="nav-item m-3">
                <a
                  href="https://www.linkedin.com/in/lesley-vaden-93536bb8/"
                  style={styles.linkStyles}
                  className="badge rounded-pill"
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
