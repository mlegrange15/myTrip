import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import AppNavbar from "./components/AppNavbar";
import Destinations from "./components/Destinations";
import Main from "./components/Main";
import API from "./components/utils/API";


class App extends Component {
  state = {
    destinations: []
  };

  componentDidMount(){
    // grab all the destinations from the db, set state and then populate the featured destinations component.
    API.getDestinations({})
      .then(res => {
        console.log(res.data)
        this.setState({ destinations: (res.data) });


      })
      .catch(err => console.log(err));
  };


  render() {
    return (
      <Router>
        <div className="App">
          <AppNavbar />
          <Destinations />
          <Route
            path="/planner"
            render={props => <Main {...props} name={this.props.name} />}
          />{" "}
        </div>
      </Router>
    );
  }
}

export default App;
