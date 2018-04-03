

import React, { Component } from 'react';

class button extends Component {
  
  render() {
    return (
      <div className={`${this.props.position}`}>
      <div className={`bttn-wrapper`}>
        <a onClick={this.props.action} className={`bttn ${this.props.classes}-button`}>
          {this.props.position}
        </a>
      </div>
    </div>
    );
  }
}

export default button;