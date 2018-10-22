import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import AppNavbar from "./components/AppNavbar";
import Destinations from "./components/Destinations";
import Main from "./components/Main";

class App extends Component {
  state = {
    destinations: [],
  };

  render() {
    return (
      <Router>
        <div className="App">
          <AppNavbar />
          <Destinations />
          <Route
            path="/planner"
            render={props => <Main {...props} name={this.props.destinations} />}
          />{" "}
        </div>
      </Router>
    );
  }
}

export default App;
