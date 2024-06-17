import React from "react";
import ByteNoteTaker from "../assets/images/byte-note-taker.png";
import ByteWriter from "../assets/images/byte-writer.png";
import ByteSchedule from "../assets/images/byteSchedule.png";
import ByteWeather from "../assets/images/byteWeather.png";
import { Fade } from "react-awesome-reveal";
import AbstractFlight from "../assets/images/abstract-flight.png";

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
  overlayText: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "white",
    fontSize: "2em",
    fontWeight: "bold",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
    backgroundColor: "rgba(0, 0, 0, 0.6)", // semi-transparent black background
    padding: "10px", // some padding
    borderRadius: "5px", // rounded corners
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
            href="https://sheltered-brushlands-89312.herokuapp.com/"
            className="card m-3"
            style={styles.linkStyles}
          >
            <div className="card text-bg-dark">
              <img
                src={ByteWriter}
                className="card-img"
                alt="..."
                style={styles.imageStyles}
              ></img>
              <div className="card-img-overlay"></div>
              <div className="card-img-overlay">
                <div style={styles.overlayText}>Heroku MySQL Example</div>
              </div>
            </div>
          </a>
          <a
            href="https://blooming-gorge-09699.herokuapp.com/"
            className="card m-3"
            style={styles.linkStyles}
          >
            <div className="card text-bg-dark">
              <img
                src={ByteNoteTaker}
                className="card-img"
                alt="..."
                style={styles.imageStyles}
              ></img>
              <div className="card-img-overlay"></div>
              <div className="card-img-overlay">
                <div style={styles.overlayText}>Heroku Deployment</div>
              </div>
            </div>
          </a>
          <a
            href="https://lesley-byte.github.io/byteWeather/"
            className="card m-3"
            style={styles.linkStyles}
          >
            <div className="card text-bg-dark">
              <img
                src={ByteWeather}
                className="card-img"
                alt="..."
                style={styles.imageStyles}
              ></img>
              <div className="card-img-overlay"></div>
              <div className="card-img-overlay">
                <div style={styles.overlayText}>Open Weather API</div>
              </div>
            </div>
          </a>
          <a
            href="https://lesley-byte.github.io/byteSchedule/"
            className="card m-3"
            style={styles.linkStyles}
          >
            <div className="card text-bg-dark">
              <img
                src={ByteSchedule}
                className="card-img"
                alt="..."
                style={styles.imageStyles}
              ></img>
              <div className="card-img-overlay"></div>
              <div className="card-img-overlay">
                <div style={styles.overlayText}>Bootstrap Example</div>
              </div>
            </div>
          </a>
          <a
            href="https://lesley-byte.github.io/lesley-byte-portfolio/"
            className="card m-3"
            style={styles.linkStyles}
          >
            <div className="card text-bg-dark">
              <img
                src={BytePortfolio}
                className="card-img"
                alt="..."
                style={styles.imageStyles}
              ></img>
              <div className="card-img-overlay"></div>
              <div className="card-img-overlay">
                <div style={styles.overlayText}>Custom CSS</div>
              </div>
            </div>
          </a>
          <a
            href="https://lesley-byte.com/"
            className="card m-3"
            style={styles.linkStyles}
          >
            <div className="card text-bg-dark">
              <img
                src={AbstractFlight}
                className="card-img"
                alt="..."
                style={styles.imageStyles}
              ></img>
              <div className="card-img-overlay">
                <div style={styles.overlayText}>WordPress Site</div>
              </div>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}
