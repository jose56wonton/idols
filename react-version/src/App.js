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
  right = () =>{
    if(this.state.current !== this.state.idols.length-1){
      this.setState({
        current : this.state.current+1
      })
    }
  }
  left = () =>{
    if(this.state.current !== 0){
      this.setState({
        current : this.state.current-1
      })
    } 
  }
  render() {
    const current = this.state.current;
    const idol = this.state.idols[current];
    return (
      <div className="page">
        <Button position="left" text="Left" current={current} action={this.left}/>
        <Card title={idol.title} sub={idol.sub} />
        <Button position="right" text="Right"  current={current} action={this.right}/>
      </div>
    );
  }
}

export default App;
