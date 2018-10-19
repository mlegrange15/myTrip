import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Planner from "../Planner";

class Main extends Component {
  render() {
    return (
        <Switch>
          <Route
            exact
            path="/planner"
            render={props => <Planner {...props} name={this.props.name}/>}
          />
        </Switch>
    );
  }
}

export default Main;
