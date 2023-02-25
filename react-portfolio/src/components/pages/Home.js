import React from "react";
import GroupProjects from "./GroupProjects";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <About />
      <GroupProjects />
      <Projects />
      <Contact />
    </div>
  );
}
