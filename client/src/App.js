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
    destinations: [],
    destinationsHash: {},
    // id of selected destination
    selected: undefined
  };

  componentDidMount() {
    // grab all the destinations from the db, set state and then populate the featured destinations component.
    API.getDestinations({})
      .then(res => {
        const hash = {}

        for (let i = 0; i < res.data.length; i++) {
          const element = res.data[i];
          hash[element._id] = element
        }

        // this.setState({ destinations: res.data });
        this.setState({ 
          destinationsHash: hash,
          destinations: res.data
        });
        console.log(this.state.destinations);
        
      })
      .catch(err => console.log(err));
  }

  // OnClick for the Destination selector ans send it via props to Destinations component

  handleDestinationClick = (e, id, key) => {
    e.preventDefault();
    console.log(id);
    console.log(typeof(id));
    this.setState({ selected: id });
  };

  render() {
    return (
      <div className="App">
        <AppNavbar />
        <Destinations
          destinations={this.state.destinations}
          handleDestinationClick={this.handleDestinationClick}
        />
        {this.state.selected && (
          <Main
            selected={this.state.destinationsHash[this.state.selected]}
            city={this.state.destinationsHash[this.state.selected].name}
          />
        )}
      </div>
    );
  }
}

export default App;
