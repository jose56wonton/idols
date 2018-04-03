
import React, { Component } from "react";

class card extends Component {
  render() {
    return (
      <div className={`card  ${this.props.classes}-card`}>
        <h1>
          {this.props.title}
        </h1>
        <p>
          {this.props.sub}
        </p>
      </div>
    );
  }
}

export default card;
