import React from "react";
import { Fade } from "react-awesome-reveal";
import githubIcon from "../assets/images/github-mark.png"; // Path to the contact GitHub logo
import linkedinIcon from '../assets/images/In-Blue-14@2x.png'; // Path to the LinkedIn logo
import emailIcon from "../assets/images/icons8-email-50.png"; // Path to the email logo
import footerGithubIcon from "../assets/images/GitHub_Logo.png"; // Path to the footer GitHub logo

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
  iconStyles: {
    width: "32px",
    height: "32px",
    margin: "0 5px", // Add margin for better spacing
  },
  footerStyles: {
    marginTop: "2rem",
    textAlign: "center" as const, // TypeScript requires as const for specific value types
    backgroundColor: "#6d6875",
    padding: "1rem",
    color: "#fff",
  },
  footerIconStyles: {
    width: "50px",
    height: "24px",
    marginLeft: "5px",
    verticalAlign: "middle",
  },
  footerLinkStyles: {
    color: "#fff",
    textDecoration: "underline",
    display: "inline-flex",
    alignItems: "center",
    width: "50px",
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
                  <img src={emailIcon} alt="Send Email" style={styles.iconStyles} />
                </a>
              </li>
              {/* List item for GitHub profile */}
              <li className="nav-item m-3" style={styles.navItemStyles}>
                <a
                  href="https://github.com/lesley-byte"
                  style={styles.linkStyles}
                  className="badge rounded-pill"
                >
                  <img src={githubIcon} alt="Github" style={styles.iconStyles} />
                </a>
              </li>
              {/* List item for LinkedIn profile */}
              <li className="nav-item m-3" style={styles.navItemStyles}>
                <a
                  href="https://www.linkedin.com/in/lesley-vaden-93536bb8/"
                  style={styles.linkStyles}
                  className="badge rounded-pill"
                >
                  <img src={linkedinIcon} alt="LinkedIn" style={styles.iconStyles} />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </section>
      <footer style={styles.footerStyles}>
        Made by Lesley Vaden. View this on <a href="https://github.com/lesley-byte/your-repo" 
        className="badge rounded-pill">
        <img src={footerGithubIcon} alt="GitHub" style={styles.footerIconStyles} />
        </a>.
      </footer>
    </div>
  );
};

export default Contact; // Exporting the Contact component