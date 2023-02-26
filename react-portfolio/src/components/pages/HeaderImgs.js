import React from "react";
import Profile from "../assets/images/profile.jpg";
import Hero from "../assets/images/hero.png";

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
      backgroundColor: "lightblue",
      width: "25vw",
      paddingRight: "10px",
    },
    profileImgStyles: {
      width: "15vw",
      height: "15vw",
      borderRadius: "50%",
      border: "5px solid lightblue",
      margin: "1vw",
    },
    boxStyles: {
      width: "100%",
      height: "37.5vh",
      backgroundColor: "blue",
      backgroundImage: `url(${Hero})`,
    },
  };
  return (
    <div className="bg-dark" style={styles.boxStyles}>
      <img
        src={Profile}
        alt="profile picture"
        className="profile-img"
        style={styles.profileImgStyles}
      ></img>
    </div>
  );
}
