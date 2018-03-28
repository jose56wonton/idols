import React from "react";
import Link from "gatsby-link";
import "./navButton.css";
import { navigateTo } from "gatsby-link";

export default props => {
  return (
    <div className={`${props.position} relative`}>
      <a
        onClick={() => navigateTo(`${props.path}`)}
        className={`bttn  color-${props.style}`}
      >
        {props.text}
      </a>
    </div>
  );
};
