import React, { Component } from "react";
import { Container, Card, CardImg, CardBody, CardText, CardTitle, Button } from "reactstrap";

class Planner extends Component {
  state = {};
  render() {
    return (
      <Container>
        <Card>
          <CardImg
            top
            width="100%"
            height="380px"
            src="https://thetravelguideonline.com/wp-content/uploads/2017/11/TTG-308.jpg"
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle><h1>{this.props.name}</h1></CardTitle>
            <Button className="ml-auto">Skip</Button>
            <CardText>
              Let's start by looking at hotels. Add the hotels you like to your notes.
            </CardText>
          </CardBody>
        </Card>
      </Container>
    );
  }
}

export default Planner;
