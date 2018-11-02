import React, { Component } from "react";
import DestinationCard from "../DestinationCard";
import {
  Container,
  Row,
  Col,
  Jumbotron
} from "reactstrap";

class Destinations extends Component {

  render() {
    console.log(this.props);
    
    if (!this.props.destinations) return null;
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
            {this.props.destinations.map((d, i) => {
              return (
                  <DestinationCard
                    name={d.name}
                    images={d.images}
                    description={d.description}
                    key={d._id}
                    id={d._id}
                    handleDestinationClick={this.props.handleDestinationClick}
                    history={this.props.history}
                    match={this.props.match}
                  />
              );
            })}
          </Row>
        </Container>
      </Jumbotron>
    );
  }
}

export default Destinations;
