import "./App.css";
import TaskHolder from "./TaskHolder";
import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (<header className="header">Slave's Todo List</header>)(
      <TaskHolder />
    );
  }
}

export default App;
