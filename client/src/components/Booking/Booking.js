import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardText,
  CardTitle,
  Button,
  Col,
  Row,
  Container
} from "reactstrap";

import Itinerary from "../Itinerary";
import DailyPlanner from "../DailyPlanner";
import Notepad from "../Notepad";

class Booking extends Component {
  state = {};
  render() {
    return (
      <Container>
        <Row className="mt-3">
          <Col sm="8">
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
                  {/* {this.props.city} {this.props.categoryname} */}
                </CardTitle>
                <CardText>Click on the images you like below.</CardText>
                <Row>
                  <Itinerary />
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col sm="4">
            <DailyPlanner />
            <Notepad
              notes={this.props.notes}
              city={this.props.city}
              handleNoteRemove={this.props.handleNoteRemove}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Booking;
