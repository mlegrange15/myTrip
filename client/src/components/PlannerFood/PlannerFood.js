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

class PlannerFood
 extends Component {
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
              <h1>{this.props.name} Food</h1>
            </CardTitle>
            <Button className="ml-auto">Skip</Button>
            <CardText>
              Next lets look for food. Add the event or things you like to your
              notepad.
            </CardText>
          </CardBody>
        </Card>
      </Col>
    );
  }
}

export default PlannerFood
;
