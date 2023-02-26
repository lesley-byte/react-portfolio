import React from "react";

export default function Contact() {
  return (
    <div>
      <section>
        <h2 id="contactMe">Contact Me</h2>
        <nav className="navbar">
          <div className="container-fluid">
            <ul className="nav">
              <li className="nav-item m-3">
                <a href="mailto:phosphorescence3@hotmail.com">Send Email 💖</a>
              </li>
              <li className="nav-item m-3">
                <a href="https://github.com/lesley-byte">Github</a>
              </li>
              <li className="nav-item m-3">
                <a href="https://twitter.com/lesley_vaden">Twitter</a>
              </li>
              <li className="nav-item m-3">
                <a href="https://www.linkedin.com/in/lesley-vaden-93536bb8/">
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
