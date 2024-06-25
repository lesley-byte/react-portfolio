import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React, { useState } from "react";
import NavTabs from "./NavTabs";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import GroupProjects from "./pages/GroupProjects";
import Contact from "./pages/Contact";
import Name from "./pages/Name";
import UnityGames from "./pages/UnityGames";
import "./assets/css/style.css";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Home");

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
    if (currentPage === "UnityGames") {
      return <UnityGames />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => {
    try {
      setCurrentPage(page);
    } catch (error) {
      console.error(`Failed to set current page: ${error}`);
    }
  };

  return (
    <div className="main-styles">
      <div className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Name />
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <div className="col customNavTabs header-styles">
              <NavTabs
                currentPage={currentPage}
                handlePageChange={handlePageChange}
              />
            </div>
          </div>
        </div>
      </div>

      {renderPage()}
    </div>
  );
}
