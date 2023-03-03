import React from "react";
import ByteNoteTaker from "../assets/images/byte-note-taker.png";
import ByteWriter from "../assets/images/byte-writer.png";
import ByteSchedule from "../assets/images/byteSchedule.png";
import ByteWeather from "../assets/images/byteWeather.png";
import Fade from "react-reveal/Fade";

import BytePortfolio from "../assets/images/screenshot.png";
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
            <div class="card text-bg-dark">
              <img
                src={BytePortfolio}
                className="card-img"
                alt="..."
                style={styles.imageStyles}
              ></img>
              <div class="card-img-overlay"></div>
            </div>
          </a>
          <a
            href="https://sheltered-brushlands-89312.herokuapp.com/"
            className="card m-3"
            style={styles.linkStyles}
          >
            <div class="card text-bg-dark">
              <img
                src={ByteWriter}
                className="card-img"
                alt="..."
                style={styles.imageStyles}
              ></img>
              <div class="card-img-overlay"></div>
            </div>
          </a>
          <a
            href="https://blooming-gorge-09699.herokuapp.com/"
            className="card m-3"
            style={styles.linkStyles}
          >
            <div class="card text-bg-dark">
              <img
                src={ByteNoteTaker}
                className="card-img"
                alt="..."
                style={styles.imageStyles}
              ></img>
              <div class="card-img-overlay"></div>
            </div>
          </a>
          <a
            href="https://lesley-byte.github.io/byteWeather/"
            className="card m-3"
            style={styles.linkStyles}
          >
            <div class="card text-bg-dark">
              <img
                src={ByteWeather}
                className="card-img"
                alt="..."
                style={styles.imageStyles}
              ></img>
              <div class="card-img-overlay"></div>
            </div>
          </a>
          <a
            href="https://lesley-byte.github.io/byteSchedule/"
            className="card m-3"
            style={styles.linkStyles}
          >
            <div class="card text-bg-dark">
              <img
                src={ByteSchedule}
                className="card-img"
                alt="..."
                style={styles.imageStyles}
              ></img>
              <div class="card-img-overlay"></div>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}
