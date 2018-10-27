import React, { Component } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import {
  Card,
  CardBody,
  CardText,
  CardTitle,
  Button,
  ListGroup,
  ListGroupItem
} from "reactstrap";

class DailyPlanner extends Component {
  render() {
    return (
      <Card className="bg-dark mb-3">
        <CardBody>
          <CardTitle className="text-white">Daily Planner </CardTitle>
          <CardText className="text-white">
            Drag and drop activities below{" "}
          </CardText>
          <ListGroup>
            <ListGroupItem>
            Day 1
              <Button>X</Button>
            </ListGroupItem>
            <ListGroupItem>
            Day 2

              <Button>X</Button>
            </ListGroupItem>
            <ListGroupItem>
            Day 3

              <Button>X</Button>
            </ListGroupItem>
            <ListGroupItem>
            Day 4

              <Button>X</Button>
            </ListGroupItem>
          </ListGroup>
        </CardBody>
        <Button className="ml-auto">Button</Button>
      </Card>
    );
  }
}

export default DailyPlanner;
