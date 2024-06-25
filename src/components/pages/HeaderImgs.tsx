import React from "react";
import Profile from "../assets/images/profile.jpg";
import { Rotate } from "react-awesome-reveal";
import "../assets/css/style.css";

const HeaderImgs: React.FC = () => {
  return (
    <div className="bg-dark box-styles">
      <img
        src={Profile}
        alt="profile"
        className="profile-img"
      ></img>
      <div className="gray-box-styles">
        <Rotate>
          <h3 className="p-styles">JavaScript</h3>
        </Rotate>
        <Rotate>
          <h3 className="p-styles">Full</h3>
        </Rotate>
        <Rotate>
          <h3 className="p-styles">Stack</h3>
        </Rotate>
        <Rotate>
          <h3 className="p-styles">Developer</h3>
        </Rotate>
      </div>
    </div>
  );
};

export default HeaderImgs;
