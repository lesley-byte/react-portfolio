// @ts-ignore
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
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
  const [isCollapsed, setIsCollapsed] = useState(true);

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
      setIsCollapsed(true); // Collapse the navbar on page change
    } catch (error) {
      console.error(`Failed to set current page: ${error}`);
    }
  };

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="main-styles">
      <div className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNavbar}
            aria-controls="navbarTogglerDemo01"
            aria-expanded={!isCollapsed}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Name />
          <div
            className={`collapse navbar-collapse ${isCollapsed ? "" : "show"}`}
            id="navbarTogglerDemo01"
          >
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
