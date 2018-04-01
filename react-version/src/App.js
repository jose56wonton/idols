import React, { Component } from "react";
import "./styles/styles.css";
import Card from "./components/card";
import Button from "./components/button";
const idolData = [
  {
    title: "Idols",
    sub: "From bondage to freedom"
  },
  {
    title: "1",
    sub: "2004-2012"
  },
  {
    title: "2",
    sub: "2004-2012"
  },
  {
    title: "3",
    sub: "2004-2012"
  },
  {
    title: "4",
    sub: "2004-2012"
  },
  {
    title: "Parental Approval",
    sub: "2004-2012"
  },
  {
    title: "Parental Approval",
    sub: "2004-2012"
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      idols: idolData
    };
  }
  right = () => {
    if (this.state.current !== this.state.idols.length - 1) {
      this.setState({
        current: this.state.current + 1
      });
    }
  };
  left = () => {
    if (this.state.current !== 0) {
      this.setState({
        current: this.state.current - 1
      });
    }
    console.log("ncie");
  };
  render() {
    const current = this.state.current;
    const idol = this.state.idols[current];
    return (
      <div className="page">
        <div className="container">
          <div className="card">
            <h1>Finish Line</h1>
            <p>
              La course est terminée, bravo à tous. Venez consulter vos
              résultats et vos photos pendant l’effort !
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
