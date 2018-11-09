import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
  Col
} from "reactstrap";

const DestinationCard = props => {
  return (
    <Col sm="4">
      <Card
        className="mb-3"
        onClick={e => props.handleDestinationClick(e, props)}
      >
        <CardImg
          // width="100%"
          height="150px"
          src={props.images}
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>{props.name}</CardTitle>
          <CardText>{props.description}</CardText>
            <Button>Start Planning</Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DestinationCard;
