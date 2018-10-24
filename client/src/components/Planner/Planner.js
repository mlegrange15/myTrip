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

class Planner extends Component {
  state = {};
  render() {
    console.log(this.props.category);
    console.log(this.props.notes);
    console.log(this.props.categoryname);

    return (
      <Row className="mt-3">
        <Col sm="9">
          <Card className="mb-3">
            <CardImg
              top
              width="100%"
              height="300px"
              src="https://thetravelguideonline.com/wp-content/uploads/2017/11/TTG-308.jpg"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle>
                {this.props.city} {this.props.categoryname}
              </CardTitle>
              <CardText>Click on the images you like below.</CardText>
              <Row>
                {this.props.category.map((x, i) => {
                  return (
                    <PlannerImageCard
                      name={x.name}
                      images={x.images}
                      key={i}
                      id={i}
                      handleNoteAdd={this.props.handleNoteAdd}
                    />
                  );
                })}
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col sm="3">
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
