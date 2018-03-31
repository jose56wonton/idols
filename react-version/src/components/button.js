import React from "react";

export default props => {
  return (
    <div className={`${props.position} relative`}>
      <a
        onClick={props.action}
        className={`bttn  color-${props.current}`}
      >
        {props.text}
      </a>
    </div>
  );
};
