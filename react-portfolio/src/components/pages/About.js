import React from "react";
import Fade from 'react-reveal/Fade';

export default function About() {
  return (
    <div>
      <section className="customWord">
        <Fade left>
        <h2 id="aboutMe" className="p-1">About Me</h2>
        </Fade>
        <div className="main p-3 m-3 fs-3">
          <p>
            My name is Lesley Vaden. 👋 I am a Full Stack developer with experience in html, css, JavaScript, JQuery, OpenWeather API, AJAX, Bootstrap, node.js, express, sequelize, bcrypt, handlebars, heroku, insomnia, MySQL, user authentication, and MongoDB.
          </p>
        </div>
      </section>
    </div>
  );
}
