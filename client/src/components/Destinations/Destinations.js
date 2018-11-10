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
    if (!this.props.destinations) return null;
    return (
      <Jumbotron className="bg-dark mt-5" fluid>
        <Container>
          <Row className="text-center text-white mt-3 mb-4">
            <Col>
              <h2 className="display-3">Featured Destinations</h2>
              <h4 id="p">
                Click on a destination below to begin planning your trip!
              </h4>
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
