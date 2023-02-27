import React from "react";
import Fade from 'react-reveal/Fade';

export default function About() {
  return (
    <div>
      <section className="customWord">
        <Fade left>
        <h2 id="aboutMe">About Me</h2>
        </Fade>
        <div className="main p-3 m-3 fs-3">
          <p>
            My name is Lesley Vaden. 👋 I am looking for a full stack dev job.
            I'm currently based out of Princeton NJ and have experience in html,
            css, and JavaScript. I have a bachelor's degree in Philosophy and am
            currently enrolled in the Rutgers Full Stack Coding bootcamp.
          </p>
        </div>
      </section>
    </div>
  );
}
