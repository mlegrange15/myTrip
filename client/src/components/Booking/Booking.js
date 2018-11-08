import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardText,
  CardTitle,
  Col,
  Row,
  Container
} from "reactstrap";

import Itinerary from "../Itinerary";
import Notepad from "../Notepad";

class Booking extends Component {
  state = {};
  render() {        
    console.log(this.props);
    
    return (
      <Container>
        <Row className="mt-3">
          <Col sm="8">
            <Card className="mb-3">
              <CardImg
                top
                width="100%"
                height="300px"
                src={this.props.selected.images}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>
                </CardTitle>
                <CardText>Click on the images you like below.</CardText>
                <Row>
                  <Itinerary
                  city={this.props.selected.name}
                   />
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col sm="4">
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
