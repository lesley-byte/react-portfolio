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
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Added shadow
    borderRadius: "5px", // Rounded corners for the container
  },
  iframe: {
    width: "646px",
    height: "190px",
    border: 0,
  },
};

export default function UnityGames() {
  return (
    <div>
      <section>
        <h2 id="unityGames" className="p-1">
          Unity Games
        </h2>
        <div className="card-container container main d-flex flex-wrap">
          <div className="card m-3">
            <div className="card text-bg-dark">
              <div style={styles.iframeContainer}>
                <iframe
                  src="https://store.steampowered.com/widget/3030590/"
                  title="Steam Widget"
                  style={styles.iframe}
                ></iframe>
                <div style={styles.overlayText}>Unity C# Game</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
