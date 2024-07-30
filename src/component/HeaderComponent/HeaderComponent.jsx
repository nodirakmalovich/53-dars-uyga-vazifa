import React from "react";
import "../../App.css";

function HeaderComponent(props) {
  return (
    <div>
      <h1 className="hero_title">{props?.title}</h1>
      <p className="hero_text">{props?.description}</p>
    </div>
  );
}

export default HeaderComponent;
