import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardText,
  CardTitle,
  Button,
  Col,
  Row
} from "reactstrap";
import Notepad from "../Notepad";

class PlannerHotels extends Component {
  state = {};
  render() {
    console.log(this.props.category[0]);

    return (
      <Row className="mt-3">
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
              <CardTitle>{this.props.name}</CardTitle>
              <Button className="ml-auto">Skip</Button>

              
              {/*  Create a image card component then Map through the props.images here and created a image card for each one */}
              <Row>
                <Col sm="2">
                  <img
                    height="50px"
                    width="50px"
                    src="https://thetravelguideonline.com/wp-content/uploads/2017/11/TTG-308.jpg"
                    alt="thumb"
                    className="img-thumbnail"
                  />
                </Col>
              </Row>

              <CardText>
                Let's start by looking at hotels. Add the hotels you like to
                your notes.
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col sm="3">
          <Notepad desinations={this.props.desinations} />
        </Col>
      </Row>
    );
  }
}

export default PlannerHotels;
