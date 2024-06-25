import React from "react";
import { Fade } from "react-awesome-reveal";
import "../assets/css/style.css";

export default function Name() {
  return (
    <div>
      <Fade left>
        {/* We are passing the currentPage from state and the function to update it */}
        <span className="name-styles Vaden">Vaden</span>
      </Fade>
    </div>
  );
}
