import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardText,
  CardTitle,
  Button,
  Col,
  Row
} from "reactstrap";
import Notepad from "../Notepad";
import PlannerImageCard from "../PlannerImageCard";
import "./Planner.css";
import ScrollableAnchor from 'react-scrollable-anchor'

class Planner extends Component {
  state = {};

  render() {    
    const video = this.props.videos[0];
    if (!this.props.category) return null;
    return (

      <Row className="mt-3">
        <Col sm="8">
          <Card className="mb-3">
            <CardImg
              top
              height="200px"
              src={this.props.images}
              alt="Card image cap"
            />
            <Button
              onClick={e => this.props.handleBooking(e, this.props)}
              color="primary"
            >
              Book This Trip
            </Button>
            <ScrollableAnchor id={'sectionThree'}>
              <div>
                <CardBody>
                  <CardTitle>
                    {this.props.city} {this.props.categoryname}
                  </CardTitle>
                  <Row className="m-3" id="video-row">
                    <Col
                      sm="12"
                      className="embed-responsive embed-responsive-16by9"
                    >

                      <iframe
                        title="video"
                        src={video[this.props.categoryname]}
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                      />

                    </Col>
                  </Row>
                  <CardText>Click on the images you like below.</CardText>
                  <Row>
                    {this.props.category.map((x, i) => {
                      return (
                        <PlannerImageCard
                          name={x.name}
                          images={x.images}
                          description={x.description}
                          price={x.price}
                          address={x.address}
                          videos={x.videos}
                          key={i}
                          id={i}
                          handleNoteAdd={this.props.handleNoteAdd}
                          city={this.props.city}
                          categoryname={this.props.categoryname}
                        />
                      );
                    })}
                  </Row>
                </CardBody>
              </div>
            </ScrollableAnchor>
          </Card>
        </Col>
        <Col sm="4">
          <Notepad
            notes={this.props.notes}
            city={this.props.city}
            handleNoteRemove={this.props.handleNoteRemove}
          />
        </Col>
      </Row>

    );
  }
}

export default Planner;
