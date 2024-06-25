import React from "react";
import { Fade } from "react-awesome-reveal";
import "../assets/css/style.css"; // Ensure this is imported for custom styles

const UnityGames: React.FC = () => {
  return (
    <div>
      <section className="unity-games-section">
        <Fade>
          <h2 id="unityGames" className="p-1 h2-left">
            Unity Games
          </h2>
        </Fade>
        <div className="iframe-wrapper">
          <div className="iframe-container">
            <iframe
              src="https://store.steampowered.com/widget/3030590/"
              title="Steam Widget"
              className="iframe"
            ></iframe>
            <div className="overlay-text">Unity C# Game</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UnityGames;
