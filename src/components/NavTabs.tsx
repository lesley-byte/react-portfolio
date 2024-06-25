import React from "react";

interface NavTabsProps {
  currentPage: string;
  handlePageChange: (page: string) => void;
}

const NavTabs: React.FC<NavTabsProps> = ({ currentPage, handlePageChange }) => {
  return (
    <ul className="nav nav-tabs navbar-nav">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange("Home")}
          className={currentPage === "Home" ? "nav-link active" : "nav-link"}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange("About")}
          className={currentPage === "About" ? "nav-link active" : "nav-link"}
        >
          About Me
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#groupProjects"
          onClick={() => handlePageChange("GroupProjects")}
          className={
            currentPage === "GroupProjects" ? "nav-link active" : "nav-link"
          }
        >
          Group Projects
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#projects"
          onClick={() => handlePageChange("Projects")}
          className={
            currentPage === "Projects" ? "nav-link active" : "nav-link"
          }
        >
          Projects
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#unityGames"
          onClick={() => handlePageChange("UnityGames")}
          className={
            currentPage === "UnityGames" ? "nav-link active" : "nav-link"
          }
        >
          Unity Games
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange("Contact")}
          className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          Contact Me
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
