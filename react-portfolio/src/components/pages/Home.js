import React from "react";
import GroupProjects from "./GroupProjects";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import HeaderImgs from "./HeaderImgs";

export default function Home() {
  return (
    <div>
      <HeaderImgs />
      <About />
      <GroupProjects />
      <Projects />
      <Contact />
    </div>
  );
}
