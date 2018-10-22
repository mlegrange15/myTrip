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
                  <PlannerHotels {...props} desinations={this.props.desinations} />
                </Col>
                <Col sm="3">
                  <Notepad {...props} desinations={this.props.desinations} />
                </Col>
              </Row>
            )}
          />
          <Route
            path="/planner/events"
            render={props => (
              <Row>
                <Col sm="9">
                  <PlannerEvents {...props} desinations={this.props.desinations} />
                </Col>
                <Col sm="3">
                  <Notepad {...props} desinations={this.props.desinations} />
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
                  <PlannerFood {...props} desinations={this.props.desinations} />
                </Col>
                <Col sm="3">
                  <Notepad {...props} desinations={this.props.desinations} />
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
