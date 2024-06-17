import React from "react";
import { Fade } from "react-awesome-reveal";

const styles = {
  nameStyles: {
    fontSize: "3rem",
    display: "flex",
    justifyContent: "flex-end",
    backgroundColor: "#b5838d",
    width: "25vw",
    paddingRight: "10px",
    color: "#ffcdb2",
    fontWeight: "bold",
    marginRight: "5px",
  },
};

export default function Name() {
  return (
    <div>
      <Fade left>
        {/* We are passing the currentPage from state and the function to update it */}
        <span style={styles.nameStyles} className="Vaden">
          Vaden
        </span>{" "}
      </Fade>
    </div>
  );
}
