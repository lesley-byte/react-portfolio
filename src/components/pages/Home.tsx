import React from "react";
import GroupProjects from "./GroupProjects";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import HeaderImgs from "./HeaderImgs";
import UnityGames from "./UnityGames";

const Home: React.FC = () => {
  return (
    <div>
      <HeaderImgs />
      <About />
      <UnityGames />
      <GroupProjects />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
