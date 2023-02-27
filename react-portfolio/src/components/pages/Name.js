import React from "react";
import Fade from 'react-reveal/Fade';

const styles = {
    mainStyles: {
      backgroundColor: "#ffb4a2",
      color: "#6d6875",
      fontFamily: '"Roboto", sans-serif',
    },
    headerStyles: {
      padding: "10px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      fontSize: "1.5rem",
      fontFamily: '"Roboto", sans-serif',
      backgroundColor: "#6d6875",
      color: "ffb4a2",
    },
    nameStyles: {
      fontSize: "3rem",
      display: "flex",
      justifyContent: "flex-end",
      backgroundColor: "#b5838d",
      width: "25vw",
      paddingRight: "10px",
      color: "#ffcdb2",
      fontWeight: "bold",
    },
  };

export default function Name() {
    return (
        <div>
        <Fade left>
        {/* We are passing the currentPage from state and the function to update it */}
        <span style={styles.nameStyles}>Vaden</span>{" "}
        </Fade>
        </div>
    );
}

