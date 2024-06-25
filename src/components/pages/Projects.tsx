import React from "react";
import ByteNoteTaker from "../assets/images/byte-note-taker.png";
import ByteWriter from "../assets/images/byte-writer.png";
import ByteSchedule from "../assets/images/byteSchedule.png";
import ByteWeather from "../assets/images/byteWeather.png";
import { Fade } from "react-awesome-reveal";
import BytePortfolio from "../assets/images/screenshot.png";
import "../assets/css/style.css";

const Projects: React.FC = () => {
  return (
    <div>
      <section>
        <Fade>
          <h2 id="myProjects" className="p-1">
            Projects
          </h2>
        </Fade>
        <div className="card-container container main d-flex flex-wrap">
          <a
            href="https://sheltered-brushlands-89312.herokuapp.com/"
            className="card m-3 link-styles"
          >
            <div className="card text-bg-dark">
              <img
                src={ByteWriter}
                className="card-img image-styles"
                alt="Byte Writer"
              ></img>
              <div className="card-img-overlay"></div>
              <div className="card-img-overlay">
                <div className="overlay-text">Heroku MySQL Example</div>
              </div>
            </div>
          </a>
          <a
            href="https://blooming-gorge-09699.herokuapp.com/"
            className="card m-3 link-styles"
          >
            <div className="card text-bg-dark">
              <img
                src={ByteNoteTaker}
                className="card-img image-styles"
                alt="Byte Note Taker"
              ></img>
              <div className="card-img-overlay"></div>
              <div className="card-img-overlay">
                <div className="overlay-text">Heroku Deployment</div>
              </div>
            </div>
          </a>
          <a
            href="https://lesley-byte.github.io/byteWeather/"
            className="card m-3 link-styles"
          >
            <div className="card text-bg-dark">
              <img
                src={ByteWeather}
                className="card-img image-styles"
                alt="Byte Weather"
              ></img>
              <div className="card-img-overlay"></div>
              <div className="card-img-overlay">
                <div className="overlay-text">Open Weather API</div>
              </div>
            </div>
          </a>
          <a
            href="https://lesley-byte.github.io/byteSchedule/"
            className="card m-3 link-styles"
          >
            <div className="card text-bg-dark">
              <img
                src={ByteSchedule}
                className="card-img image-styles"
                alt="Byte Schedule"
              ></img>
              <div className="card-img-overlay"></div>
              <div className="card-img-overlay">
                <div className="overlay-text">Bootstrap Example</div>
              </div>
            </div>
          </a>
          <a
            href="https://lesley-byte.github.io/lesley-byte-portfolio/"
            className="card m-3 link-styles"
          >
            <div className="card text-bg-dark">
              <img
                src={BytePortfolio}
                className="card-img image-styles"
                alt="Byte Portfolio"
              ></img>
              <div className="card-img-overlay"></div>
              <div className="card-img-overlay">
                <div className="overlay-text">Custom CSS</div>
              </div>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Projects;
