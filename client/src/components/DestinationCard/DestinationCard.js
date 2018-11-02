import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  Button,
  Col
} from "reactstrap";

import { Link } from "react-router-dom";

const DestinationCard = props => {
  return (
    <Col sm="4">
      <Card
        className="mb-3"
        onClick={e => props.handleDestinationClick(e, props)}
      >
        <CardImg
          width="100%"
          height="200px"
          src={props.images}
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>{props.name}</CardTitle>
          <CardText>{props.description}</CardText>
              <Button onClick={e => props.handleDestinationClick(e, props)}>
                Start Planning
              </Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DestinationCard;
