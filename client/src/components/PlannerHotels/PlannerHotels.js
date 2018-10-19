import React, { Component } from "react";
import {
  Col,
  Card,
  CardImg,
  CardBody,
  CardText,
  CardTitle,
  Button
} from "reactstrap";

class PlannerHotels extends Component {
  state = {};
  render() {
    return (
      <Col sm="9">
        <Card className="mb-3">
          <CardImg
            top
            width="100%"
            height="300px"
            src="https://thetravelguideonline.com/wp-content/uploads/2017/11/TTG-308.jpg"
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>
              <h1>{this.props.name} Hotels</h1>
            </CardTitle>
            <Button className="ml-auto">Skip</Button>
            <CardText>
              Let's start by looking at hotels. Add the hotels you like to your
              notes.
            </CardText>
          </CardBody>
        </Card>
      </Col>
    );
  }
}

export default PlannerHotels;
