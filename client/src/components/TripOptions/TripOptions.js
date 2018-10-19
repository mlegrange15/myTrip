import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardTitle,
  Button
} from "reactstrap";

class TripOptions extends Component {
  state = {};
  render() {
    return (
      <Container className="mb-3">
        <Row>
          <Col sm="3">
            <Card inverse>
              <CardImg
                width="100%"
                src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97270&w=318&h=150&bg=333333&txtclr=666666"
                alt="Card image cap"
              />
              <CardImgOverlay>
                <CardTitle>Hotels</CardTitle>
              </CardImgOverlay>
            </Card>
          </Col>
          <Col sm="3">
            <Card inverse>
              <CardImg
                width="100%"
                src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97150&w=318&h=150&bg=333333&txtclr=666666"
                alt="Card image cap"
              />
              <CardImgOverlay>
                <CardTitle>Events</CardTitle>
              </CardImgOverlay>
            </Card>
          </Col>
          <Col sm="3">
            <Card inverse>
              <CardImg
                width="100%"
                src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97150&w=318&h=150&bg=333333&txtclr=666666"
                alt="Card image cap"
              />
              <CardImgOverlay>
                <CardTitle>Food</CardTitle>
              </CardImgOverlay>
            </Card>
          </Col>
          <Col sm="3">
            <Card inverse>
              <CardImg
                width="100%"
                src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97150&w=318&h=150&bg=333333&txtclr=666666"
                alt="Card image cap"
              />
              <CardImgOverlay>
                <CardTitle>Tours</CardTitle>
              </CardImgOverlay>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default TripOptions;
