import React from "react";
import { Row, Col, Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

const TripCategories = props => {
  console.log(props);

  return (
    <Row className="p-3 mb-2 text-center">
      <Row>
        <Col className="p-3" sm="12">
          <h1>What would you like to explore in {props.city}?</h1>
        </Col>
      </Row>
      <Row>
        <Col sm="2">
          <Card inverse onClick={() => props.handleCategoryClick(props.hotels)}>
            <CardImg
              className="img-thumbnail"
              width="100%"
              src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97270&w=318&h=150&bg=333333&txtclr=666666"
              alt="Card image cap"
            />
            <CardImgOverlay>
              <CardTitle>Hotels</CardTitle>
            </CardImgOverlay>
          </Card>
        </Col>
        <Col sm="2">
          <Card inverse onClick={() => props.handleCategoryClick(props.events)}>
            <CardImg
              className="img-thumbnail"
              width="100%"
              src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97150&w=318&h=150&bg=333333&txtclr=666666"
              alt="Card image cap"
            />
            <CardImgOverlay>
              <CardTitle>Events</CardTitle>
            </CardImgOverlay>
          </Card>
        </Col>
        <Col sm="2">
          <Card inverse onClick={() => props.handleCategoryClick(props.food)}>
            <CardImg
              className="img-thumbnail"
              width="100%"
              src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97150&w=318&h=150&bg=333333&txtclr=666666"
              alt="Card image cap"
            />
            <CardImgOverlay>
              <CardTitle>Food</CardTitle>
            </CardImgOverlay>
          </Card>
        </Col>
        <Col sm="2">
          <Card inverse onClick={() => props.handleCategoryClick(props.tours)}>
            <CardImg
              className="img-thumbnail"
              width="100%"
              src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97150&w=318&h=150&bg=333333&txtclr=666666"
              alt="Card image cap"
            />
            <CardImgOverlay>
              <CardTitle>Tours</CardTitle>
            </CardImgOverlay>
          </Card>
        </Col>
        <Col sm="2">
          <Card
            inverse
            onClick={() => props.handleCategoryClick(props.flights)}
          >
            <CardImg
              className="img-thumbnail"
              width="100%"
              src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97150&w=318&h=150&bg=333333&txtclr=666666"
              alt="Card image cap"
            />
            <CardImgOverlay>
              <CardTitle>Flights</CardTitle>
            </CardImgOverlay>
          </Card>
        </Col>
        <Col sm="2">
          <Card inverse onClick={() => props.handleCategoryClick(props.cars)}>
            <CardImg
              className="img-thumbnail"
              width="100%"
              src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97150&w=318&h=150&bg=333333&txtclr=666666"
              alt="Card image cap"
            />
            <CardImgOverlay>
              <CardTitle>Car</CardTitle>
            </CardImgOverlay>
          </Card>
        </Col>
      </Row>
    </Row>
  );
};

export default TripCategories;
