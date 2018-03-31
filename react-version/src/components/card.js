import "../styles/card.css";
import React, { Component } from "react";

class card extends Component {
  render() {
    return (
      <div className="card-wrapper">
        <div className={`card color-0 ${this.props.classes}-card`}>
          <h1>
            {this.props.title}
          </h1>
          <p>
            {this.props.sub}
          </p>
        </div>
      </div>
    );
  }
}

export default card;
