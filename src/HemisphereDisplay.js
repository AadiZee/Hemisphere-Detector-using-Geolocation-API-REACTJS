import React from "react";
import north from "./image/Northern.gif";
import south from "./image/Southern.jpg";
import "./Hemisphere.css";

const hemisphereConfig = {
  Northern: {
    text: "You are in the Northern Hemisphere",
    picture: north,
  },
  Southern: {
    text: "You are in the Southern Hemisphere",
    picture: south,
  },
};

const HemisphereDisplay = (props) => {
  const hemisphere = props.latitude > 0 ? "Northern" : "Southern";
  const { text, picture } = hemisphereConfig[hemisphere];
  return (
    <div className={hemisphere}>
      <div className="ui raised text container segment">
        <div className="image">
          <img src={picture} alt="hemisphere" />
        </div>
        <div
          className="ui teal bottom attached label"
          style={{ textAlign: "center" }}
        >
          <h1>{text}</h1>
        </div>
      </div>
    </div>
  );
};

export default HemisphereDisplay;
