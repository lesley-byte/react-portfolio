import React from "react";
import Profile from "../assets/images/profile.jpg";
import cat from "../assets/images/wires.png";
import Rotate from "react-reveal/Rotate";

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
      height: "150vh",
      backgroundColor: "#b5838d",
      backgroundImage: `url(${cat})`,
      backgroundPosition: "center" /* Center the image */,
      backgroundRepeat: "no-repeat" /* Do not repeat the image */,
      backgroundSize:
        "cover" /* Resize the background image to cover the entire container */,
    },
    grayBoxStyles: {
      width: "max-content",
      height: "max-content",
      marginLeft: "35vw",
      border: "5px solid #b5838d",
      borderRadius: "10px",
      backgroundColor: "#b5838d",
      opacity: "0.8",
    },
  };
  return (
    <div className="bg-dark" style={styles.boxStyles}>
      <img
        src={Profile}
        alt="profile"
        className="profile-img"
        style={styles.profileImgStyles}
      ></img>
      <div style={styles.grayBoxStyles}>
        <Rotate top left>
          <h3 style={styles.pStyles}>Do you need</h3>
        </Rotate>
        <Rotate top right>
          <h3 style={styles.pStyles}>a Full-Stack Developer?</h3>
        </Rotate>
        <Rotate bottom left>
          <h3 style={styles.pStyles}>Look no further!</h3>
        </Rotate>
        <Rotate bottom right>
          <h3 style={styles.pStyles}>I am here for you!</h3>
        </Rotate>
      </div>
    </div>
  );
}
