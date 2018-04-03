import React, { Component } from "react";
import "./styles/styles.css";
import Card from "./components/card";
import Button from "./components/button";
import Blob from './components/blob';
import idolData from './app-data';

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
        text: "text-out",
        blobs: this.generateBlobArray()
      });
    }
    setTimeout(() => {
      if (this.state.current !== this.state.idols.length - 1) {
        this.setState({
          current: this.state.current + 1,
          text: "text-in"
        });
      }
    }, 500);
    
  };
  left = () => {
    if (this.state.current !== 0) {
      this.setState({
        text: "text-out",
        blobs: this.generateBlobArray()
      });
    }
    setTimeout(() => {
      if (this.state.current !== 0) {
        this.setState({
          current: this.state.current - 1,
          text: "text-in"
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
      return <Blob id={ele} key={i} current={this.state.current} blobs={this.generateBlobArray()}/>
    })
    return (
      <div className="page">
        <div className="container">
          <div className="card">
            <h1 className={`${this.state.text} title  color-${this.state.current}`}>
              {idol.title}
            </h1>
            <p className={`${this.state.text} sub  color-${this.state.current}`}>
              {idol.sub}
            </p>
            <div className="row">
              <div className="a-wrapper">
                <a className="ncie" onClick={this.left}>
                  <span className={`hover background-${this.state.current}`} />
                  <span className={`line background-${this.state.current}`} />
                  <span className="text">left</span>
                </a>
              </div>
              <div className="a-wrapper">
                <a className="ncie" onClick={this.right}>
                  <span className={`hover background-${this.state.current}`} />
                  <span className={`line background-${this.state.current}`} />
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
