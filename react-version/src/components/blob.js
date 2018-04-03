import React from "react";
const blobPositions = [
  {},
]
const Blob = props => {
  

  return (
    <svg
      id={`svg-${props.id}`}
      className="svg-circle"
      width={300}
      height={300}
      xmlns="http://www.w3.org/2000/svg"
      filter="url(#goo)"
    >
      <defs>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
            result="goo"
          />
          <feComposite in="SourceGraphic" in2="goo" operator="atop" />
        </filter>
      </defs>
      <circle className={`circle${1}`} />
      <circle className={`circle${2}`} />
      <circle className={`circle${3}`} />
      <circle className={`circle${4}`} />
    </svg>
  );
};

export default Blob;
