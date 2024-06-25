import React from "react";
import { Fade } from "react-awesome-reveal";

// Define the styles
const styles = {
  linkStyles: {
    fontSize: "1.25rem",
    backgroundColor: "#6d6875",
    borderColor: "#b5838d",
    display: "flex",
    flexDirection: "row" as const, // TypeScript requires as const for specific value types
    justifyContent: "center",
  },
  navItemStyles: {
    display: "inline-block",
    margin: "0 10px",
  },
};

// Define the Contact component
const Contact: React.FC = () => {
  return (
    <div>
      <section>
        <Fade>
          {/* Section heading */}
          <h2 id="contactMe" className="p-1">
            Contact Me
          </h2>
        </Fade>
        <nav className="navbar">
          <div className="container-fluid">
            <ul className="nav" style={styles.linkStyles}>
              {/* List item for sending an email */}
              <li className="nav-item m-3" style={styles.navItemStyles}>
                <a
                  href="mailto:phosphorescence3@hotmail.com"
                  style={styles.linkStyles}
                  className="badge rounded-pill"
                >
                  Send Email 💖
                </a>
              </li>
              {/* List item for GitHub profile */}
              <li className="nav-item m-3" style={styles.navItemStyles}>
                <a
                  href="https://github.com/lesley-byte"
                  style={styles.linkStyles}
                  className="badge rounded-pill"
                >
                  Github
                </a>
              </li>
              {/* List item for Twitter profile */}
              <li className="nav-item m-3" style={styles.navItemStyles}>
                <a
                  href="https://twitter.com/lesley_vaden"
                  style={styles.linkStyles}
                  className="badge rounded-pill"
                >
                  Twitter
                </a>
              </li>
              {/* List item for LinkedIn profile */}
              <li className="nav-item m-3" style={styles.navItemStyles}>
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
};

export default Contact; // Exporting the Contact component
