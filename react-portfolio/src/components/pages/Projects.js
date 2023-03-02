import React from "react";
import ByteNoteTaker from "../assets/images/byte-note-taker.png";
import ByteWriter from "../assets/images/byte-writer.png";
import ByteSchedule from "../assets/images/byteSchedule.png";
import ByteWeather from "../assets/images/byteWeather.png";
import Fade from "react-reveal/Fade";

import BytePortfolio from "../assets/images/lesley-byte-portfolio.png";
const styles = {
  linkStyles: {
    minWidth: "25rem",
    maxWidth: "25rem",
    minHeight: "fit-content",
    maxHeight: "fit-content",
    backgroundColor: "#e5989b",
  },
  imageStyles: {
    maxHeight: "fit-content",
  },
};

export default function Projects() {
  return (
    <div>
      <section>
        <Fade left>
          <h2 id="myProjects" className="p-1">
            Projects
          </h2>
        </Fade>
        <div className="card-container container main d-flex flex-wrap">
          <a
            href="https://www.lesleyvaden.dev"
            className="card m-3"
            style={styles.linkStyles}
          >
            {" "}
            <div>
              <h4 className="card-header">My Portfolio</h4>
              <p className="card-body">▪️ html css</p>
              <img
                src={BytePortfolio}
                className="card-img"
                alt="..."
                style={styles.imageStyles}
              ></img>
              <div className="card-img-overlay"></div>
            </div>
          </a>
          <a
            href="https://sheltered-brushlands-89312.herokuapp.com/"
            className="card m-3"
            style={styles.linkStyles}
          >
            {" "}
            <div>
              <h4 className="card-header">Example Tech Post Site</h4>
              <p className="card-body">▪️ Node, MySQL</p>
              <img
                src={ByteWriter}
                className="card-img"
                alt="..."
                style={styles.imageStyles}
              ></img>
              <div className="card-img-overlay"></div>
            </div>
          </a>
          <a
            href="https://blooming-gorge-09699.herokuapp.com/"
            className="card m-3"
            style={styles.linkStyles}
          >
            {" "}
            <div>
              <h4 className="card-header">Note Taker</h4>
              <p className="card-body">▪️ JavaScript Heroku Bootstrap</p>
              <img
                src={ByteNoteTaker}
                className="card-img"
                alt="..."
                style={styles.imageStyles}
              ></img>
              <div className="card-img-overlay"></div>
            </div>
          </a>
          <a
            href="https://lesley-byte.github.io/byteWeather/"
            className="card m-3"
            style={styles.linkStyles}
          >
            {" "}
            <div>
              <h4 className="card-header">Weather Dashboard</h4>
              <p className="card-body">▪️ JavaScript Bootstrap </p>
              <img
                src={ByteWeather}
                className="card-img"
                alt="..."
                style={styles.imageStyles}
              ></img>
              <div className="card-img-overlay"></div>
            </div>
          </a>
          <a
            href="https://lesley-byte.github.io/byteSchedule/"
            className="card m-3"
            style={styles.linkStyles}
          >
            {" "}
            <div>
              <h4 className="card-header">Work Day Scheduler</h4>
              <p className="card-body">▪️ JavaScript Bulma</p>
              <img
                src={ByteSchedule}
                className="card-img"
                alt="..."
                style={styles.imageStyles}
              ></img>
              <div className="card-img-overlay"></div>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}
