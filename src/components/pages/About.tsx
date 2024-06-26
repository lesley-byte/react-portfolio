import React from "react";
import { Fade } from "react-awesome-reveal";

const About: React.FC = () => {
  return (
    <div>
      <section className="customWord">
        <Fade>
          <h2 id="aboutMe" className="p-1">
            About Me
          </h2>
        </Fade>
        <div className="main p-3 m-3 fs-3 text-center">
          <p>
            My name is Lesley Vaden. 👋 I am a Full Stack developer with
            experience in html, css, JavaScript, TypeScript, JQuery, OpenWeather
            API, AJAX, Bootstrap, node.js, express, sequelize, bcrypt,
            handlebars, heroku, insomnia, MySQL, user authentication, and
            MongoDB.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
