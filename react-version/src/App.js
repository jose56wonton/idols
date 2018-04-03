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
      text: "text-in",
      blobs: this.generateBlobArray()
    };
  }
  right = () => {
    if (this.state.current !== this.state.idols.length - 1) {
      this.setState({
        text: "text-out"
      });
    }
    setTimeout(() => {
      if (this.state.current !== this.state.idols.length - 1) {
        this.setState({
          current: this.state.current + 1,
          text: "text-in",
          blobs: this.generateBlobArray()
        });
      }
    }, 500);
    
  };
  left = () => {
    if (this.state.current !== 0) {
      this.setState({
        text: "text-out"
      });
    }
    setTimeout(() => {
      if (this.state.current !== 0) {
        this.setState({
          current: this.state.current - 1,
          titleClass: "text-in",
          blobs: this.generateBlobArray()
        });
      }
    }, 500);
  }
  generateBlobArray = () =>{    
    return Array.from({length: 4}, () => Math.floor(Math.random() * 10)+1)
  }
  render() {
    const current = this.state.current;
    const idol = this.state.idols[current];
    const blobs =  this.state.blobs.map((ele,i) => {
      return <Blob id={ele} key={i}/>
    })
    return (
      <div className="page">
        <div className="container">
          <div className="card">
            <h1 className={`${this.state.text} title`}>
              {idol.title}
            </h1>
            <p className={`${this.state.text} sub`}>
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
          {blobs}       

        </div>
      </div>
    );
  }
}

export default App;
