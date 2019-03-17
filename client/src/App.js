import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Landing from "./components/layout/Landing";
import Navbar from "./components/layout/Navbar";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <Route exact path="#" />
        </div>
      </Router>
    );
  }
}

export default App;
