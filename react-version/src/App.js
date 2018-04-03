import React, { Component } from "react";
import "./styles/styles.css";
import Card from "./components/card";
import Button from "./components/button";
import Blob from './components/blob';
const idolData = [
  {
    title: "Idols",
    sub: "From bondage to freedom"
  },
  {
    title: "Parents",
    sub: "2004-2012"
  },

  {
    title: "Pleasure",
    sub: "2012-2017"
  },
  {
    title: "Relationship",
    sub: "2016-2017"
  },
  {
    title: "Success",
    sub: "2017-2018"
  },
  {
    title: "Significance",
    sub: "2018"
  },
  {
    title: "Next",
    sub: "-"
  },
  {
    title: "Heaven",
    sub: "∞"
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      idols: idolData,
      titleClass: "title"
    };
  }
  right = () => {
    if (this.state.current !== this.state.idols.length - 1) {
      this.setState({
        titleClass: "title-out"
      });
    }
    setTimeout(() => {
      if (this.state.current !== this.state.idols.length - 1) {
        this.setState({
          current: this.state.current + 1,
          titleClass: "title"
        });
      }
    }, 500);
    
  };
  left = () => {
    if (this.state.current !== 0) {
      this.setState({
        titleClass: "title-out"
      });
    }
    setTimeout(() => {
      if (this.state.current !== 0) {
        this.setState({
          current: this.state.current - 1,
          titleClass: "title"
        });
      }
    }, 500);
  };
  render() {
    const current = this.state.current;
    const idol = this.state.idols[current];
    
    return (
      <div className="page">
        <div className="container">
          <div className="card">
            <h1 className={this.state.titleClass}>
              {idol.title}
            </h1>
            <p className="sub">
              {idol.sub}
            </p>
            <div className="row">
              <div className="a-wrapper">
                <a className="ncie" onClick={this.left}>
                  <span className="hover" />
                  <span className="line" />
                  <span className="text">left</span>
                </a>
              </div>
              <div className="a-wrapper">
                <a className="ncie" onClick={this.right}>
                  <span className="hover" />
                  <span className="line" />
                  <span className="text">right</span>
                </a>
              </div>
            </div>
          </div>
          <
        </div>
      </div>
    );
  }
}

export default App;

// <Button
// position="left"
// action={this.left}
// classes={this.state.classes}
// />
// <Card title={idol.title} sub={idol.sub} classes={this.state.classes}/>
// <Button
// position="right"
// action={this.right}
// classes={this.state.classes}

// <svg id="svg-1" width="300" height="300" xmlns="http://www.w3.org/2000/svg" filter="url(#goo)">
// <defs>
//   <filter id="goo">
//     <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
//     <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
//     <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
//   </filter>
// </defs>
// <circle className="circle1-1"></circle>
// <circle className="circle1-2"></circle>
// <circle className="circle1-3"></circle>
// <circle className="circle1-4"></circle>
// </svg>

// <svg id="svg-2" width="300" height="300" xmlns="http://www.w3.org/2000/svg" filter="url(#goo)">
// <defs>
//   <filter id="goo">
//     <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
//     <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
//     <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
//   </filter>
// </defs>
// <circle className="circle1"></circle>
// <circle className="circle2"></circle>
// <circle className="circle3"></circle>
// <circle className="circle4"></circle>
// </svg>
// <svg id="svg-3" width="300" height="300" xmlns="http://www.w3.org/2000/svg" filter="url(#goo)">
// <defs>
//   <filter id="goo">
//     <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
//     <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
//     <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
//   </filter>
// </defs>
// <circle className="circle1"></circle>
// <circle className="circle2"></circle>
// <circle className="circle3"></circle>
// <circle className="circle4"></circle>
// </svg>
// <svg id="svg-1" width="300" height="300" xmlns="http://www.w3.org/2000/svg" filter="url(#goo)">
// <defs>
//   <filter id="goo">
//     <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
//     <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
//     <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
//   </filter>
// </defs>
// <circle className="circle1"></circle>
// <circle className="circle2"></circle>
// <circle className="circle3"></circle>
// <circle className="circle4"></circle>
// </svg>
