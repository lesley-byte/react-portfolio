import React, { useState } from "react";
import NavTabs from "./NavTabs";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import GroupProjects from "./pages/GroupProjects";
import Contact from "./pages/Contact";

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
      color: "#6d6875",
    },
  };
  // needed this to be explained again.🔥🗑️????
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <div className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <div className="col" style={styles.headerStyles}>
            {/* We are passing the currentPage from state and the function to update it */}
            <span style={styles.nameStyles}>Vaden</span>{" "}
            <NavTabs
              currentPage={currentPage}
              handlePageChange={handlePageChange}
            />
          </div>
        </div>
      </div>

      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}