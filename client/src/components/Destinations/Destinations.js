import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  Button,
  Container,
  Row,
  Col,
  Jumbotron
} from "reactstrap";

class Destinations extends Component {

  render() {
    if (!this.props.destinations) return null;
    console.log(this.props.destinations[0].name);
    return (
      <Jumbotron className="bg-dark" fluid>
        <Container fluid>
          <Row className="text-center text-white mb-4">
            <Col>
              <h1 className="display-3">Featured Destinations</h1>
              <p className="lead">
                Click on a destination below to begin planning your trip!
              </p>
            </Col>
          </Row>
          <Row>
            <Col sm="4">
              <Card className="mb-3">
                <CardBody>
                  <CardTitle></CardTitle>
                </CardBody>
                <CardImg
                  width="100%"
                  height="200px"
                  src=""
                  alt="Card image cap"
                />
                <CardBody>
                  <CardText />
                  <CardLink href="#">
                    <Button>Start Planning</Button>
                  </CardLink>
                </CardBody>
              </Card>
            </Col>
            <Col sm="4">
              <Card className="mb-3">
                <CardBody>
                  <CardTitle>Paris</CardTitle>
                </CardBody>
                <CardImg
                  width="100%"
                  height="200px"
                  src="data:image/jpeg;base64,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"
                  alt="Card image cap"
                />
                <CardBody>
                  <CardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </CardText>
                  <CardLink href="#">
                    <Button>Start Planning</Button>
                  </CardLink>
                </CardBody>
              </Card>
            </Col>
            <Col sm="4">
              <Card className="mb-3">
                <CardBody>
                  <CardTitle>London</CardTitle>
                </CardBody>
                <CardImg
                  width="100%"
                  height="200px"
                  src="https://cdn.londonandpartners.com/visit/general-london/areas/river/76709-640x360-houses-of-parliament-and-london-eye-on-thames-from-above-640.jpg"
                  alt="Card image cap"
                />
                <CardBody>
                  <CardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </CardText>
                  <CardLink href="#">
                    <Button>Start Planning</Button>
                  </CardLink>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    );
  }
}

export default Destinations;
