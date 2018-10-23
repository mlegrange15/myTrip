import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardText,
  CardTitle,
  Button,
  ListGroup,
  ListGroupItem
} from "reactstrap";

class Notepad extends Component {
  state = {};
  render() {
    return (
        <Card className="bg-dark mb-3">
          <CardBody>
            <CardTitle className="text-white">
              Trip Notepad
            </CardTitle>
            <CardText className="text-white">
              You're favorites and trip notes go here.
            </CardText>
            <ListGroup>
              <ListGroupItem>Cras justo odio</ListGroupItem>
              <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
              <ListGroupItem>Morbi leo risus</ListGroupItem>
              <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
              <ListGroupItem>Vestibulum at eros</ListGroupItem>
            </ListGroup>
          </CardBody>
          <Button className="ml-auto">Button</Button>
        </Card>
    );
  }
}

export default Notepad;
