import React, { Component } from "react";
import "./css/style.css";
import Home from "./views/home";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="bg">
        <Home />
      </div>
    );
  }
}

export default App;
