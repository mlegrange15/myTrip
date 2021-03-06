import React, { Component } from "react";
import {
  Card,
  CardBody,
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
              <CardBody>
                <CardTitle>Let's book {this.props.selected.name}!</CardTitle>
                <Row>
                  <Itinerary city={this.props.selected.name} />
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col sm="4">
            <Notepad
              notes={this.props.notes}
              city={this.props.city}
              handleNoteRemove={this.props.handleNoteRemove}
              images={this.props.selected.images}
              history={this.props.history}
              match={this.props.match}
              booking={this.props.booking}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Booking;
