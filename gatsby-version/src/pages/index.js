import React from "react";
import "./card.css";
import NavButton from "../components/navButton";
const IndexPage = () => (
  <div>
    <div className="card color-0">
      <h1>Idols</h1>
      <p>From bondage to freedom</p>
    </div>
    <NavButton path="/parents" position="right" text="Continue" style={0} />
  </div>
);

export default IndexPage;
