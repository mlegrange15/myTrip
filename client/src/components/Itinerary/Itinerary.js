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
                <Button className="btn-sm btn-secondary float-right ml-3">Skip</Button>
                <Button color="primary" className="btn-sm float-right">Book</Button>
              </ListGroupItem>
              <ListGroupItem>
              Hotel
                <Button className="btn-sm btn-secondary float-right ml-3">Skip</Button>
                <Button color="primary" className="btn-sm float-right">Book</Button>
              </ListGroupItem>
              <ListGroupItem>
                Car
                <Button className="btn-sm btn-secondary float-right ml-3">Skip</Button>
                <Button color="primary" className="btn-sm float-right">Book</Button>
              </ListGroupItem>
              <ListGroupItem>
                Activities
                <Button className="btn-sm btn-secondary float-right ml-3">Skip</Button>
                <Button color="primary" className="btn-sm float-right">Book</Button>
              </ListGroupItem>
            </ListGroup>
          </CardBody>
        </Card>
      </Col>
    );
  }
}

export default Itinerary;
