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



const DestinationCard = (props) => {
    return(
        <Col sm="4">
        <Card className="mb-3" onClick={(e) => props.handleDestinationClick(e,props)}> 
        <CardImg
          width="100%"
          height="200px"
          src={props.images}
          alt="Card image cap"  
        />
        <CardBody>
          <CardTitle>{props.name}</CardTitle>
          <CardText>{props.description}</CardText>
          <CardLink href="#">
            <Button onClick={(e) => props.handleDestinationClick(e,props)}>Start Planning</Button>
          </CardLink>
        </CardBody>
      </Card>
      </Col>
    )
  }

  export default DestinationCard;

