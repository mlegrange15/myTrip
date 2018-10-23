import React, { Component } from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import AppNavbar from "./components/AppNavbar";
import Destinations from "./components/Destinations";
import Main from "./components/Main";
import API from "./components/utils/API";

class App extends Component {
  state = {
    destinations: null,
    // id of selected destination
    selected: undefined
  };

  componentDidMount() {
    // grab all the destinations from the db, set state and then populate the featured destinations component.
    API.getDestinations({})
      .then(res => {
        this.setState({ destinations: res.data });
      })
      .catch(err => console.log(err));
  }

  // OnClick for the Destination selector ans send it via props to Destinations component

  handleDestinationClick = id => {
    this.setState({ selected: id });
  };

  render() {
    return (
      <div className="App">
        <AppNavbar />
        {this.state.selected && (
          <Main
            selected={this.state.destinations[this.state.selected]}
            city={this.state.destinations[this.state.selected].name}
          />
        )}
        <Destinations
          destinations={this.state.destinations}
          handleDestinationClick={this.handleDestinationClick}
        />
      </div>
    );
  }
}

export default App;
