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
        current: this.state.current + 1,
        classes: "phase-1"
      });
      setTimeout(()=>{
        this.setState({classes:"phase-2"})
      },500);
      setTimeout(()=>{
        this.setState({classes:"phase-3"})
      },1000);
      setTimeout(()=>{
        this.setState({classes:"phase-4"})
      },1500);
      setTimeout(()=>{
        this.setState({classes:""})
      },2000);
    }
  };
  left = () => {
    if (this.state.current !== 0) {
      this.setState({
        current: this.state.current - 1,
        classes: "phase-1"
      });
      setTimeout(()=>{
        this.setState({classes:"phase-2"})
      },500);
      setTimeout(()=>{
        this.setState({classes:"phase-3"})
      },1000);
      setTimeout(()=>{
        this.setState({classes:"phase-4"})
      },1500);
      setTimeout(()=>{
        this.setState({classes:""})
      },2000);
    }
  };
  render() {
    const current = this.state.current;
    const idol = this.state.idols[current];
    return (
      <div className="page">
        <Button
          position="left"
          action={this.left}
          classes={this.state.classes}
        />
        <Card title={idol.title} sub={idol.sub} classes={this.state.classes}/>
        <Button
          position="right"
          action={this.right}
          classes={this.state.classes}
        />
      </div>
    );
  }
}

export default App;
