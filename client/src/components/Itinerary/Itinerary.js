import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardText,
  CardTitle,
  Button,
  ListGroup,
  ListGroupItem,
  Col,
  Row,
  Container
} from "reactstrap";

class Itinerary extends Component {
  state = {};
  render() {
    return (
      <Col sm="12">
        <Card className="bg-light mb-3">
          <CardBody>
            <CardTitle>Itinerary</CardTitle>
            <CardText>Get Booking </CardText>
            <ListGroup>
              <ListGroupItem>
                Flight
                <Button className="ml-auto">X</Button>
              </ListGroupItem>
              <ListGroupItem>
                Hotel
                <Button className="ml-auto">X</Button>
              </ListGroupItem>
              <ListGroupItem>
                Car
                <Button className="ml-auto">X</Button>
              </ListGroupItem>
            </ListGroup>
          </CardBody>
        </Card>
      </Col>
    );
  }
}

export default Itinerary;
