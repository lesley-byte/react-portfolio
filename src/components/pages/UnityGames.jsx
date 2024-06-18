import React from "react";

const styles = {
  overlayText: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "white",
    fontSize: "2em",
    fontWeight: "bold",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    padding: "10px",
    borderRadius: "5px",
  },
  iframeContainer: {
    position: "relative",
    width: "646px",
    height: "190px",
    overflow: "hidden",
    backgroundColor: "#000",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "5px",
    margin: "0 auto",
  },
  iframe: {
    width: "100%",
    height: "100%",
    border: 0,
  },
};

export default function UnityGames() {
  return (
    <div>
      <section className="unity-games-section">
        <h2 id="unityGames" className="p-1 h2-left">
          Unity Games
        </h2>
        <div className="iframe-wrapper">
          <div style={styles.iframeContainer}>
            <iframe
              src="https://store.steampowered.com/widget/3030590/"
              title="Steam Widget"
              style={styles.iframe}
            ></iframe>
            <div style={styles.overlayText}>Unity C# Game</div>
          </div>
        </div>
      </section>
      <style jsx>{`
        .unity-games-section {
          display: flex;
          flex-direction: column;
          align-items: flex-start; /* Align items to the start (left) */
        }
        .h2-left {
          align-self: flex-start; /* Ensure the h2 stays on the left */
        }
        .iframe-wrapper {
          width: 100%;
          display: flex;
          justify-content: center;
          margin-top: 1rem; /* Add some space between h2 and iframe */
        }
        @media (max-width: 767px) {
          .iframe-wrapper {
            width: 100%;
          }
          .iframe-container {
            width: 100%;
            height: auto; /* Adjust height to maintain aspect ratio */
            padding-bottom: 29.4%; /* Maintain aspect ratio */
          }
          .iframe-container iframe {
            width: 100%;
            height: 100%;
          }
          .card-container {
            width: 100%;
            flex-direction: column;
            align-items: center;
          }
          .card {
            width: 90%;
            margin: 10px 0;
          }
        }
        /* Ensure no horizontal overflow */
        body {
          overflow-x: hidden;
        }
        /* Prevent any extra space around elements */
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
