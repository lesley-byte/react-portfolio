import React from "react";
import { Fade } from "react-awesome-reveal";
import "../assets/css/style.css";

const Name: React.FC = () => {
  return (
    <div>
      <Fade>
        {/* We are passing the currentPage from state and the function to update it */}
        <span className="name-styles Vaden">Vaden</span>
      </Fade>
    </div>
  );
};

export default Name;
