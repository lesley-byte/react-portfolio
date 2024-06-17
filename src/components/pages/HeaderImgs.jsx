import React from "react";
import Profile from "../assets/images/profile.jpg";
import cat from "../assets/images/wires.png";
import { Rotate } from "react-awesome-reveal";

export default function HeaderImgs() {
  const styles = {
    headerStyles: {
      // padding: "10px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      fontSize: "1.5rem",
      fontFamily: '"Roboto", sans-serif',
    },
    nameStyles: {
      fontSize: "3rem",
      display: "flex",
      justifyContent: "flex-end",
      backgroundColor: "#b5838d",
      width: "25vw",
      paddingRight: "10px",
    },
    profileImgStyles: {
      width: "15vw",
      height: "15vw",
      borderRadius: "50%",
      border: "5px solid #b5838d",
      marginLeft: "10px",
    },
    boxStyles: {
      width: "100%",
      height: "88vh",
      backgroundColor: "#b5838d",
      backgroundImage: `url(${cat})`,
      backgroundPosition: "center" /* Center the image */,
      backgroundRepeat: "no-repeat" /* Do not repeat the image */,
      backgroundSize:
        "cover" /* Resize the background image to cover the entire container */,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
    },
    grayBoxStyles: {
      width: "max-content",
      height: "max-content",
      marginRight: "15vw",
      border: "5px solid #b5838d",
      borderRadius: "10px",
      backgroundColor: "#b5838d",
      opacity: "0.85",
    },
    pStyles: {
      fontSize: "2rem",
    },
  };
  return (
    <div className="bg-dark boxStyles" style={styles.boxStyles}>
      <img
        src={Profile}
        alt="profile"
        className="profile-img"
        style={styles.profileImgStyles}
      ></img>
      <div style={styles.grayBoxStyles}>
        <Rotate>
          <h3 style={styles.pStyles}>JavaScript</h3>
        </Rotate>
        <Rotate>
          <h3 style={styles.pStyles}>Full</h3>
        </Rotate>
        <Rotate>
          <h3 style={styles.pStyles}>Stack</h3>
        </Rotate>
        <Rotate>
          <h3 style={styles.pStyles}>Developer</h3>
        </Rotate>
      </div>
    </div>
  );
}
