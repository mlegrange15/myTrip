import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import PlannerHotels from "../PlannerHotels";
import PlannerEvents from "../PlannerEvents";
import PlannerFood from "../PlannerFood";
import Notepad from "../Notepad";

class Main extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Switch>
            <Route
              path="/planner/hotels"
              render={props => (
                <PlannerHotels {...props} name={this.props.name} />
              )}
            />
            <Route
              path="/planner/events"
              render={props => (
                <PlannerEvents {...props} name={this.props.name} />
              )}
            />
            <Route
              path="/planner/food"
              render={props => (
                <PlannerFood {...props} name={this.props.name} />
              )}
            />
          </Switch>
          <Route
            path="/planner"
            render={props => <Notepad {...props} name={this.props.name} />}
          />
        </Row>
      </Container>
    );
  }
}

export default Main;
