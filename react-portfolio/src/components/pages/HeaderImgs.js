import React from "react";
import Profile from "../assets/images/profile.jpg";
import cat from "../assets/images/wiresSmall.png";

export default function HeaderImgs() {
  const styles = {
    headerStyles: {
      padding: "10px",
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
      margin: "1vw",
    },
    boxStyles: {
      width: "100%",
      height: "37.5vh",
      backgroundColor: "#b5838d",
      backgroundImage: `url(${cat})`,
      backgroundPosition: "center" /* Center the image */,
      backgroundRepeat: "no-repeat" /* Do not repeat the image */,
      backgroundSize:
        "cover" /* Resize the background image to cover the entire container */,
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
    </div>
  );
}
