import React, { useState } from "react";
import NavTabs from "./NavTabs";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import GroupProjects from "./pages/GroupProjects";
import Contact from "./pages/Contact";
import Profile from "./assets/images/profile.jpg";
import Hero from "./assets/images/wordSearch.png";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Home");

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Projects") {
      return <Projects />;
    }
    if (currentPage === "GroupProjects") {
      return <GroupProjects />;
    }
    return <Contact />;
  };

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
      height: "100vh",
      backgroundColor: "blue",
    },
  };
  // needed this to be explained again.🔥🗑️????
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <div className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <div className="col" style={styles.headerStyles}>
            {/* We are passing the currentPage from state and the function to update it */}
            <span style={styles.nameStyles}>Lesley Vaden</span>{" "}
            <NavTabs
              currentPage={currentPage}
              handlePageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
      <div className="bg-dark" style={styles.boxStyles}>
        <img
          src={Profile}
          alt="profile picture"
          className="profile-img"
          style={styles.profileImgStyles}
        ></img>
      </div>
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}
