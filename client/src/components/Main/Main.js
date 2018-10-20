import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import PlannerHotels from "../PlannerHotels";
import PlannerEvents from "../PlannerEvents";
import PlannerFood from "../PlannerFood";
import Notepad from "../Notepad";
import TripOptions from "../TripOptions";

class Main extends Component {
  render() {
    return (
      <Container>
        <Row>
          <TripOptions />
        </Row>
        <Switch>
        <Route
            path="/planner/hotels"
            render={props => (
              <Row>
                <Col sm="9">
                  <PlannerHotels {...props} name={this.props.name} />
                </Col>
                <Col sm="3">
                  <Notepad {...props} name={this.props.name} />
                </Col>
              </Row>
            )}
          />
          <Route
            path="/planner/events"
            render={props => (
              <Row>
                <Col sm="9">
                  <PlannerEvents {...props} name={this.props.name} />
                </Col>
                <Col sm="3">
                  <Notepad {...props} name={this.props.name} />
                </Col>
              </Row>
            )}
          />
          />
          <Route
            path="/planner/food"
            render={props => (
              <Row>
                <Col sm="9">
                  <PlannerFood {...props} name={this.props.name} />
                </Col>
                <Col sm="3">
                  <Notepad {...props} name={this.props.name} />
                </Col>
              </Row>
            )}
          />
        </Switch>
      </Container>
    );
  }
}

export default Main;
